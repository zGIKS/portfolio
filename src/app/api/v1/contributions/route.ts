import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 60;
const rateLimitStore = new Map<string, { count: number; reset: number }>();

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          months {
            name
            firstDay
            totalWeeks
            year
          }
          weeks {
            firstDay
            contributionDays {
              date
              contributionCount
              color
              weekday
            }
          }
        }
      }
    }
  }
`;

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function applyRateLimit(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.reset) {
    rateLimitStore.set(ip, { count: 1, reset: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return entry.reset;
  }
  entry.count += 1;
  return null;
}

const successHeaders = {
  "Cache-Control": "no-store",
};

const errorHeaders = {
  "Cache-Control": "no-store",
};

export async function GET(request: Request) {
  const token = process.env.GITHUB_TOKEN;
  const login = process.env.GITHUB_LOGIN ?? "zGIKS";

  const rateLimitReset = applyRateLimit(request);
  if (rateLimitReset) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((rateLimitReset - Date.now()) / 1000),
    );
    return NextResponse.json(
      { error: "Rate limit exceeded. Try again later." },
      {
        status: 429,
        headers: { "Retry-After": retryAfterSeconds.toString(), ...errorHeaders },
      },
    );
  }

  if (!token) {
    console.error("Contributions endpoint misconfigured: missing token.");
    return NextResponse.json(
      { error: "Service temporarily unavailable." },
      { status: 500, headers: errorHeaders },
    );
  }

  const response = await fetch(GITHUB_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: QUERY,
      variables: { login },
    }),
    cache: "no-store",
  });

  const payload = await response.json();

  if (!response.ok || payload.errors) {
    console.error("Contributions upstream error.", {
      status: response.status,
      errors: payload?.errors,
    });
    return NextResponse.json(
      {
        error: "Failed to load contribution data.",
        status: response.status,
      },
      { status: 502, headers: errorHeaders },
    );
  }

  const calendar =
    payload?.data?.user?.contributionsCollection?.contributionCalendar ?? null;

  if (!calendar) {
    console.error("Contributions calendar missing in upstream response.");
    return NextResponse.json(
      { error: "No contribution data available." },
      { status: 404, headers: errorHeaders },
    );
  }

  return NextResponse.json(calendar, { headers: successHeaders });
}

import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";
const CACHE_SECONDS = 3600;
const STALE_SECONDS = 86400;
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
  "Cache-Control": `public, s-maxage=${CACHE_SECONDS}, stale-while-revalidate=${STALE_SECONDS}`,
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
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN server env var." },
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
    next: { revalidate: CACHE_SECONDS },
  });

  const payload = await response.json();

  if (!response.ok || payload.errors) {
    return NextResponse.json(
      {
        error: "GitHub API error.",
        status: response.status,
      },
      { status: 502, headers: errorHeaders },
    );
  }

  const calendar =
    payload?.data?.user?.contributionsCollection?.contributionCalendar ?? null;

  if (!calendar) {
    return NextResponse.json(
      { error: "No contribution calendar found." },
      { status: 404, headers: errorHeaders },
    );
  }

  return NextResponse.json(calendar, { headers: successHeaders });
}

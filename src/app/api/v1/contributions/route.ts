import { NextResponse } from "next/server";

const GITHUB_API = "https://api.github.com/graphql";

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

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const login = process.env.GITHUB_LOGIN ?? "zGIKS";

  if (!token) {
    return NextResponse.json(
      { error: "Missing GITHUB_TOKEN server env var." },
      { status: 500 },
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
    next: { revalidate: 3600 },
  });

  const payload = await response.json();

  if (!response.ok || payload.errors) {
    return NextResponse.json(
      {
        error: "GitHub API error.",
        status: response.status,
        details: payload.errors ?? null,
      },
      { status: 502 },
    );
  }

  const calendar =
    payload?.data?.user?.contributionsCollection?.contributionCalendar ?? null;

  if (!calendar) {
    return NextResponse.json(
      { error: "No contribution calendar found." },
      { status: 404 },
    );
  }

  return NextResponse.json(calendar);
}

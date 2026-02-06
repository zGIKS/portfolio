import { ContributionCalendar, ContributionWeek } from "./types";

export function processWeeks(calendar: ContributionCalendar): ContributionWeek[] {
  return calendar.weeks.map((week) => ({
    ...week,
    contributionDays: [...week.contributionDays].sort(
      (a, b) => a.weekday - b.weekday,
    ),
  }));
}
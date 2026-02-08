import { ContributionCalendar } from "./types";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function calculateMonthLabels(calendar: ContributionCalendar, locale: Locale) {
  const labels = Array(calendar.weeks.length).fill("");
  if (calendar.weeks.length === 0) return labels;

  const monthFormatter = new Intl.DateTimeFormat(
    getDictionary(locale).contributions.monthLocale,
    {
    timeZone: "America/Lima",
    month: "short",
    },
  );

  for (const month of calendar.months) {
    const monthDate = new Date(`${month.firstDay}T12:00:00Z`);
    const label = getMonthName(monthDate, monthFormatter);
    const monthWeekIndex = findWeekIndexForMonth(calendar, month.firstDay);
    if (monthWeekIndex === -1) continue;
    labels[monthWeekIndex] = label;
  }

  return labels;
}

function getMonthName(date: Date, formatter: Intl.DateTimeFormat) {
  const parts = formatter.formatToParts(date);
  const raw = parts.find((part) => part.type === "month")?.value ?? "";
  return raw.replace(/\./g, "").trim();
}

function findWeekIndexForMonth(calendar: ContributionCalendar, date: string) {
  const targetMonthKey = date.slice(0, 7); // YYYY-MM

  // Prefer the exact first day of month when it is visible.
  for (let weekIndex = 0; weekIndex < calendar.weeks.length; weekIndex += 1) {
    const week = calendar.weeks[weekIndex];
    const hasExactDate = week.contributionDays.some((day) => day.date === date);
    if (hasExactDate) return weekIndex;
  }

  // Fallback for partial months: use the first visible week that contains that month.
  for (let weekIndex = 0; weekIndex < calendar.weeks.length; weekIndex += 1) {
    const week = calendar.weeks[weekIndex];
    const hasMonth = week.contributionDays.some((day) => day.date.slice(0, 7) === targetMonthKey);
    if (hasMonth) return weekIndex;
  }

  return -1;
}

import { ContributionCalendar } from "./types";

type YearMonth = {
  year: number;
  month: number;
};

const LIMA_TZ = "America/Lima";

export function calculateMonthLabels(calendar: ContributionCalendar) {
  const labels = Array(calendar.weeks.length).fill("");
  if (calendar.weeks.length === 0) return labels;

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: LIMA_TZ,
    month: "short",
    year: "numeric",
  });

  const monthKeys = calendar.weeks.map((week) =>
    getMonthKey(new Date(week.firstDay), formatter),
  );
  const monthNames = calendar.weeks.map((week) =>
    getMonthName(new Date(week.firstDay), formatter),
  );

  const uniqueMonthKeys: string[] = [];
  for (const key of monthKeys) {
    if (uniqueMonthKeys[uniqueMonthKeys.length - 1] !== key) {
      uniqueMonthKeys.push(key);
    }
  }

  const targetKeys =
    uniqueMonthKeys.length >= 12
      ? uniqueMonthKeys.slice(-12)
      : buildLastTwelveMonths(
          new Date(calendar.weeks[calendar.weeks.length - 1].firstDay),
          formatter,
        );
  const targetSet = new Set(targetKeys);
  const firstTargetKey = targetKeys[0];

  let started = false;
  let previousKey = "";

  for (let i = 0; i < monthKeys.length; i += 1) {
    const key = monthKeys[i];
    if (!started) {
      if (key !== firstTargetKey) continue;
      started = true;
      previousKey = key;
      labels[i] = monthNames[i];
      continue;
    }

    if (key !== previousKey && targetSet.has(key)) {
      labels[i] = monthNames[i];
      previousKey = key;
    }
  }

  return labels;
}

function getMonthKey(date: Date, formatter: Intl.DateTimeFormat) {
  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  return `${year}-${month}`;
}

function getMonthName(date: Date, formatter: Intl.DateTimeFormat) {
  const parts = formatter.formatToParts(date);
  return parts.find((part) => part.type === "month")?.value ?? "";
}

function buildLastTwelveMonths(
  endDate: Date,
  formatter: Intl.DateTimeFormat,
) {
  const { year: endYear, month: endMonth } = getYearMonthParts(
    endDate,
    formatter,
  );
  const keys: string[] = [];

  for (let offset = 11; offset >= 0; offset -= 1) {
    const { year, month } = addMonths(endYear, endMonth, -offset);
    const date = new Date(Date.UTC(year, month - 1, 1, 12, 0, 0));
    keys.push(getMonthKey(date, formatter));
  }

  return keys;
}

function getYearMonthParts(date: Date, formatter: Intl.DateTimeFormat): YearMonth {
  const parts = formatter.formatToParts(date);
  const year = Number(parts.find((part) => part.type === "year")?.value ?? 0);
  const month = Number(parts.find((part) => part.type === "month")?.value ?? 0);
  return { year, month };
}

function addMonths(year: number, month: number, delta: number): YearMonth {
  const base = year * 12 + (month - 1) + delta;
  const nextYear = Math.floor(base / 12);
  const nextMonth = ((base % 12) + 12) % 12 + 1;
  return { year: nextYear, month: nextMonth };
}

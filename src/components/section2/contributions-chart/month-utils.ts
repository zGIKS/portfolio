import { ContributionCalendar } from "./types";
import { type Locale } from "@/lib/i18n";

export function calculateMonthLabels(calendar: ContributionCalendar, locale: Locale) {
  const labels = Array(calendar.weeks.length).fill("");
  if (calendar.weeks.length === 0) return labels;

  const monthFormatter = new Intl.DateTimeFormat(locale === "es" ? "es-PE" : "en-US", {
    timeZone: "America/Lima",
    month: "short",
  });
  const keyFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Lima",
    month: "2-digit",
    year: "numeric",
  });

  let previousMonthKey = "";

  for (let i = 0; i < calendar.weeks.length; i += 1) {
    const date = new Date(calendar.weeks[i].firstDay);
    const key = getYearMonthKey(date, keyFormatter);

    if (i === 0 || key !== previousMonthKey) {
      labels[i] = getMonthName(date, monthFormatter);
      previousMonthKey = key;
    }
  }

  // GitHub-like edge case: if range starts and ends in the same month name (e.g. Feb ... Feb),
  // force the right-edge label so the closing month is visible too.
  const firstLabel = labels.find((value) => value !== "") ?? "";
  const lastDate = new Date(calendar.weeks[calendar.weeks.length - 1].firstDay);
  const lastLabel = getMonthName(lastDate, monthFormatter);
  if (labels[labels.length - 1] === "" && firstLabel === lastLabel) {
    labels[labels.length - 1] = lastLabel;
  }

  return labels;
}

function getMonthName(date: Date, formatter: Intl.DateTimeFormat) {
  const parts = formatter.formatToParts(date);
  const raw = parts.find((part) => part.type === "month")?.value ?? "";
  return raw.replace(/\./g, "").trim();
}

function getYearMonthKey(date: Date, formatter: Intl.DateTimeFormat) {
  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === "year")?.value ?? "";
  const month = parts.find((part) => part.type === "month")?.value ?? "";
  return `${year}-${month}`;
}

import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function createDateFormatter(locale: Locale) {
  const dateFormatter = new Intl.DateTimeFormat(getDictionary(locale).contributions.dateLocale, {
    timeZone: "America/Lima",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return function formatTooltipDate(value: string) {
    const [inputYear, inputMonth, inputDay] = value.split("-").map(Number);
    const safeDate = new Date(Date.UTC(inputYear, inputMonth - 1, inputDay, 12));
    const parts = dateFormatter.formatToParts(safeDate);
    const day = parts.find((part) => part.type === "day")?.value ?? "";
    const month = parts.find((part) => part.type === "month")?.value ?? "";
    const year = parts.find((part) => part.type === "year")?.value ?? "";
    return `${day}.${month}.${year}`;
  };
}

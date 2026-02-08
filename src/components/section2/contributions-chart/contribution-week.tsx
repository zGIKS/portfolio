import { ContributionWeek } from "./types";
import { ContributionCell } from "./contribution-cell";
import { type Locale } from "@/lib/i18n";

interface ContributionWeekProps {
  week: ContributionWeek;
  cellSize: number;
  locale: Locale;
}

export function ContributionWeekComponent({ week, cellSize, locale }: ContributionWeekProps) {
  return (
    <div key={week.firstDay} className="flex flex-col gap-[2px]">
      {week.contributionDays.map((day) => (
        <ContributionCell
          key={day.date}
          day={day}
          cellSize={cellSize}
          locale={locale}
        />
      ))}
    </div>
  );
}

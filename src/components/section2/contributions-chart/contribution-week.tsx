import { ContributionWeek } from "./types";
import { ContributionCell } from "./contribution-cell";
import { type Locale } from "@/lib/i18n";

interface ContributionWeekProps {
  week: ContributionWeek;
  locale: Locale;
}

export function ContributionWeekComponent({ week, locale }: ContributionWeekProps) {
  return (
    <div key={week.firstDay} className="flex min-w-0 flex-col gap-[2px]">
      {week.contributionDays.map((day) => (
        <ContributionCell
          key={day.date}
          day={day}
          locale={locale}
        />
      ))}
    </div>
  );
}

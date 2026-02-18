import { ContributionWeek } from "./types";
import { ContributionCell } from "./contribution-cell";
import { Dictionary } from "@/lib/dictionaries";

interface ContributionWeekProps {
  week: ContributionWeek;
  formatDate: (value: string) => string;
  t: Dictionary["contributions"];
}

export function ContributionWeekComponent({ week, formatDate, t }: ContributionWeekProps) {
  return (
    <div key={week.firstDay} className="flex min-w-0 flex-col gap-[2px]">
      {week.contributionDays.map((day) => (
        <ContributionCell
          key={day.date}
          day={day}
          formatDate={formatDate}
          t={t}
        />
      ))}
    </div>
  );
}

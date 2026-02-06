import { ContributionWeek } from "./types";
import { ContributionCell } from "./contribution-cell";

interface ContributionWeekProps {
  week: ContributionWeek;
  cellSize: number;
  formatTooltipDate: (date: string) => string;
}

export function ContributionWeekComponent({ week, cellSize, formatTooltipDate }: ContributionWeekProps) {
  return (
    <div key={week.firstDay} className="flex flex-col gap-[2px]">
      {week.contributionDays.map((day) => (
        <ContributionCell
          key={day.date}
          day={day}
          cellSize={cellSize}
          formatTooltipDate={formatTooltipDate}
        />
      ))}
    </div>
  );
}
import { ContributionWeek } from "./types";
import { ContributionCell } from "./contribution-cell";

interface ContributionWeekProps {
  week: ContributionWeek;
  cellSize: number;
}

export function ContributionWeekComponent({ week, cellSize }: ContributionWeekProps) {
  return (
    <div key={week.firstDay} className="flex flex-col gap-[2px]">
      {week.contributionDays.map((day) => (
        <ContributionCell
          key={day.date}
          day={day}
          cellSize={cellSize}
        />
      ))}
    </div>
  );
}

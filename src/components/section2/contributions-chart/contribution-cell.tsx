import { ContributionDay } from "./types";
import { getContributionColor } from "./color-utils";

interface ContributionCellProps {
  day: ContributionDay;
  cellSize: number;
}

export function ContributionCell({ day, cellSize }: ContributionCellProps) {
  return (
    <div className="group relative">
      <div
        className="border border-white/5"
        style={{
          width: cellSize,
          height: cellSize,
          backgroundColor: getContributionColor(day.contributionCount),
        }}
      />
    </div>
  );
}

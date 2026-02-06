import { ContributionDay } from "./types";
import { getContributionColor } from "./color-utils";

interface ContributionCellProps {
  day: ContributionDay;
  cellSize: number;
  formatTooltipDate: (date: string) => string;
}

export function ContributionCell({ day, cellSize, formatTooltipDate }: ContributionCellProps) {
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
      <div className="pointer-events-none absolute left-1/2 top-[-8px] z-10 hidden -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md border border-white/10 bg-black/90 px-2 py-1 text-[10px] text-white shadow-lg group-hover:block">
        {day.contributionCount} contributions on {formatTooltipDate(day.date)}
      </div>
    </div>
  );
}
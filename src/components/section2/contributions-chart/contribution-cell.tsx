import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContributionDay } from "./types";
import { getContributionColor } from "./color-utils";
import { createDateFormatter } from "./date-utils";

const formatDate = createDateFormatter();

interface ContributionCellProps {
  day: ContributionDay;
  cellSize: number;
}

export function ContributionCell({ day, cellSize }: ContributionCellProps) {
  const contributionText =
    day.contributionCount === 0
      ? "No contributions"
      : day.contributionCount === 1
        ? "1 contribution"
        : `${day.contributionCount} contributions`;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="border border-white/5 cursor-pointer"
          style={{
            width: cellSize,
            height: cellSize,
            backgroundColor: getContributionColor(day.contributionCount),
          }}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {contributionText} on {formatDate(day.date)}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}

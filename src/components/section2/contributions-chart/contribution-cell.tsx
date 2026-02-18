import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContributionDay } from "./types";
import { getContributionColor } from "./color-utils";
import { Dictionary } from "@/lib/dictionaries";

interface ContributionCellProps {
  day: ContributionDay;
  formatDate: (value: string) => string;
  t: Dictionary["contributions"];
}

export function ContributionCell({ day, formatDate, t }: ContributionCellProps) {
  const contributionText =
    day.contributionCount === 0
      ? t.none
      : day.contributionCount === 1
        ? t.one
        : t.many.replace("{count}", String(day.contributionCount));

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="aspect-square w-full cursor-pointer rounded-[2px]"
          style={{
            backgroundColor: getContributionColor(day.contributionCount),
          }}
        />
      </TooltipTrigger>
      <TooltipContent>
        <p>
          {contributionText} {t.onLabel} {formatDate(day.date)}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}

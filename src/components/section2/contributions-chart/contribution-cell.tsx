import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContributionDay } from "./types";
import { getContributionColor } from "./color-utils";
import { createDateFormatter } from "./date-utils";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ContributionCellProps {
  day: ContributionDay;
  cellSize: number;
  locale: Locale;
}

export function ContributionCell({ day, cellSize, locale }: ContributionCellProps) {
  const formatDate = createDateFormatter(locale);
  const t = getDictionary(locale).contributions;

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
          {contributionText} {t.onLabel} {formatDate(day.date)}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}

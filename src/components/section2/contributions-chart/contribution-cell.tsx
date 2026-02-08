import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ContributionDay } from "./types";
import { getContributionColor } from "./color-utils";
import { createDateFormatter } from "./date-utils";
import { type Locale } from "@/lib/i18n";

interface ContributionCellProps {
  day: ContributionDay;
  cellSize: number;
  locale: Locale;
}

export function ContributionCell({ day, cellSize, locale }: ContributionCellProps) {
  const formatDate = createDateFormatter(locale);

  const contributionText =
    day.contributionCount === 0
      ? locale === "es"
        ? "Sin contribuciones"
        : "No contributions"
      : day.contributionCount === 1
        ? locale === "es"
          ? "1 contribución"
          : "1 contribution"
        : locale === "es"
          ? `${day.contributionCount} contribuciones`
          : `${day.contributionCount} contributions`;

  const onLabel = locale === "es" ? "el" : "on";

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
          {contributionText} {onLabel} {formatDate(day.date)}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}

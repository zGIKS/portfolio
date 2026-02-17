"use client";

import { useMemo } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContributionWeekComponent } from "./contribution-week";
import { LoadingState } from "./loading-state";
import { ErrorState } from "./error-state";
import { useContributions } from "./use-contributions";
import { processWeeks } from "./week-utils";
import { type Locale } from "@/lib/i18n";

interface ContributionsChartProps {
  locale: Locale;
}

export function ContributionsChart({ locale }: ContributionsChartProps) {
  const { calendar, error } = useContributions();
  const DISPLAY_WEEKS = 32;

  const weeks = useMemo(() => {
    if (!calendar) return [];
    return processWeeks(calendar);
  }, [calendar]);

  const visibleWeeks = useMemo(
    () => weeks.slice(Math.max(0, weeks.length - DISPLAY_WEEKS)),
    [weeks]
  );

  if (error) {
    return <ErrorState error={error} locale={locale} />;
  }

  if (!calendar) {
    return <LoadingState />;
  }

  return (
    <TooltipProvider>
      <div className="w-full">
        <div
          className="grid w-full gap-[2px]"
          style={{
            gridTemplateColumns: `repeat(${Math.max(1, visibleWeeks.length)}, minmax(0, 1fr))`,
          }}
        >
          {visibleWeeks.map((week) => (
            <ContributionWeekComponent
              key={week.firstDay}
              week={week}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}

"use client";

import { useMemo } from "react";
import { ContributionWeekComponent } from "./contributions-chart/contribution-week";
import { LoadingState } from "./contributions-chart/loading-state";
import { ErrorState } from "./contributions-chart/error-state";
import { useContributions } from "./contributions-chart/use-contributions";
import { processWeeks } from "./contributions-chart/week-utils";
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
  );
}

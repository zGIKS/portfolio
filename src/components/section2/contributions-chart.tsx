"use client";

import { useMemo } from "react";
import { ContributionWeekComponent } from "./contributions-chart/contribution-week";
import { MonthLabels } from "./contributions-chart/month-labels";
import { Legend } from "./contributions-chart/legend";
import { LoadingState } from "./contributions-chart/loading-state";
import { ErrorState } from "./contributions-chart/error-state";
import { useContributions } from "./contributions-chart/use-contributions";
import { calculateMonthLabels } from "./contributions-chart/month-utils";
import { processWeeks } from "./contributions-chart/week-utils";
import { type Locale } from "@/lib/i18n";

interface ContributionsChartProps {
  locale: Locale;
}

export function ContributionsChart({ locale }: ContributionsChartProps) {
  const { calendar, error } = useContributions();

  const monthLabels = useMemo(() => {
    if (!calendar) return [];
    return calculateMonthLabels(calendar, locale);
  }, [calendar, locale]);

  const weeks = useMemo(() => {
    if (!calendar) return [];
    return processWeeks(calendar);
  }, [calendar]);

  if (error) {
    return <ErrorState error={error} locale={locale} />;
  }

  if (!calendar) {
    return <LoadingState />;
  }

  const cellSize = 8;
  const cellGap = 2;
  const chartPadding = 24;
  const gridWidth = weeks.length * cellSize + (weeks.length - 1) * cellGap;
  const chartWidth =
    gridWidth + chartPadding;
  return (
    <div className="inline-block" style={{ width: chartWidth, paddingRight: chartPadding }}>
      <MonthLabels monthLabels={monthLabels} />
      <div className="mt-2 flex gap-[2px]">
        {weeks.map((week) => (
          <ContributionWeekComponent
            key={week.firstDay}
            week={week}
            cellSize={cellSize}
            locale={locale}
          />
        ))}
      </div>
      <div style={{ width: gridWidth }}>
        <Legend totalContributions={calendar.totalContributions} locale={locale} />
      </div>
    </div>
  );
}

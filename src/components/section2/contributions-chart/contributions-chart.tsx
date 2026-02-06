"use client";

import { useMemo } from "react";
import { ContributionWeekComponent } from "./contribution-week";
import { MonthLabels } from "./month-labels";
import { Legend } from "./legend";
import { LoadingState } from "./loading-state";
import { ErrorState } from "./error-state";
import { createDateFormatter } from "./date-utils";
import { useContributions } from "./use-contributions";
import { calculateMonthLabels } from "./month-utils";
import { processWeeks } from "./week-utils";

export function ContributionsChart() {
  const { calendar, error } = useContributions();

  const monthLabels = useMemo(() => {
    if (!calendar) return [];
    return calculateMonthLabels(calendar);
  }, [calendar]);

  const weeks = useMemo(() => {
    if (!calendar) return [];
    return processWeeks(calendar);
  }, [calendar]);

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!calendar) {
    return <LoadingState />;
  }

  const cellSize = 8;
  const cellGap = 2;
  const chartPadding = 8;
  const chartWidth =
    weeks.length * cellSize + (weeks.length - 1) * cellGap + 28 + chartPadding;
  const formatTooltipDate = createDateFormatter();

  return (
    <div className="inline-block" style={{ width: chartWidth, paddingRight: chartPadding }}>
      <MonthLabels monthLabels={monthLabels} />
      <div className="mt-2 flex gap-[2px]">
        {weeks.map((week) => (
          <ContributionWeekComponent
            key={week.firstDay}
            week={week}
            cellSize={cellSize}
            formatTooltipDate={formatTooltipDate}
          />
        ))}
      </div>
      <Legend totalContributions={calendar.totalContributions} />
    </div>
  );
}

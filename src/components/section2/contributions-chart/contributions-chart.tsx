"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ContributionWeekComponent } from "./contribution-week";
import { MonthLabels } from "./month-labels";
import { Legend } from "./legend";
import { LoadingState } from "./loading-state";
import { ErrorState } from "./error-state";
import { useContributions } from "./use-contributions";
import { calculateMonthLabels } from "./month-utils";
import { processWeeks } from "./week-utils";

export function ContributionsChart() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const { calendar, error } = useContributions();

  const monthLabels = useMemo(() => {
    if (!calendar) return [];
    return calculateMonthLabels(calendar);
  }, [calendar]);

  const weeks = useMemo(() => {
    if (!calendar) return [];
    return processWeeks(calendar);
  }, [calendar]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setContainerWidth(entry.contentRect.width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  if (error) {
    return <ErrorState error={error} />;
  }

  if (!calendar) {
    return <LoadingState />;
  }

  const cellSize = 8;
  const cellGap = 2;
  const chartPadding = 4;
  const chartWidth =
    weeks.length * cellSize + (weeks.length - 1) * cellGap + 28 + chartPadding;
  const scale =
    containerWidth && chartWidth > 0
      ? Math.min(1, containerWidth / chartWidth)
      : 1;

  return (
    <div ref={containerRef} className="w-full">
      <div
        className="inline-block"
        style={{
          width: chartWidth,
          paddingRight: chartPadding,
          transform: `scale(${scale})`,
          transformOrigin: "left top",
        }}
      >
        <MonthLabels monthLabels={monthLabels} />
        <div className="mt-1 flex gap-[2px]">
          {weeks.map((week) => (
            <ContributionWeekComponent
              key={week.firstDay}
              week={week}
              cellSize={cellSize}
            />
          ))}
        </div>
        <Legend totalContributions={calendar.totalContributions} />
      </div>
    </div>
  );
}

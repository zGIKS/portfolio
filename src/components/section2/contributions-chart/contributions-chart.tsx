"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContributionWeekComponent } from "./contribution-week";
import { MonthLabels } from "./month-labels";
import { Legend } from "./legend";
import { LoadingState } from "./loading-state";
import { ErrorState } from "./error-state";
import { useContributions } from "./use-contributions";
import { calculateMonthLabels } from "./month-utils";
import { processWeeks } from "./week-utils";
import { type Locale } from "@/lib/i18n";

interface ContributionsChartProps {
  locale: Locale;
}

export function ContributionsChart({ locale }: ContributionsChartProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const { calendar, error } = useContributions();

  const monthLabels = useMemo(() => {
    if (!calendar) return [];
    return calculateMonthLabels(calendar, locale);
  }, [calendar, locale]);

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
  const scale =
    containerWidth && chartWidth > 0
      ? Math.min(1, containerWidth / chartWidth)
      : 1;

  return (
    <TooltipProvider>
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
                locale={locale}
              />
            ))}
          </div>
          <div style={{ width: gridWidth }}>
            <Legend totalContributions={calendar.totalContributions} locale={locale} />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

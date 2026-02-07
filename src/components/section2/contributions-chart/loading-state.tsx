import { Card, CardContent } from "@/components/ui/card";

export function LoadingState() {
  return (
    <Card className="border-none bg-transparent shadow-none py-0">
      <CardContent className="px-0">
        <div className="space-y-2">
          {/* Month labels skeleton */}
          <div className="flex gap-[2px]">
            <div className="w-7" />
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-3 w-6 animate-pulse rounded bg-primary-foreground/10"
              />
            ))}
          </div>
          {/* Grid skeleton */}
          <div className="flex gap-[2px]">
            {Array.from({ length: 52 }).map((_, weekIdx) => (
              <div key={weekIdx} className="flex flex-col gap-[2px]">
                {Array.from({ length: 7 }).map((_, dayIdx) => (
                  <div
                    key={dayIdx}
                    className="h-2 w-2 animate-pulse rounded-[1px] bg-primary-foreground/10"
                    style={{ animationDelay: `${(weekIdx + dayIdx) * 10}ms` }}
                  />
                ))}
              </div>
            ))}
          </div>
          {/* Legend skeleton */}
          <div className="flex items-center justify-between">
            <div className="h-3 w-48 animate-pulse rounded bg-primary-foreground/10" />
            <div className="flex items-center gap-2">
              <div className="h-3 w-8 animate-pulse rounded bg-primary-foreground/10" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-3 w-3 animate-pulse rounded-[1px] bg-primary-foreground/10"
                  />
                ))}
              </div>
              <div className="h-3 w-8 animate-pulse rounded bg-primary-foreground/10" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

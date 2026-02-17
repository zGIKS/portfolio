import { Card, CardContent } from "@/components/ui/card";

export function LoadingState() {
  const weeks = 32;
  const days = 7;

  return (
    <Card className="border-none bg-transparent shadow-none py-0">
      <CardContent className="px-0">
        <div
          className="grid w-full gap-[2px]"
          style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: weeks }).map((_, weekIdx) => (
            <div key={weekIdx} className="flex min-w-0 flex-col gap-[2px]">
              {Array.from({ length: days }).map((_, dayIdx) => (
                <div
                  key={dayIdx}
                  className="aspect-square w-full animate-pulse rounded-[1px] bg-primary-foreground/10"
                  style={{ animationDelay: `${(weekIdx + dayIdx) * 10}ms` }}
                />
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

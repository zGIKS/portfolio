import { cn, typography } from "@/lib/utils";

interface MonthLabelsProps {
  monthLabels: string[];
}

export function MonthLabels({ monthLabels }: MonthLabelsProps) {
  return (
    <div className={cn(typography.small, "grid gap-[2px] text-[10px] text-white/60")} style={{
      gridTemplateColumns: `28px repeat(${monthLabels.length}, 8px)`,
    }}>
      <div />
      {monthLabels.map((label, index) => (
        <div key={`${label}-${index}`} className="relative h-3">
          {label ? (
            <span className="absolute left-0 top-0 whitespace-nowrap">
              {label}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
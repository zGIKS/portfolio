import { CONTRIBUTION_COLORS } from "./color-utils";
import { cn, typography } from "@/lib/utils";

interface LegendProps {
  totalContributions: number;
}

export function Legend({ totalContributions }: LegendProps) {
  return (
    <div className={cn("mt-3 flex items-center justify-between text-[10px] text-white/60", typography.small)}>
      <span>
        {totalContributions.toLocaleString()} contributions in the last year on{" "}
        <a
          href="https://github.com/zGIKS"
          className="text-white/80 underline underline-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </span>
      <div className="flex items-center gap-2">
        <span>Less</span>
        <div className="flex items-center gap-1">
          {CONTRIBUTION_COLORS.map((color) => (
            <span
              key={color}
              className="h-3 w-3 border border-white/5"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}
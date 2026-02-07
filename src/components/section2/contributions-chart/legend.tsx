import { CONTRIBUTION_COLORS } from "./color-utils";

interface LegendProps {
  totalContributions: number;
}

export function Legend({ totalContributions }: LegendProps) {
  return (
    <div className="mt-3 flex items-center justify-between text-[10px] font-medium leading-none text-primary-foreground/60">
      <span>
        {totalContributions.toLocaleString()} contributions in the last year on{" "}
        <a
          href="https://github.com/zGIKS"
          className="text-primary-foreground/80 underline underline-offset-2"
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
              className="h-3 w-3 border border-primary-foreground/5"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}

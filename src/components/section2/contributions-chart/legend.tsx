import { CONTRIBUTION_COLORS } from "./color-utils";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface LegendProps {
  totalContributions: number;
  locale: Locale;
}

export function Legend({ totalContributions, locale }: LegendProps) {
  const t = getDictionary(locale).contributions.legend;
  const summary = t.summary.replace("{count}", totalContributions.toLocaleString());

  return (
    <div className="mt-2 flex w-full items-center justify-between text-[10px] font-medium leading-none text-primary-foreground/60">
      <span className="pr-4">
        {summary}
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
      <div className="flex shrink-0 items-center gap-2">
        <span>{t.less}</span>
        <div className="flex items-center gap-1">
          {CONTRIBUTION_COLORS.map((color) => (
            <span
              key={color}
              className="h-3 w-3 border border-primary-foreground/5"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span>{t.more}</span>
      </div>
    </div>
  );
}

import { CONTRIBUTION_COLORS } from "./color-utils";
import { type Locale } from "@/lib/i18n";

interface LegendProps {
  totalContributions: number;
  locale: Locale;
}

export function Legend({ totalContributions, locale }: LegendProps) {
  const summary =
    locale === "es"
      ? `${totalContributions.toLocaleString()} contribuciones durante el último año en `
      : `${totalContributions.toLocaleString()} contributions in the last year on `;
  const lessLabel = locale === "es" ? "Menos" : "Less";
  const moreLabel = locale === "es" ? "Más" : "More";

  return (
    <div className="mt-2 flex items-center gap-6 text-[10px] font-medium leading-none text-primary-foreground/60">
      <span>
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
      <div className="flex items-center gap-2">
        <span>{lessLabel}</span>
        <div className="flex items-center gap-1">
          {CONTRIBUTION_COLORS.map((color) => (
            <span
              key={color}
              className="h-3 w-3 border border-primary-foreground/5"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <span>{moreLabel}</span>
      </div>
    </div>
  );
}

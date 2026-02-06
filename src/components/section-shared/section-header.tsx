import type { ReactNode } from "react";

type SectionHeaderVariant = "bar" | "inline";

interface SectionHeaderProps {
  title: ReactNode;
  count?: number;
  variant?: SectionHeaderVariant;
  className?: string;
}

export function SectionHeader({
  title,
  count,
  variant = "inline",
  className,
}: SectionHeaderProps) {
  if (variant === "bar") {
    const classes = [
      "w-full bg-black py-2 pl-6 pr-4 text-sm font-medium uppercase tracking-wide text-white md:pl-10",
    ];
    if (className) classes.push(className);
    return (
      <div className={classes.join(" ")}>
        <span>{title}</span>
        {typeof count === "number" && (
          <span className="ml-2 text-base font-semibold text-white">{count}</span>
        )}
      </div>
    );
  }

  const classes = [
    "flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60",
  ];
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")}>
      <span>{title}</span>
      {typeof count === "number" && (
        <span className="text-base font-semibold text-black">{count}</span>
      )}
    </div>
  );
}

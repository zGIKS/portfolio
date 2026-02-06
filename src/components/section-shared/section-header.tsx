import type { ReactNode } from "react";
import { cn, typography } from "@/lib/utils";

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
    return (
      <div className={cn(
        "w-full bg-black py-2 pl-6 pr-4 md:pl-10",
        typography.small,
        "uppercase tracking-wide text-white",
        className
      )}>
        <span>{title}</span>
        {typeof count === "number" && (
          <span className={cn("ml-2", typography.large, "text-white")}>{count}</span>
        )}
      </div>
    );
  }

  return (
    <div className={cn(
      "flex items-center gap-2 pl-4",
      typography.small,
      "uppercase tracking-wide text-black/60",
      className
    )}>
      <span>{title}</span>
      {typeof count === "number" && (
        <span className={cn(typography.large, "text-black")}>{count}</span>
      )}
    </div>
  );
}

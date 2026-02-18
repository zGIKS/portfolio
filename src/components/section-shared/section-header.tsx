import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
      <div
        className={cn(
          "w-full bg-primary py-2 pl-6 pr-4 text-sm font-medium uppercase tracking-wide text-primary-foreground md:pl-10",
          className
        )}
      >
        <span>{title}</span>
        {typeof count === "number" && (
          <span className="ml-2 text-lg font-semibold text-primary-foreground">
            {count}
          </span>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 pl-4 text-sm font-medium uppercase tracking-wide text-foreground",
        className
      )}
    >
      <span>{title}</span>
      {typeof count === "number" && (
        <span className="text-lg font-semibold text-muted-foreground">{count}</span>
      )}
    </div>
  );
}

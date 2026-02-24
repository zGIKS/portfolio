import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconGridProps {
  children: ReactNode;
  className?: string;
}

export function IconGrid({ children, className }: IconGridProps) {
  return (
    <div
      className={cn(
        "mt-3 flex gap-1 px-4 md:grid md:grid-cols-4 md:gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionBodyProps {
  children: ReactNode;
  className?: string;
}

export function SectionBody({ children, className }: SectionBodyProps) {
  return (
    <div className={cn("px-6 pb-10 pt-6 md:px-10", className)}>
      {children}
    </div>
  );
}

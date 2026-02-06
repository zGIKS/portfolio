import type { ReactNode } from "react";

interface IconGridProps {
  children: ReactNode;
  className?: string;
}

export function IconGrid({ children, className }: IconGridProps) {
  const classes = ["mt-3 flex gap-1 px-4 md:grid md:grid-cols-4 md:gap-2"];
  if (className) classes.push(className);
  return <div className={classes.join(" ")}>{children}</div>;
}

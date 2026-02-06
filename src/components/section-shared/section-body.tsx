import type { ReactNode } from "react";

interface SectionBodyProps {
  children: ReactNode;
  className?: string;
}

export function SectionBody({ children, className }: SectionBodyProps) {
  const classes = ["px-6 pb-10 pt-6 md:px-10"];
  if (className) classes.push(className);
  return <div className={classes.join(" ")}>{children}</div>;
}

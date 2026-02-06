import { type ReactNode } from "react";

interface IconTileProps {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
}

export function IconTile({ ariaLabel, children, className }: IconTileProps) {
  const classes = ["flex h-9 w-9 items-center justify-center bg-white"];
  if (className) classes.push(className);
  return (
    <div className={classes.join(" ")} aria-label={ariaLabel}>
      {children}
    </div>
  );
}

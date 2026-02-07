import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DesktopTooltip } from "./desktop-tooltip";

interface IconTileProps {
  ariaLabel: string;
  tooltipLabel?: ReactNode;
  children: ReactNode;
  className?: string;
  href?: string;
}

export function IconTile({ ariaLabel, tooltipLabel, children, className, href }: IconTileProps) {
  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex h-9 w-9 items-center justify-center bg-accent text-accent-foreground backdrop-blur-sm",
        className
      )}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {children}
    </a>
  ) : (
    <div
      className={cn(
        "flex h-9 w-9 items-center justify-center bg-accent text-accent-foreground backdrop-blur-sm",
        className
      )}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      {children}
    </div>
  );

  return (
    <DesktopTooltip label={tooltipLabel ?? ariaLabel}>
      {content}
    </DesktopTooltip>
  );
}

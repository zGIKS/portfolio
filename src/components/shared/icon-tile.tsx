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

const tileBase = "flex h-9 w-9 items-center justify-center bg-accent text-accent-foreground backdrop-blur-sm";

export function IconTile({ ariaLabel, tooltipLabel, children, className, href }: IconTileProps) {
  const sharedProps = {
    className: cn(tileBase, className),
    "aria-label": ariaLabel,
    title: ariaLabel,
  };

  const content = href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
      {children}
    </a>
  ) : (
    <div {...sharedProps}>{children}</div>
  );

  return (
    <DesktopTooltip label={tooltipLabel ?? ariaLabel}>
      {content}
    </DesktopTooltip>
  );
}

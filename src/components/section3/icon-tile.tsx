import { type ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IconTileProps {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  href?: string;
}

export function IconTile({ ariaLabel, children, className, href }: IconTileProps) {
  const classes = ["flex h-9 w-9 items-center justify-center bg-white"];
  if (className) classes.push(className);

  const content = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.join(" ")}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  ) : (
    <div className={classes.join(" ")} aria-label={ariaLabel}>
      {children}
    </div>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent>
          <p>{ariaLabel}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

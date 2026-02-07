import { type ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface IconTileProps {
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  href?: string;
}

export function IconTile({ ariaLabel, children, className, href }: IconTileProps) {
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
    >
      {children}
    </div>
  );

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{content}</TooltipTrigger>
        <TooltipContent>
          <p className="text-xs font-medium">{ariaLabel}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

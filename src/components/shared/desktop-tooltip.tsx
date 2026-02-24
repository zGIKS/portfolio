"use client";

import { type ReactNode, useEffect, useState } from "react";

type TooltipModule = typeof import("@/components/ui/tooltip");

interface DesktopTooltipProps {
  label: ReactNode;
  children: ReactNode;
}

const DESKTOP_QUERY = "(min-width: 768px) and (hover: hover) and (pointer: fine)";

export function DesktopTooltip({ label, children }: DesktopTooltipProps) {
  const [tooltipModule, setTooltipModule] = useState<TooltipModule | null>(null);

  useEffect(() => {
    if (!window.matchMedia(DESKTOP_QUERY).matches) return;

    let active = true;
    import("@/components/ui/tooltip").then((mod) => {
      if (active) setTooltipModule(mod);
    });

    return () => {
      active = false;
    };
  }, []);

  if (!tooltipModule) {
    return <>{children}</>;
  }

  const { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } = tooltipModule;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <div className="text-xs font-medium">{label}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

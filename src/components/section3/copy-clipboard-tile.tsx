"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { DesktopTooltip } from "./desktop-tooltip";

interface CopyClipboardTileProps {
  value: string;
  idleLabel: ReactNode;
  copiedLabel: ReactNode;
  ariaLabel: string;
  title: string;
  idleIcon: ReactNode;
  copiedIcon: ReactNode;
  className?: string;
}

export function CopyClipboardTile({
  value,
  idleLabel,
  copiedLabel,
  ariaLabel,
  title,
  idleIcon,
  copiedIcon,
  className,
}: CopyClipboardTileProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (resetTimer.current) {
        window.clearTimeout(resetTimer.current);
      }
      resetTimer.current = window.setTimeout(() => {
        setCopied(false);
        resetTimer.current = null;
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <DesktopTooltip label={copied ? copiedLabel : idleLabel}>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "flex h-9 w-9 items-center justify-center bg-accent text-accent-foreground backdrop-blur-sm",
          className
        )}
        aria-label={ariaLabel}
        title={title}
      >
        {copied ? copiedIcon : idleIcon}
      </button>
    </DesktopTooltip>
  );
}

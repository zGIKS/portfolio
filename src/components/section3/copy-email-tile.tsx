"use client";

import { useRef, useState } from "react";
import { Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { DesktopTooltip } from "./desktop-tooltip";

const EMAIL = "mateo.aleman.romano@gmail.com";

export function CopyEmailTile() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
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
    <DesktopTooltip label={copied ? "Copied!" : EMAIL}>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "flex h-9 w-9 items-center justify-center bg-accent text-accent-foreground backdrop-blur-sm",
        )}
        aria-label={EMAIL}
        title={EMAIL}
      >
        {copied ? (
          <Check className="h-4 w-4 text-[#39d353] transition-all duration-200" />
        ) : (
          <Mail className="h-4 w-4 text-foreground transition-all duration-200" />
        )}
      </button>
    </DesktopTooltip>
  );
}

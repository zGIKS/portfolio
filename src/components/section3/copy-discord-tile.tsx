"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { DesktopTooltip } from "./desktop-tooltip";
import { DiscordIcon } from "../icons/discord";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

const DISCORD_USERNAME = "asphanyx";
const DISCORD_DISPLAY = "@asphanyx";

interface CopyDiscordTileProps {
  locale: Locale;
}

export function CopyDiscordTile({ locale }: CopyDiscordTileProps) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);
  const copiedLabel = getDictionary(locale).section3.copiedLabel;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
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
    <DesktopTooltip label={copied ? copiedLabel : DISCORD_DISPLAY}>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "flex h-9 w-9 items-center justify-center bg-accent text-accent-foreground backdrop-blur-sm",
        )}
        aria-label="Discord"
        title="Discord"
      >
        {copied ? (
          <Check className="h-4 w-4 text-[#39d353] transition-all duration-200" />
        ) : (
          <DiscordIcon className="h-4 w-4 text-[#5865F2] transition-all duration-200" />
        )}
      </button>
    </DesktopTooltip>
  );
}

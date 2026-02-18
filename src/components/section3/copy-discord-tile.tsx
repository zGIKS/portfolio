"use client";

import { Check } from "lucide-react";
import { DiscordIcon } from "../icons/discord";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { CopyClipboardTile } from "./copy-clipboard-tile";

const DISCORD_USERNAME = "asphanyx";
const DISCORD_DISPLAY = "@asphanyx";

interface CopyDiscordTileProps {
  locale: Locale;
}

export function CopyDiscordTile({ locale }: CopyDiscordTileProps) {
  const copiedLabel = getDictionary(locale).section3.copiedLabel;

  return (
    <CopyClipboardTile
      value={DISCORD_USERNAME}
      idleLabel={DISCORD_DISPLAY}
      copiedLabel={copiedLabel}
      ariaLabel="Discord"
      title="Discord"
      idleIcon={<DiscordIcon className="h-4 w-4 text-[#5865F2] transition-all duration-200" />}
      copiedIcon={<Check className="h-4 w-4 text-[#39d353] transition-all duration-200" />}
    />
  );
}

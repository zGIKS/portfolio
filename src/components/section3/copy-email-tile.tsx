"use client";

import { Check, Mail } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { CopyClipboardTile } from "./copy-clipboard-tile";

const EMAIL = "mateo.aleman.romano@gmail.com";

interface CopyEmailTileProps {
  locale: Locale;
}

export function CopyEmailTile({ locale }: CopyEmailTileProps) {
  const copiedLabel = getDictionary(locale).section3.copiedLabel;

  return (
    <CopyClipboardTile
      value={EMAIL}
      idleLabel={EMAIL}
      copiedLabel={copiedLabel}
      ariaLabel={EMAIL}
      title={EMAIL}
      idleIcon={<Mail className="h-4 w-4 text-foreground transition-all duration-200" />}
      copiedIcon={<Check className="h-4 w-4 text-[#39d353] transition-all duration-200" />}
    />
  );
}

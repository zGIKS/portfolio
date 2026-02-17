"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeader } from "../section-shared/section-header";
import { DesktopTooltip } from "./desktop-tooltip";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface CurrentOnlineProps {
  locale: Locale;
}

export function CurrentOnline({ locale }: CurrentOnlineProps) {
  const title = getDictionary(locale).section3.currentOnlineTitle;
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(
        locale === "es" ? "es-PE" : locale === "pt" ? "pt-BR" : "en-US",
        {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "America/Lima",
        }
      ),
    [locale]
  );

  const tooltipLabel = `${formatter.format(now)} (UTC-5)`;

  return (
    <DesktopTooltip label={tooltipLabel}>
      <div>
        <SectionHeader
          title={title}
          className="mb-4 text-chart-2"
        />
      </div>
    </DesktopTooltip>
  );
}

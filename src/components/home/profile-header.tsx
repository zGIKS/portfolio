"use client";

import { useEffect, useState } from "react";
import { GIcon } from "@/components/icons/nika";
import { cn } from "@/lib/utils";

export function ProfileHeader() {
  const [peruTime, setPeruTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Lima",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const updateTime = () => setPeruTime(formatter.format(new Date()));

    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <div className="relative h-28 w-28 shrink-0">
        <GIcon
          aria-label="Giks logo"
          className="h-full w-full text-white"
        />
      </div>

      <div className="min-w-0">
        <p className="mb-2 text-xs tracking-[0.22em] text-white/55 uppercase">
          giks / home
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Mateo Aleman
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70">
          <span>Software Engineering</span>
          <span className="hidden text-white/25 sm:inline">|</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-xs text-white/90">
            <span aria-hidden="true" className={cn(
              "h-2 w-2 rounded-full transition-colors duration-500",
              peruTime ? "bg-emerald-400" : "bg-white/10"
            )} />
            {peruTime ? (
              <span>{peruTime}</span>
            ) : (
              <span className="h-4 w-[60px] animate-pulse rounded bg-white/5" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

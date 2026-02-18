import { useEffect, useState } from "react";
import { ContributionCalendar } from "./types";

const CLIENT_CACHE_TTL_MS = 5 * 60 * 1000;
let memoryCache:
  | { calendar: ContributionCalendar; expiresAt: number }
  | null = null;

export function useContributions() {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(() => {
    const now = Date.now();
    if (memoryCache && memoryCache.expiresAt > now) {
      return memoryCache.calendar;
    }
    return null;
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const now = Date.now();

    if (memoryCache && memoryCache.expiresAt > now) {
      return () => {
        active = false;
      };
    }

    fetch("/api/v1/contributions")
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        if (data?.error) {
          setError(data.error);
          return;
        }
        memoryCache = {
          calendar: data,
          expiresAt: Date.now() + CLIENT_CACHE_TTL_MS,
        };
        setCalendar(data);
      })
      .catch(() => {
        if (!active) return;
        setError("Failed to load contributions.");
      });

    return () => {
      active = false;
    };
  }, []);

  return { calendar, error };
}

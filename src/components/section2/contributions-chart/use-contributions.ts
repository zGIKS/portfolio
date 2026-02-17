import { useEffect, useState } from "react";
import { ContributionCalendar } from "./types";

export function useContributions() {
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/v1/contributions", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (!active) return;
        if (data?.error) {
          setError(data.error);
          return;
        }
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
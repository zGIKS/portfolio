import Link from "next/link";
import { type Locale } from "@/lib/i18n";

interface GiksLogoProps {
  locale: Locale;
}

export function GiksLogo({ locale }: GiksLogoProps) {
  return (
    <Link
      href={`/${locale}`}
      className="giks-glow text-[2rem] font-semibold leading-none text-foreground transition-colors hover:text-white"
    >
      <span className="relative inline-block pr-2.5">
        GIKS
        <sup className="absolute right-0 top-0 text-[0.525rem] font-medium tracking-wide text-white/80">
          TM
        </sup>
      </span>
    </Link>
  );
}

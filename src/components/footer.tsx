import Link from "next/link";
import { GithubIcon } from "./icons/github";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = getDictionary(locale).footer;

  return (
    <footer className="relative z-20 w-full border-t border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex w-full justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <div className="flex h-12 w-full items-center justify-between px-6 text-xs text-white/65 md:max-w-[55.249245rem] md:pl-10 md:pr-4">
          <span>🄯 Mateo Aleman 2026</span>
          <Link
            href="https://github.com/zGIKS/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            {t.repoLabel}
          </Link>
        </div>
      </div>
    </footer>
  );
}

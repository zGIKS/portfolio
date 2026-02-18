"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GiksLogo } from "./header/giks-logo";
import { LanguageSelect } from "./header/language-select";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = getDictionary(locale).header;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleChange = (nextLocale: string) => {
    if (!locales.includes(nextLocale as Locale) || nextLocale === locale) return;
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const nextPath = segments.join("/") || "/";
    setIsMobileMenuOpen(false);
    router.push(nextPath);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex w-full justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <div className="relative h-[4.5rem] w-full px-6 md:max-w-[55.249245rem] md:pl-10 md:pr-4">
          <div className="flex h-full items-center justify-between md:hidden">
            <div className="h-9 w-9" />
            <GiksLogo locale={locale} />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center text-white/80 transition-colors hover:text-white"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden h-full items-center md:flex">
            <div className="flex min-w-0 flex-1 items-center md:relative md:w-[calc(100%-13.875rem)] md:flex-none">
              <GiksLogo locale={locale} />
            </div>
            <div className="ml-auto self-start pt-2 md:ml-0 md:flex md:w-[13.875rem] md:justify-end">
              <LanguageSelect locale={locale} labels={t} onLocaleChange={handleLocaleChange} />
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="absolute right-4 top-[4.1rem] z-40 w-44 border border-white/10 bg-black/90 p-3 backdrop-blur-md md:hidden">
              <LanguageSelect
                locale={locale}
                labels={t}
                onLocaleChange={handleLocaleChange}
                triggerClassName="h-auto min-h-0 w-full gap-1 border-white/10 bg-transparent px-2 py-1 text-xs leading-tight text-white/80 shadow-none hover:text-white focus-visible:ring-0"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

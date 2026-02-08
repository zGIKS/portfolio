"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = getDictionary(locale).header;

  const handleLocaleChange = (nextLocale: string) => {
    if (!locales.includes(nextLocale as Locale) || nextLocale === locale) return;
    const segments = pathname.split("/");
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const nextPath = segments.join("/") || "/";
    router.push(nextPath);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex w-full justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <div className="flex h-[4.5rem] w-full items-center px-6 md:max-w-[55.249245rem] md:pl-10 md:pr-4">
          <div className="flex min-w-0 flex-1 items-center md:relative md:w-[calc(100%-13.875rem)] md:flex-none">
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

            <nav className="ml-8 flex items-center gap-5 text-base md:absolute md:left-1/2 md:ml-0 md:-translate-x-1/2">
              <Link
                href={`/${locale}`}
                className="text-foreground transition-colors hover:text-white"
              >
                {t.portfolio}
              </Link>
              <Link
                href={`/${locale}#blog`}
                className="hidden text-white/60 transition-colors hover:text-white sm:inline-flex"
              >
                {t.blog}
              </Link>
              <Link
                href={`/${locale}#contact`}
                className="hidden text-white/60 transition-colors hover:text-white sm:inline-flex"
              >
                {t.desktops}
              </Link>
            </nav>
          </div>
          <div className="ml-auto self-start pt-2 md:ml-0 md:flex md:w-[13.875rem] md:justify-end">
            <Select value={locale} onValueChange={handleLocaleChange}>
              <SelectTrigger
                aria-label={t.languageSelectorAria}
                data-size="sm"
                className="h-auto min-h-0 w-auto gap-1 border-0 bg-transparent px-0 py-0.5 text-xs leading-tight text-white/60 shadow-none hover:text-white focus-visible:ring-0"
              >
                <SelectValue placeholder={t.language} />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-black/90 text-white">
                <SelectItem value="en">{t.languages.en}</SelectItem>
                <SelectItem value="es">{t.languages.es}</SelectItem>
                <SelectItem value="pt">{t.languages.pt}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}

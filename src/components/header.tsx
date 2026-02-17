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
        <div className="relative h-[4.5rem] w-full px-6 md:max-w-[55.249245rem] md:pl-10 md:pr-4">
          <div className="flex h-full items-center justify-center md:hidden">
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
          </div>

          <div className="hidden h-full items-center md:flex">
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
      </div>
    </header>
  );
}

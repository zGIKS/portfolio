"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

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
          <div className="absolute inset-y-0 left-6 flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-white/70 hover:bg-white/10 hover:text-white"
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[18rem] border-white/10 bg-black/95 text-white"
              >
                <SheetHeader className="mb-4">
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 text-base">
                  <SheetClose asChild>
                    <Link
                      href={`/${locale}`}
                      className="rounded-md px-3 py-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {t.portfolio}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href={`/${locale}#blog`}
                      className="rounded-md px-3 py-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {t.blog}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href={`/${locale}#contact`}
                      className="rounded-md px-3 py-2 text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {t.desktops}
                    </Link>
                  </SheetClose>
                </nav>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <Button
                    variant="ghost"
                    className="h-10 w-full justify-between rounded-md px-3 text-white/85 hover:bg-white/10 hover:text-white"
                    aria-label={t.languageSelectorAria}
                    onClick={() => setIsLanguageOpen((prev) => !prev)}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Globe className="size-4" />
                      {t.language}
                    </span>
                    <ChevronDown
                      className={`size-4 opacity-80 transition-transform ${isLanguageOpen ? "rotate-180" : ""}`}
                    />
                  </Button>
                  {isLanguageOpen ? (
                    <div className="mt-2 flex flex-col gap-1 pl-3">
                      <button
                        type="button"
                        onClick={() => handleLocaleChange("en")}
                        className={`rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 hover:text-white ${locale === "en" ? "text-white" : "text-white/80"}`}
                      >
                        {t.languages.en}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLocaleChange("es")}
                        className={`rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 hover:text-white ${locale === "es" ? "text-white" : "text-white/80"}`}
                      >
                        {t.languages.es}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleLocaleChange("pt")}
                        className={`rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-white/10 hover:text-white ${locale === "pt" ? "text-white" : "text-white/80"}`}
                      >
                        {t.languages.pt}
                      </button>
                    </div>
                  ) : null}
                </div>
              </SheetContent>
            </Sheet>
          </div>

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
      </div>
    </header>
  );
}

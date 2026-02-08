"use client";

import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex w-full justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <div className="flex h-[4.5rem] w-full items-center px-6 md:max-w-[55.249245rem] md:pl-10 md:pr-4">
          <div className="flex min-w-0 flex-1 items-center md:relative md:w-[calc(100%-13.875rem)] md:flex-none">
            <Link
              href="/"
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
                href="/"
                className="text-foreground transition-colors hover:text-white"
              >
                Portfolio
              </Link>
              <Link
                href="#blog"
                className="hidden text-white/60 transition-colors hover:text-white sm:inline-flex"
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="hidden text-white/60 transition-colors hover:text-white sm:inline-flex"
              >
                Desktops
              </Link>
            </nav>
          </div>
          <div className="ml-auto self-start pt-2 md:ml-0 md:flex md:w-[13.875rem] md:justify-end">
            <Select defaultValue="en">
              <SelectTrigger
                aria-label="Language selector"
                data-size="sm"
                className="h-auto min-h-0 w-auto gap-1 border-0 bg-transparent px-0 py-0.5 text-xs leading-tight text-white/60 shadow-none hover:text-white focus-visible:ring-0"
              >
                <SelectValue placeholder="language" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-black/90 text-white">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
}

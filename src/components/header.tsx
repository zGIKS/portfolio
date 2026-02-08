import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex w-full justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <div className="flex h-14 w-full items-center px-6 md:max-w-[55.249245rem] md:pl-10 md:pr-4">
          <div className="flex min-w-0 flex-1 items-center md:relative md:w-[calc(100%-13.875rem)] md:flex-none">
            <Link
              href="/"
              className="giks-glow text-[2rem] font-semibold leading-none text-foreground transition-colors hover:text-white"
            >
              <span className="relative inline-block pr-5">
                GIKS
                <sup className="absolute -right-0.5 top-0 text-[0.7rem] font-medium tracking-wide text-white/80">
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
          <div className="ml-auto md:ml-0 md:flex md:w-[13.875rem] md:justify-end">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 border border-white/10 bg-slate-900 px-3 py-1.5 text-sm text-white/80 transition-colors hover:text-white"
              aria-label="Language selector"
            >
              language
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className="h-3 w-3 fill-current"
              >
                <path d="M2.25 4.5 6 8.25 9.75 4.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

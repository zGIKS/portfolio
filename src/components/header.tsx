import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="mx-auto flex w-full justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <div className="flex h-14 w-full items-center justify-between px-6 md:max-w-[55.249245rem] md:pl-10 md:pr-4">
          <Link
            href="/"
            className="giks-glow text-base font-semibold text-foreground transition-colors hover:text-white"
          >
            GIKS
          </Link>

          <nav className="flex items-center gap-5 text-base">
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
      </div>
    </header>
  );
}

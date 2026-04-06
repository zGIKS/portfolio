import Link from "next/link";
import { PretextTextBlock } from "@/components/shared/pretext-text-block";
import { GithubIcon } from "./icons/github";

export function Footer() {
  return (
    <footer className="relative z-20 w-full">
      <div className="mx-auto flex w-full justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <div className="flex h-12 w-full max-w-6xl items-center justify-between px-5 text-xs text-white/65 md:px-8 lg:px-10">
          <PretextTextBlock
            as="span"
            text="🄯 Mateo Aleman 2026"
            className="inline-block"
          />
          <Link
            href="https://github.com/zGIKS/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            <PretextTextBlock as="span" text="Source code" className="inline-block" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { DiscordIcon } from "@/components/icons/discord";
import { PretextTextBlock } from "@/components/shared/pretext-text-block";
import { SOCIAL_LINKS } from "@/lib/constants";

export function SocialLinks() {
  return (
    <div
      id="quick-links"
      className="mt-10 grid gap-3 sm:grid-cols-2 xl:max-w-3xl"
    >
      <Link
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        <span className="inline-flex items-center gap-2">
          <GithubIcon className="h-4 w-4" />
          <PretextTextBlock as="span" text="GitHub" className="inline-block" />
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </Link>

      <a
        href={`mailto:${SOCIAL_LINKS.email}`}
        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        <span className="inline-flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <PretextTextBlock as="span" text="Email" className="inline-block" />
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </a>

      <Link
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        <span className="inline-flex items-center gap-2">
          <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
          <PretextTextBlock as="span" text="LinkedIn" className="inline-block" />
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </Link>

      <div className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75">
        <span className="inline-flex items-center gap-2">
          <DiscordIcon className="h-4 w-4 text-[#5865F2]" />
          <PretextTextBlock as="span" text="Discord" className="inline-block" />
        </span>
        <PretextTextBlock
          as="span"
          text={SOCIAL_LINKS.discord}
          className="inline-block font-mono text-xs text-white/55"
        />
      </div>
    </div>
  );
}

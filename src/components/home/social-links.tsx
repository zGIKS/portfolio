import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { DiscordIcon } from "@/components/icons/discord";
import { SOCIAL_LINKS } from "@/lib/constants";

export function SocialLinks() {
  return (
    <div
      id="quick-links"
      className="mt-10 grid gap-3 sm:grid-cols-2 xl:max-w-3xl"
    >
      <a
        href={SOCIAL_LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        <span className="inline-flex items-center gap-2">
          <GithubIcon className="h-4 w-4" />
          GitHub
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </a>

      <a
        href={`mailto:${SOCIAL_LINKS.email}`}
        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        <span className="inline-flex items-center gap-2">
          <Mail className="h-4 w-4" />
          Email
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </a>

      <a
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        <span className="inline-flex items-center gap-2">
          <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
          LinkedIn
        </span>
        <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      </a>

      <div className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75">
        <span className="inline-flex items-center gap-2">
          <DiscordIcon className="h-4 w-4 text-[#5865F2]" />
          Discord
        </span>
        <code className="text-xs text-white/55">{SOCIAL_LINKS.discord}</code>
      </div>
    </div>
  );
}

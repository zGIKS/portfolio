import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Go } from "./icons/stack/languages/go";
import { Rust } from "./icons/stack/languages/rust";
import { Java } from "./icons/stack/languages/java";
import { Python } from "./icons/stack/languages/python";
import { TypeScript } from "./icons/stack/languages/typescript";
import { JavaScript } from "./icons/stack/languages/javascript";
import { React } from "./icons/stack/frontend/react";
import { Nextjs } from "./icons/stack/frontend/nextjs";
import { TailwindCSS } from "./icons/stack/frontend/tailwind";
import { RadixUI } from "./icons/stack/frontend/radixui";
import { ShadcnUI } from "./icons/stack/frontend/shadcn";
import { SvelteIcon } from "./icons/stack/frontend/svelte";
import { PostgreSQL } from "./icons/stack/databases/postgresql";
import { Redis } from "./icons/stack/databases/redis";
import { MySQL } from "./icons/stack/databases/mysql";
import { MongoDB } from "./icons/stack/databases/mongo";
import { ArchIcon } from "./icons/stack/devops/arch";
import { DebianIcon } from "./icons/stack/devops/debian";
import { UbuntuIcon } from "./icons/stack/devops/ubuntu";
import { Docker } from "./icons/stack/devops/docker";
import { MicrosoftAzure } from "./icons/stack/devops/azure";
import { GoogleCloud } from "./icons/stack/devops/googlecloud";
import { TailscaleIcon } from "./icons/stack/devops/tailscale";
import { Cloudflare } from "./icons/stack/devops/cloudflare";
import type { ReactNode } from "react";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { DesktopTooltip } from "./section3/desktop-tooltip";

interface StackCardProps {
  locale: Locale;
}

interface StackItem {
  name: string;
  href: string;
  icon: ReactNode;
}

export function StackCard({ locale }: StackCardProps) {
  const t = getDictionary(locale);
  const iconSize = "h-9 w-9 sm:h-10 sm:w-10";

  const languages: StackItem[] = [
    { name: "Go", href: "https://go.dev/doc/", icon: <Go className={`${iconSize} text-[#00ADD8]`} /> },
    { name: "Rust", href: "https://doc.rust-lang.org/", icon: <Rust className={iconSize} /> },
    { name: "Java", href: "https://docs.oracle.com/en/java/", icon: <Java className={iconSize} /> },
    { name: "Python", href: "https://docs.python.org/", icon: <Python className={iconSize} /> },
    { name: "TypeScript", href: "https://www.typescriptlang.org/docs/", icon: <TypeScript className={iconSize} /> },
    {
      name: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: <JavaScript className={iconSize} />,
    },
  ];

  const frontend: StackItem[] = [
    { name: "React", href: "https://react.dev/", icon: <React className={iconSize} /> },
    { name: "Next.js", href: "https://nextjs.org/docs", icon: <Nextjs className={iconSize} /> },
    { name: "Svelte", href: "https://svelte.dev/", icon: <SvelteIcon className={iconSize} /> },
    { name: "Tailwind CSS", href: "https://tailwindcss.com/docs", icon: <TailwindCSS className={iconSize} /> },
    { name: "Radix UI", href: "https://www.radix-ui.com/", icon: <RadixUI className={iconSize} /> },
    { name: "shadcn/ui", href: "https://ui.shadcn.com/", icon: <ShadcnUI className={iconSize} /> },
  ];

  const databases: StackItem[] = [
    { name: "PostgreSQL", href: "https://www.postgresql.org/docs/", icon: <PostgreSQL className={iconSize} /> },
    { name: "MySQL", href: "https://dev.mysql.com/doc/", icon: <MySQL className={`${iconSize} text-[#00758F]`} /> },
    { name: "MongoDB", href: "https://docs.mongodb.com/", icon: <MongoDB className={iconSize} /> },
    { name: "Redis", href: "https://redis.io/documentation", icon: <Redis className={iconSize} /> },
  ];

  const devops: StackItem[] = [
    { name: "Arch Linux", href: "https://wiki.archlinux.org/", icon: <ArchIcon className={iconSize} /> },
    { name: "Debian", href: "https://www.debian.org/doc/", icon: <DebianIcon className={iconSize} /> },
    { name: "Ubuntu", href: "https://ubuntu.com/desktop/docs", icon: <UbuntuIcon className={iconSize} /> },
    { name: "Docker", href: "https://docs.docker.com/", icon: <Docker className={iconSize} /> },
    { name: "Microsoft Azure", href: "https://docs.microsoft.com/en-us/azure/", icon: <MicrosoftAzure className={iconSize} /> },
    { name: "Google Cloud", href: "https://cloud.google.com/docs", icon: <GoogleCloud className={iconSize} /> },
    { name: "Tailscale", href: "https://tailscale.com/docs", icon: <TailscaleIcon className={iconSize} /> },
    { name: "Cloudflare", href: "https://developers.cloudflare.com/", icon: <Cloudflare className={iconSize} /> },
  ];

  const items = [...languages, ...frontend, ...databases, ...devops];

  return (
    <Card className="relative z-20 w-full overflow-hidden rounded-lg border-white/10 bg-black/40 backdrop-blur-md md:max-w-[55.249245rem]">
      <header className="border-b border-white/10 bg-white/10 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/me.webp"
            alt="Profile photo"
            width={84}
            height={84}
            className="h-20 w-20 rounded-sm object-cover object-center ring-1 ring-white/20"
          />
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-semibold text-white">Mateo</h1>
            <p className="truncate text-sm text-white/80">{t.section3.techStackTitle}</p>
          </div>
        </div>
      </header>

      <div className="space-y-4 p-4 sm:p-6">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {t.section3.techStackTitle}
          </h2>
          <p className="text-lg font-semibold text-foreground">Total: {items.length}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {items.map((item) => (
            <DesktopTooltip key={item.name} label={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[128px] flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-br from-zinc-600/60 via-zinc-700/50 to-zinc-800/65 p-2.5 text-zinc-100 sm:min-h-[140px]"
                aria-label={item.name}
              >
                <div className="text-zinc-100">{item.icon}</div>
                <span className="text-center text-xs text-zinc-100/90">{item.name}</span>
              </a>
            </DesktopTooltip>
          ))}
        </div>
      </div>
    </Card>
  );
}

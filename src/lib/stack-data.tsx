import type { ReactNode } from "react";
import { Go } from "@/components/icons/stack/languages/go";
import { Rust } from "@/components/icons/stack/languages/rust";
import { Java } from "@/components/icons/stack/languages/java";
import { Python } from "@/components/icons/stack/languages/python";
import { TypeScript } from "@/components/icons/stack/languages/typescript";
import { JavaScript } from "@/components/icons/stack/languages/javascript";
import { React } from "@/components/icons/stack/frontend/react";
import { Nextjs } from "@/components/icons/stack/frontend/nextjs";
import { TailwindCSS } from "@/components/icons/stack/frontend/tailwind";
import { RadixUI } from "@/components/icons/stack/frontend/radixui";
import { ShadcnUI } from "@/components/icons/stack/frontend/shadcn";
import { SvelteIcon } from "@/components/icons/stack/frontend/svelte";
import { PostgreSQL } from "@/components/icons/stack/databases/postgresql";
import { Redis } from "@/components/icons/stack/databases/redis";
import { MySQL } from "@/components/icons/stack/databases/mysql";
import { MongoDB } from "@/components/icons/stack/databases/mongo";
import { ArchIcon } from "@/components/icons/stack/devops/arch";
import { DebianIcon } from "@/components/icons/stack/devops/debian";
import { UbuntuIcon } from "@/components/icons/stack/devops/ubuntu";
import { Docker } from "@/components/icons/stack/devops/docker";
import { MicrosoftAzure } from "@/components/icons/stack/devops/azure";
import { GoogleCloud } from "@/components/icons/stack/devops/googlecloud";
import { TailscaleIcon } from "@/components/icons/stack/devops/tailscale";
import { Cloudflare } from "@/components/icons/stack/devops/cloudflare";
import { Traefik } from "@/components/icons/stack/devops/traefik";

export interface StackItem {
  name: string;
  href: string;
  icon: (className: string) => ReactNode;
}

export const languages: StackItem[] = [
  { name: "Go", href: "https://go.dev/doc/", icon: (cls) => <Go className={`${cls} text-[#00ADD8]`} /> },
  { name: "Rust", href: "https://doc.rust-lang.org/", icon: (cls) => <Rust className={cls} /> },
  { name: "Java", href: "https://docs.oracle.com/en/java/", icon: (cls) => <Java className={cls} /> },
  { name: "Python", href: "https://docs.python.org/", icon: (cls) => <Python className={cls} /> },
  { name: "TypeScript", href: "https://www.typescriptlang.org/docs/", icon: (cls) => <TypeScript className={cls} /> },
  { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: (cls) => <JavaScript className={cls} /> },
];

export const frontend: StackItem[] = [
  { name: "React", href: "https://react.dev/", icon: (cls) => <React className={cls} /> },
  { name: "Next.js", href: "https://nextjs.org/docs", icon: (cls) => <Nextjs className={cls} /> },
  { name: "Svelte", href: "https://svelte.dev/", icon: (cls) => <SvelteIcon className={cls} /> },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/docs", icon: (cls) => <TailwindCSS className={cls} /> },
  { name: "Radix UI", href: "https://www.radix-ui.com/", icon: (cls) => <RadixUI className={cls} /> },
  { name: "shadcn/ui", href: "https://ui.shadcn.com/", icon: (cls) => <ShadcnUI className={cls} /> },
];

export const databases: StackItem[] = [
  { name: "PostgreSQL", href: "https://www.postgresql.org/docs/", icon: (cls) => <PostgreSQL className={cls} /> },
  { name: "MySQL", href: "https://dev.mysql.com/doc/", icon: (cls) => <MySQL className={`${cls} text-[#00758F]`} /> },
  { name: "MongoDB", href: "https://docs.mongodb.com/", icon: (cls) => <MongoDB className={cls} /> },
  { name: "Redis", href: "https://redis.io/documentation", icon: (cls) => <Redis className={cls} /> },
];

export const devops: StackItem[] = [
  { name: "Arch Linux", href: "https://wiki.archlinux.org/", icon: (cls) => <ArchIcon className={cls} /> },
  { name: "Debian", href: "https://www.debian.org/doc/", icon: (cls) => <DebianIcon className={cls} /> },
  { name: "Ubuntu", href: "https://ubuntu.com/desktop/docs", icon: (cls) => <UbuntuIcon className={cls} /> },
  { name: "Docker", href: "https://docs.docker.com/", icon: (cls) => <Docker className={cls} /> },
  { name: "Microsoft Azure", href: "https://docs.microsoft.com/en-us/azure/", icon: (cls) => <MicrosoftAzure className={cls} /> },
  { name: "Google Cloud", href: "https://cloud.google.com/docs", icon: (cls) => <GoogleCloud className={cls} /> },
  { name: "Tailscale", href: "https://tailscale.com/docs", icon: (cls) => <TailscaleIcon className={cls} /> },
  { name: "Cloudflare", href: "https://developers.cloudflare.com/", icon: (cls) => <Cloudflare className={cls} /> },
  { name: "Traefik", href: "https://doc.traefik.io/traefik/", icon: (cls) => <Traefik className={cls} /> },
];

export const allStackItems: StackItem[] = [...languages, ...frontend, ...databases, ...devops];

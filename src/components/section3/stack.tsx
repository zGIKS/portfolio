import Link from "next/link";
import { Go } from "../icons/stack/languages/go";
import { Rust } from "../icons/stack/languages/rust";
import { Java } from "../icons/stack/languages/java";
import { Python } from "../icons/stack/languages/python";
import { SvelteIcon } from "../icons/stack/frontend/svelte";
import { IconTile } from "./icon-tile";
import { IconGrid } from "../section-shared/icon-grid";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface StackProps {
  locale: Locale;
}

export function Stack({ locale }: StackProps) {
  const t = getDictionary(locale);
  
  const items = [
    // Languages (6)
    { name: "Go", href: "https://go.dev/doc/" },
    { name: "Rust", href: "https://doc.rust-lang.org/" },
    { name: "Java", href: "https://docs.oracle.com/en/java/" },
    { name: "Python", href: "https://docs.python.org/" },
    { name: "TypeScript", href: "https://www.typescriptlang.org/docs/" },
    { name: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    // Frontend (6)
    { name: "React", href: "https://react.dev/" },
    { name: "Next.js", href: "https://nextjs.org/docs" },
    { name: "Svelte", href: "https://svelte.dev/" },
    { name: "Tailwind CSS", href: "https://tailwindcss.com/docs" },
    { name: "Radix UI", href: "https://www.radix-ui.com/" },
    { name: "shadcn/ui", href: "https://ui.shadcn.com/" },
    // Databases (4)
    { name: "PostgreSQL", href: "https://www.postgresql.org/docs/" },
    { name: "MySQL", href: "https://dev.mysql.com/doc/" },
    { name: "MongoDB", href: "https://docs.mongodb.com/" },
    { name: "Redis", href: "https://redis.io/documentation" },
    // DevOps (8)
    { name: "Arch Linux", href: "https://wiki.archlinux.org/" },
    { name: "Debian", href: "https://www.debian.org/doc/" },
    { name: "Ubuntu", href: "https://ubuntu.com/desktop/docs" },
    { name: "Docker", href: "https://docs.docker.com/" },
    { name: "Microsoft Azure", href: "https://docs.microsoft.com/en-us/azure/" },
    { name: "Google Cloud", href: "https://cloud.google.com/docs" },
    { name: "Tailscale", href: "https://tailscale.com/docs" },
    { name: "Cloudflare", href: "https://developers.cloudflare.com/" },
  ];

  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4">
        <Link
          href={`/${locale}/stack`}
          className="text-sm font-medium uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
        >
          {t.section3.techStackTitle}
        </Link>
        <span className="text-lg font-semibold text-muted-foreground">{items.length}</span>
      </div>
      <IconGrid>
        <IconTile ariaLabel="Go" href="https://go.dev/doc/">
          <Go className="h-4 w-4 text-[#00ADD8]" />
        </IconTile>
        <IconTile ariaLabel="Rust" className="text-foreground" href="https://doc.rust-lang.org/">
          <Rust className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Java" href="https://docs.oracle.com/en/java/">
          <Java className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Python" href="https://docs.python.org/">
          <Python className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Svelte" href="https://svelte.dev/">
          <SvelteIcon className="h-4 w-4" />
        </IconTile>
      </IconGrid>
    </>
  );
}

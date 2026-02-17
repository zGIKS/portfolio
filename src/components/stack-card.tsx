import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { IconTile } from "./section3/icon-tile";
import { SectionHeader } from "./section-shared/section-header";
import { IconGrid } from "./section-shared/icon-grid";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface StackCardProps {
  locale: Locale;
}

export function StackCard({ locale }: StackCardProps) {
  const t = getDictionary(locale);

  return (
    <Card className="relative z-20 w-full border-white/10 bg-black/30 backdrop-blur-md md:w-[min(100%,900px)]">
      <CardHeader className="border-b border-white/10">
        <CardTitle className="text-xl">{t.section3.techStackTitle}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <SectionHeader title={t.section3.techStackTitle} count={23} className="mt-6" />
        <IconGrid className="pb-6">
          {/* Languages - 6 */}
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
          <IconTile ariaLabel="TypeScript" href="https://www.typescriptlang.org/docs/">
            <TypeScript className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <JavaScript className="h-4 w-4" />
          </IconTile>
          {/* Frontend - 5 */}
          <IconTile ariaLabel="React" href="https://react.dev/">
            <React className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Next.js" href="https://nextjs.org/docs">
            <Nextjs className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Tailwind CSS" href="https://tailwindcss.com/docs">
            <TailwindCSS className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Radix UI" href="https://www.radix-ui.com/">
            <RadixUI className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="shadcn/ui" href="https://ui.shadcn.com/">
            <ShadcnUI className="h-4 w-4" />
          </IconTile>
          {/* Databases - 4 */}
          <IconTile ariaLabel="PostgreSQL" href="https://www.postgresql.org/docs/">
            <PostgreSQL className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="MySQL" className="text-[#00758F]" href="https://dev.mysql.com/doc/">
            <MySQL className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="MongoDB" href="https://docs.mongodb.com/">
            <MongoDB className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Redis" href="https://redis.io/documentation">
            <Redis className="h-4 w-4" />
          </IconTile>
          {/* DevOps - 8 */}
          <IconTile ariaLabel="Arch Linux" href="https://wiki.archlinux.org/">
            <ArchIcon className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Debian" href="https://www.debian.org/doc/">
            <DebianIcon className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Ubuntu" href="https://ubuntu.com/desktop/docs">
            <UbuntuIcon className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Docker" href="https://docs.docker.com/">
            <Docker className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Microsoft Azure" href="https://docs.microsoft.com/en-us/azure/">
            <MicrosoftAzure className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Google Cloud" href="https://cloud.google.com/docs">
            <GoogleCloud className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Tailscale" href="https://tailscale.com/docs">
            <TailscaleIcon className="h-4 w-4" />
          </IconTile>
          <IconTile ariaLabel="Cloudflare" href="https://developers.cloudflare.com/">
            <Cloudflare className="h-4 w-4" />
          </IconTile>
        </IconGrid>
      </CardContent>
    </Card>
  );
}

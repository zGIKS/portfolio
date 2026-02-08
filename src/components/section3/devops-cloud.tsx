import { ArchIcon } from "../icons/stack/devops/arch";
import { DebianIcon } from "../icons/stack/devops/debian";
import { UbuntuIcon } from "../icons/stack/devops/ubuntu";
import { Docker } from "../icons/stack/devops/docker";
import { MicrosoftAzure } from "../icons/stack/devops/azure";
import { GoogleCloud } from "../icons/stack/devops/googlecloud";
import { TailscaleIcon } from "../icons/stack/devops/tailscale";
import { Cloudflare } from "../icons/stack/devops/cloudflare";
import { IconTile } from "./icon-tile";
import { SectionHeader } from "../section-shared/section-header";
import { IconGrid } from "../section-shared/icon-grid";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface DevOpsCloudProps {
  locale: Locale;
}

export function DevOpsCloud({ locale }: DevOpsCloudProps) {
  const title = getDictionary(locale).section3.devOpsTitle;

  return (
    <>
      <SectionHeader title={title} count={8} className="mt-6" />
      <IconGrid className="pb-6">
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
    </>
  );
}

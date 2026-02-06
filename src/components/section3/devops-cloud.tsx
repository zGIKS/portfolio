import { ArchIcon } from "../icons/stack/devops/arch";
import { DebianIcon } from "../icons/stack/devops/debian";
import { UbuntuIcon } from "../icons/stack/devops/ubuntu";
import { Docker } from "../icons/stack/devops/docker";
import { MicrosoftAzure } from "../icons/stack/devops/azure";
import { GoogleCloud } from "../icons/stack/devops/googlecloud";
import { TailscaleIcon } from "../icons/stack/devops/tailscale";
import { Cloudflare } from "../icons/stack/devops/cloudflare";
import { IconTile } from "./icon-tile";

export function DevOpsCloud() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>DevOps</span>
        <span className="text-base font-semibold text-black">8</span>
      </div>
      <div className="mt-3 flex gap-1 px-4 pb-6 md:grid md:grid-cols-4 md:gap-2">
        <IconTile ariaLabel="Arch Linux">
          <ArchIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Debian">
          <DebianIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Ubuntu">
          <UbuntuIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Docker">
          <Docker className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Microsoft Azure">
          <MicrosoftAzure className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Google Cloud">
          <GoogleCloud className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Tailscale">
          <TailscaleIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Cloudflare">
          <Cloudflare className="h-4 w-4" />
        </IconTile>
      </div>
    </>
  );
}

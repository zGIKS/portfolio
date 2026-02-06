import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { XIcon } from "../icons/x";
import { YoutubeIcon } from "../icons/youtube";
import { IconTile } from "./icon-tile";

export function Links() {
  return (
    <>
      <div className="flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Links</span>
        <span className="text-base font-semibold text-black">4</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 px-4">
        <IconTile ariaLabel="LinkedIn">
          <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
        </IconTile>
        <IconTile ariaLabel="GitHub" className="text-black">
          <GithubIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Twitter" className="text-black">
          <XIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="YouTube">
          <YoutubeIcon className="h-4 w-4 text-[#FF0000]" />
        </IconTile>
      </div>

    </>
  );
}

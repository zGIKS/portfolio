import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { XIcon } from "../icons/x";
import { YoutubeIcon } from "../icons/youtube";
import { IconTile } from "./icon-tile";
import { SectionHeader } from "../section-shared/section-header";
import { IconGrid } from "../section-shared/icon-grid";

export function Links() {
  return (
    <>
      <SectionHeader title="Links" count={4} />
      <IconGrid>
        <IconTile ariaLabel="LinkedIn">
          <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
        </IconTile>
        <IconTile ariaLabel="GitHub" className="text-foreground">
          <GithubIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Twitter" className="text-foreground">
          <XIcon className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="YouTube">
          <YoutubeIcon className="h-4 w-4 text-[#FF0000]" />
        </IconTile>
      </IconGrid>

    </>
  );
}

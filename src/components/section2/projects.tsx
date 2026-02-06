import { Rust } from "../icons/stack/languages/rust";
import { Nextjs } from "../icons/stack/frontend/nextjs";
import { GithubIcon } from "../icons/github";
import { IconTile } from "../section3/icon-tile";
import { Link as LinkIcon } from "lucide-react";

export function Projects() {
  return (
    <div className="px-6 pb-10 pt-6 md:px-10">
      <div className="border border-black/10 bg-white p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="h-16 w-40 bg-black" />
          <div className="flex-1">
            <h3 className="text-base font-bold text-black">Titulo</h3>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </button>
              <button className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black">
                <LinkIcon className="h-3.5 w-3.5" />
                Preview
              </button>
            </div>
            <div className="flex items-center gap-1">
              <IconTile ariaLabel="Rust" className="text-black">
                <Rust className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Next.js">
                <Nextjs className="h-4 w-4" />
              </IconTile>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="text-xs font-medium text-black/70">Progress: 65%</div>
          <div className="mt-2 h-2 w-full rounded-full bg-black/10">
            <div className="h-full w-[65%] rounded-full bg-black" />
          </div>
        </div>
      </div>
    </div>
  );
}

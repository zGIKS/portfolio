import { Rust } from "../icons/stack/languages/rust";
import { Nextjs } from "../icons/stack/frontend/nextjs";
import { GithubIcon } from "../icons/github";
import { IconTile } from "../section3/icon-tile";
import { Link as LinkIcon } from "lucide-react";
import { SectionBody } from "../section-shared/section-body";
import { ProjectCard } from "./project-card";

export function Projects() {
  return (
    <SectionBody>
      <ProjectCard
        title="Titulo"
        media={<div className="h-16 w-40 bg-black" />}
        progressLabel="Progress"
        progressValue={65}
        actions={
          <div className="flex flex-col items-end gap-2">
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
        }
      />
    </SectionBody>
  );
}

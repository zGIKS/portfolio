import { Rust } from "../icons/stack/languages/rust";
import { Nextjs } from "../icons/stack/frontend/nextjs";
import { GithubIcon } from "../icons/github";
import { IconTile } from "../section3/icon-tile";
import { Link as LinkIcon } from "lucide-react";
import { SectionBody } from "../section-shared/section-body";
import { ProjectCard } from "./project-card";
import { Cloudflare } from "../icons/stack/devops/cloudflare";
import { TailscaleIcon } from "../icons/stack/devops/tailscale";
import { DebianIcon } from "../icons/stack/devops/debian";

export function Projects() {
  return (
    <SectionBody>
      <ProjectCard
        title="Identity & Access Management"
        media={
          <div className="h-16 w-40 overflow-hidden bg-black">
            <img
              src="/assets/IAM.webp"
              alt="Identity & Access Management"
              className="h-full w-full object-cover"
            />
          </div>
        }
        progressLabel="Progress"
        progressValue={100}
        actions={
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/zGIKS/iam-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
              <a
                href="https://iam-demo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <LinkIcon className="h-3.5 w-3.5" />
                Preview
              </a>
            </div>
            <div className="flex items-center gap-1">
              <IconTile ariaLabel="Rust" className="text-black">
                <Rust className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Next.js">
                <Nextjs className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Cloudflare">
                <Cloudflare className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Tailscale">
                <TailscaleIcon className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Debian" className="text-[#D70A53]">
                <DebianIcon className="h-4 w-4" />
              </IconTile>
            </div>
          </div>
        }
      />
    </SectionBody>
  );
}

import { GithubIcon } from "../icons/github";
import { IconTile } from "../section3/icon-tile";
import { Link as LinkIcon } from "lucide-react";
import { SectionBody } from "../section-shared/section-body";
import { ProjectCard } from "./project-card";
import { projects } from "./projects-data";
import { cn, typography } from "@/lib/utils";

export function Projects() {
  return (
    <SectionBody>
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            media={
              project.imageSrc ? (
                <div className="h-16 w-40 overflow-hidden bg-black">
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt ?? project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-16 w-40 bg-black" />
              )
            }
            meta={<p className="text-sm text-black/70">{project.description}</p>}
            progressLabel="Progress"
            progressValue={project.progress}
            actions={
              <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
                <div className="flex items-center gap-2">
                  <a
                    href={project.codeUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      typography.small,
                      "flex items-center gap-2 border border-black/20 px-3 py-1 uppercase tracking-wide text-black"
                    )}
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    Code
                  </a>
                  <a
                    href={project.previewUrl ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      typography.small,
                      "flex items-center gap-2 border border-black/20 px-3 py-1 uppercase tracking-wide text-black"
                    )}
                  >
                    <LinkIcon className="h-3.5 w-3.5" />
                    Preview
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  {project.icons.map(({ label, Icon, iconClassName, tileClassName }) => (
                    <IconTile key={label} ariaLabel={label} className={tileClassName}>
                      <Icon className={["h-4 w-4", iconClassName].filter(Boolean).join(" ")} />
                    </IconTile>
                  ))}
                </div>
              </div>
            }
          />
        ))}
      </div>
    </SectionBody>
  );
}

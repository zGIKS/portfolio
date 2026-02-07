import Image from "next/image";
import { GithubIcon } from "../icons/github";
import { IconTile } from "../section3/icon-tile";
import { Link as LinkIcon } from "lucide-react";
import { SectionBody } from "../section-shared/section-body";
import { ProjectCard } from "./project-card";
import { projects } from "./projects-data";
import { Button } from "@/components/ui/button";

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
                <div className="relative h-16 w-40 overflow-hidden bg-primary">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt ?? project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-16 w-40 bg-primary" />
              )
            }
            meta={<p className="text-sm text-muted-foreground">{project.description}</p>}
            progressLabel="Progress"
            progressValue={project.progress}
            actions={
              <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" asChild className="gap-2 uppercase tracking-wide">
                    <a
                      href={project.codeUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="gap-2 uppercase tracking-wide">
                    <a
                      href={project.previewUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon className="h-3.5 w-3.5" />
                      Preview
                    </a>
                  </Button>
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

import { GithubIcon } from "../icons/github";
import { IconTile } from "../section3/icon-tile";
import { Link as LinkIcon } from "lucide-react";
import { SectionBody } from "../section-shared/section-body";
import { ProjectCard } from "./project-card";
import { getProjects } from "./projects-data";
import { Button } from "@/components/ui/button";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ProjectsProps {
  locale: Locale;
}

export function Projects({ locale }: ProjectsProps) {
  const projects = getProjects(locale);
  const labels = getDictionary(locale).section2.projects.labels;

  return (
    <SectionBody>
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            meta={<p className="text-sm text-muted-foreground">{project.description}</p>}
            progressLabel={labels.progress}
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
                      {labels.code}
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="gap-2 uppercase tracking-wide">
                    <a
                      href={project.previewUrl ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkIcon className="h-3.5 w-3.5" />
                      {labels.preview}
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

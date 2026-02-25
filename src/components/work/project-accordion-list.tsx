"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, Github, Link2 } from "lucide-react";
import { GraphMapIcon } from "@/components/icons/projects/graph-map";
import { IAMIcon } from "@/components/icons/projects/iam";
import { LevelUpIcon } from "@/components/icons/projects/level-up";
import { MortgageIcon } from "@/components/icons/projects/mortgage";
import { cn } from "@/lib/utils";

type ProjectItem = {
  title: string;
  dateRange?: string;
  description: string;
  tags?: string[];
  previewUrl: string;
  repoUrl: string;
};

const PROJECT_ICONS = {
  "IAM System": IAMIcon,
  "Level up journey": LevelUpIcon,
  "Graph Map": GraphMapIcon,
  "Mortgage App": MortgageIcon,
} as const;

function getProjectIcon(title: string) {
  return PROJECT_ICONS[title as keyof typeof PROJECT_ICONS];
}

interface ProjectAccordionListProps {
  projects: ProjectItem[];
}

export function ProjectAccordionList({ projects }: ProjectAccordionListProps) {
  const [openProjects, setOpenProjects] = useState<string[]>([]);
  const toggleProject = (title: string) => {
    setOpenProjects((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  };

  return (
    <div className="grid grid-cols-1 p-2 sm:p-3">
      {projects.map((project, index) => {
        const Icon = getProjectIcon(project.title);
        const isOpen = openProjects.includes(project.title);

        return (
          <div
            key={project.title}
            className={cn(
              "group relative overflow-hidden border-white/10 bg-black/25 transition-colors",
              "border-b",
              index === 0 && "border-t",
              isOpen && "bg-black/35"
            )}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute -left-10 top-0 h-20 w-20 rounded-full bg-cyan-400/5 blur-2xl" />
            </div>

            <div
              className="relative flex cursor-pointer items-start gap-3 px-4 py-4 sm:px-5"
              onClick={() => toggleProject(project.title)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleProject(project.title);
                }
              }}
              aria-expanded={isOpen}
              aria-controls={`project-panel-${index}`}
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center">
                {Icon ? (
                  <Icon className="h-8 w-8" aria-hidden="true" />
                ) : (
                  <div className="h-2.5 w-2.5 rounded-full bg-white/60" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-base font-semibold text-white sm:text-lg">
                  {project.title}
                </h3>
                {project.dateRange ? (
                  <p className="text-sm text-white/50">{project.dateRange}</p>
                ) : null}
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <a
                  href={project.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/5 hover:text-white"
                  aria-label={`Open ${project.title} preview`}
                >
                  <Link2 className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    toggleProject(project.title);
                  }}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition hover:bg-white/5 hover:text-white"
                  aria-expanded={isOpen}
                  aria-controls={`project-panel-${index}`}
                  aria-label={isOpen ? "Collapse project details" : "Expand project details"}
                >
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {isOpen ? (
              <div
                id={`project-panel-${index}`}
                className="relative border-t border-white/10 px-4 py-4 sm:px-5"
              >
                <p className="mb-4 text-sm leading-relaxed text-white/70 sm:text-base">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    Preview
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

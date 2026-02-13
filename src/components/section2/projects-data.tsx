import type { ComponentType } from "react";
import type { SVGProps } from "react";
import { Rust } from "../icons/stack/languages/rust";
import { Nextjs } from "../icons/stack/frontend/nextjs";
import { Go } from "../icons/stack/languages/go";
import { Python } from "../icons/stack/languages/python";
import { React } from "../icons/stack/frontend/react";
import { PostgreSQL } from "../icons/stack/databases/postgresql";
import { Redis } from "../icons/stack/databases/redis";
import { TailwindCSS } from "../icons/stack/frontend/tailwind";
import { ShadcnUI } from "../icons/stack/frontend/shadcn";
import { Java } from "../icons/stack/languages/java";
import { MongoDB } from "../icons/stack/databases/mongo";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

export interface ProjectIcon {
  label: string;
  Icon: SvgIcon;
  iconClassName?: string;
  tileClassName?: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  progress: number;
  codeUrl?: string;
  previewUrl?: string;
  icons: ProjectIcon[];
}

export function getProjects(locale: Locale): ProjectItem[] {
  const texts = getDictionary(locale).section2.projects.items;

  return [
    {
      title: texts.iam.title,
      description: texts.iam.description,
      progress: 100,
      codeUrl: "https://github.com/zGIKS/auth-service",
      previewUrl: texts.iam.preview,
      icons: [
        { label: "Rust", Icon: Rust, tileClassName: "text-foreground" },
        { label: "Next.js", Icon: Nextjs },
        { label: "PostgreSQL", Icon: PostgreSQL },
        { label: "Redis", Icon: Redis },
      ],
    },
    {
      title: texts.levelUp.title,
      description: texts.levelUp.description,
      progress: 100,
      codeUrl: "https://github.com/LevelUp-Journey",
      previewUrl: texts.levelUp.preview,
      icons: [
        { label: "Java", Icon: Java },
        { label: "PostgreSQL", Icon: PostgreSQL },
        { label: "MongoDB", Icon: MongoDB },
        { label: "Next.js", Icon: Nextjs },
      ],
    },
    {
      title: texts.mortgage.title,
      description: texts.mortgage.description,
      progress: 100,
      codeUrl: "https://github.com/zGIKS/mortgage-calculator",
      previewUrl: texts.mortgage.preview,
      icons: [
        { label: "Go", Icon: Go, iconClassName: "text-[#00ADD8]" },
        { label: "Python", Icon: Python },
        { label: "React", Icon: React },
        { label: "PostgreSQL", Icon: PostgreSQL },
      ],
    },
    {
      title: texts.graphMap.title,
      description: texts.graphMap.description,
      progress: 100,
      codeUrl: "https://github.com/zGIKS/GraphMap-Backend",
      previewUrl: texts.graphMap.preview,
      icons: [
        { label: "Python", Icon: Python },
        { label: "React", Icon: React },
        { label: "Tailwind CSS", Icon: TailwindCSS },
        { label: "shadcn/ui", Icon: ShadcnUI },
      ],
    },
  ];
}

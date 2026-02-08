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
  imageSrc?: string;
  imageAlt?: string;
  progress: number;
  codeUrl?: string;
  previewUrl?: string;
  icons: ProjectIcon[];
}

export function getProjects(locale: Locale): ProjectItem[] {
  const isSpanish = locale === "es";

  return [
  {
    title: "Identity & Access Management",
    description:
      isSpanish
        ? "Sistema de inicio de sesión y control de accesos que protege cuentas, datos y sesiones de usuarios."
        : "Authentication and access control platform that secures user accounts, data, and sessions.",
    imageSrc: "/assets/IAM.webp",
    imageAlt: "Identity & Access Management",
    progress: 100,
    codeUrl: "https://github.com/zGIKS/auth-service",
    previewUrl: "https://iam-demo.vercel.app/",
    icons: [
      { label: "Rust", Icon: Rust, tileClassName: "text-foreground" },
      { label: "Next.js", Icon: Nextjs },
      { label: "PostgreSQL", Icon: PostgreSQL },
      { label: "Redis", Icon: Redis },
    ],
  },
  {
    title: "LevelUp Journey",
    description:
      isSpanish
        ? "Plataforma educativa colaborativa que ayuda a estudiantes a practicar programación y docentes a seguir avances."
        : "Collaborative learning platform that helps students practice programming and helps teachers track progress.",
    progress: 100,
    codeUrl: "https://github.com/LevelUp-Journey",
    previewUrl: "#",
    icons: [
      { label: "Java", Icon: Java },
      { label: "PostgreSQL", Icon: PostgreSQL },
      { label: "MongoDB", Icon: MongoDB },
      { label: "Next.js", Icon: Nextjs },
    ],
  },
  {
    title: "Mortgage Calculator",
    description:
      isSpanish
        ? "Herramienta web que simula créditos hipotecarios y compara opciones bancarias para tomar mejores decisiones."
        : "Web tool that simulates mortgage loans and compares banking options to support better decisions.",
    progress: 100,
    codeUrl: "https://github.com/zGIKS/mortgage-calculator",
    previewUrl: "https://mortgage-ui-sable.vercel.app",
    icons: [
      { label: "Go", Icon: Go, iconClassName: "text-[#00ADD8]" },
      { label: "Python", Icon: Python },
      { label: "React", Icon: React },
      { label: "PostgreSQL", Icon: PostgreSQL },
    ],
  },
  {
    title: isSpanish ? "Mapa de Grafos" : "Graph Map",
    description:
      isSpanish
        ? "Aplicación interactiva que muestra mapas, rutas óptimas y permite explorar datos mediante visualizaciones e IA."
        : "Interactive app for maps and optimal routes, with data exploration through visualizations and AI.",
    progress: 100,
    codeUrl: "https://github.com/zGIKS/GraphMap-Backend",
    previewUrl: "https://graph-map-frontend.vercel.app",
    icons: [
      { label: "Python", Icon: Python },
      { label: "React", Icon: React },
      { label: "Tailwind CSS", Icon: TailwindCSS },
      { label: "shadcn/ui", Icon: ShadcnUI },
    ],
  },
  ];
}

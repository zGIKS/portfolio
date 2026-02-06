import { Rust } from "../icons/stack/languages/rust";
import { Nextjs } from "../icons/stack/frontend/nextjs";
import { GithubIcon } from "../icons/github";
import { IconTile } from "../section3/icon-tile";
import { Link as LinkIcon } from "lucide-react";
import { SectionBody } from "../section-shared/section-body";
import { ProjectCard } from "./project-card";
import { Go } from "../icons/stack/languages/go";
import { Python } from "../icons/stack/languages/python";
import { React } from "../icons/stack/frontend/react";
import { PostgreSQL } from "../icons/stack/databases/postgresql";
import { Redis } from "../icons/stack/databases/redis";
import { TailwindCSS } from "../icons/stack/frontend/tailwind";
import { ShadcnUI } from "../icons/stack/frontend/shadcn";
import { Java } from "../icons/stack/languages/java";
import { MongoDB } from "../icons/stack/databases/mongo";

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
        meta={
          <p className="text-sm text-black/70">
            Sistema de inicio de sesión y control de accesos que protege cuentas, datos y
            sesiones de usuarios.
          </p>
        }
        progressLabel="Progress"
        progressValue={100}
        actions={
          <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
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
              <IconTile ariaLabel="PostgreSQL">
                <PostgreSQL className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Redis">
                <Redis className="h-4 w-4" />
              </IconTile>
            </div>
          </div>
        }
      />
      <div className="mt-5" />
      <ProjectCard
        title="LevelUp Journey"
        media={<div className="h-16 w-40 bg-black" />}
        meta={
          <p className="text-sm text-black/70">
            Plataforma educativa colaborativa que ayuda a estudiantes a practicar
            programación y docentes a seguir avances.
          </p>
        }
        progressLabel="Progress"
        progressValue={100}
        actions={
          <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <LinkIcon className="h-3.5 w-3.5" />
                Preview
              </a>
            </div>
            <div className="flex items-center gap-1">
              <IconTile ariaLabel="Java">
                <Java className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="PostgreSQL">
                <PostgreSQL className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="MongoDB">
                <MongoDB className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Next.js">
                <Nextjs className="h-4 w-4" />
              </IconTile>
            </div>
          </div>
        }
      />
      <div className="mt-5" />
      <ProjectCard
        title="Mortgage Calculator"
        media={<div className="h-16 w-40 bg-black" />}
        meta={
          <p className="text-sm text-black/70">
            Herramienta web que simula créditos hipotecarios y compara opciones bancarias
            para tomar mejores decisiones.
          </p>
        }
        progressLabel="Progress"
        progressValue={100}
        actions={
          <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <LinkIcon className="h-3.5 w-3.5" />
                Preview
              </a>
            </div>
            <div className="flex items-center gap-1">
              <IconTile ariaLabel="Go">
                <Go className="h-4 w-4 text-[#00ADD8]" />
              </IconTile>
              <IconTile ariaLabel="Python">
                <Python className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="React">
                <React className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="PostgreSQL">
                <PostgreSQL className="h-4 w-4" />
              </IconTile>
            </div>
          </div>
        }
      />
      <div className="mt-5" />
      <ProjectCard
        title="Mapa de Grafos"
        media={<div className="h-16 w-40 bg-black" />}
        meta={
          <p className="text-sm text-black/70">
            Aplicación interactiva que muestra mapas, rutas óptimas y permite explorar datos
            mediante visualizaciones e IA.
          </p>
        }
        progressLabel="Progress"
        progressValue={100}
        actions={
          <div className="flex w-full flex-col gap-2 md:w-auto md:items-end">
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                Code
              </a>
              <a
                href="#"
                className="flex items-center gap-2 border border-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-black"
              >
                <LinkIcon className="h-3.5 w-3.5" />
                Preview
              </a>
            </div>
            <div className="flex items-center gap-1">
              <IconTile ariaLabel="Python">
                <Python className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="React">
                <React className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="Tailwind CSS">
                <TailwindCSS className="h-4 w-4" />
              </IconTile>
              <IconTile ariaLabel="shadcn/ui">
                <ShadcnUI className="h-4 w-4" />
              </IconTile>
            </div>
          </div>
        }
      />
    </SectionBody>
  );
}

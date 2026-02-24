import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ProfilePageCard } from "@/components/profile-page-card";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mateo Aleman - Work",
  description: "Recent projects and software engineering work",
};

export default function WorkPage() {
  return (
    <AppShell
      showFooter={false}
      contentClassName="flex-col items-center justify-start gap-6 pt-2 pb-6 md:pt-4 md:pb-10"
    >
      <div className="w-full max-w-[55.249245rem] px-4 md:px-0">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      <ProfilePageCard
        subtitle="Recent Projects & Work"
        className="border-0 bg-transparent shadow-none"
        contentClassName="p-0 sm:p-0"
      >
        <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:border-white/15 hover:bg-black/50 sm:p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-16 left-1/4 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute -bottom-10 right-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>

              <div className="relative w-full">
                <div className="flex min-h-full w-full flex-col items-start text-left">
                  <h3 className="mb-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mb-4 w-full text-sm leading-relaxed text-white/65 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mb-6 flex w-full flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      Preview Available
                    </span>
                  </div>

                  <div className="mt-auto flex w-full flex-wrap gap-3">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/10 hover:text-white sm:justify-start"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85 transition hover:border-white/30 hover:bg-white/10 hover:text-white sm:justify-start"
                    >
                      Preview
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ProfilePageCard>
    </AppShell>
  );
}

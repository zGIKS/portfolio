import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
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
          className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>

      <ProfilePageCard
        subtitle="Recent Projects & Work"
        contentClassName="p-0 sm:p-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={project.title}
              className={`group flex flex-col border-white/10 p-6 sm:p-8 transition-colors hover:bg-white/[0.02] ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index < PROJECTS.length - 2 ? "border-b" : "md:border-b-0"} ${
                index < PROJECTS.length - 1 ? "max-md:border-b" : ""
              }`}
            >
              <div className="relative mb-6 aspect-video overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ProfilePageCard>
    </AppShell>
  );
}

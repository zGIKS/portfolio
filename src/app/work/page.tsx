import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ProfilePageCard } from "@/components/profile-page-card";
import { ProjectAccordionList } from "@/components/work/project-accordion-list";
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
      <div className="w-full max-w-6xl px-4 md:px-0">
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
        className="border-0 bg-transparent shadow-none md:max-w-6xl"
        contentClassName="p-0 sm:p-0"
      >
        <ProjectAccordionList projects={PROJECTS} />
      </ProfilePageCard>
    </AppShell>
  );
}

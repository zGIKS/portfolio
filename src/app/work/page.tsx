import type { Metadata } from "next";
import { ProfileSectionLayout } from "@/components/profile-section-layout";
import { ProjectAccordionList } from "@/components/work/project-accordion-list";
import { PROJECTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mateo Aleman - Work",
  description: "Recent projects and software engineering work",
};

export default function WorkPage() {
  return (
    <ProfileSectionLayout
      backHref="/"
      backLabel="Back to Home"
      subtitle="Recent Projects & Work"
    >
      <ProjectAccordionList projects={PROJECTS} />
    </ProfileSectionLayout>
  );
}

import { Projects } from "./section2/projects";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { ProfilePageCard } from "./profile-page-card";

interface ProjectsCardProps {
  locale: Locale;
}

export function ProjectsCard({ locale }: ProjectsCardProps) {
  const t = getDictionary(locale);

  return (
    <ProfilePageCard subtitle={t.section2.titles.projects}>
      <Projects locale={locale} />
    </ProfilePageCard>
  );
}

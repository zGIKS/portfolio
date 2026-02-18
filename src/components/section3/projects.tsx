import { SidebarLink } from "./sidebar-link";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ProjectsProps {
  locale: Locale;
}

export function Projects({ locale }: ProjectsProps) {
  const t = getDictionary(locale);

  return (
    <SidebarLink
      locale={locale}
      href="projects"
      label={t.section2.titles.projects}
      count={4}
    />
  );
}

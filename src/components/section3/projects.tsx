import Link from "next/link";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ProjectsProps {
  locale: Locale;
}

export function Projects({ locale }: ProjectsProps) {
  const t = getDictionary(locale);

  return (
    <div className="mt-6 flex items-center gap-2 pl-4">
      <Link
        href={`/${locale}/projects`}
        className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
      >
        {t.section2.titles.projects}
      </Link>
      <span className="text-lg font-semibold text-foreground">4</span>
    </div>
  );
}

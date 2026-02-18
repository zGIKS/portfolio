import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { ProjectsCard } from "@/components/projects-card";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale);

  return {
    title: `Mateo Aleman - ${t.section2.titles.projects}`,
    description: "Projects and portfolio",
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const activeLocale: Locale = locale;

  return (
    <AppShell locale={activeLocale} contentClassName="py-0">
      <ProjectsCard locale={activeLocale} />
    </AppShell>
  );
}

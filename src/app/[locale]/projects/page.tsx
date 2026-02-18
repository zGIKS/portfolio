import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
    <main className="relative flex min-h-screen flex-col bg-background">
      <Header locale={activeLocale} />
      <div className="relative z-10 flex flex-1 justify-center px-0 py-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <ProjectsCard locale={activeLocale} />
      </div>
      <Footer locale={activeLocale} />
    </main>
  );
}

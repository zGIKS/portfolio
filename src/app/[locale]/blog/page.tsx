import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale);

  return {
    title: `Mateo Aleman - ${t.section2.titles.blog}`,
    description: "Blog posts and articles",
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const activeLocale: Locale = locale;
  const t = getDictionary(activeLocale);

  return (
    <AppShell locale={activeLocale} contentClassName="py-0">
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="text-3xl font-bold mb-4">{t.section2.titles.blog}</h1>
        <p className="text-muted-foreground text-lg">
          {activeLocale === "es" && "Próximamente..."}
          {activeLocale === "en" && "Coming soon..."}
          {activeLocale === "pt" && "Em breve..."}
        </p>
      </div>
    </AppShell>
  );
}

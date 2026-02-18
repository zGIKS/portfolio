import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { StackCard } from "@/components/stack-card";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface StackPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: StackPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale);

  return {
    title: `Mateo Aleman - ${t.section3.techStackTitle}`,
    description: "Full tech stack and technologies",
  };
}

export default async function StackPage({ params }: StackPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const activeLocale: Locale = locale;

  return (
    <AppShell locale={activeLocale} contentClassName="py-0">
      <StackCard locale={activeLocale} />
    </AppShell>
  );
}

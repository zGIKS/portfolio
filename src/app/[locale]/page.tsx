import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeCard } from "@/components/home-card";
import { AppShell } from "@/components/app-shell";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const descriptions: Record<Locale, string> = {
    en: "Portfolio of Mateo Aleman, a software engineering student based in Peru, specializing in backend systems, infrastructure, and security-critical services.",
    es: "Portafolio de Mateo Aleman, estudiante de ingeniería de software en Perú, especializado en sistemas backend, infraestructura y servicios críticos de seguridad.",
    pt: "Portfólio de Mateo Aleman, estudante de engenharia de software no Peru, especializado em sistemas backend, infraestrutura e serviços críticos de segurança.",
  };

  return {
    title: "Mateo Aleman - Software Engineer",
    description: descriptions[locale],
  };
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const activeLocale: Locale = locale;

  return (
    <AppShell locale={activeLocale} showBackground>
      <HomeCard locale={activeLocale} />
    </AppShell>
  );
}

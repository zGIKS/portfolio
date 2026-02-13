import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DesktopsCard } from "@/components/desktops-card";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface DesktopsPageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: DesktopsPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const t = getDictionary(locale);

  return {
    title: `Mateo Aleman - ${t.header.desktops}`,
    description: t.desktops.description,
  };
}

export default async function DesktopsPage({ params }: DesktopsPageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const activeLocale: Locale = locale;
  const t = getDictionary(locale);

  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <Header locale={activeLocale} />
      <div className="relative z-10 flex flex-1 justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)] py-8">
        <DesktopsCard locale={activeLocale} />
      </div>
      <Footer locale={activeLocale} />
    </main>
  );
}
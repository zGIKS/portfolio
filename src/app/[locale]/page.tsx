import { notFound } from "next/navigation";
import { HomeCard } from "@/components/home-card";
import { BackgroundSquare } from "@/components/background";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const activeLocale: Locale = locale;

  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <BackgroundSquare />
      <Header locale={activeLocale} />
      <div className="relative z-10 flex flex-1 justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <HomeCard locale={activeLocale} />
      </div>
      <Footer locale={activeLocale} />
    </main>
  );
}

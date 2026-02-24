import { getDictionary } from "@/lib/dictionaries";
import { type Locale } from "@/lib/i18n";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { ProfileHeader } from "./home/profile-header";
import { AboutSection } from "./home/about-section";
import { SocialLinks } from "./home/social-links";
import { NavigationMenu } from "./home/navigation-menu";

interface HomeCardProps {
  locale: Locale;
}

export function HomeCard({ locale }: HomeCardProps) {
  const t = getDictionary(locale);
  const aboutParagraphs = t.section2.about.paragraphs;
  const menuItems = NAVIGATION_ITEMS(t, locale);

  return (
    <section className="relative z-10 w-full px-4 py-6 md:px-0 md:py-12">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl shadow-black/40 backdrop-blur-xl md:backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative grid min-h-[calc(100vh-11rem)] gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col">
            <ProfileHeader countryLabel={t.section1.country} />

            <div className="mt-8 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

            <AboutSection paragraphs={aboutParagraphs} />

            <SocialLinks />
          </div>

          <NavigationMenu items={menuItems} title="Navigation" />
        </div>
      </div>
    </section>
  );
}

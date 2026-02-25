import { NAVIGATION_ITEMS } from "@/lib/constants";
import { ProfileHeader } from "./home/profile-header";
import { AboutSection } from "./home/about-section";
import { SocialLinks } from "./home/social-links";
import { NavigationMenu } from "./home/navigation-menu";

export function HomeCard() {
  const aboutParagraphs = [
    "Hi, I'm Mateo (aka giks)",
    "I build backend systems, secure APIs, and scalable microservices with a strong focus on architecture and performance. I enjoy designing clean system structures, working with distributed services, and exploring security-driven engineering."
  ];
  const menuItems = NAVIGATION_ITEMS();

  return (
    <section className="relative z-10 w-full px-4 py-4 md:px-0 md:py-4">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl">

        <div className="relative grid items-start gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col">
            <ProfileHeader />

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

import { NAVIGATION_ITEMS } from "@/lib/constants";
import { AboutSection } from "./home/about-section";
import { SocialLinks } from "./home/social-links";
import { NavigationMenu } from "./home/navigation-menu";
import { ProfilePageCard } from "./profile-page-card";

export function HomeCard() {
  const aboutParagraphs = [
    "Hi, I'm Mateo (aka giks), a 20-year-old Software Engineering student at UPC passionate about backend systems, security, and performance. I started exploring Linux out of curiosity—configuring, breaking, and fixing systems—which led me into backend development, infrastructure, and security-driven engineering. I enjoy building scalable microservices, designing clean architectures, and working with distributed systems, always focusing on efficiency and low-level understanding. I'm constantly learning through experimentation, especially around DevOps, reproducible environments like NixOS, and creating systems that are both robust and intentional."
  ];
  const menuItems = NAVIGATION_ITEMS();

  return (
    <section className="relative z-10 w-full px-4 py-4 md:px-0 md:py-4">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl">
        <div className="relative grid items-start gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col">
            <ProfilePageCard
              subtitle="Software Engineer"
              className="border-0 bg-transparent shadow-none"
              contentClassName="p-0 sm:p-0"
            >
              <div className="mt-4 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
              <AboutSection paragraphs={aboutParagraphs} />
              <SocialLinks />
            </ProfilePageCard>
          </div>

          <NavigationMenu items={menuItems} title="Navigation" />
        </div>
      </div>
    </section>
  );
}

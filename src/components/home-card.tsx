import { NAVIGATION_ITEMS } from "@/lib/constants";
import { ProfileHeader } from "./home/profile-header";
import { AboutSection } from "./home/about-section";
import { SocialLinks } from "./home/social-links";
import { NavigationMenu } from "./home/navigation-menu";

export function HomeCard() {
  const aboutParagraphs = [
    "Hi, I'm Mateo Aleman (aka giks).",
    "I am a Software Engineering student at the Peruvian University of Applied Sciences (UPC) in Lima, Peru. I am currently in my sixth semester and I specialize in backend systems development, microservices architecture, and security-focused services.",
    "I am passionate about designing and building systems from scratch, prioritizing security, scalability, and a low risk exposure level. I enjoy working in Linux environments and developing solutions that integrate infrastructure best practices, private networking, and Zero Trust principles.",
    "Throughout my training, I have worked on academic and technical projects such as educational platforms with distributed architecture, IAM systems built in Rust, financial applications, and graph analysis tools. I am especially interested in backend engineering, infrastructure, cybersecurity, and robust API design.",
    "Beyond coding, I enjoy constantly learning about software architecture, distributed systems, and cloud deployment optimization. I am motivated to build solutions that not only work, but are also well-designed and maintainable in the long term."
  ];
  const menuItems = NAVIGATION_ITEMS();

  return (
    <section className="relative z-10 w-full px-4 py-4 md:px-0 md:py-4">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl">

        <div className="relative grid items-start gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col">
            <ProfileHeader countryLabel="Peru" />

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

import { SectionBody } from "../section-shared/section-body";
import { cn, typography } from "@/lib/utils";

const experiences = [
  {
    title: "Technical Staff / Platform Moderation",
    period: "2021 - 2022",
    company: "Ghostly Network",
    subtitle: "Community Project | Trainee → Senior Moderator",
    highlights: [
      "User and chat monitoring; detection of unauthorized behaviors and application of sanctions.",
      "Supervision of anti-cheat systems and investigation of unauthorized software (modified clients, processes, DLLs).",
      "Technical support and transaction validation through ticket system.",
    ],
  },
  {
    title: "Web Developer (Freelance)",
    period: "2023 - Present",
    company: "Web Development for SMEs",
    highlights: [
      "Development and implementation of websites and landing pages for SMEs and local businesses.",
      "Application of responsive design, service-oriented structure and good usability practices.",
      "Implementation of security best practices and hardening, including review of port and service exposure in development and deployment environments (authorized basic tests).",
      "Secure deployment of applications using Cloudflare Tunnel, avoiding direct exposure of public IPs and ports.",
      "Internal communication between services through private VPN with Tailscale, reducing attack surface and improving isolation.",
      "Implementation and consumption of Azure Event Hub for asynchronous communication between services.",
      "Deployment and basic administration of virtual machines in Azure with Debian and Ubuntu.",
      "Post-delivery maintenance and technical support, with focus on stability and availability.",
    ],
  },
];

export function Experience() {
  return (
    <SectionBody>
      <div className="space-y-6 text-sm leading-relaxed text-black">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="border-l-2 border-black/15 pl-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className={cn(typography.h4, "text-base")}>{experience.title}</h3>
              <span className={cn(typography.small, "uppercase tracking-wide text-black/70")}>
                {experience.period}
              </span>
            </div>
            {experience.company && (
              <p className={cn(typography.muted, "mt-1 text-gray-600")}>{experience.company}</p>
            )}
            {experience.subtitle && (
              <p className={cn(typography.muted, "mt-1 text-gray-500")}>{experience.subtitle}</p>
            )}
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionBody>
  );
}

import { SectionBody } from "../section-shared/section-body";
import { type Locale } from "@/lib/i18n";

interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  subtitle?: string;
  highlights: string[];
}

const experiencesByLocale: Record<Locale, ExperienceItem[]> = {
  en: [
    {
      title: "Technical Staff / Platform Moderation",
      period: "2021 - 2022",
      company: "Ghostly Network",
      subtitle: "Community Project | Trainee -> Senior Moderator",
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
  ],
  es: [
    {
      title: "Staff Técnico / Moderación de Plataforma",
      period: "2021 - 2022",
      company: "Ghostly Network",
      subtitle: "Proyecto comunitario | Trainee -> Moderador Senior",
      highlights: [
        "Monitoreo de usuarios y chat; detección de comportamientos no autorizados y aplicación de sanciones.",
        "Supervisión de sistemas anti-cheat e investigación de software no autorizado (clientes modificados, procesos, DLLs).",
        "Soporte técnico y validación de transacciones mediante sistema de tickets.",
      ],
    },
    {
      title: "Desarrollador Web (Freelance)",
      period: "2023 - Presente",
      company: "Desarrollo Web para PYMEs",
      highlights: [
        "Desarrollo e implementación de sitios web y landing pages para PYMEs y negocios locales.",
        "Aplicación de diseño responsive, estructura orientada a servicios y buenas prácticas de usabilidad.",
        "Implementación de buenas prácticas de seguridad y hardening, incluyendo revisión de exposición de puertos y servicios en entornos de desarrollo y despliegue (pruebas básicas autorizadas).",
        "Despliegue seguro de aplicaciones usando Cloudflare Tunnel, evitando exposición directa de IPs y puertos públicos.",
        "Comunicación interna entre servicios mediante VPN privada con Tailscale, reduciendo superficie de ataque y mejorando el aislamiento.",
        "Implementación y consumo de Azure Event Hub para comunicación asíncrona entre servicios.",
        "Despliegue y administración básica de máquinas virtuales en Azure con Debian y Ubuntu.",
        "Mantenimiento post-entrega y soporte técnico, con enfoque en estabilidad y disponibilidad.",
      ],
    },
  ],
};

interface ExperienceProps {
  locale: Locale;
}

export function Experience({ locale }: ExperienceProps) {
  const experiences = experiencesByLocale[locale];

  return (
    <SectionBody>
      <div className="space-y-6 text-sm leading-relaxed text-card-foreground">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="border-l-2 border-border pl-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="scroll-m-20 text-base font-semibold tracking-tight">
                {experience.title}
              </h3>
              <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {experience.period}
              </span>
            </div>
            {experience.company && (
              <p className="mt-1 text-sm text-muted-foreground">
                {experience.company}
              </p>
            )}
            {experience.subtitle && (
              <p className="mt-1 text-sm text-muted-foreground/70">
                {experience.subtitle}
              </p>
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

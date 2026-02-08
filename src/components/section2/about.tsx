import { ContributionsChart } from "./contributions-chart/contributions-chart";
import { SectionBody } from "../section-shared/section-body";
import { ArchConfig } from "./arch-config";
import { type Locale } from "@/lib/i18n";

interface AboutProps {
  locale: Locale;
}

const aboutCopy = {
  en: {
    paragraphs: [
      "Hi I'm Mateo (aka giks).",
      "I'm a software engineering student based in Peru, focused on building backend systems, infrastructure, and security-critical services. I mainly work in Unix-like environments, using Arch Linux as my daily setup and Debian/Ubuntu for servers and production systems.",
      "I enjoy designing systems from the ground up, with an emphasis on reliability, security, and clear architecture. My work often involves backend services, identity and access management, and infrastructure that prioritizes low attack surface and scalability.",
      "Some of the areas and projects I've worked on include:",
      "I'm especially interested in backend platform engineering, infrastructure, and security-focused roles, where system design and long-term maintainability matter.",
    ],
    bullets: [
      "Backend services and microservices, including IAM and authentication systems",
      "API gateways and event-driven architectures",
      "Secure web platforms used in real academic and small-business contexts",
      "Educational platforms used by 150+ students",
      "Rust-based services with a strong focus on correctness and security",
    ],
  },
  es: {
    paragraphs: [
      "Hola, soy Mateo (aka giks).",
      "Soy estudiante de ingeniería de software en Perú, enfocado en construir sistemas backend, infraestructura y servicios críticos para seguridad. Trabajo principalmente en entornos tipo Unix, usando Arch Linux en mi entorno diario y Debian/Ubuntu para servidores y producción.",
      "Disfruto diseñar sistemas desde cero, con énfasis en confiabilidad, seguridad y arquitectura clara. Mi trabajo suele involucrar servicios backend, gestión de identidad y accesos, e infraestructura que prioriza una baja superficie de ataque y escalabilidad.",
      "Algunas áreas y proyectos en los que he trabajado:",
      "Me interesan especialmente roles de backend platform engineering, infraestructura y seguridad, donde el diseño de sistemas y la mantenibilidad a largo plazo importan.",
    ],
    bullets: [
      "Servicios backend y microservicios, incluyendo IAM y sistemas de autenticación",
      "API gateways y arquitecturas orientadas a eventos",
      "Plataformas web seguras usadas en contextos académicos y de pequeños negocios",
      "Plataformas educativas usadas por más de 150 estudiantes",
      "Servicios en Rust con fuerte enfoque en corrección y seguridad",
    ],
  },
} as const;

export function About({ locale }: AboutProps) {
  const copy = aboutCopy[locale];

  return (
    <SectionBody>
      <div className="space-y-4 text-sm leading-relaxed text-card-foreground">
        <p>{copy.paragraphs[0]}</p>
        <p>{copy.paragraphs[1]}</p>
        <p>{copy.paragraphs[2]}</p>
        <p>{copy.paragraphs[3]}</p>
        <ul className="list-disc space-y-2 pl-5">
          {copy.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p>{copy.paragraphs[4]}</p>
      </div>
      <div className="mt-8 bg-primary px-3 py-2 text-primary-foreground">
        <div className="w-full max-w-full overflow-hidden">
          <ContributionsChart locale={locale} />
        </div>
      </div>
      <ArchConfig />
    </SectionBody>
  );
}

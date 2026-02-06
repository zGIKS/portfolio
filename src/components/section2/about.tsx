import { ContributionsChart } from "./contributions-chart/contributions-chart";
import { SectionBody } from "../section-shared/section-body";
import { cn, typography } from "@/lib/utils";

export function About() {
  return (
    <SectionBody>
      <div className="space-y-4 leading-relaxed text-black">
        <p className={cn(typography.p, "mt-0")}>Hi 👋🏼 I'm Dante Mateo Alemán Romano (aka giks).</p>
        <p className={typography.p}>
          I'm a software engineering student based in Peru, focused on building
          backend systems, infrastructure, and security-critical services. I
          mainly work in Unix-like environments, using Arch Linux as my daily
          setup and Debian/Ubuntu for servers and production systems.
        </p>
        <p className={typography.p}>
          I enjoy designing systems from the ground up, with an emphasis on
          reliability, security, and clear architecture. My work often involves
          backend services, identity and access management, and infrastructure
          that prioritizes low attack surface and scalability.
        </p>
        <p className={typography.p}>Some of the areas and projects I've worked on include:</p>
        <ul className={cn(typography.ul, "space-y-2")}>
          <li>Backend services and microservices, including IAM and authentication systems</li>
          <li>API gateways and event-driven architectures</li>
          <li>Secure web platforms used in real academic and small-business contexts</li>
          <li>Educational platforms used by 150+ students</li>
          <li>Rust-based services with a strong focus on correctness and security</li>
        </ul>
        <p className={typography.p}>
          I'm especially interested in backend platform engineering,
          infrastructure, and security-focused roles, where system design and
          long-term maintainability matter.
        </p>
      </div>
      <div className="mt-8 bg-black/95 p-4 text-white">
        <div className="w-full max-w-full overflow-hidden">
          <ContributionsChart />
        </div>
      </div>
    </SectionBody>
  );
}

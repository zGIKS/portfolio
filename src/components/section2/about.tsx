import { ContributionsChart } from "./contributions-chart/contributions-chart";
import { SectionBody } from "../section-shared/section-body";

export function About() {
  return (
    <SectionBody>
      <div className="space-y-4 text-sm leading-relaxed text-card-foreground">
        <p>Hi I&apos;m Mateo (aka giks).</p>
        <p>
          I&apos;m a software engineering student based in Peru, focused on building
          backend systems, infrastructure, and security-critical services. I
          mainly work in Unix-like environments, using Arch Linux as my daily
          setup and Debian/Ubuntu for servers and production systems.
        </p>
        <p>
          I enjoy designing systems from the ground up, with an emphasis on
          reliability, security, and clear architecture. My work often involves
          backend services, identity and access management, and infrastructure
          that prioritizes low attack surface and scalability.
        </p>
        <p>Some of the areas and projects I&apos;ve worked on include:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Backend services and microservices, including IAM and authentication systems</li>
          <li>API gateways and event-driven architectures</li>
          <li>Secure web platforms used in real academic and small-business contexts</li>
          <li>Educational platforms used by 150+ students</li>
          <li>Rust-based services with a strong focus on correctness and security</li>
        </ul>
        <p>
          I&apos;m especially interested in backend platform engineering,
          infrastructure, and security-focused roles, where system design and
          long-term maintainability matter.
        </p>
      </div>
      <div className="mt-8 bg-primary px-3 py-2 text-primary-foreground">
        <div className="w-full max-w-full overflow-hidden">
          <ContributionsChart />
        </div>
      </div>
    </SectionBody>
  );
}

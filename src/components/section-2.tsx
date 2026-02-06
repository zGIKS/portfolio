import { About } from "./section2/about";
import { Experience } from "./section2/experience";
import { Projects } from "./section2/projects";
import { SectionHeader } from "./section-shared/section-header";

export function Section2() {
  return (
    <section className="min-h-screen min-w-0 flex-1 bg-white text-white">
      <div className="pt-6">
        <SectionHeader title="About" variant="bar" />
        <About />
      </div>
      <div className="pt-6">
        <SectionHeader title="Experience" variant="bar" />
        <Experience />
      </div>
      <div className="pt-6">
        <SectionHeader title="Projects" variant="bar" />
        <Projects />
      </div>
    </section>
  );
}

import { CardContent } from "@/components/ui/card";
import { About } from "./section2/about";
import { Experience } from "./section2/experience";
import { Education } from "./section2/education";
import { Projects } from "./section2/projects";
import { SectionHeader } from "./section-shared/section-header";

export function Section2() {
  return (
    <CardContent className="min-w-0 flex-1 bg-card p-0 backdrop-blur-md md:min-h-full">
      <div className="pt-6">
        <SectionHeader title="About" variant="bar" />
        <About />
      </div>
      <div className="pt-6">
        <SectionHeader title="Experience" variant="bar" />
        <Experience />
      </div>
      <div className="pt-6">
        <SectionHeader title="Education" variant="bar" />
        <Education />
      </div>
      <div className="pt-6">
        <SectionHeader title="Projects" variant="bar" />
        <Projects />
      </div>
    </CardContent>
  );
}

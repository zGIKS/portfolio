import { CardContent } from "@/components/ui/card";
import { About } from "./section2/about";
import { Experience } from "./section2/experience";
import { Education } from "./section2/education";
import { Projects } from "./section2/projects";
import { SectionHeader } from "./section-shared/section-header";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface Section2Props {
  locale: Locale;
}

export function Section2({ locale }: Section2Props) {
  const titles = getDictionary(locale).section2.titles;

  return (
    <CardContent className="min-w-0 flex-1 bg-card p-0 backdrop-blur-md md:min-h-full">
      <div className="pt-6">
        <SectionHeader title={titles.about} variant="bar" />
        <About locale={locale} />
      </div>
      <div className="pt-6">
        <SectionHeader title={titles.experience} variant="bar" />
        <Experience locale={locale} />
      </div>
      <div className="pt-6">
        <SectionHeader title={titles.education} variant="bar" />
        <Education locale={locale} />
      </div>
      <div className="pt-6">
        <SectionHeader title={titles.projects} variant="bar" />
        <Projects locale={locale} />
      </div>
    </CardContent>
  );
}

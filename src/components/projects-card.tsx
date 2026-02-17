import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Projects } from "./section2/projects";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ProjectsCardProps {
  locale: Locale;
}

export function ProjectsCard({ locale }: ProjectsCardProps) {
  const t = getDictionary(locale);

  return (
    <Card className="relative z-20 w-full border-white/10 bg-black/30 backdrop-blur-md md:w-[min(100%,900px)]">
      <CardHeader className="border-b border-white/10">
        <CardTitle className="text-xl">{t.section2.titles.projects}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Projects locale={locale} />
      </CardContent>
    </Card>
  );
}

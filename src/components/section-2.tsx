import { CardContent } from "@/components/ui/card";
import { About } from "./section2/about";
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
    </CardContent>
  );
}

import { CardContent } from "@/components/ui/card";
import { CurrentOnline } from "./section3/time-zone";
import { Links } from "./section3/social";
import { Stack } from "./section3/stack";
import { Projects } from "./section3/projects";
import { Blog } from "./section3/blog";
import { Resume } from "./section3/resume";
import { type Locale } from "@/lib/i18n";

interface Section3Props {
  locale: Locale;
}

export function Section3({ locale }: Section3Props) {
  return (
    <CardContent className="w-full bg-secondary p-0 text-secondary-foreground backdrop-blur-md md:min-h-full md:w-[13.875rem]">
      <div className="pt-6 pb-6 md:pb-0">
        <CurrentOnline locale={locale} />
        <Projects locale={locale} />
        <Stack locale={locale} />
        <Resume />
        <Blog locale={locale} />
        <Links locale={locale} />
      </div>
    </CardContent>
  );
}

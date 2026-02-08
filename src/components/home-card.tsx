import { Card } from "@/components/ui/card";
import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
import { Section3 } from "./section-3";
import { type Locale } from "@/lib/i18n";

interface HomeCardProps {
  locale: Locale;
}

export function HomeCard({ locale }: HomeCardProps) {
  return (
    <Card className="relative z-10 w-full gap-0 overflow-hidden rounded-none border border-white/10 bg-white/5 p-0 text-card-foreground shadow-xl backdrop-blur-xl md:max-w-[55.249245rem] md:rounded-xl">
      <Section1 locale={locale} />
      <div className="flex w-full flex-1 flex-col-reverse md:flex-row">
        <Section2 locale={locale} />
        <Section3 locale={locale} />
      </div>
    </Card>
  );
}

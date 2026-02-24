import { CardHeader } from "@/components/ui/card";
import { Photo } from "./profile/photo";
import { NameAndCountry } from "./profile/name-country";
import { type Locale } from "@/lib/i18n";

interface Section1Props {
  locale: Locale;
}

export function Section1({ locale }: Section1Props) {
  return (
    <CardHeader className="flex w-full flex-col gap-6 bg-muted px-6 py-6 backdrop-blur-md md:flex-row md:items-center md:pl-10">
      <div className="flex items-center gap-4">
        <Photo />
        <NameAndCountry locale={locale} />
      </div>
    </CardHeader>
  );
}

import { PeruFlag } from "../icons/peru";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface NameAndCountryProps {
  locale: Locale;
}

export function NameAndCountry({ locale }: NameAndCountryProps) {
  const countryLabel = getDictionary(locale).section1.country;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className="scroll-m-20 text-xl font-semibold tracking-tight text-card-foreground">
          giks
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Mateo Aleman</span>
        <PeruFlag className="h-3 w-4" />
        <span>{countryLabel}</span>
      </div>
    </div>
  );
}

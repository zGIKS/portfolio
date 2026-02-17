import { ContributionsChart } from "./contributions-chart/contributions-chart";
import { SectionBody } from "../section-shared/section-body";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface AboutProps {
  locale: Locale;
}

export function About({ locale }: AboutProps) {
  const copy = getDictionary(locale).section2.about;

  return (
    <SectionBody>
      <div className="space-y-4 text-sm leading-relaxed text-card-foreground">
        <p>{copy.paragraphs[0]}</p>
        <p>{copy.paragraphs[1]}</p>
        <p>{copy.paragraphs[2]}</p>
        <p>{copy.paragraphs[3]}</p>
        <ul className="list-disc space-y-2 pl-5">
          {copy.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p>{copy.paragraphs[4]}</p>
      </div>
      <div className="mt-8">
        <div className="w-full">
          <ContributionsChart locale={locale} />
        </div>
      </div>
    </SectionBody>
  );
}

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
        {copy.paragraphs.map((paragraph, index) => (
          <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
        ))}
        {copy.bullets.length > 0 ? (
          <ul className="list-disc space-y-2 pl-5">
            {copy.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="mt-8">
        <div className="w-full">
          <ContributionsChart locale={locale} />
        </div>
      </div>
    </SectionBody>
  );
}

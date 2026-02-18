import { ContributionsChart } from "./contributions-chart/contributions-chart";
import { SectionBody } from "../section-shared/section-body";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface AboutProps {
  locale: Locale;
}

export function About({ locale }: AboutProps) {
  const dictionary = getDictionary(locale);
  const copy = dictionary.section2.about;
  const contributionsTitle = dictionary.contributions.title;

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
        <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {contributionsTitle}
        </h3>
        <div className="w-full md:w-[90%]">
          <ContributionsChart locale={locale} />
        </div>
      </div>
    </SectionBody>
  );
}

import { SectionBody } from "../section-shared/section-body";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ExperienceProps {
  locale: Locale;
}

export function Experience({ locale }: ExperienceProps) {
  const experiences = getDictionary(locale).section2.experience;

  return (
    <SectionBody>
      <div className="space-y-6 text-sm leading-relaxed text-card-foreground">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="border-l-2 border-border pl-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="scroll-m-20 text-base font-semibold tracking-tight">
                {experience.title}
              </h3>
              <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {experience.period}
              </span>
            </div>
            {experience.company && (
              <p className="mt-1 text-sm text-muted-foreground">
                {experience.company}
              </p>
            )}
            {experience.subtitle && (
              <p className="mt-1 text-sm text-muted-foreground/70">
                {experience.subtitle}
              </p>
            )}
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionBody>
  );
}

import { SectionBody } from "../section-shared/section-body";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface EducationProps {
  locale: Locale;
}

export function Education({ locale }: EducationProps) {
  const education = getDictionary(locale).section2.education;

  return (
    <SectionBody>
      <div className="space-y-6 text-sm leading-relaxed text-card-foreground">
        {education.map((item) => (
          <div key={item.institution} className="border-l-2 border-border pl-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="scroll-m-20 text-base font-semibold tracking-tight">
                {item.program}
              </h3>
              {item.period ? (
                <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {item.period}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.institution} - {item.location}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionBody>
  );
}

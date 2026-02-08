import { SectionBody } from "../section-shared/section-body";
import { type Locale } from "@/lib/i18n";

const educationByLocale = {
  en: [
    {
      institution: "Peruvian University of Applied Sciences (UPC)",
      location: "San Isidro, Peru",
      program: "Software Engineering (6th Semester)",
      period: "2023 - Present",
      details: [
        "Training in software development, data structures, algorithms, and systems architecture.",
        "Participation in collaborative academic projects focused on web and backend applications.",
      ],
    },
    {
      institution: "Davy College",
      location: "Cajamarca, Peru",
      program: "International Baccalaureate (IB)",
      period: "",
      details: [
        "Pre-university training focused on critical thinking, research, and problem-solving.",
        "Development of analytical skills, rigorous academic work, and interdisciplinary projects.",
      ],
    },
  ],
  es: [
    {
      institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      location: "San Isidro, Perú",
      program: "Ingeniería de Software (Sexto ciclo)",
      period: "2023 - Presente",
      details: [
        "Formación en desarrollo de software, estructuras de datos, algoritmos y arquitectura de sistemas.",
        "Participación en proyectos académicos colaborativos orientados a aplicaciones web y backend.",
      ],
    },
    {
      institution: "Davy College",
      location: "Cajamarca, Perú",
      program: "Bachillerato Internacional (IB - International Baccalaureate)",
      period: "",
      details: [
        "Formación preuniversitaria con enfoque en pensamiento crítico, investigación y resolución de problemas.",
        "Desarrollo de habilidades analíticas, trabajo académico riguroso y proyectos interdisciplinarios.",
      ],
    },
  ],
} as const;

interface EducationProps {
  locale: Locale;
}

export function Education({ locale }: EducationProps) {
  const education = educationByLocale[locale];

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

import { ProgrammingLanguages } from "./programming-languages";
import { FrontendUI } from "./frontend-ui";
import { DatabasesStorage } from "./databases-storage";
import { DevOpsCloud } from "./devops-cloud";
import { type Locale } from "@/lib/i18n";

interface StackProps {
  locale: Locale;
}

export function Stack({ locale }: StackProps) {
  return (
    <>
      <ProgrammingLanguages locale={locale} />
      <FrontendUI locale={locale} />
      <DatabasesStorage locale={locale} />
      <DevOpsCloud locale={locale} />
    </>
  );
}

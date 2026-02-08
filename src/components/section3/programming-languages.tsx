import { Go } from "../icons/stack/languages/go";
import { Rust } from "../icons/stack/languages/rust";
import { Java } from "../icons/stack/languages/java";
import { Python } from "../icons/stack/languages/python";
import { TypeScript } from "../icons/stack/languages/typescript";
import { JavaScript } from "../icons/stack/languages/javascript";
import { IconTile } from "./icon-tile";
import { SectionHeader } from "../section-shared/section-header";
import { IconGrid } from "../section-shared/icon-grid";
import { type Locale } from "@/lib/i18n";

interface ProgrammingLanguagesProps {
  locale: Locale;
}

export function ProgrammingLanguages({ locale }: ProgrammingLanguagesProps) {
  const title = locale === "es" ? "Lenguajes" : "Languages";

  return (
    <>
      <SectionHeader title={title} count={6} className="mt-6" />
      <IconGrid>
        <IconTile ariaLabel="Go" href="https://go.dev/doc/">
          <Go className="h-4 w-4 text-[#00ADD8]" />
        </IconTile>
        <IconTile ariaLabel="Rust" className="text-foreground" href="https://doc.rust-lang.org/">
          <Rust className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Java" href="https://docs.oracle.com/en/java/">
          <Java className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Python" href="https://docs.python.org/">
          <Python className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="TypeScript" href="https://www.typescriptlang.org/docs/">
          <TypeScript className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <JavaScript className="h-4 w-4" />
        </IconTile>
      </IconGrid>
    </>
  );
}

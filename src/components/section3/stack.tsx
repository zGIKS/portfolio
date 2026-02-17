import Link from "next/link";
import { Go } from "../icons/stack/languages/go";
import { Rust } from "../icons/stack/languages/rust";
import { Java } from "../icons/stack/languages/java";
import { Python } from "../icons/stack/languages/python";
import { IconTile } from "./icon-tile";
import { IconGrid } from "../section-shared/icon-grid";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface StackProps {
  locale: Locale;
}

export function Stack({ locale }: StackProps) {
  const t = getDictionary(locale);

  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4">
        <Link
          href={`/${locale}/stack`}
          className="text-sm font-medium uppercase tracking-wide text-foreground hover:text-muted-foreground transition-colors"
        >
          {t.section3.techStackTitle}
        </Link>
        <span className="text-lg font-semibold text-muted-foreground">23</span>
      </div>
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
      </IconGrid>
    </>
  );
}

import { Go } from "../icons/stack/languages/go";
import { Rust } from "../icons/stack/languages/rust";
import { Java } from "../icons/stack/languages/java";
import { Python } from "../icons/stack/languages/python";
import { IconTile } from "./icon-tile";
import { IconGrid } from "../section-shared/icon-grid";
import { SidebarLink } from "./sidebar-link";
import { allStackItems } from "@/lib/stack-data";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface StackProps {
  locale: Locale;
}

export function Stack({ locale }: StackProps) {
  const t = getDictionary(locale);

  return (
    <>
      <SidebarLink
        locale={locale}
        href="stack"
        label={t.section3.techStackTitle}
        count={allStackItems.length}
      />
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

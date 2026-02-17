import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";

import { IconTile } from "./icon-tile";
import { SectionHeader } from "../section-shared/section-header";
import { IconGrid } from "../section-shared/icon-grid";
import { CopyEmailTile } from "./copy-email-tile";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface LinksProps {
  locale: Locale;
}

export function Links({ locale }: LinksProps) {
  const title = getDictionary(locale).section3.linksTitle;

  return (
    <>
      <SectionHeader title={title} count={3} />
      <IconGrid>
        <IconTile ariaLabel="LinkedIn">
          <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
        </IconTile>
        <IconTile
          ariaLabel="GitHub"
          tooltipLabel="@zGIKS"
          className="text-foreground"
          href="https://github.com/zGIKS"
        >
          <GithubIcon className="h-4 w-4" />
        </IconTile>


        <CopyEmailTile locale={locale} />
      </IconGrid>

    </>
  );
}

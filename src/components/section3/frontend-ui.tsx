import { React } from "../icons/stack/frontend/react";
import { Nextjs } from "../icons/stack/frontend/nextjs";
import { TailwindCSS } from "../icons/stack/frontend/tailwind";
import { RadixUI } from "../icons/stack/frontend/radixui";
import { ShadcnUI } from "../icons/stack/frontend/shadcn";
import { IconTile } from "./icon-tile";
import { SectionHeader } from "../section-shared/section-header";
import { IconGrid } from "../section-shared/icon-grid";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface FrontendUIProps {
  locale: Locale;
}

export function FrontendUI({ locale }: FrontendUIProps) {
  const title = getDictionary(locale).section3.frontendTitle;

  return (
    <>
      <SectionHeader title={title} count={5} className="mt-6" />
      <IconGrid>
        <IconTile ariaLabel="React" href="https://react.dev/">
          <React className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Next.js" href="https://nextjs.org/docs">
          <Nextjs className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Tailwind CSS" href="https://tailwindcss.com/docs">
          <TailwindCSS className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Radix UI" href="https://www.radix-ui.com/">
          <RadixUI className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="shadcn/ui" href="https://ui.shadcn.com/">
          <ShadcnUI className="h-4 w-4" />
        </IconTile>
      </IconGrid>
    </>
  );
}

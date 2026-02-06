import { React } from "../icons/stack/react";
import { Nextjs } from "../icons/stack/nextjs";
import { TailwindCSS } from "../icons/stack/tailwind";
import { RadixUI } from "../icons/stack/radixui";
import { ShadcnUI } from "../icons/stack/shadcn";
import { IconTile } from "./icon-tile";

export function FrontendUI() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Frontend</span>
        <span className="text-base font-semibold text-black">5</span>
      </div>
      <div className="mt-3 flex gap-1 px-4 md:grid md:grid-cols-4 md:gap-2">
        <IconTile ariaLabel="React">
          <React className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Next.js">
          <Nextjs className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Tailwind CSS">
          <TailwindCSS className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Radix UI">
          <RadixUI className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="shadcn/ui">
          <ShadcnUI className="h-4 w-4" />
        </IconTile>
      </div>
    </>
  );
}
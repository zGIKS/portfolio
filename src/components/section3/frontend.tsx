import { Nextjs } from "../icons/frontend/nextjs";
import { RadixUI } from "../icons/frontend/radixui";
import { React } from "../icons/frontend/react";
import { ShadcnUI } from "../icons/frontend/shadcn";
import { TailwindCSS } from "../icons/frontend/tailwind";
import { IconTile } from "./icon-tile";

export function Frontend() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Frontend</span>
        <span className="text-base font-semibold text-black">5</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 px-4">
        <IconTile ariaLabel="Next.js">
          <Nextjs className="h-5 w-5 text-black" />
        </IconTile>
        <IconTile ariaLabel="Radix UI">
          <RadixUI className="h-5 w-5 text-black" />
        </IconTile>
        <IconTile ariaLabel="React">
          <React className="h-5 w-5 text-[#61DAFB]" />
        </IconTile>
        <IconTile ariaLabel="shadcn/ui" className="text-black">
          <ShadcnUI className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Tailwind CSS">
          <TailwindCSS className="h-5 w-5 text-[#38BDF8]" />
        </IconTile>
      </div>
    </>
  );
}

import { ArchIcon } from "../icons/stack/arch";
import { MicrosoftAzure } from "../icons/stack/azure";
import { C as Cpp } from "../icons/stack/cpp";
import { DebianIcon } from "../icons/stack/debian";
import { Docker } from "../icons/stack/docker";
import { Go } from "../icons/stack/go";
import { GoogleCloud } from "../icons/stack/googlecloud";
import { Java } from "../icons/stack/java";
import { JavaScript } from "../icons/stack/javascript";
import { Nextjs } from "../icons/stack/nextjs";
import { PostgreSQL } from "../icons/stack/postgresql";
import { Python } from "../icons/stack/python";
import { RadixUI } from "../icons/stack/radixui";
import { React } from "../icons/stack/react";
import { Redis } from "../icons/stack/redis";
import { Rust } from "../icons/stack/rust";
import { ShadcnUI } from "../icons/stack/shadcn";
import { TailwindCSS } from "../icons/stack/tailwind";
import { TypeScript } from "../icons/stack/typescript";
import { UbuntuIcon } from "../icons/stack/ubuntu";
import { IconTile } from "./icon-tile";

export function Stack() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Stack</span>
        <span className="text-base font-semibold text-black">20</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 px-4">
        <IconTile ariaLabel="Arch Linux">
          <ArchIcon className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Debian">
          <DebianIcon className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Ubuntu">
          <UbuntuIcon className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Docker">
          <Docker className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Microsoft Azure">
          <MicrosoftAzure className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Google Cloud">
          <GoogleCloud className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="PostgreSQL">
          <PostgreSQL className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Redis">
          <Redis className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Go">
          <Go className="h-5 w-5 text-[#00ADD8]" />
        </IconTile>
        <IconTile ariaLabel="Rust" className="text-black">
          <Rust className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Java">
          <Java className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="C++">
          <Cpp className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Python">
          <Python className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="TypeScript">
          <TypeScript className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="JavaScript">
          <JavaScript className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="React">
          <React className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Next.js">
          <Nextjs className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Tailwind CSS">
          <TailwindCSS className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="Radix UI">
          <RadixUI className="h-5 w-5" />
        </IconTile>
        <IconTile ariaLabel="shadcn/ui">
          <ShadcnUI className="h-5 w-5" />
        </IconTile>
      </div>
    </>
  );
}

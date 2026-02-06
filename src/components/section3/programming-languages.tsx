import { Go } from "../icons/stack/go";
import { Rust } from "../icons/stack/rust";
import { Java } from "../icons/stack/java";
import { Python } from "../icons/stack/python";
import { TypeScript } from "../icons/stack/typescript";
import { JavaScript } from "../icons/stack/javascript";
import { IconTile } from "./icon-tile";

export function ProgrammingLanguages() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Languages</span>
        <span className="text-base font-semibold text-black">6</span>
      </div>
      <div className="mt-3 flex gap-1 px-4 md:grid md:grid-cols-4 md:gap-2">
        <IconTile ariaLabel="Go">
          <Go className="h-4 w-4 text-[#00ADD8]" />
        </IconTile>
        <IconTile ariaLabel="Rust" className="text-black">
          <Rust className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Java">
          <Java className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="Python">
          <Python className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="TypeScript">
          <TypeScript className="h-4 w-4" />
        </IconTile>
        <IconTile ariaLabel="JavaScript">
          <JavaScript className="h-4 w-4" />
        </IconTile>
      </div>
    </>
  );
}

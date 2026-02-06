import { C as Cpp } from "../icons/languages/cpp";
import { Go } from "../icons/languages/go";
import { Java } from "../icons/languages/java";
import { JavaScript } from "../icons/languages/javascript";
import { Python } from "../icons/languages/python";
import { Rust } from "../icons/languages/rust";
import { TypeScript } from "../icons/languages/typescript";
import { IconTile } from "./icon-tile";

export function Languages() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Languages</span>
        <span className="text-base font-semibold text-black">7</span>
      </div>
      <div className="mt-3 grid grid-cols-4 gap-2 px-4">
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
      </div>
    </>
  );
}

import { Go } from "../icons/stack/languages/go";
import { Rust } from "../icons/stack/languages/rust";
import { Java } from "../icons/stack/languages/java";
import { Python } from "../icons/stack/languages/python";
import { TypeScript } from "../icons/stack/languages/typescript";
import { JavaScript } from "../icons/stack/languages/javascript";
import { IconTile } from "./icon-tile";

export function ProgrammingLanguages() {
  return (
    <>
      <div className="mt-6 flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
        <span>Languages</span>
        <span className="text-base font-semibold text-black">6</span>
      </div>
      <div className="mt-3 flex gap-1 px-4 md:grid md:grid-cols-4 md:gap-2">
        <IconTile ariaLabel="Go" href="https://go.dev/doc/">
          <Go className="h-4 w-4 text-[#00ADD8]" />
        </IconTile>
        <IconTile ariaLabel="Rust" className="text-black" href="https://doc.rust-lang.org/">
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
      </div>
    </>
  );
}

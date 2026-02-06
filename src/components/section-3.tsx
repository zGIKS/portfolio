import { GithubIcon } from "./icons/github";
import { LinkedinIcon } from "./icons/linkedin";
import { XIcon } from "./icons/x";
import { YoutubeIcon } from "./icons/youtube";

export function Section3() {
  return (
    <section className="min-h-screen w-32 bg-gray-200 text-black md:w-[13.875rem]">
      <div className="pt-6">
        <div className="mb-4 py-2 pl-4 text-sm font-medium uppercase tracking-wide text-cyan-600">
          Currently Online
        </div>
        <div className="flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
          <span>Links</span>
          <span className="text-base font-semibold text-black">4</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 px-4">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center bg-black text-white"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center bg-black text-white"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center bg-black text-white"
            aria-label="Twitter"
          >
            <XIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center bg-black text-white"
            aria-label="YouTube"
          >
            <YoutubeIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

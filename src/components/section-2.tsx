import { About } from "./section2/about";
import { Experience } from "./section2/experience";

export function Section2() {
  return (
    <section className="min-h-screen min-w-0 flex-1 bg-white text-white">
      <div className="pt-6">
        <div className="w-full bg-black py-2 pl-6 pr-4 text-sm font-medium uppercase tracking-wide text-white md:pl-10">
          About
        </div>
        <About />
      </div>
      <div className="pt-6">
        <div className="w-full bg-black py-2 pl-6 pr-4 text-sm font-medium uppercase tracking-wide text-white md:pl-10">
          Experience
        </div>
        <Experience />
      </div>
    </section>
  );
}

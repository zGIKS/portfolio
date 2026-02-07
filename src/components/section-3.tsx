import { CurrentOnline } from "./section3/time-zone";
import { Links } from "./section3/social";
import { Stack } from "./section3/stack";

export function Section3() {
  return (
    <section className="w-full bg-gray-200 text-black md:w-[13.875rem] md:min-h-full">
      <div className="pt-6">
        <CurrentOnline />
        <Links />
        <Stack />
      </div>
    </section>
  );
}

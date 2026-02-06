import { Photo } from "./profile/photo";
import { NameAndCountry } from "./profile/name-country";
import { Level } from "./profile/level";
import { ArbiComponent } from "./profile/arbi";

export function Section1() {
  return (
    <section className="flex w-full flex-col gap-6 bg-muted py-6 pl-6 pr-0 text-card-foreground md:flex-row md:items-center md:justify-between md:pl-10 md:pr-0">
      <div className="flex items-center gap-4">
        <Photo />
        <NameAndCountry />
      </div>

      <div className="flex flex-row items-start gap-3 md:flex-col md:w-[13.875rem]">
        <Level />
        <ArbiComponent />
      </div>
    </section>
  );
}

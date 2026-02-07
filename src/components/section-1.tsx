import { CardHeader } from "@/components/ui/card";
import { Photo } from "./profile/photo";
import { NameAndCountry } from "./profile/name-country";
import { Level } from "./profile/level";
import { ArbiComponent } from "./profile/arbi";

export function Section1() {
  return (
    <CardHeader className="flex w-full flex-col gap-6 bg-muted px-6 py-6 backdrop-blur-md md:flex-row md:items-center md:justify-between md:pl-10 md:pr-0">
      <div className="flex items-center gap-4">
        <Photo />
        <NameAndCountry />
      </div>

      <div className="flex flex-row items-start gap-3 md:w-[13.875rem] md:flex-col">
        <Level />
        <ArbiComponent />
      </div>
    </CardHeader>
  );
}

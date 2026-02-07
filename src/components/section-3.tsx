import { CardContent } from "@/components/ui/card";
import { CurrentOnline } from "./section3/time-zone";
import { Links } from "./section3/social";
import { Stack } from "./section3/stack";

export function Section3() {
  return (
    <CardContent className="w-full bg-secondary p-0 text-secondary-foreground backdrop-blur-md md:min-h-full md:w-[13.875rem]">
      <div className="pt-6">
        <CurrentOnline />
        <Links />
        <Stack />
      </div>
    </CardContent>
  );
}

import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
import { Section3 } from "./section-3";

export function HomeCard() {
  return (
    <div className="min-h-screen w-full bg-black text-white shadow-xl md:max-w-[55.249245rem]">
      <Section1 />
      <div className="flex w-full pl-6 md:pl-10">
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
import { Section3 } from "./section-3";

export function HomeCard() {
  return (
    <div className="relative z-10 flex w-full flex-col bg-black text-white shadow-xl md:max-w-[55.249245rem]">
      <Section1 />
      <div className="flex w-full flex-1 flex-col-reverse md:flex-row">
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

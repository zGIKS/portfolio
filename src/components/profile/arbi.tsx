import { Arbi } from "../icons/arbi";

export function ArbiComponent() {
  return (
    <div className="w-full bg-black px-4 py-3 h-[58px]">
      <div className="flex items-center justify-center gap-3 md:justify-start">
        <Arbi className="h-10 w-10 shrink-0" />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold text-white">1.º Arbimaster</span>
          <span className="text-xs text-white">2035 XP</span>
        </div>
      </div>
    </div>
  );
}
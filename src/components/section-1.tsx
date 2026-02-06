import { Arbi } from "./icons/arbi";
import { PeruFlag } from "./icons/peru";

export function Section1() {
  return (
    <section className="flex w-full flex-col gap-6 bg-muted py-6 pl-6 pr-0 text-card-foreground md:flex-row md:items-center md:justify-between md:pl-10 md:pr-0">
      <div className="flex items-center gap-4">
        <div className="h-32 w-32 shrink-0 bg-black" />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">giks</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Mateo Aleman</span>
            <PeruFlag className="h-3 w-4" />
            <span>Peru</span>
          </div>
        </div>
      </div>

      <div className="flex w-32 flex-col items-start gap-3 md:w-[13.875rem]">
        <div className="flex items-center gap-3">
          <span className="text-lg">Level</span>
          <span className="relative inline-flex h-7 w-7 items-center justify-center text-[10px] font-semibold text-red-500">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <polygon
                points="50,4 93,25 93,75 50,96 7,75 7,25"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
              />
            </svg>
            666
          </span>
        </div>
        <div className="w-full bg-black px-4 py-3">
          <div className="flex items-center gap-3">
            <Arbi className="h-10 w-10 shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white">1.º Arbimaster</span>
              <span className="text-xs text-white">2035 XP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

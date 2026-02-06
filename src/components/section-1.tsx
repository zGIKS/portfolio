import { Arbi } from "./icons/arbi";
import { Tenno } from "./icons/tenno";

export function Section1() {
  return (
    <section className="flex w-full flex-col gap-6 bg-muted px-6 py-6 text-card-foreground md:flex-row md:items-center md:justify-between md:px-10">
      <div className="flex items-center gap-4">
        <div className="h-32 w-32 shrink-0 bg-black" />
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold">giks</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Mateo Aleman</span>
            <span className="inline-flex h-3 w-5 overflow-hidden rounded-sm border border-border">
              <span className="h-full w-1/3 bg-destructive" />
              <span className="h-full w-1/3 bg-background" />
              <span className="h-full w-1/3 bg-destructive" />
            </span>
            <span>Peru</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-3">
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
          <div className="flex items-center gap-3">
            <Arbi className="h-10 w-10 shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-semibold text-foreground">1.º Arbimaster</span>
              <span className="text-xs text-muted-foreground">#2035</span>
            </div>
          </div>
      </div>
    </section>
  );
}

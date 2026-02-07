import { UpcIcon } from "../icons/upc";

export function ArbiComponent() {
  return (
    <div className="h-[58px] w-full bg-accent px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-3 md:justify-start">
        <UpcIcon className="h-10 w-10 shrink-0" />
        <div className="flex flex-col leading-tight">
          <span className="text-sm font-medium leading-none text-accent-foreground">
            UPC
          </span>
          <span className="text-xs text-accent-foreground/70">2023</span>
        </div>
      </div>
    </div>
  );
}

import { LevelIcon } from "../icons/level";

export function Level({ value = 19 }: { value?: number }) {
  return (
    <div className="flex h-[58px] w-full items-center justify-center gap-3 bg-muted px-4 py-3 backdrop-blur-sm md:justify-start">
      <div className="relative h-10 w-10 md:h-12 md:w-12">
        <LevelIcon />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white leading-none">
          {value}
        </div>
      </div>
      <span className="text-lg font-semibold text-foreground">Years old</span>
    </div>
  );
}

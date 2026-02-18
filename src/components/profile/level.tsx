import { LevelIcon } from "../icons/level";

interface LevelProps {
  value?: number;
  label?: string;
}

export function Level({ value = 19, label = "Years old" }: LevelProps) {
  return (
    <div className="flex h-[58px] w-full items-center justify-start gap-3 bg-muted px-4 py-3 text-left backdrop-blur-sm">
      <div className="relative flex h-10 w-10 items-center justify-center">
        <LevelIcon />
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white leading-none">
          {value}
        </div>
      </div>
      <span className="text-sm font-medium leading-none text-foreground">{label}</span>
    </div>
  );
}

import { Arbi } from "../icons/arbi";
import { cn, typography } from "@/lib/utils";

export function ArbiComponent() {
  return (
    <div className="w-full bg-black px-4 py-3 h-[58px]">
      <div className="flex items-center justify-center gap-3 md:justify-start">
        <Arbi className="h-10 w-10 shrink-0" />
        <div className="flex flex-col leading-tight">
          <span className={cn(typography.small, "text-sm text-white")}>1.º Arbimaster</span>
          <span className={cn(typography.muted, "text-xs text-white")}>2035 XP</span>
        </div>
      </div>
    </div>
  );
}
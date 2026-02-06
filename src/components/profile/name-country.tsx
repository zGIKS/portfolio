import { PeruFlag } from "../icons/peru";
import { cn, typography } from "@/lib/utils";

export function NameAndCountry() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <span className={cn(typography.h3, "text-xl")}>giks</span>
      </div>
      <div className={cn("flex items-center gap-2", typography.muted)}>
        <span>Mateo Aleman</span>
        <PeruFlag className="h-3 w-4" />
        <span>Peru</span>
      </div>
    </div>
  );
}
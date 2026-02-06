import { PeruFlag } from "../icons/peru";

export function NameAndCountry() {
  return (
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
  );
}
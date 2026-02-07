import { Badge } from "@/components/ui/badge";

export function Level() {
  return (
    <div className="flex h-[58px] w-full items-center justify-center gap-3 bg-muted px-4 py-3 backdrop-blur-sm md:justify-start">
      <span className="text-lg font-semibold text-foreground">Level</span>
      <Badge variant="outline" className="relative inline-flex h-7 w-7 items-center justify-center rounded-none border-0 bg-transparent p-0 text-[10px] text-destructive">
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
      </Badge>
    </div>
  );
}

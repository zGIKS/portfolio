import { Button } from "@/contexts/shared/interfaces/components/ui/button";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-6">
      <span className="text-xl font-semibold tracking-tight text-foreground">
        Mateo Aleman
      </span>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-foreground hover:text-foreground text-base">
          About
        </Button>
        <Button variant="ghost" className="text-foreground hover:text-foreground text-base">
          Gallery
        </Button>
      </div>
    </header>
  );
}

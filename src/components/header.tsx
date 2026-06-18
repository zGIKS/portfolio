import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-6 border-b border-zinc-800/50">
      <span className="text-lg font-semibold tracking-tight text-zinc-100">
        Mateo Aleman
      </span>
      <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-zinc-100">
        About
      </Button>
    </header>
  );
}

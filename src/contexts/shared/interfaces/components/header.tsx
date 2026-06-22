import Link from "next/link";
import { Button } from "@/contexts/shared/interfaces/components/ui/button";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4">
      <Link href="/" className="text-xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
        Mateo Aleman
      </Link>
      <div className="flex items-center gap-1.5">
        <Link href="/about">
          <Button variant="ghost" className="text-foreground hover:text-foreground text-sm px-2">
            About
          </Button>
        </Link>
        <Link href="/gallery">
          <Button variant="ghost" className="text-foreground hover:text-foreground text-sm px-2">
            Gallery
          </Button>
        </Link>
      </div>
    </header>
  );
}

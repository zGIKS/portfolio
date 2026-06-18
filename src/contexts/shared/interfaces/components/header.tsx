import Link from "next/link";
import { Button } from "@/contexts/shared/interfaces/components/ui/button";

export function Header() {
  return (
    <header className="w-full flex items-center justify-between p-6">
      <Link href="/" className="text-xl font-semibold tracking-tight text-foreground hover:opacity-80 transition-opacity">
        Mateo Aleman
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/about">
          <Button variant="ghost" className="text-foreground hover:text-foreground text-base">
            About
          </Button>
        </Link>
        <Link href="/gallery">
          <Button variant="ghost" className="text-foreground hover:text-foreground text-base">
            Gallery
          </Button>
        </Link>
      </div>
    </header>
  );
}

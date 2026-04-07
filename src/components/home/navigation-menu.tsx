import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NavigationItem } from "@/lib/constants";

interface NavigationMenuProps {
  items: NavigationItem[];
  title: string;
}

export function NavigationMenu({ items, title }: NavigationMenuProps) {
  return (
    <aside className="flex flex-col justify-start lg:pt-2">
      <div className="p-0">
        <p className="px-3 pb-2 text-xs uppercase tracking-[0.22em] text-white/45">
          {title}
        </p>

        <div className="space-y-2">
          {items.map((item) => (
            <NavigationMenuItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function NavigationMenuItem({ item }: { item: NavigationItem }) {
  return (
    <Link href={item.href}>
      <div className="group flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition hover:bg-white/5">
        <span className="text-base font-medium tracking-tight text-white md:text-lg">
          {item.label}
        </span>
        <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/75" />
      </div>
    </Link>
  );
}

import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";

export interface MenuItem {
  label: string;
  href?: string;
  count?: number;
  kind: "link" | "anchor" | "static";
  badge?: string;
}

interface NavigationMenuProps {
  items: MenuItem[];
  title: string;
}

export function NavigationMenu({ items, title }: NavigationMenuProps) {
  return (
    <aside className="flex flex-col justify-start lg:pt-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md md:backdrop-blur-xl">
        <p className="px-3 pb-2 text-xs tracking-[0.22em] text-white/45 uppercase">
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

function NavigationMenuItem({ item }: { item: MenuItem }) {
  const isInteractive = item.kind !== "static" && !!item.href;

  const content = (
    <div
      className={`group flex w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-left transition ${
        isInteractive
          ? "hover:border-white/20 hover:bg-white/10"
          : "cursor-default opacity-80"
      }`}
    >
      <div className="flex items-center gap-2">
        <span className="text-base font-medium tracking-tight text-white md:text-lg">
          {item.label}
        </span>
        {item.badge && (
          <span className="rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] font-medium tracking-[0.14em] text-white/70 uppercase">
            {item.badge}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {item.count !== undefined && (
          <span className="text-xl font-semibold leading-none text-white/65">
            {item.count}
          </span>
        )}
        {item.kind !== "static" ? (
          <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/75" />
        ) : (
          <FileText className="h-4 w-4 text-white/35" />
        )}
      </div>
    </div>
  );

  if (!isInteractive || !item.href) {
    return <div>{content}</div>;
  }

  if (item.kind === "anchor") {
    return <a href={item.href}>{content}</a>;
  }

  return <Link href={item.href}>{content}</Link>;
}

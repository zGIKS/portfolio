import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { PretextTextBlock } from "@/components/shared/pretext-text-block";

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
      <div className="p-0">
        <PretextTextBlock
          text={title}
          className="px-3 pb-2 text-xs tracking-[0.22em] text-white/45 uppercase"
        />

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
      className={`group flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left transition ${
        isInteractive
          ? "hover:bg-white/5"
          : "cursor-default opacity-80"
      }`}
    >
      <div className="flex items-center gap-2">
        <PretextTextBlock
          as="span"
          text={item.label}
          className="inline-block text-base font-medium tracking-tight text-white md:text-lg"
        />
        {item.badge && (
          <PretextTextBlock
            as="span"
            text={item.badge}
            className="inline-block rounded-md px-1.5 py-0.5 text-[10px] font-medium tracking-[0.14em] text-white/55 uppercase"
          />
        )}
      </div>

      <div className="flex items-center gap-3">
        {item.count !== undefined && (
          <PretextTextBlock
            as="span"
            text={String(item.count)}
            className="inline-block text-xl font-semibold leading-none text-white/65"
          />
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

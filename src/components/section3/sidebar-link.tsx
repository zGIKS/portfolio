import Link from "next/link";
import type { ReactNode } from "react";
import { type Locale } from "@/lib/i18n";

interface SidebarLinkProps {
  locale: Locale;
  href: string;
  label: string;
  count?: number;
  children?: ReactNode;
}

export function SidebarLink({ locale, href, label, count }: SidebarLinkProps) {
  return (
    <div className="mt-6 flex items-center gap-2 pl-4">
      <Link
        href={`/${locale}/${href}`}
        className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors hover:text-muted-foreground"
      >
        {label}
      </Link>
      {typeof count === "number" && (
        <span className="text-lg font-semibold text-muted-foreground">{count}</span>
      )}
    </div>
  );
}

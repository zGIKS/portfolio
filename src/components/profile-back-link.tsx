import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProfileBackLinkProps {
  href: string;
  label: string;
}

export function ProfileBackLink({ href, label }: ProfileBackLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white/60 transition hover:bg-white/5 hover:text-white"
    >
      <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
      {label}
    </Link>
  );
}

import { cn, typography } from "@/lib/utils";

export function LoadingState() {
  return <div className={cn(typography.muted, "text-xs text-white/70")}>Loading contributions…</div>;
}
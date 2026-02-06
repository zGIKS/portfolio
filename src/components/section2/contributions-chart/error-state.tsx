import { cn, typography } from "@/lib/utils";

interface ErrorStateProps {
  error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className={cn(typography.muted, "text-xs text-white/70")}>
      {error} Check your GitHub token.
    </div>
  );
}
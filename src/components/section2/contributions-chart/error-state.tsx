interface ErrorStateProps {
  error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="text-xs text-white/70">
      {error} Check your GitHub token.
    </div>
  );
}
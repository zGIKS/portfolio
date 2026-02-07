interface ErrorStateProps {
  error: string;
}

export function ErrorState({ error }: ErrorStateProps) {
  return (
    <div className="text-xs text-muted-foreground">
      {error} Check your GitHub token.
    </div>
  );
}

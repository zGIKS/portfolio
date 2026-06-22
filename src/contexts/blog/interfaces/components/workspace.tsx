import React from "react";

interface WorkspaceProps {
  children: React.ReactNode;
}

export function Workspace({ children }: WorkspaceProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground font-sans">
      <section className="min-h-screen max-w-3xl w-full bg-background flex flex-col items-stretch justify-start">
        {children}
      </section>
    </div>
  );
}

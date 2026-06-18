import React from "react";

interface WorkspaceProps {
  children: React.ReactNode;
}

export function Workspace({ children }: WorkspaceProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-50 font-sans">
      <section className="h-screen max-w-3xl w-full border-x border-zinc-800 bg-zinc-900/10 flex flex-col items-stretch justify-start">
        {children}
      </section>
    </div>
  );
}

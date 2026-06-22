import React from "react";
import { GitHub } from "@/contexts/shared/interfaces/components/icons/github";

export function Footer() {
  return (
    <footer className="w-full flex items-center justify-between p-6 mt-auto">
      <span className="text-sm text-muted-foreground">
        Mateo Aleman (<span className="text-foreground">@zGIKS</span>)
      </span>
      <a
        href="https://github.com/zGIKS/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
      >
        <GitHub className="size-4" />
        <span>source</span>
      </a>
    </footer>
  );
}

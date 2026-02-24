import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

interface AppShellProps {
  children: ReactNode;
  contentClassName?: string;
  showFooter?: boolean;
}

export function AppShell({
  children,
  contentClassName,
  showFooter = true,
}: AppShellProps) {
  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <div
        className={cn(
          "relative z-10 flex flex-1 items-center justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]",
          contentClassName
        )}
      >
        {children}
      </div>
      {showFooter ? <Footer /> : null}
    </main>
  );
}

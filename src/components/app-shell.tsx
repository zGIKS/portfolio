import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackgroundSquare } from "@/components/background";
import { type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface AppShellProps {
  locale: Locale;
  children: ReactNode;
  showBackground?: boolean;
  contentClassName?: string;
}

export function AppShell({
  locale,
  children,
  showBackground = false,
  contentClassName,
}: AppShellProps) {
  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      {showBackground ? <BackgroundSquare /> : null}
      <Header locale={locale} />
      <div
        className={cn(
          "relative z-10 flex flex-1 justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]",
          contentClassName
        )}
      >
        {children}
      </div>
      <Footer locale={locale} />
    </main>
  );
}

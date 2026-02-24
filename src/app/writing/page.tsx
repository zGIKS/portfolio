import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Mateo Aleman - Writing",
  description: "Writing, notes, and articles",
};

export default function WritingPage() {
  return (
    <AppShell contentClassName="py-0">
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="mb-4 text-3xl font-bold">Writing</h1>
        <p className="text-muted-foreground text-lg">
          Coming soon...
        </p>
      </div>
    </AppShell>
  );
}

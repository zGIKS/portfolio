import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Mateo Aleman - Blog",
  description: "Blog posts and articles",
};

export default function BlogPage() {
  return (
    <AppShell contentClassName="py-0">
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Coming soon...
        </p>
      </div>
    </AppShell>
  );
}

import React from "react";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/shared/interfaces/components/header";
import { Footer } from "@/contexts/shared/interfaces/components/footer";

export default function AboutPage() {
  return (
    <Workspace>
      <Header />
      <main className="flex-1 flex flex-col justify-start p-6">
        <article className="flex flex-col gap-6 py-4">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            About Me
          </h1>
          <div className="text-base text-foreground leading-relaxed font-light flex flex-col gap-4">
            <p>
              This is the empty about page container, ready for your context-driven domain content.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </Workspace>
  );
}

import React from "react";
import { Text } from "@/contexts/shared/interfaces/components/ui/text";

export function Gallery() {
  return (
    <main className="flex-1 flex flex-col justify-start p-6">
      <article className="flex flex-col gap-6 py-4">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Gallery
        </h1>
        <div className="text-xl text-foreground leading-relaxed font-light flex flex-col gap-4">
          <Text text="This is the empty gallery page container, ready to showcase your visual context." />
        </div>
      </article>
    </main>
  );
}

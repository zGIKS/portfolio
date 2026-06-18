"use client";

import React, { useEffect, useState } from "react";
import { Marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";

interface PostContentProps {
  content: string;
}

// Inicializar Marked con los plugins de forma segura
const markedInstance = new Marked();
markedInstance.use(gfmHeadingId());
markedInstance.use({
  renderer: {
    code({ text, lang }: { text: string; lang?: string }) {
      if (lang === "mermaid") {
        return `<div class="mermaid py-4 flex justify-center">${text}</div>`;
      }
      return `<pre><code class="language-${lang || "text"}">${text}</code></pre>`;
    }
  }
});

export function PostContent({ content }: PostContentProps) {
  const [isMounted, setIsMounted] = useState(false);
  const htmlContent = markedInstance.parse(content) as string;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Solo cargamos e inicializamos mermaid en el navegador
    import("mermaid").then((m) => {
      const mermaid = m.default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        securityLevel: "loose",
      });
      
      // Corremos el render de Mermaid de forma segura
      mermaid.run().catch((err) => {
        console.error("Mermaid render error:", err);
      });
    });
  }, [isMounted, htmlContent]);

  return (
    <div
      className="prose prose-neutral dark:prose-invert max-w-none text-base text-foreground leading-relaxed font-light flex flex-col gap-4"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}


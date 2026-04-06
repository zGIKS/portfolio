"use client";

import type { ReactNode } from "react";
import type { Components } from "react-markdown";
import { PretextTextBlock } from "@/components/shared/pretext-text-block";

const MARKDOWN_TEXT_STYLES = {
  h1: "mb-2 text-4xl font-mono text-white",
  h2: "mb-2 text-3xl font-mono text-white",
  h3: "mb-2 text-2xl font-mono text-white",
  li: "mb-2 text-white/80 leading-relaxed",
  p: "mb-6 text-white/80 leading-relaxed",
} as const;

type MarkdownTextTag = keyof typeof MARKDOWN_TEXT_STYLES;

function getPlainText(children: ReactNode): string | null {
  if (typeof children === "string" || typeof children === "number") {
    return String(children);
  }

  if (!Array.isArray(children)) {
    return null;
  }

  let text = "";

  for (const child of children) {
    if (typeof child === "string" || typeof child === "number") {
      text += String(child);
      continue;
    }

    return null;
  }

  return text;
}

function renderPlainTextBlock(tag: MarkdownTextTag, children: ReactNode) {
  const text = getPlainText(children);
  const className = MARKDOWN_TEXT_STYLES[tag];

  if (text === null) {
    const Tag = tag;
    return <Tag className={className}>{children}</Tag>;
  }

  return <PretextTextBlock as={tag} text={text} className={className} />;
}

export const pretextMarkdownComponents: Components = {
  h1({ children }) {
    return renderPlainTextBlock("h1", children);
  },
  h2({ children }) {
    return renderPlainTextBlock("h2", children);
  },
  h3({ children }) {
    return renderPlainTextBlock("h3", children);
  },
  p({ children }) {
    return renderPlainTextBlock("p", children);
  },
  li({ children }) {
    return renderPlainTextBlock("li", children);
  },
};

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { prepareWithSegments } from "@chenglou/pretext";
import {
  buildParagraphLayout,
  splitParagraphs,
  type LayoutLine,
  type ParagraphLayout,
} from "./text-layout";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  font?: string;
  lineHeight?: number;
  whiteSpace?: "normal" | "pre-wrap";
  wordBreak?: "normal" | "keep-all";
  letterSpacing?: number;
  justify?: boolean;
  floatWidth?: number;
  floatHeight?: number;
  floatGap?: number;
  floatComponent?: React.ReactNode;
}

const DEFAULT_LINE_HEIGHT = 24;

function measureFloatSize(
  floatComponent: React.ReactNode,
  floatWidth: number | undefined,
  floatHeight: number | undefined,
): { width: number; height: number } {
  if (!floatComponent) return { width: 0, height: 0 };

  if (typeof window === "undefined") {
    return {
      width: floatWidth ?? 280,
      height: floatHeight ?? 370,
    };
  }

  const isDesktop = window.innerWidth >= 768;
  return {
    width: floatWidth ?? (isDesktop ? 280 : 128),
    height: floatHeight ?? (isDesktop ? 370 : 128),
  };
}

type RenderLine = LayoutLine;

type RenderLayout = {
  lines: RenderLine[];
  height: number;
};

export function Text({
  text,
  font,
  lineHeight,
  whiteSpace = "normal",
  wordBreak = "normal",
  letterSpacing,
  justify = false,
  floatWidth,
  floatHeight,
  floatGap = 24,
  floatComponent,
  className,
  ...props
}: TextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [detectedFont, setDetectedFont] = useState("");
  const [detectedLineHeight, setDetectedLineHeight] = useState(DEFAULT_LINE_HEIGHT);
  const [floatSize, setFloatSize] = useState({ width: 0, height: 0 });

  const paragraphs = useMemo(() => splitParagraphs(text), [text]);

  useEffect(() => {
    setIsClient(true);
    const element = containerRef.current;
    if (!element) return;

    const updateLayout = () => {
      const style = window.getComputedStyle(element);
      const fontWeight = style.fontWeight || "normal";
      const fontSize = style.fontSize || "16px";
      const fontFamily = style.fontFamily || "sans-serif";
      const computedFont = font ?? `${fontWeight} ${fontSize} ${fontFamily}`;

      let computedLineHeight = lineHeight;
      if (computedLineHeight === undefined) {
        const parsed = parseFloat(style.lineHeight);
        computedLineHeight = Number.isNaN(parsed) ? DEFAULT_LINE_HEIGHT : parsed;
      }

      setDetectedFont(computedFont);
      setDetectedLineHeight(computedLineHeight);
      setWidth(element.getBoundingClientRect().width);
      setFloatSize(measureFloatSize(floatComponent, floatWidth, floatHeight));
    };

    updateLayout();

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(updateLayout);
    }

    const observer = new ResizeObserver(() => {
      updateLayout();
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [font, lineHeight, floatWidth, floatHeight, floatComponent]);

  const preparedParagraphs = useMemo(() => {
    if (!isClient || !detectedFont) return null;

    try {
      return paragraphs.map((paragraph) =>
        prepareWithSegments(paragraph, detectedFont, {
          whiteSpace,
          wordBreak,
          letterSpacing,
        }),
      );
    } catch (error) {
      console.error("Pretext preparation failed:", error);
      return null;
    }
  }, [paragraphs, detectedFont, whiteSpace, wordBreak, letterSpacing, isClient]);

  const layout = useMemo<RenderLayout | null>(() => {
    if (!preparedParagraphs || width === null || width <= 0) return null;

    try {
      const lines: LayoutLine[] = [];
      let totalHeight = 0;

      preparedParagraphs.forEach((paragraph, index) => {
        const paragraphLayout: ParagraphLayout = buildParagraphLayout(
          paragraph,
          {
            width,
            lineHeight: detectedLineHeight,
            floatSize,
            floatGap,
            justify,
          },
          totalHeight,
        );

        lines.push(...paragraphLayout.lines);
        totalHeight += paragraphLayout.height;

        if (index < preparedParagraphs.length - 1) {
          totalHeight += Math.round(detectedLineHeight * 0.85);
        }
      });

      return {
        lines,
        height: totalHeight,
      };
    } catch (error) {
      console.error("Pretext layout failed:", error);
      return null;
    }
  }, [preparedParagraphs, width, detectedLineHeight, floatSize, floatGap, justify]);

  if (!layout) {
    return (
      <div ref={containerRef} className={className} style={{ opacity: 0, ...props.style }} {...props}>
        {text}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        height: `${layout.height}px`,
        position: "relative",
        display: "block",
        ...props.style,
      }}
      {...props}
    >
      {floatComponent && floatSize.width > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: `${floatSize.width}px`,
            height: `${floatSize.height}px`,
          }}
        >
          {floatComponent}
        </div>
      )}

      {layout.lines.map((line, index) => (
        <div
          key={`${index}-${line.top}`}
          style={{
            position: "absolute",
            top: `${line.top}px`,
            left: 0,
            width: `${line.availableWidth}px`,
            display: line.justify ? "flex" : "block",
            justifyContent: line.justify ? "space-between" : undefined,
            alignItems: line.justify ? "baseline" : undefined,
            whiteSpace: "nowrap",
            lineHeight: `${detectedLineHeight}px`,
          }}
        >
          {line.justify
            ? line.text
                .trim()
                .split(/\s+/)
                .filter(Boolean)
                .map((word, wordIndex) => (
                  <span key={`${index}-${wordIndex}`} className="shrink-0">
                    {word}
                  </span>
                ))
            : line.text}
        </div>
      ))}
    </div>
  );
}

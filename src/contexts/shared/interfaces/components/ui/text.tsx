"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  font?: string; // Optional: Override computed font
  lineHeight?: number; // Optional: Override computed line-height
  whiteSpace?: "normal" | "pre-wrap";
  wordBreak?: "normal" | "keep-all";
  letterSpacing?: number;
}

export function Text({
  text,
  font,
  lineHeight,
  whiteSpace = "normal",
  wordBreak = "normal",
  letterSpacing,
  className,
  ...props
}: TextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Dynamically detected styles from the DOM
  const [detectedFont, setDetectedFont] = useState<string>("");
  const [detectedLineHeight, setDetectedLineHeight] = useState<number>(24);

  useEffect(() => {
    setIsClient(true);
    const element = containerRef.current;
    if (!element) return;

    // Detect styling from global CSS / Tailwind classes
    const style = window.getComputedStyle(element);
    
    // Fallbacks if browser fails to serialize getComputedStyle().font
    const fontWeight = style.fontWeight || "normal";
    const fontSize = style.fontSize || "16px";
    const fontFamily = style.fontFamily || "sans-serif";
    const computedFont = font || `${fontWeight} ${fontSize} ${fontFamily}`;
    
    // Parse computed line-height
    let computedLineHeight = lineHeight;
    if (computedLineHeight === undefined) {
      const parsed = parseFloat(style.lineHeight);
      computedLineHeight = isNaN(parsed) ? 24 : parsed;
    }

    setDetectedFont(computedFont);
    setDetectedLineHeight(computedLineHeight);
    setWidth(element.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      const rect = entries[0].contentRect;
      setWidth(rect.width);
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [font, lineHeight]);

  // Memoize preparation
  const prepared = useMemo(() => {
    if (!isClient || !detectedFont) return null;
    try {
      return prepareWithSegments(text, detectedFont, { whiteSpace, wordBreak, letterSpacing });
    } catch (e) {
      console.error("Pretext preparation failed:", e);
      return null;
    }
  }, [text, detectedFont, whiteSpace, wordBreak, letterSpacing, isClient]);

  const layout = useMemo(() => {
    if (!prepared || width === null || width <= 0) return null;
    try {
      return layoutWithLines(prepared, width, detectedLineHeight);
    } catch (e) {
      console.error("Pretext layout failed:", e);
      return null;
    }
  }, [prepared, width, detectedLineHeight]);

  // SSR or hydration fallback: render normal text but invisible/hidden to preserve SEO and prevent layout shift
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
      {layout.lines.map((line, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${index * detectedLineHeight}px`,
            left: 0,
            width: `${line.width}px`,
            whiteSpace: "nowrap",
            lineHeight: `${detectedLineHeight}px`,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
}

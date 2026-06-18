"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import { prepareWithSegments, layoutNextLineRange, materializeLineRange } from "@chenglou/pretext";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  font?: string;
  lineHeight?: number;
  whiteSpace?: "normal" | "pre-wrap";
  wordBreak?: "normal" | "keep-all";
  letterSpacing?: number;
  justify?: boolean;
  // Flow/Float options
  floatWidth?: number;
  floatHeight?: number;
  floatGap?: number;
  floatComponent?: React.ReactNode;
}

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
  const [detectedFont, setDetectedFont] = useState<string>("");
  const [detectedLineHeight, setDetectedLineHeight] = useState<number>(24);
  
  // Track float size dynamically for responsiveness
  const [currentFloatSize, setCurrentFloatSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsClient(true);
    const element = containerRef.current;
    if (!element) return;

    const updateLayout = () => {
      const style = window.getComputedStyle(element);
      const fontWeight = style.fontWeight || "normal";
      const fontSize = style.fontSize || "16px";
      const fontFamily = style.fontFamily || "sans-serif";
      const computedFont = font || `${fontWeight} ${fontSize} ${fontFamily}`;
      
      let computedLineHeight = lineHeight;
      if (computedLineHeight === undefined) {
        const parsed = parseFloat(style.lineHeight);
        computedLineHeight = isNaN(parsed) ? 24 : parsed;
      }

      setDetectedFont(computedFont);
      setDetectedLineHeight(computedLineHeight);
      setWidth(element.getBoundingClientRect().width);

      if (floatComponent) {
        if (window.innerWidth >= 768) {
          setCurrentFloatSize({
            width: floatWidth || 176,
            height: floatHeight || 176,
          });
        } else {
          setCurrentFloatSize({
            width: floatWidth || 128,
            height: floatHeight || 128,
          });
        }
      }
    };

    updateLayout();

    // Trigger recalculation when custom fonts (like EB Garamond) are fully loaded
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        updateLayout();
      });
    }

    const observer = new ResizeObserver((entries) => {
      if (!entries || entries.length === 0) return;
      updateLayout();
    });

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [font, lineHeight, floatWidth, floatHeight, floatComponent]);

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

  // Custom line-by-line layout loop for floating elements
  const layout = useMemo(() => {
    if (!prepared || width === null || width <= 0) return null;
    try {
      const lines: Array<{
        text: string;
        width: number;
        availableWidth: number;
        shouldJustify: boolean;
        top: number;
        left: number;
      }> = [];
      let cursor = { segmentIndex: 0, graphemeIndex: 0 };
      let y = 0;

      const fWidth = currentFloatSize.width;
      const fHeight = currentFloatSize.height;

      while (true) {
        const isWithinFloat = fWidth > 0 && fHeight > 0 && y < fHeight;
        const currentMaxWidth = isWithinFloat ? width - fWidth - floatGap : width;

        const range = layoutNextLineRange(prepared, cursor, currentMaxWidth);
        if (range === null) break;

        const line = materializeLineRange(prepared, range);
        const spaceCount = (line.text.match(/\s/g) ?? []).length;
        const extraSpace = currentMaxWidth - line.width;
        const shouldJustifyLine =
          justify &&
          spaceCount >= 4 &&
          extraSpace > 0 &&
          line.width < currentMaxWidth * 0.98 &&
          line.width >= currentMaxWidth * 0.6;
        lines.push({
          text: line.text,
          width: line.width,
          availableWidth: currentMaxWidth,
          shouldJustify: shouldJustifyLine,
          top: y,
          left: 0,
        });

        cursor = range.end;
        y += detectedLineHeight;
      }

      return { lines, height: Math.max(y, fHeight) };
    } catch (e) {
      console.error("Pretext layout failed:", e);
      return null;
    }
  }, [prepared, width, detectedLineHeight, currentFloatSize, floatGap]);

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
      {/* Float component positioned absolutely at top right */}
      {floatComponent && currentFloatSize.width > 0 && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: `${currentFloatSize.width}px`,
            height: `${currentFloatSize.height}px`,
          }}
        >
          {floatComponent}
        </div>
      )}

      {/* Render each calculated line */}
      {layout.lines.map((line, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${line.top}px`,
            left: `${line.left}px`,
            width: `${line.availableWidth}px`,
            display: line.shouldJustify ? "flex" : "block",
            justifyContent: line.shouldJustify ? "space-between" : undefined,
            whiteSpace: "nowrap",
            lineHeight: `${detectedLineHeight}px`,
          }}
        >
          {line.shouldJustify
            ? line.text
                .trim()
                .split(/\s+/)
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

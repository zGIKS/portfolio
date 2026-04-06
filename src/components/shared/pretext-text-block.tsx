"use client";

import { layout, prepare } from "@chenglou/pretext";
import {
  type CSSProperties,
  type ComponentPropsWithoutRef,
  createElement,
  useEffect,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type PretextTag = "div" | "h1" | "h2" | "h3" | "li" | "p" | "span";
type FontFaceSetWithEvents = FontFaceSet & {
  addEventListener?: (type: "loadingdone", listener: () => void) => void;
  removeEventListener?: (type: "loadingdone", listener: () => void) => void;
};

type PretextTextBlockProps<T extends PretextTag = "p"> = Omit<
  ComponentPropsWithoutRef<T>,
  "children"
> & {
  as?: T;
  text: string;
  whiteSpace?: "normal" | "pre-wrap";
};

function getLineHeight(style: CSSStyleDeclaration) {
  const parsedLineHeight = Number.parseFloat(style.lineHeight);

  if (Number.isFinite(parsedLineHeight)) {
    return parsedLineHeight;
  }

  const parsedFontSize = Number.parseFloat(style.fontSize);
  return Number.isFinite(parsedFontSize) ? parsedFontSize * 1.5 : 24;
}

export function PretextTextBlock<T extends PretextTag = "p">({
  as,
  className,
  style,
  text,
  whiteSpace = "normal",
  ...props
}: PretextTextBlockProps<T>) {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const [minHeight, setMinHeight] = useState<number | null>(null);

  useEffect(() => {
    if (!node || text.length === 0) {
      return;
    }

    let animationFrame = 0;

    const measure = () => {
      const width = node.clientWidth;

      if (width <= 0) {
        return;
      }

      const computedStyle = window.getComputedStyle(node);
      const font = computedStyle.font;

      if (!font) {
        return;
      }

      const lineHeight = getLineHeight(computedStyle);
      const prepared = prepare(text, font, { whiteSpace });
      const result = layout(prepared, width, lineHeight);
      setMinHeight((currentHeight) =>
        currentHeight === result.height ? currentHeight : result.height
      );
    };

    const scheduleMeasure = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(measure);
    };

    scheduleMeasure();

    const resizeObserver = new ResizeObserver(() => {
      scheduleMeasure();
    });

    resizeObserver.observe(node);

    const fontSet = document.fonts as FontFaceSetWithEvents | undefined;

    fontSet?.ready.then(() => {
      scheduleMeasure();
    });

    fontSet?.addEventListener?.("loadingdone", scheduleMeasure);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      fontSet?.removeEventListener?.("loadingdone", scheduleMeasure);
    };
  }, [node, text, whiteSpace]);

  const Component = (as ?? "p") as PretextTag;
  const mergedStyle: CSSProperties = {
    ...style,
    minHeight:
      text.length === 0 || minHeight === null ? style?.minHeight : `${minHeight}px`,
  };

  return createElement(
    Component,
    {
      ref: setNode,
      className: cn(className),
      style: mergedStyle,
      ...(props as ComponentPropsWithoutRef<typeof Component>),
    },
    text
  );
}

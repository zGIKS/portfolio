import {
  layoutNextLineRange,
  materializeLineRange,
  type LayoutCursor,
  type PreparedTextWithSegments,
} from "@chenglou/pretext";

export interface TextLayoutOptions {
  width: number;
  lineHeight: number;
  floatSize: { width: number; height: number };
  floatGap: number;
  justify: boolean;
}

export type LayoutLine = {
  text: string;
  width: number;
  availableWidth: number;
  justify: boolean;
  top: number;
};

export type ParagraphLayout = {
  lines: LayoutLine[];
  height: number;
};

export function splitParagraphs(text: string): string[] {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function buildParagraphLayout(
  preparedParagraph: PreparedTextWithSegments,
  options: TextLayoutOptions,
  yStart: number,
): ParagraphLayout {
  const lines: LayoutLine[] = [];
  let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 };
  let y = yStart;

  while (true) {
    const withinFloat =
      options.floatSize.width > 0 && options.floatSize.height > 0 && y < options.floatSize.height;
    const availableWidth = withinFloat
      ? options.width - options.floatSize.width - options.floatGap
      : options.width;
    const range = layoutNextLineRange(preparedParagraph, cursor, availableWidth);
    if (range === null) break;

    const line = materializeLineRange(preparedParagraph, range);
    const words = line.text.trim().split(/\s+/).filter(Boolean);
    const isLastLine = range.end.segmentIndex >= preparedParagraph.segments.length;
    const shouldJustify =
      options.justify &&
      !isLastLine &&
      words.length >= 3 &&
      line.width >= availableWidth * 0.72 &&
      line.width < availableWidth;

    lines.push({
      text: line.text,
      width: line.width,
      availableWidth,
      justify: shouldJustify,
      top: y,
    });

    cursor = range.end;
    y += options.lineHeight;
  }

  return {
    lines,
    height: y - yStart,
  };
}

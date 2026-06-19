import "server-only";

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { GalleryItem } from "@/contexts/gallery/interfaces/resources/gallery-item";

const GALLERY_DIR = path.join(process.cwd(), "database", "gallery");

function parseGalleryItem(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n)?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const yamlContent = match[1];
  const bodyContent = match[2] ?? "";
  return {
    data: (yaml.load(yamlContent) as Record<string, unknown>) ?? {},
    content: bodyContent,
  };
}

export function listGalleryItems(): GalleryItem[] {
  if (!fs.existsSync(GALLERY_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(GALLERY_DIR, file), "utf-8");
      const { data, content } = parseGalleryItem(raw);

      return {
        uuid: String(data.uuid ?? ""),
        title: String(data.title ?? ""),
        date: String(data.date ?? ""),
        content: content.replace(/\.\.\/\.\.\/public\//g, "/"),
      } satisfies GalleryItem;
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

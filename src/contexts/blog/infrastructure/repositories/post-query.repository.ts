import "server-only";

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { PostSummary } from "@/contexts/blog/interfaces/resources/post-summary";
import type { PostDetail } from "@/contexts/blog/interfaces/resources/post-detail";

const POSTS_DIR = path.join(process.cwd(), "database", "post");

function parsePost(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n)?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const yamlContent = match[1];
  const bodyContent = match[2] ?? "";
  return {
    data: (yaml.load(yamlContent) as Record<string, unknown>) ?? {},
    content: bodyContent,
  };
}

function calculateReadingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function listPostSummaries(): PostSummary[] {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data, content } = parsePost(raw);

      return {
        uuid: String(data.uuid ?? ""),
        title: String(data.title ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        status: data.status === "draft" ? "draft" : "published",
        publishedAt: data.publishedAt ? String(data.publishedAt) : "",
        readingTime: calculateReadingTime(content),
      } satisfies PostSummary;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getPostByUuid(uuid: string): PostDetail | null {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  for (const file of files) {
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = parsePost(raw);

    if (String(data.uuid ?? "") === uuid) {
      return {
        uuid: String(data.uuid ?? ""),
        title: String(data.title ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        status: data.status === "draft" ? "draft" : "published",
        publishedAt: data.publishedAt ? String(data.publishedAt) : "",
        readingTime: calculateReadingTime(content),
        content,
      } satisfies PostDetail;
    }
  }

  return null;
}


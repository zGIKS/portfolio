import "server-only";

import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import type { PostSummary } from "@/contexts/blog/domain/model/post-summary";

const POSTS_DIR = path.join(process.cwd(), "database", "post");

function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};
  return (yaml.load(match[1]) as Record<string, unknown>) ?? {};
}

export function listPostSummaries(): PostSummary[] {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const data = parseFrontmatter(raw);

      return {
        uuid: String(data.uuid ?? ""),
        title: String(data.title ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        status: data.status === "draft" ? "draft" : "published",
        publishedAt: data.publishedAt ? String(data.publishedAt) : "",
      } satisfies PostSummary;
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

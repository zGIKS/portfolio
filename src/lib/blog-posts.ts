import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  tags: string[];
  excerpt: string;
  contentMd: string;
};

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");

function parseFrontmatter(fileContent: string) {
  const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!frontmatterMatch) {
    throw new Error("Invalid post format: expected frontmatter block.");
  }

  const [, rawFrontmatter, contentMd] = frontmatterMatch;
  const frontmatter = new Map<string, string>();

  for (const line of rawFrontmatter.split("\n")) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    frontmatter.set(key, value);
  }

  return {
    frontmatter,
    contentMd: contentMd.trim(),
  };
}

function parseTags(value: string | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

const readBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const filenames = await fs.readdir(POSTS_DIRECTORY);
  const markdownFiles = filenames.filter((filename) => filename.endsWith(".md"));

  const posts = await Promise.all(
    markdownFiles.map(async (filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(POSTS_DIRECTORY, filename);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { frontmatter, contentMd } = parseFrontmatter(fileContent);

      return {
        slug,
        title: frontmatter.get("title") ?? slug,
        author: frontmatter.get("author") ?? "Mateo",
        publishedAt: frontmatter.get("publishedAt") ?? "",
        tags: parseTags(frontmatter.get("tags")),
        excerpt: frontmatter.get("excerpt") ?? contentMd.slice(0, 160),
        contentMd,
      };
    })
  );

  return posts.sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
});

export async function getBlogPosts(): Promise<BlogPost[]> {
  return readBlogPosts();
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

import React from "react";

interface Post {
  id: string;
  title: string;
  year: string;
  readingTime: string;
}

const POSTS: Post[] = [
  {
    id: "1",
    title: "The Future of Web Development with Tailwind v4",
    year: "2026",
    readingTime: "4 min read",
  },
  {
    id: "2",
    title: "Building High-Performance React Applications",
    year: "2026",
    readingTime: "6 min read",
  },
  {
    id: "3",
    title: "Why Minimalist Design Rules Modern Portfolios",
    year: "2025",
    readingTime: "3 min read",
  },
  {
    id: "4",
    title: "Understanding OKLCH Colors in CSS",
    year: "2025",
    readingTime: "5 min read",
  },
  {
    id: "5",
    title: "An Introduction to Agentic Coding Assistants",
    year: "2024",
    readingTime: "7 min read",
  },
];

export function PostList() {
  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4">
        {POSTS.map((post) => (
          <article
            key={post.id}
            className="flex items-baseline justify-between py-2 group cursor-pointer"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-sm text-muted-foreground w-12 shrink-0">
                {post.year}
              </span>
              <h2 className="text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">
                {post.title}
              </h2>
            </div>
            <span className="text-sm text-muted-foreground shrink-0 font-light">
              {post.readingTime}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}

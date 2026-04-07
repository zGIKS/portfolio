import type { Metadata } from "next";
import Link from "next/link";
import { ProfileSectionLayout } from "@/components/profile-section-layout";
import { getBlogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Mateo Aleman - Writing",
  description: "Writing, notes, and articles",
};

export default async function WritingPage() {
  const posts = await getBlogPosts();

  return (
    <ProfileSectionLayout
      backHref="/"
      backLabel="Back to Home"
      subtitle="Recent Notes & Thoughts"
    >
      <div className="mt-8 flex flex-col gap-4 px-4 md:px-0">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-transparent p-6 transition-all hover:border-white/10 hover:bg-white/5"
          >
            <p className="text-xs uppercase tracking-wide text-white/50">
              {post.tags.join(" • ")}
            </p>
            <h3 className="text-xl font-mono text-white">{post.title}</h3>
            <p className="text-sm text-white/50">
              by {post.author} - {post.publishedAt}
            </p>
            <div className="mt-2 line-clamp-2 text-sm text-white/60">
              {post.excerpt}
            </div>
          </Link>
        ))}
      </div>
    </ProfileSectionLayout>
  );
}

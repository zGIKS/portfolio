import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { AppShell } from "@/components/app-shell";
import { ProfileBackLink } from "@/components/profile-back-link";
import { getBlogPostBySlug } from "@/lib/blog-posts";

type WritingPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WritingPostPage({ params }: WritingPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <AppShell
      showFooter={false}
      contentClassName="flex-col items-center justify-start gap-6 pt-2 pb-6 md:pt-4 md:pb-10"
    >
      <div className="w-full max-w-6xl px-4 md:px-0">
        <ProfileBackLink href="/writing" label="Return to index" />
      </div>

      <article className="w-full max-w-6xl px-4 py-8 text-white/80 md:px-0">
        <header className="mb-8 border-b border-white/10 pb-8">
          <h1 className="mb-2 text-4xl font-mono text-white">{post.title}</h1>
          <div className="space-y-1 text-sm text-white/50">
            <p>by {post.author} — {post.publishedAt}</p>
            <p>(tags: {post.tags.join(", ")})</p>
          </div>
        </header>

        <div className="typography max-w-none rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.contentMd}</ReactMarkdown>
        </div>
      </article>
    </AppShell>
  );
}

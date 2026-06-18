import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/shared/interfaces/components/header";
import { Footer } from "@/contexts/shared/interfaces/components/footer";
import { getPostQueryService } from "@/contexts/blog/application/internal/queryservices/get-post.query-service";
import { PostContent } from "@/contexts/blog/interfaces/components/post-content";

type Params = Promise<{ id: string }>;

interface BlogPostPageProps {
  params: Params;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  // Invocar al Query Service de la capa de aplicación
  const post = getPostQueryService({ uuid: id });

  if (!post) {
    notFound();
  }

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Workspace>
      <Header />
      <main className="flex-1 flex flex-col justify-start p-6">
        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center text-muted-foreground font-sans italic">
              Loading post...
            </div>
          }
        >
          <article className="flex flex-col gap-6 py-4">
            <header className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit flex items-center gap-1 font-light"
              >
                &larr; Back to posts
              </Link>
              <h1 className="text-2xl font-semibold tracking-tight text-foreground mt-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {formattedDate && <span>{formattedDate}</span>}
                {formattedDate && post.tags && post.tags.length > 0 && <span>•</span>}
                {post.tags && post.tags.length > 0 && (
                  <span className="italic">{post.tags.join(", ")}</span>
                )}
              </div>
            </header>

            <PostContent content={post.content} />
          </article>
        </Suspense>
      </main>
      <Footer />
    </Workspace>
  );
}

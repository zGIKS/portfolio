import React, { Suspense } from "react";
import Link from "next/link";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/shared/interfaces/components/header";
import { Footer } from "@/contexts/shared/interfaces/components/footer";

type Params = Promise<{ id: string }>;

interface BlogPostPageProps {
  params: Params;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params promise as required in Next.js 16/React 19
  const { id } = await params;

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
                Post Detail #{id}
              </h1>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Year 2026</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </header>

            <div className="text-base text-foreground leading-relaxed font-light flex flex-col gap-4">
              <p>
                This is the dynamic content of the post with ID <strong>{id}</strong>.
              </p>
              <p>
                According to the recommended DDD (Domain-Driven Design) architecture, 
                this App Router page functions solely as an orchestrator that reads the 
                route parameters (<code>params</code>) and delegates business and 
                presentation logic to the corresponding layers of your bounded context.
              </p>
            </div>
          </article>
        </Suspense>
      </main>
      <Footer />
    </Workspace>
  );
}

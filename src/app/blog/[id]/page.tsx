import React from "react";
import { notFound } from "next/navigation";
import { getPostQueryService } from "@/contexts/blog/application/internal/queryservices/get-post.query-service";
import { PostDetailView } from "@/contexts/blog/interfaces/components/post-detail-view";

type Params = Promise<{ id: string }>;

interface BlogPostPageProps {
  params: Params;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;

  // Invoke the application layer Query Service
  const post = getPostQueryService({ uuid: id });

  if (!post) {
    notFound();
  }

  // Delegate all presentation and formatting to the bounded context interface component
  return <PostDetailView post={post} />;
}

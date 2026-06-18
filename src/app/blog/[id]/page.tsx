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

  // Invocar al Query Service de la capa de aplicación
  const post = getPostQueryService({ uuid: id });

  if (!post) {
    notFound();
  }

  // Delegar toda la presentación y formateo al componente del Bounded Context en interfaces
  return <PostDetailView post={post} />;
}

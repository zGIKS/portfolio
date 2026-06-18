import "server-only";

import type { ListPostsQuery } from "@/contexts/blog/domain/model/queries/list-posts.query";
import type { PostSummary } from "@/contexts/blog/domain/model/post-summary";
import { listPostSummaries } from "@/contexts/blog/infrastructure/repositories/post-query.repository";

export function listPostsQueryService(query: ListPostsQuery = {}): PostSummary[] {
  const posts = listPostSummaries();

  if (query.status) {
    return posts.filter((p) => p.status === query.status);
  }

  return posts;
}

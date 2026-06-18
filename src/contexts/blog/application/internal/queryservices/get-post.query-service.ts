import "server-only";

import type { GetPostQuery } from "@/contexts/blog/domain/model/queries/get-post.query";
import type { PostDetail } from "@/contexts/blog/domain/model/post-detail";
import { getPostByUuid } from "@/contexts/blog/infrastructure/repositories/post-query.repository";

export function getPostQueryService(query: GetPostQuery): PostDetail | null {
  return getPostByUuid(query.uuid);
}

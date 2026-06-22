import Link from "next/link";
import { listPostsQueryService } from "@/contexts/blog/application/internal/queryservices/list-posts.query-service";

export function PostList() {
  const posts = listPostsQueryService({ status: "published" });

  return (
    <div className="w-full flex flex-col gap-6 p-6">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.uuid}
            href={`/blog/${post.uuid}`}
            className="flex items-baseline justify-between py-2 group cursor-pointer decoration-transparent"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-sm text-muted-foreground w-12 shrink-0">
                {new Date(post.publishedAt).getFullYear()}
              </span>
              <h2 className="text-base font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-200">
                {post.title}
              </h2>
            </div>
            <span className="text-sm text-muted-foreground shrink-0 font-light">
              {post.readingTime}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

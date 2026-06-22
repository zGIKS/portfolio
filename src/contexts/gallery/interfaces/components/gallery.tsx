import React from "react";
import { listGalleryQueryService } from "@/contexts/gallery/application/internal/queryservices/list-gallery.query-service";
import { PostContent } from "@/contexts/blog/interfaces/components/post-content";

export function Gallery() {
  const galleryItems = listGalleryQueryService();

  return (
    <main className="flex-1 flex flex-col justify-start p-6">
      <article className="flex flex-col gap-6 py-4">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Gallery
        </h1>
        <div className="flex flex-col gap-12 mt-6">
          {galleryItems.map((item) => (
            <div key={item.uuid} className="flex flex-col gap-4 border-b border-muted pb-8 last:border-0 last:pb-0">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-medium text-foreground">
                  {item.title}
                </h2>
                <time className="text-sm text-muted-foreground">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="mt-2">
                <PostContent content={item.content} />
              </div>
            </div>
          ))}
        </div>
      </article>
    </main>
  );
}

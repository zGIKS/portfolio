import "server-only";

import type { ListGalleryQuery } from "@/contexts/gallery/domain/model/queries/list-gallery.query";
import type { GalleryItem } from "@/contexts/gallery/interfaces/resources/gallery-item";
import { listGalleryItems } from "@/contexts/gallery/infrastructure/repositories/gallery-query.repository";

export function listGalleryQueryService(_query: ListGalleryQuery = {}): GalleryItem[] {
  return listGalleryItems();
}

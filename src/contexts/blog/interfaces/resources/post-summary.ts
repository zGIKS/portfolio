export type PostSummary = {
  uuid: string;
  title: string;
  tags: string[];
  status: "published" | "draft";
  publishedAt: string;
};

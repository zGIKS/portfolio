export type PostDetail = {
  uuid: string;
  title: string;
  tags: string[];
  status: "published" | "draft";
  publishedAt: string;
  readingTime: string;
  content: string; // El Markdown del body del post
};

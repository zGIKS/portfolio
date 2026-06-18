export type PostDetail = {
  uuid: string;
  title: string;
  tags: string[];
  status: "published" | "draft";
  publishedAt: string;
  content: string; // El Markdown del body del post
};

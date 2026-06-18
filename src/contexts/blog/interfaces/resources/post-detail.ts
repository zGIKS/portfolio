export type PostDetail = {
  uuid: string;
  title: string;
  tags: string[];
  status: "published" | "draft";
  publishedAt: string;
  readingTime: string;
  content: string; // The Markdown body of the post
};

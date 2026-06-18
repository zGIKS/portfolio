import { Suspense } from "react";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/blog/interfaces/components/header";
import { PostList } from "@/contexts/blog/interfaces/components/post-list";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Workspace>
      <Header />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center text-muted-foreground font-sans italic">
          Cargando contenido...
        </div>
      }>
        <PostList />
      </Suspense>
    </Workspace>
  );
}

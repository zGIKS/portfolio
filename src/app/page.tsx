import { Suspense } from "react";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/shared/interfaces/components/header";
import { Footer } from "@/contexts/shared/interfaces/components/footer";
import { PostList } from "@/contexts/blog/interfaces/components/post-list";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Workspace>
      <Header />
      <main className="flex-1 flex flex-col justify-start">
        <Suspense fallback={
          <div className="flex-1 flex items-center justify-center text-muted-foreground font-sans italic">
            Cargando contenido...
          </div>
        }>
          <PostList />
        </Suspense>
      </main>
      <Footer />
    </Workspace>
  );
}

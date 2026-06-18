import { Suspense } from "react";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/blog/interfaces/components/header";
import { BlogContent } from "@/contexts/blog/interfaces/components/blog-content";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function HomePage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Workspace>
      <Header />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center text-zinc-500 font-sans italic">
          Cargando contenido...
        </div>
      }>
        <BlogContent searchParams={searchParams} />
      </Suspense>
    </Workspace>
  );
}

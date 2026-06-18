import React from "react";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/shared/interfaces/components/header";
import { Footer } from "@/contexts/shared/interfaces/components/footer";
import { Gallery } from "@/contexts/gallery/interfaces/components/gallery";

export default function GalleryPage() {
  return (
    <Workspace>
      <Header />
      <Gallery />
      <Footer />
    </Workspace>
  );
}

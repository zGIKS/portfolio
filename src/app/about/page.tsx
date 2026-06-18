import React from "react";
import { Workspace } from "@/contexts/blog/interfaces/components/workspace";
import { Header } from "@/contexts/shared/interfaces/components/header";
import { Footer } from "@/contexts/shared/interfaces/components/footer";
import { About } from "@/contexts/about/interfaces/components/about";

export default function AboutPage() {
  return (
    <Workspace>
      <Header />
      <About />
      <Footer />
    </Workspace>
  );
}

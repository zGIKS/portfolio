import React from "react";
import { Text } from "@/contexts/shared/interfaces/components/ui/text";
import { ProfileImage } from "./profile-image";

export function About() {
  return (
    <main className="flex-1 flex flex-col justify-start p-6">
      <article className="flex flex-col gap-6 py-4">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          About Me
        </h1>
        <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          <div className="flex-1 text-base text-foreground leading-relaxed font-light flex flex-col gap-6 w-full">
            <Text text="I am a software engineer born in Lima, Peru. From a young age, I discovered my interest in programming, which led me to develop a strong passion for technology, especially software architecture and low-level programming languages." />
            <Text text="I have been using Linux for several years, and throughout that journey, I have explored different distributions. This experience has helped me better understand systems, their configurations, and their possibilities." />
            <Text text="Although my main focus is software architecture, I am also interested in UX/UI design, especially minimalist, functional, and well-structured interfaces." />
            <Text text="I consider myself a collaborative, curious, and committed person. I always try to support my teammates, learn from every experience, and keep improving. I am not satisfied with simply making things work; I like to understand how they are built, what problems they solve, and how they can be optimized." />
            <Text text="I also value learning from mistakes, because I believe every challenge is an opportunity to grow both professionally and personally." />
          </div>
          <ProfileImage />
        </div>
      </article>
    </main>
  );
}

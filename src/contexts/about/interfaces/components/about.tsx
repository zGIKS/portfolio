import React from "react";
import { Text } from "@/contexts/shared/interfaces/components/text";
import { ProfileImage } from "./profile-image";

const BIOGRAPHY_PARAGRAPHS = [
  "I am a software engineer born in Lima, Peru. From a young age, I discovered my interest in programming, which led me to develop a strong passion for technology, especially software architecture and low-level programming languages.",
  "I have been using Linux for several years, and throughout that journey, I have explored different distributions. This experience has helped me better understand systems, their configurations, and their possibilities.",
  "Although my main focus is software architecture, I am also interested in UX/UI design, especially minimalist, functional, and well-structured interfaces.",
  "I consider myself a collaborative, curious, and committed person. I always try to support my teammates, learn from every experience, and keep improving. I am not satisfied with simply making things work; I like to understand how they are built, what problems they solve, and how they can be optimized.",
  "I also value learning from mistakes, because I believe every challenge is an opportunity to grow both professionally and personally.",
];

const BIOGRAPHY_TEXT = BIOGRAPHY_PARAGRAPHS.join("\n\n");

export function About() {
  return (
    <main className="flex-1 px-6 py-8">
      <article className="mx-auto flex w-full max-w-4xl flex-col gap-8 py-4">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          About Me
        </h1>

        <section className="flex flex-col gap-8">
          <div className="lg:hidden">
            <ProfileImage className="mx-auto w-full max-w-[320px] aspect-[1017/1342]" />
          </div>

          <div className="space-y-6 text-lg font-light leading-relaxed text-foreground text-justify hyphens-auto lg:hidden">
            {BIOGRAPHY_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="hidden lg:block">
            <Text
              text={BIOGRAPHY_TEXT}
              whiteSpace="pre-wrap"
              justify
              floatGap={32}
              floatWidth={280}
              floatHeight={370}
              floatComponent={<ProfileImage className="h-full w-full" />}
              className="text-lg font-light leading-relaxed text-foreground hyphens-auto"
            />
          </div>
        </section>
      </article>
    </main>
  );
}

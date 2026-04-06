import { PretextTextBlock } from "@/components/shared/pretext-text-block";

interface AboutSectionProps {
  paragraphs: string[];
}

export function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <div
      id="about"
      className="mt-8 max-w-3xl scroll-mt-24 space-y-4 text-base leading-8 text-white/85 md:text-lg"
    >
      {paragraphs.map((paragraph, index) => (
        <PretextTextBlock
          key={index}
          text={paragraph}
          className={index === 0 ? "" : "text-white/72"}
        />
      ))}
    </div>
  );
}

interface AboutSectionProps {
  paragraphs: string[];
}

export function AboutSection({ paragraphs }: AboutSectionProps) {
  return (
    <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-white/85 md:text-lg">
      <p>{paragraphs[0]}</p>
      <p className="text-white/72">{paragraphs[1]}</p>
    </div>
  );
}

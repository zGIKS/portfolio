import Image from "next/image";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface ArchConfigProps {
  locale: Locale;
}

export function ArchConfig({ locale }: ArchConfigProps) {
  const title = getDictionary(locale).section2.archConfigTitle;

  return (
    <div className="mt-4 bg-primary px-3 py-2">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
        {title}
      </h3>
      <div className="relative w-full overflow-hidden">
        <Image
          src="/arch-config.png"
          alt="Arch config"
          className="h-auto w-full"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    </div>
  );
}

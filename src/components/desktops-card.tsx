import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ArchConfig } from "./section2/arch-config";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface DesktopsCardProps {
  locale: Locale;
}

export function DesktopsCard({ locale }: DesktopsCardProps) {
  const t = getDictionary(locale).desktops;

  return (
    <Card className="w-full gap-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 text-card-foreground shadow-xl backdrop-blur-xl md:max-w-[55.249245rem]">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-foreground">{t.title}</h2>
        <p className="text-muted-foreground">
          {t.description}
        </p>
        <ArchConfig locale={locale} />
        <div className="mt-4 bg-primary px-3 py-2">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
            {t.additionalConfig}
          </h3>
          <div className="relative w-full overflow-hidden">
            <Image
              src="/arch-config2.png"
              alt="Arch config 2"
              className="h-auto w-full"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
        <div className="mt-4 bg-primary px-3 py-2">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
            {t.freshEditorFrontend}
          </h3>
          <div className="relative w-full overflow-hidden">
            <Image
              src="/arch-config3.png"
              alt="Arch config 3"
              className="h-auto w-full"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
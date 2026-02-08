import { SectionHeader } from "../section-shared/section-header";
import { type Locale } from "@/lib/i18n";

interface CurrentOnlineProps {
  locale: Locale;
}

export function CurrentOnline({ locale }: CurrentOnlineProps) {
  const title = locale === "es" ? "En línea ahora" : "Currently Online";

  return (
    <SectionHeader
      title={title}
      className="mb-4 text-chart-2"
    />
  );
}

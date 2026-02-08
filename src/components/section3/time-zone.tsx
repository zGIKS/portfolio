import { SectionHeader } from "../section-shared/section-header";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface CurrentOnlineProps {
  locale: Locale;
}

export function CurrentOnline({ locale }: CurrentOnlineProps) {
  const title = getDictionary(locale).section3.currentOnlineTitle;

  return (
    <SectionHeader
      title={title}
      className="mb-4 text-chart-2"
    />
  );
}

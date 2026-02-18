import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type Locale } from "@/lib/i18n";

interface LanguageSelectProps {
  locale: Locale;
  labels: {
    languageSelectorAria: string;
    language: string;
    languages: { en: string; es: string; pt: string };
  };
  onLocaleChange: (nextLocale: string) => void;
  triggerClassName?: string;
}

export function LanguageSelect({
  locale,
  labels,
  onLocaleChange,
  triggerClassName = "h-auto min-h-0 w-auto gap-1 border-0 bg-transparent px-0 py-0.5 text-xs leading-tight text-white/60 shadow-none hover:text-white focus-visible:ring-0",
}: LanguageSelectProps) {
  return (
    <Select value={locale} onValueChange={onLocaleChange}>
      <SelectTrigger
        aria-label={labels.languageSelectorAria}
        data-size="sm"
        className={triggerClassName}
      >
        <SelectValue placeholder={labels.language} />
      </SelectTrigger>
      <SelectContent className="border-white/10 bg-black/90 text-white">
        <SelectItem value="en">{labels.languages.en}</SelectItem>
        <SelectItem value="es">{labels.languages.es}</SelectItem>
        <SelectItem value="pt">{labels.languages.pt}</SelectItem>
      </SelectContent>
    </Select>
  );
}

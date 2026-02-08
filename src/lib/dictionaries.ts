import en from "@/i18n/en.json";
import es from "@/i18n/es.json";
import pt from "@/i18n/pt.json";
import { type Locale } from "@/lib/i18n";

export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  es,
  pt,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

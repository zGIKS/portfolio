import { SidebarLink } from "./sidebar-link";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

interface BlogProps {
  locale: Locale;
}

export function Blog({ locale }: BlogProps) {
  const t = getDictionary(locale);

  return (
    <SidebarLink
      locale={locale}
      href="blog"
      label={t.section2.titles.blog}
    />
  );
}

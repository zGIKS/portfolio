import { allStackItems } from "@/lib/stack-data";
import { type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { DesktopTooltip } from "./section3/desktop-tooltip";
import { ProfilePageCard } from "./profile-page-card";

interface StackCardProps {
  locale: Locale;
}

export function StackCard({ locale }: StackCardProps) {
  const t = getDictionary(locale);
  const iconSize = "h-9 w-9 sm:h-10 sm:w-10";

  return (
    <ProfilePageCard subtitle={t.section3.techStackTitle} contentClassName="space-y-4">
        <div>
          <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {t.section3.techStackTitle}
          </h2>
          <p className="text-lg font-semibold text-foreground">Total: {allStackItems.length}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
          {allStackItems.map((item) => (
            <DesktopTooltip key={item.name} label={item.name}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[128px] flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-br from-zinc-600/60 via-zinc-700/50 to-zinc-800/65 p-2.5 text-zinc-100 sm:min-h-[140px]"
                aria-label={item.name}
              >
                <div className="text-zinc-100">{item.icon(iconSize)}</div>
                <span className="text-center text-xs text-zinc-100/90">{item.name}</span>
              </a>
            </DesktopTooltip>
          ))}
        </div>
    </ProfilePageCard>
  );
}

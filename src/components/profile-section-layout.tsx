import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import { ProfileBackLink } from "@/components/profile-back-link";
import { ProfilePageCard } from "@/components/profile-page-card";

interface ProfileSectionLayoutProps {
  backHref: string;
  backLabel: string;
  subtitle: string;
  children: ReactNode;
  cardClassName?: string;
  contentClassName?: string;
}

export function ProfileSectionLayout({
  backHref,
  backLabel,
  subtitle,
  children,
  cardClassName = "border-0 bg-transparent shadow-none md:max-w-6xl",
  contentClassName = "p-0 sm:p-0",
}: ProfileSectionLayoutProps) {
  return (
    <AppShell
      showFooter={false}
      contentClassName="flex-col items-center justify-start gap-6 pt-2 pb-6 md:pt-4 md:pb-10"
    >
      <div className="w-full max-w-6xl px-4 md:px-0">
        <ProfileBackLink href={backHref} label={backLabel} />
      </div>

      <ProfilePageCard
        subtitle={subtitle}
        className={cardClassName}
        contentClassName={contentClassName}
      >
        {children}
      </ProfilePageCard>
    </AppShell>
  );
}

import { GIcon } from "@/components/icons/nika";
import { PeruFlag } from "@/components/icons/peru";

interface ProfileHeaderProps {
  countryLabel: string;
}

export function ProfileHeader({ countryLabel }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <div className="relative h-28 w-28 shrink-0">
        <GIcon
          aria-label="Giks logo"
          className="h-full w-full text-white"
        />
      </div>

      <div className="min-w-0">
        <p className="mb-2 text-xs tracking-[0.22em] text-white/55 uppercase">
          giks / home
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Mateo Aleman
        </h1>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70">
          <span>Software Engineering</span>
          <span className="hidden text-white/25 sm:inline">|</span>
          <span className="inline-flex items-center gap-2">
            <PeruFlag className="h-3.5 w-[18px]" />
            {countryLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

import type { ReactNode } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProfilePageCardProps {
  subtitle: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function ProfilePageCard({
  subtitle,
  children,
  className,
  contentClassName,
}: ProfilePageCardProps) {
  return (
    <Card
      className={cn(
        "relative z-10 w-full gap-0 overflow-hidden rounded-none border border-white/10 bg-white/5 p-0 text-card-foreground shadow-xl backdrop-blur-xl md:min-h-full md:max-w-[55.249245rem] md:rounded-xl",
        className
      )}
    >
      <header className="border-b border-white/10 bg-white/10 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/me.webp"
            alt="Profile photo"
            width={84}
            height={84}
            className="h-20 w-20 rounded-sm object-cover object-center ring-1 ring-white/20"
          />
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-semibold text-white">Mateo</h1>
            <p className="truncate text-sm text-white/80">{subtitle}</p>
          </div>
        </div>
      </header>

      <div className={cn("p-4 sm:p-6", contentClassName)}>{children}</div>
    </Card>
  );
}

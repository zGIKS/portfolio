import type { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  media: ReactNode;
  actions?: ReactNode;
  progressLabel?: string;
  progressValue?: number;
  meta?: ReactNode;
}

export function ProjectCard({
  title,
  media,
  actions,
  progressLabel,
  progressValue,
  meta,
}: ProjectCardProps) {
  const percent = Math.max(0, Math.min(100, progressValue ?? 0));

  return (
    <div className="border border-black/10 bg-white p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>{media}</div>
        <div className="flex-1">
          <h3 className="text-sm font-bold text-black">{title}</h3>
        </div>
        {actions && <div className="flex shrink-0 items-start">{actions}</div>}
      </div>
      {meta && <div className="mt-3">{meta}</div>}
      <div className="mt-4">
        <div className="text-xs font-medium text-black/70">
          {progressLabel ?? "Progress"}: {percent}%
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-black/10">
          <div className="h-full rounded-full bg-black" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
}

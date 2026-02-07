"use client";

import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
    <Card className="gap-0 rounded-none border-border bg-card p-4 backdrop-blur-sm">
      <CardHeader className="flex flex-col gap-4 p-0 md:flex-row md:items-start md:justify-between">
        <div>{media}</div>
        <div className="flex-1">
          <CardTitle className="text-sm text-card-foreground">{title}</CardTitle>
        </div>
        {actions && <div className="flex shrink-0 items-start">{actions}</div>}
      </CardHeader>
      {meta && (
        <CardContent className="mt-3 p-0">
          <CardDescription>{meta}</CardDescription>
        </CardContent>
      )}
      <CardContent className="mt-4 p-0">
        <div className="text-sm font-medium leading-none text-muted-foreground">
          {progressLabel ?? "Progress"}: {percent}%
        </div>
        <Progress value={percent} className="mt-2 h-2 rounded-full bg-muted" />
      </CardContent>
    </Card>
  );
}

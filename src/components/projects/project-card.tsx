"use client";

import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  media?: ReactNode;
  actions?: ReactNode;
  meta?: ReactNode;
}

export function ProjectCard({
  title,
  media,
  actions,
  meta,
}: ProjectCardProps) {
  return (
    <Card className="gap-0 rounded-none border-border bg-card p-4 backdrop-blur-sm">
      <CardHeader className="flex flex-col gap-4 p-0 md:flex-row md:items-start md:justify-between">
        {media && <div>{media}</div>}
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
    </Card>
  );
}

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Photo() {
  return (
    <Avatar className="h-32 w-32 rounded-none bg-primary">
      <AvatarImage src="" alt="Profile photo" />
      <AvatarFallback className="rounded-none bg-primary text-primary-foreground text-2xl">
        G
      </AvatarFallback>
    </Avatar>
  );
}

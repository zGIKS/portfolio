"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Photo() {
  return (
    <Avatar className="h-32 w-32 overflow-hidden rounded-none bg-primary">
      <AvatarImage
        src="/me.webp"
        alt="Profile photo"
        className="h-full w-full object-cover object-center"
      />
      <AvatarFallback className="rounded-none bg-primary text-primary-foreground text-2xl">
        G
      </AvatarFallback>
    </Avatar>
  );
}

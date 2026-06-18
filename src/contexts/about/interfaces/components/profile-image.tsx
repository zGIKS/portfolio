import React from "react";
import Image from "next/image";

export function ProfileImage() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border border-border/50 shadow-md">
      <Image
        src="/assets/mateo.png"
        alt="Mateo Aleman"
        fill
        sizes="(max-width: 768px) 128px, 160px"
        priority
        className="object-cover"
      />
    </div>
  );
}

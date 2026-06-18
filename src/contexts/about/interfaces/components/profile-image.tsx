import React from "react";
import Image from "next/image";

interface ProfileImageProps {
  className?: string;
}

export function ProfileImage({ className = "" }: ProfileImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src="/assets/mateo-hat.png"
        alt="Mateo Aleman"
        fill
        priority
        sizes="(max-width: 1024px) 320px, 280px"
        className="object-contain"
      />
    </div>
  );
}

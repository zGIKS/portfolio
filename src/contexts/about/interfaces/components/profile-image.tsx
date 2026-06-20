import React from "react";
import Image from "next/image";

interface ProfileImageProps {
  className?: string;
}

export function ProfileImage({ className = "" }: ProfileImageProps) {
  return (
    <div className={`relative overflow-hidden select-none pointer-events-none ${className}`}>
      <Image
        src="https://res.cloudinary.com/dhwxayqeg/image/upload/v1781919655/cc2e1646-c91e-4528-b102-8e994e849792.png"
        alt="Mateo Aleman"
        fill
        priority
        sizes="(max-width: 1024px) 320px, 280px"
        className="object-contain"
      />
    </div>
  );
}

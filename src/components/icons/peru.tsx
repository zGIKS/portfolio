import React from "react";

interface PeruFlagProps {
  className?: string;
}

export function PeruFlag({ className = "h-6 w-9" }: PeruFlagProps) {
  return (
    <svg
      viewBox="0 0 3 2"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of Peru"
    >
      <rect width="1" height="2" fill="#D52B1E" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#D52B1E" />
    </svg>
  );
}
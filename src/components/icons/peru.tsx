import type { SVGProps } from "react";

export function PeruFlag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 3 2"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of Peru"
      {...props}
    >
      <rect width="1" height="2" fill="#D52B1E" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#D52B1E" />
    </svg>
  );
}

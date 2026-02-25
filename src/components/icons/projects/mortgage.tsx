import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function MortgageIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 335 332"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      {...props}
    >
      <rect
        x="35.6167"
        y="133.612"
        width="263.4423"
        height="196.671"
        fill="white"
        stroke="#E6E6E6"
        strokeWidth="2"
      />
      <path
        d="M2.83838 133.612L167.338 1.2832L331.838 133.612H2.83838Z"
        fill="#F2F2F2"
        stroke="#D9D9D9"
        strokeWidth="2"
      />
    </svg>
  );
}

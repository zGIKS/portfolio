import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function GraphMapIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 304 344"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-full w-full", className)}
      {...props}
    >
      <path d="M152 172V32" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 172L272 112" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 172L272 232" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 172V312" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 172L32 232" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 172L32 112" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 32L272 112" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M272 112V232" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M272 232L152 312" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 312L32 232" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M32 232V112" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M32 112L152 32" stroke="currentColor" strokeWidth="28" strokeLinecap="round" className="text-zinc-500" />
      <path d="M152 222C179.614 222 202 199.614 202 172C202 144.386 179.614 122 152 122C124.386 122 102 144.386 102 172C102 199.614 124.386 222 152 222Z" fill="currentColor" className="text-zinc-200" />
      <path d="M152 64C169.673 64 184 49.6731 184 32C184 14.3269 169.673 0 152 0C134.327 0 120 14.3269 120 32C120 49.6731 134.327 64 152 64Z" fill="currentColor" className="text-zinc-200" />
      <path d="M272 144C289.673 144 304 129.673 304 112C304 94.3269 289.673 80 272 80C254.327 80 240 94.3269 240 112C240 129.673 254.327 144 272 144Z" fill="currentColor" className="text-zinc-200" />
      <path d="M272 264C289.673 264 304 249.673 304 232C304 214.327 289.673 200 272 200C254.327 200 240 214.327 240 232C240 249.673 254.327 264 272 264Z" fill="currentColor" className="text-zinc-200" />
      <path d="M152 344C169.673 344 184 329.673 184 312C184 294.327 169.673 280 152 280C134.327 280 120 294.327 120 312C120 329.673 134.327 344 152 344Z" fill="currentColor" className="text-zinc-200" />
      <path d="M32 264C49.6731 264 64 249.673 64 232C64 214.327 49.6731 200 32 200C14.3269 200 0 214.327 0 232C0 249.673 14.3269 264 32 264Z" fill="currentColor" className="text-zinc-200" />
      <path d="M32 144C49.6731 144 64 129.673 64 112C64 94.3269 49.6731 80 32 80C14.3269 80 0 94.3269 0 112C0 129.673 14.3269 144 32 144Z" fill="currentColor" className="text-zinc-200" />
    </svg>
  );
}

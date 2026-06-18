import type { Metadata } from "next";
import "./globals.css";
import { EB_Garamond } from "next/font/google";
import { cn } from "@/lib/utils";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hello World",
  description: "Minimal Next.js hello world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", ebGaramond.variable)}>
      <body>{children}</body>
    </html>
  );
}

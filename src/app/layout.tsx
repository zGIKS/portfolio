import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mateo Aleman - Software Engineer",
  description: "Portfolio of Mateo Aleman, a software engineering student based in Peru, specializing in backend systems, infrastructure, and security-critical services. Features personal photo, experience, projects, and technical stack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.className} ${ibmPlexMono.variable} antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}

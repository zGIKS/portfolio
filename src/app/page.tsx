import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Mateo Aleman - Software Engineer",
  description:
    "Portfolio of Mateo Aleman, a software engineering student based in Peru, specializing in backend systems, infrastructure, and security-critical services.",
};

export default function Home() {
  redirect(`/${defaultLocale}`);
}

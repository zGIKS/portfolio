import type { Metadata } from "next";
import { HomeCard } from "@/components/home-card";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Mateo Aleman - Software Engineer",
  description: "Portfolio of Mateo Aleman, a software engineering student based in Peru, specializing in backend systems, infrastructure, and security-critical services.",
};

export default function HomePage() {
  return (
    <AppShell>
      <HomeCard />
    </AppShell>
  );
}

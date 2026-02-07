import { HomeCard } from "@/components/home-card";
import { BackgroundSquare } from "@/components/background";

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center bg-black px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
      <BackgroundSquare />
      <HomeCard />
    </main>
  );
}

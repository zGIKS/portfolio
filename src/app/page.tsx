import { HomeCard } from "@/components/home-card";
import { BackgroundSquare } from "@/components/background";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <BackgroundSquare />
      <Header />
      <div className="relative z-10 flex flex-1 justify-center px-0 md:px-[clamp(2rem,1.0816rem+3.9184vw,5rem)]">
        <HomeCard />
      </div>
      <Footer />
    </main>
  );
}

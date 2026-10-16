import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Learning from "@/components/Learning";
import CurrentFocus from "@/components/CurrentFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--text-primary)] selection:text-[var(--bg-primary)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Learning />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

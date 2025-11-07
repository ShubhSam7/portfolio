import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="space-y-20 md:space-y-32 lg:space-y-40">
        <Hero />
        after hero
        <About />
        after about
        <Projects />
        after projects
        <Services />
        after services
        <Clients />
        after client
        <Contact />
        after contract
      </main>
      Footer
      <Footer />
    </div>
  );
}

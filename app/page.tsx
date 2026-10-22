import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Events from "@/components/sections/Events";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />

        {/* Shared wrapper around What We Do and Prove It with connecting thread */}
        <div className="relative bg-[#BFBEB6] overflow-hidden border-b-4 border-[#1A1040]">
          {/* Subtle radial dark tint across the art column for Spider-Man contrast */}
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,_rgba(26,16,64,0.18),_transparent_70%)] pointer-events-none"
            aria-hidden="true"
          />
          <WhatWeDo />
          <Events />
        </div>



        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

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

        {/* Continuous Spider-Man Wrapper for Who We Are, What We Do, and Prove It */}
        <div className="relative bg-[#0a0604] overflow-hidden">
          {/* Continuous vertical Spider-Man thread */}
          <div
            className="absolute inset-y-0 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none z-0 hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative w-full h-full">
              <div
                className="absolute top-0 w-[2px] pointer-events-none z-0 bg-gradient-to-b from-[#f5e9dc]/70 to-[#f5e9dc]/40"
                style={{
                  right: `${260 - 112}px`, // 148px from inner grid right edge (passes 112px from art slot's left edge)
                  bottom: "5rem", // ends where the MJ image will hang at the bottom of Prove It
                }}
              />
            </div>
          </div>

          <About />
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

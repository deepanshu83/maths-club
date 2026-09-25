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
        <div className="relative bg-[#0a0604] overflow-hidden">
          {/* Continuous vertical thread connecting top edge -> Spider-Man -> MJ */}
          <div
            className="absolute inset-y-0 left-0 right-0 max-w-6xl mx-auto px-6 pointer-events-none z-0 hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative w-full h-full">
              <div
                className="absolute top-0 w-[2px] pointer-events-none z-0 -translate-x-1/2"
                style={{
                  right: "145px", // shifted 3px right from 148px to line up with image threads
                  bottom: "177px", // ends exactly at top of MJ's web knot (~440px from top of mj.png)
                  background:
                    "linear-gradient(to bottom, rgba(245,233,220,.7), rgba(245,233,220,.4))",
                }}
              />
            </div>
          </div>

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

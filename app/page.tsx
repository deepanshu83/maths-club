import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatWeDo from "@/components/sections/WhatWeDo";
import Events from "@/components/sections/Events";
import Archive from "@/components/sections/Archive";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Events />
        <Archive />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

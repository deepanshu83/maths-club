import VantaBackground from "@/components/VantaBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[var(--color-background)]"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <VantaBackground />
      </div>
      <div className="absolute inset-0 z-0 bg-[#0a0604]/45" aria-hidden="true" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,88,12,0.15),_transparent_70%)] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-4xl">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight"
          >
            Where Logic
            <br />
            Meets <span className="text-[var(--color-accent)]">Infinity</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

"use client"

import Navigation from "@/components/Navigation"

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="overview"
      aria-labelledby="hero-heading"
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Navigation />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 pt-24 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 font-normal tracking-wide text-sm text-muted-foreground sm:text-base">Tender BSD</p>

          <h1
            id="hero-heading"
            className="mb-8 font-bold leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            <span className="block">Win More</span>
            <span className="block">Tenders in</span>
            <span className="block">Western Australia</span>
          </h1>

          <p className="max-w-4xl mx-auto mb-12 font-normal leading-relaxed text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Expert tender writing and analysis services that help construction businesses secure more contracts with our
            proven 65% win rate methodology.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={scrollToServices}
              className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-full transition-all duration-200 hover:scale-105 hover:bg-blue-700"
            >
              Explore Services
            </button>
            <button className="px-8 py-3 text-base font-medium text-foreground bg-secondary border border-border rounded-full transition-all duration-200 hover:bg-muted">
              Book Free Consultation
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-sm font-normal text-center text-muted-foreground">
            Tender BSD now features industry-leading analysis capabilities.{" "}
            <a
              href="#services"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              Learn more →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

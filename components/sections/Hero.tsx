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

      <div className="flex flex-col items-center min-h-screen px-4 pt-24 sm:px-6 lg:px-8 justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 font-bold text-purple-600 tracking-tight text-lg sm:text-2xl">We help you </p>

          <h1
            id="hero-heading"
            className="mb-6 sm:mb-8 font-extrabold leading-none tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
            style={{ lineHeight: "0.88" }}
          >
            <span className="block">Win More Tenders </span>
            <span className="block tracking-tighter">in Western Australia</span>
          </h1>

          <style jsx>{`
            @media (max-width: 639px) {
              h1 {
                font-size: 5vh !important;
                line-height: 0.88 !important;
              }
            }
          `}</style>

          <p
            className="max-w-4xl mx-auto mb-8 sm:mb-12 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground tracking-tight px-4 sm:px-0"
            style={{ lineHeight: "1.05" }}
          >
            Expert tender writing and analysis services that help construction businesses secure more contracts with our
            proven methodology.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row px-4 sm:px-0">
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 font-semibold text-white rounded-full transition-all duration-200 hover:scale-105 hover:bg-purple-700 bg-purple-600 text-lg sm:text-xl"
            >
              Explore Services
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 text-lg font-semibold text-foreground border rounded-full transition-all duration-200 hover:bg-muted bg-secondary border-border">
              Book Consultation
            </button>
          </div>

          <p className="mt-8 sm:mt-12 text-xs sm:text-sm font-medium text-center text-muted-foreground px-4 sm:px-0">
            Tender BSD now features industry-leading analysis capabilities.{" "}
            <a
              href="#services"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              Learn more →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

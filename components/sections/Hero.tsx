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
          <p className="mb-4 font-medium tracking-wide text-sm text-muted-foreground sm:text-base">Tender BSD</p>

          <h1
            id="hero-heading"
            className="mb-8 font-extrabold leading-none tracking-tight"
            style={{ fontSize: "5vh", lineHeight: "1.1" }}
          >
            <span className="block sm:inline">Win More Tenders </span>
            <span className="block sm:inline">in Western Australia</span>
          </h1>

          <style jsx>{`
            @media (min-width: 640px) {
              h1 {
                font-size: 3.5rem !important;
                line-height: 1.1 !important;
              }
            }
            @media (min-width: 768px) {
              h1 {
                font-size: 4.5rem !important;
                line-height: 1.1 !important;
              }
            }
            @media (min-width: 1024px) {
              h1 {
                font-size: 5.5rem !important;
                line-height: 1.1 !important;
              }
            }
            @media (min-width: 1280px) {
              h1 {
                font-size: 6.5rem !important;
                line-height: 1.1 !important;
              }
            }
            @media (min-width: 1536px) {
              h1 {
                font-size: 7.5rem !important;
                line-height: 1.1 !important;
              }
            }
          `}</style>

          <p
            className="max-w-4xl mx-auto mb-12 font-bold text-xl text-muted-foreground sm:text-2xl md:text-3xl"
            style={{ lineHeight: "1.05" }}
          >
            Expert tender writing and analysis services that help construction businesses secure more contracts with our
            proven 65% win rate methodology.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={scrollToServices}
              className="px-9 py-4 text-lg font-semibold text-white bg-purple-600 rounded-full transition-all duration-200 hover:scale-105 hover:bg-purple-700"
            >
              Explore Services
            </button>
            <button className="px-9 py-4 text-lg font-semibold text-foreground bg-secondary border border-border rounded-full transition-all duration-200 hover:bg-muted">
              Book Free Consultation
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-sm font-medium text-center text-muted-foreground">
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

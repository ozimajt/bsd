"use client"

import Navigation from "@/components/Navigation"

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-6xl mx-auto">
          <p className="eyebrow-text text-gray-600 dark:text-white/60 font-normal mb-4 tracking-wide">Tender BSD</p>
          <h1 className="headline-primary text-fluid-8xl font-bold leading-none mb-8 tracking-tight text-gray-900 dark:text-white">
            <span className="block">Win More</span>
            <span className="block">Tenders in</span>
            <span className="block">Western Australia</span>
          </h1>
          <p className="subheading-text text-fluid-2xl font-normal max-w-4xl mx-auto mb-12 leading-relaxed text-gray-700 dark:text-white/80">
            Expert tender writing and analysis services that help construction businesses secure more contracts with our
            proven 65% win rate methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white text-fluid-base font-medium px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              Explore Services
            </button>
            <button className="border border-gray-300 dark:border-white/30 hover:border-gray-500 dark:hover:border-white/60 text-gray-900 dark:text-white text-fluid-base font-medium px-8 py-3 rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-white/5">
              Book Free Consultation
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="caption-text text-fluid-sm font-normal text-center text-gray-600 dark:text-white/60">
            Tender BSD now features industry-leading analysis capabilities.{" "}
            <a
              href="#services"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Learn more →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

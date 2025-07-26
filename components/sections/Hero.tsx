"use client"

import Navigation from "@/components/Navigation"

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Navigation />
      <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24">
        <div className="text-center max-w-6xl mx-auto">
          <p className="text-muted-foreground text-body-base font-normal mb-4 tracking-wide">Tender BSD</p>
          <h1>
            <span className="block">Win More</span>
            <span className="block">Tenders in</span>
            <span className="block">Western Australia</span>
          </h1>
          <p className="text-muted-foreground text-body-lg max-w-4xl mx-auto my-12">
            Expert tender writing and analysis services that help construction businesses secure more contracts with our
            proven 65% win rate methodology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToServices}
              className="bg-blue-600 hover:bg-blue-700 text-white text-body-base font-medium px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
            >
              Explore Services
            </button>
            <button className="border bg-transparent hover:bg-accent text-foreground text-body-base font-medium px-8 py-3 rounded-full transition-all duration-200">
              Book Free Consultation
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-muted-foreground text-body-sm text-center">
            Tender BSD now features industry-leading analysis capabilities.{" "}
            <a href="#services" className="text-blue-400 hover:text-blue-300 transition-colors">
              Learn more →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

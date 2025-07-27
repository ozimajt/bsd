"use client"

export default function FinalCTA() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="contact" aria-labelledby="cta-heading" className="py-20 bg-background sm:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-heading"
          className="mb-8 text-4xl font-extrabold leading-none tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Ready to Win More Tenders?
        </h2>

        <p className="max-w-4xl mx-auto mb-12 text-lg leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
          Join the construction businesses already transforming their success with our proven methodology.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={scrollToServices}
            className="px-8 py-3 font-semibold text-white bg-purple-600 rounded-full transition-all duration-200 hover:scale-105 hover:bg-purple-700 text-xl"
          >
            Choose Your Service
          </button>
          <button className="px-8 py-3 font-semibold text-foreground bg-secondary border border-border rounded-full transition-all duration-200 hover:bg-muted text-xl">
            Schedule Free Call
          </button>
        </div>
      </div>
    </section>
  )
}

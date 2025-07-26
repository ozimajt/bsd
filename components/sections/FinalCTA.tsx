"use client"

export default function FinalCTA() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2>Ready to Win More Tenders?</h2>
        <p className="text-muted-foreground text-body-lg max-w-4xl mx-auto my-12">
          Join the construction businesses already transforming their success with our proven methodology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="bg-blue-600 hover:bg-blue-700 text-white text-body-base font-medium px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
          >
            Choose Your Service
          </button>
          <button className="border bg-transparent hover:bg-accent text-foreground text-body-base font-medium px-8 py-3 rounded-full transition-all duration-200">
            Schedule Free Call
          </button>
        </div>
      </div>
    </section>
  )
}

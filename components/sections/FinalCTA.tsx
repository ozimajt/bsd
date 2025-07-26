"use client"

export default function FinalCTA() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 sm:py-32 bg-black dark:bg-black light:bg-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white dark:text-white light:text-gray-900 mb-8 tracking-tight leading-none">
          Ready to Win More Tenders?
        </h2>

        <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
          Join the construction businesses already transforming their success with our proven methodology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToServices}
            className="bg-blue-600 hover:bg-blue-700 text-white text-base font-medium px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
          >
            Choose Your Service
          </button>
          <button className="border border-white/30 dark:border-white/30 light:border-gray-300 hover:border-white/60 dark:hover:border-white/60 light:hover:border-gray-500 text-white dark:text-white light:text-gray-900 text-base font-medium px-8 py-3 rounded-full transition-all duration-200 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50">
            Schedule Free Call
          </button>
        </div>
      </div>
    </section>
  )
}

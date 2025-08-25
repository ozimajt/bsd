import Navigation from "@/components/Navigation"

export default function Hero() {
  return (
    <section
      id="overview"
      aria-labelledby="hero-heading"
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
    >
      <Navigation />

      <div className="flex flex-col items-center min-h-screen px-4 pt-24 sm:px-6 lg:px-8 justify-center">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4 font-bold text-purple-600 tracking-tight text-2xl">We help you </p>

          <h1 id="hero-heading" className="mb-8 text-foreground tracking-tight">
            <span className="block sm:inline">Win More Tenders </span>
            <span className="block sm:inline tracking-tighter">in Western Australia</span>
          </h1>

          <h3 className="mx-auto mb-12 text-muted-foreground tracking-tight px-4 sm:px-0">
            Expert tender writing and analysis services that help construction businesses secure more contracts with our
            proven methodology.
          </h3>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row px-4 sm:px-0">
            <a
              href="#services"
              className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-4 font-semibold text-white rounded-full transition-all duration-200 hover:scale-105 hover:bg-purple-700 bg-purple-600 text-lg sm:text-xl"
            >
              Explore Services
            </a>
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

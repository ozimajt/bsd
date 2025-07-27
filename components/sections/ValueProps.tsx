export default function ValueProps() {
  const metrics = [
    {
      value: "65%",
      label: "Win Rate",
      description: "3x Higher than industry average",
    },
    {
      value: "2",
      label: "Hours",
      description: "Lightning Fast analysis",
    },
    {
      value: "15+",
      label: "Years",
      description: "WA Expertise",
    },
    {
      value: "10x",
      label: "ROI",
      description: "Guarantee",
    },
  ]

  return (
    <section
      id="results"
      aria-labelledby="value-props-heading"
      className="border-t border-border py-16 sm:py-24 lg:py-32 xl:py-40 bg-secondary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2
            id="value-props-heading"
            className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground"
          >
            Proven Results
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-muted-foreground tracking-normal font-semibold text-lg sm:text-xl lg:text-2xl leading-5 sm:leading-6 px-4 sm:px-0">
            We are a local team of experienced and award winning professionals, each specialising in crucial tendering
            process. Our track record speaks for itself with measurable outcomes that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="p-6 sm:p-8 transition-all duration-300 bg-background border rounded-2xl shadow-sm border-border hover:scale-105 hover:shadow-md hover:bg-muted/30 dark:bg-white/5 dark:hover:bg-white/10 dark:hover:border-white/20">
                <div className="mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                  {metric.value}
                </div>
                <div className="mb-2 text-lg sm:text-xl lg:text-2xl font-bold text-foreground">{metric.label}</div>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

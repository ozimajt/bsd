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
    <section id="results" aria-labelledby="value-props-heading" className="py-20 bg-secondary sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="value-props-heading"
            className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Proven Results
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-muted-foreground tracking-normal font-semibold text-2xl leading-[2.05rem]">
            We are a local team of experienced and award winning professionals, each specialising in crucial  tendering process. Our track record speaks for itself with measurable outcomes that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="p-8 transition-all duration-300 bg-background border rounded-2xl shadow-sm border-border dark:bg-white/5 hover:scale-105 hover:shadow-md dark:hover:border-white/20">
                <div className="mb-4 text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                  {metric.value}
                </div>
                <div className="mb-2 text-xl font-bold text-foreground sm:text-2xl">{metric.label}</div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

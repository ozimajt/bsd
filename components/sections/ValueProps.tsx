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
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Proven Results</h2>
          <p className="text-muted-foreground text-body-lg max-w-3xl mx-auto mt-6">
            Our track record speaks for itself with measurable outcomes that drive your business forward.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="bg-background hover:bg-accent rounded-2xl p-8 transition-all duration-300 hover:scale-105 border">
                <div className="text-7xl font-bold mb-4">{metric.value}</div>
                <div className="text-2xl font-semibold mb-2">{metric.label}</div>
                <p className="text-muted-foreground text-body-sm">{metric.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

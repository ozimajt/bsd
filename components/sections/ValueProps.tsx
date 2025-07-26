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
    <section className="py-20 sm:py-32 bg-black dark:bg-black light:bg-gray-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white light:text-gray-900 mb-6 tracking-tight">
            Proven Results
          </h2>
          <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself with measurable outcomes that drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/5 dark:bg-white/5 light:bg-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:scale-105 border border-white/10 dark:border-white/10 light:border-gray-200 shadow-lg light:shadow-xl">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-white dark:text-white light:text-gray-900 mb-4 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xl sm:text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                  {metric.label}
                </div>
                <p className="text-white/70 dark:text-white/70 light:text-gray-600 text-sm sm:text-base leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

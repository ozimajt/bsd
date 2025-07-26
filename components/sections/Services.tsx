export default function Services() {
  const services = [
    {
      name: "Tender Bash",
      price: "$350",
      duration: "2-hour analysis",
      description: "Quick tender review and strategic recommendations",
      features: [
        "Comprehensive tender analysis",
        "Scoring strategy recommendations",
        "Risk assessment report",
        "48-hour turnaround",
      ],
      popular: false,
    },
    {
      name: "Tender Smash",
      price: "$2,500",
      duration: "Complete response",
      description: "Full tender writing and submission service",
      features: [
        "Complete tender response writing",
        "Technical specification review",
        "Compliance verification",
        "Professional presentation",
        "Unlimited revisions",
        "7-day turnaround",
      ],
      popular: true,
    },
    {
      name: "Tender Dash",
      price: "$4,500",
      duration: "Full pipeline management",
      description: "End-to-end tender pipeline management",
      features: [
        "Ongoing tender identification",
        "Pipeline management system",
        "Monthly strategy sessions",
        "Priority tender writing",
        "Performance analytics",
        "Dedicated account manager",
      ],
      popular: false,
    },
  ]

  return (
    <section
      id="services"
      className="py-20 sm:py-32 bg-black dark:bg-black light:bg-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white light:text-gray-900 mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Choose the perfect solution for your tender success needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`bg-white/5 dark:bg-white/5 light:bg-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:scale-105 border h-full flex flex-col shadow-lg light:shadow-xl ${
                  service.popular
                    ? "border-blue-500/50 bg-blue-500/5 dark:border-blue-500/50 dark:bg-blue-500/5 light:border-blue-200 light:bg-blue-50"
                    : "border-white/10 dark:border-white/10 light:border-gray-200"
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white dark:text-white light:text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <div className="text-4xl sm:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
                    {service.price}
                  </div>
                  <p className="text-white/60 dark:text-white/60 light:text-gray-600 text-sm font-medium">
                    {service.duration}
                  </p>
                  <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-base mt-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-white/80 dark:text-white/80 light:text-gray-600 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                    service.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border border-white/30 dark:border-white/30 light:border-gray-300 hover:border-white/60 dark:hover:border-white/60 light:hover:border-gray-500 text-white dark:text-white light:text-gray-900 hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-gray-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

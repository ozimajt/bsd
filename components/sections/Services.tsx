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
    <section id="services" aria-labelledby="services-heading" className="py-20 bg-background sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="services-heading"
            className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Our Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground sm:text-2xl font-semibold">
            Choose the perfect solution for your tender success needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              {service.popular && (
                <div className="absolute z-10 transform -translate-x-1/2 -top-4 left-1/2">
                  <span className="px-4 py-2 text-xs font-medium text-white bg-purple-600 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`flex flex-col h-full p-8 transition-all duration-300 border rounded-2xl shadow-sm hover:scale-105 hover:shadow-md ${
                  service.popular
                    ? "bg-purple-50 border-purple-200 dark:bg-purple-500/5 dark:border-purple-500/50"
                    : "bg-secondary border-border dark:bg-white/5"
                }`}
              >
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">{service.name}</h3>
                  <div className="mb-2 text-4xl font-extrabold text-foreground sm:text-5xl">{service.price}</div>
                  <p className="text-sm font-semibold text-muted-foreground">{service.duration}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.description}</p>
                </div>

                <div className="flex-1">
                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 text-purple-500 dark:text-purple-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full px-6 py-3 font-semibold rounded-full transition-all duration-200 hover:scale-105 ${
                    service.popular
                      ? "bg-purple-600 text-white hover:bg-purple-700"
                      : "bg-white text-foreground border border-border hover:bg-muted dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20"
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

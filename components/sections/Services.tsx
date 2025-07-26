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
    <section id="services" className="section-padding bg-light-background dark:bg-dark-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Our Services</h2>
          <p className="section-description">Choose the perfect solution for your tender success needs.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group h-full">
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className={`pricing-card h-full flex flex-col ${service.popular ? "pricing-card-popular" : ""}`}>
                <div className="text-center mb-8">
                  <h3 className="card-title mb-2">{service.name}</h3>
                  <div className="text-fluid-5xl font-bold mb-2">{service.price}</div>
                  <p className="text-sm font-medium text-light-muted-foreground dark:text-dark-muted-foreground">
                    {service.duration}
                  </p>
                  <p className="text-base mt-4 leading-relaxed">{service.description}</p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm leading-relaxed text-light-secondary-foreground dark:text-dark-secondary-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className={service.popular ? "cta-button-primary w-full" : "cta-button-secondary w-full"}>
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

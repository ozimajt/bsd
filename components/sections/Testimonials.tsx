export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Tender BSD transformed our success rate. We went from winning 1 in 5 tenders to 3 in 5. The ROI has been incredible.",
      name: "Sarah Mitchell",
      company: "Mitchell Construction",
      role: "Managing Director",
    },
    {
      quote:
        "The expertise in WA regulations saved us from costly compliance issues. Their analysis is thorough and actionable.",
      name: "David Chen",
      company: "Chen Building Group",
      role: "Operations Manager",
    },
    {
      quote:
        "Fast turnaround without compromising quality. They understand the pressure we're under and deliver every time.",
      name: "Lisa Thompson",
      company: "Thompson Contractors",
      role: "Business Development",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-black dark:bg-black light:bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white light:text-gray-900 mb-6 tracking-tight">
            Client Success
          </h2>
          <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Hear from construction businesses who've transformed their tender success with our expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 dark:bg-white/5 light:bg-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:scale-105 border border-white/10 dark:border-white/10 light:border-gray-200 h-full flex flex-col shadow-lg light:shadow-xl">
                <blockquote className="text-white/90 dark:text-white/90 light:text-gray-700 text-lg leading-relaxed mb-8 flex-1">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 dark:bg-white/10 light:bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white dark:text-white light:text-gray-700 font-semibold text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="text-white dark:text-white light:text-gray-900 font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 dark:text-white/60 light:text-gray-600 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

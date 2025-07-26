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
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 bg-background sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="testimonials-heading"
            className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Client Success
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Hear from construction businesses who've transformed their tender success with our expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="flex flex-col h-full p-8 transition-all duration-300 bg-secondary border rounded-2xl shadow-sm border-border dark:bg-white/5 hover:scale-105 hover:shadow-md dark:hover:border-white/20">
                <blockquote className="flex-1 mb-8 text-lg leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-muted dark:bg-white/10">
                    <span className="text-lg font-bold text-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
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

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
    <section className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Client Success</h2>
          <p className="text-muted-foreground text-body-lg max-w-3xl mx-auto mt-6">
            Hear from construction businesses who've transformed their tender success with our expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-secondary hover:bg-muted rounded-2xl p-8 transition-all duration-300 hover:scale-105 border h-full flex flex-col">
                <blockquote className="text-foreground text-body-base mb-8 flex-1">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mr-4">
                    <span className="font-semibold text-lg">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-body-base">{testimonial.name}</div>
                    <div className="text-muted-foreground text-body-sm">
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

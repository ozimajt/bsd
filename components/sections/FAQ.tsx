"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What's your typical turnaround time?",
      answer:
        "Our Tender Bash service delivers results in 48 hours, Tender Smash in 7 days, and Tender Dash provides ongoing support with priority response times.",
    },
    {
      question: "What types of tenders do you handle?",
      answer:
        "We specialize in construction, infrastructure, and government tenders across Western Australia, with particular expertise in compliance and technical requirements.",
    },
    {
      question: "Do you guarantee results?",
      answer:
        "While we can't guarantee tender wins (as final decisions rest with clients), we guarantee a 10x ROI on our services or provide additional support at no cost.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer:
        "All client information is protected under strict confidentiality agreements. We maintain secure systems and never share sensitive business information.",
    },
    {
      question: "Can you help with urgent tenders?",
      answer:
        "Yes, we offer expedited services for urgent tenders. Contact us immediately and we'll assess if we can meet your deadline with our quality standards.",
    },
  ]

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border py-16 sm:py-24 lg:py-32 xl:py-40 bg-secondary"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2
            id="faq-heading"
            className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground"
          >
            Frequently Asked
          </h2>
          <p className="leading-relaxed text-muted-foreground font-semibold text-lg sm:text-xl lg:text-2xl px-4 sm:px-0">
            Get answers to common questions about our tender services.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden border rounded-xl sm:rounded-2xl border-border bg-background shadow-sm"
            >
              <h3>
                <button
                  className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left transition-colors bg-background hover:bg-muted/50 dark:bg-white/5 dark:hover:bg-white/10"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="pr-4 sm:pr-6 lg:pr-8 text-base sm:text-lg lg:text-xl font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <svg
                    className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 text-muted-foreground ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </h3>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                  <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground py-[1em]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

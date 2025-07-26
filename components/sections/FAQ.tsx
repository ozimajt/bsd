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
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>Frequently Asked</h2>
          <p className="text-muted-foreground text-body-lg mt-6">
            Get answers to common questions about our tender services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border bg-background rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left hover:bg-accent transition-colors flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-foreground text-xl font-medium pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 pt-2">
                  <p className="text-muted-foreground text-body-base">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

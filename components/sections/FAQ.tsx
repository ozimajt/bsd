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
    <section className="py-20 sm:py-32 bg-black dark:bg-black light:bg-gray-50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white dark:text-white light:text-gray-900 mb-6 tracking-tight">
            Frequently Asked
          </h2>
          <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-lg sm:text-xl leading-relaxed">
            Get answers to common questions about our tender services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 dark:border-white/10 light:border-gray-200 rounded-2xl overflow-hidden shadow-lg light:shadow-xl"
            >
              <button
                className="w-full px-8 py-6 text-left bg-white/5 dark:bg-white/5 light:bg-white hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-50 transition-colors flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-white dark:text-white light:text-gray-900 text-lg sm:text-xl font-medium pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-white/60 dark:text-white/60 light:text-gray-600 transition-transform duration-200 flex-shrink-0 ${
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
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-base sm:text-lg leading-relaxed">
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

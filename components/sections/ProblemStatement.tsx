"use client"

import { useState } from "react"

export default function ProblemStatement() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  const cards = [
    {
      icon: "⏰",
      headline: "Racing Against Deadlines",
      subtext:
        "When tender deadlines collide with your busiest periods, quality suffers. You need weeks to prepare, but only have days.",
      solution: "2-hour tender analysis • 5-day complete responses",
    },
    {
      icon: "📋",
      headline: "Navigating Requirements",
      subtext:
        "Government tender documents can run hundreds of pages. Missing one small requirement means automatic disqualification.",
      solution: "Expert compliance review • Requirements mapping",
    },
    {
      icon: "👥",
      headline: "Your Best People Stuck at Desks",
      subtext:
        "Project managers writing proposals instead of managing sites. Technical experts formatting documents instead of solving problems.",
      solution: "Dedicated tender team • Free up your experts",
    },
    {
      icon: "💡",
      headline: "Understanding What They Really Want",
      subtext: "Each agency has unwritten preferences. What works for Main Roads might fail for Water Corporation.",
      solution: "WA agency specialists • Insider knowledge",
    },
  ]

  return (
    <>
      {/* Section Divider */}
      <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>

      <section
        id="about"
        aria-labelledby="challenge-heading"
        className="py-32 bg-white dark:bg-black text-black dark:text-white sm:py-40"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-20 text-left max-w-7xl mx-auto">
            <h2 id="challenge-heading" className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Transform Your Tender Challenges Into Winning Submissions
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                >
                  <div className="h-full bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700">
                    <div className="p-16">
                      {/* Icon */}
                      <div className="text-4xl mb-6 text-left">{card.icon}</div>

                      {/* Headline */}
                      <h3 className="text-xl font-bold mb-4 text-left leading-tight">{card.headline}</h3>

                      {/* Subtext */}
                      <p
                        className="text-xl text-gray-600 dark:text-gray-400 mb-6 text-left"
                        style={{ lineHeight: "1.25rem" }}
                      >
                        {card.subtext}
                      </p>

                      {/* Solution Preview */}
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-left">
                        {card.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlight Modal */}
          {selectedCard !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <div className="max-w-4xl mx-4 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl">
                <div className="p-16">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h3 className="text-4xl font-bold mb-2 text-left">Your Tender Success System</h3>
                      <p className="text-xl text-gray-600 dark:text-gray-400 text-left">
                        Tender BSD takes the complexity out of winning
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedCard(null)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <p
                    className="text-xl mb-8 text-left text-gray-800 dark:text-gray-200"
                    style={{ lineHeight: "1.25rem" }}
                  >
                    After analyzing your tender opportunity, our WA specialists craft responses that showcase your
                    strengths in the language evaluators want to see. With rapid turnaround and proven frameworks,
                    you'll submit with confidence while others scramble to meet deadlines.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="text-left">
                      <h4 className="font-bold mb-2">Rapid Response</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Know viability in 2 hours, complete submissions in 5 days
                      </p>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold mb-2">Priority Processing</h4>
                      <p className="text-gray-600 dark:text-gray-400">Jump the queue with our fast-track service</p>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold mb-2">Expert Team</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Former government evaluators and industry specialists
                      </p>
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold mb-2">Local Advantage</h4>
                      <p className="text-gray-600 dark:text-gray-400">Deep knowledge of WA procurement processes</p>
                    </div>
                  </div>

                  <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
                    Start Winning More Tenders
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Supporting Text */}
          <div className="max-w-7xl mx-auto text-left">
            <p className="text-xl text-gray-600 dark:text-gray-400" style={{ lineHeight: "1.25rem" }}>
              Powered by local expertise and proven methodologies. With deep understanding of WA government requirements
              and evaluation criteria, our tender specialists ensure your submissions stand out for all the right
              reasons. We handle the paperwork complexity so you can focus on what you do best – delivering great
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
    </>
  )
}

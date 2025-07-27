"use client"

import { useState } from "react"

export default function ProblemStatement() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cards = [
    {
      icon: "⏰",
      headline: "Racing Against Deadlines",
      subtext:
        "When tender deadlines collide with your busiest periods, quality suffers. You need weeks to prepare, but only have days.",
      solution: "2-hour tender analysis • 5-day complete responses",
    },
    {
      icon: "🧩",
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
      <section id="about" aria-labelledby="challenge-heading" className="py-32 bg-background text-foreground sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Section Title */}
          <div className="mb-20">
            <h2 id="challenge-heading" className="mb-8 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Transform Your Tender Challenges Into Winning Submissions
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-gray-300 dark:hover:border-gray-700"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="p-16">
                  <div className="text-5xl mb-8">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{card.headline}</h3>
                  <p className="text-xl text-muted-foreground mb-6" style={{ lineHeight: "1.25rem" }}>
                    {card.subtext}
                  </p>
                  <p className="text-base font-semibold text-foreground">{card.solution}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting Text */}
          <div className="max-w-4xl">
            <p className="text-xl text-muted-foreground" style={{ lineHeight: "1.25rem" }}>
              Powered by local expertise and proven methodologies. With deep understanding of WA government requirements
              and evaluation criteria, our tender specialists ensure your submissions stand out for all the right
              reasons. We handle the paperwork complexity so you can focus on what you do best – delivering great
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Highlight Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/50 backdrop-blur-xl animate-in fade-in-0"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-4xl mx-4 bg-gray-100 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-16">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-4xl font-bold mb-2">Your Tender Success System</h3>
                  <p className="text-xl text-muted-foreground">Tender BSD takes the complexity out of winning</p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-3xl leading-none"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              <p className="text-xl mb-12" style={{ lineHeight: "1.25rem" }}>
                After analyzing your tender opportunity, our WA specialists craft responses that showcase your strengths
                in the language evaluators want to see. With rapid turnaround and proven frameworks, you'll submit with
                confidence while others scramble to meet deadlines.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12 text-left">
                <div>
                  <h4 className="font-bold">Rapid Response</h4>
                  <p className="text-muted-foreground">Know viability in 2 hours, complete submissions in 5 days</p>
                </div>
                <div>
                  <h4 className="font-bold">Priority Processing</h4>
                  <p className="text-muted-foreground">Jump the queue with our fast-track service</p>
                </div>
                <div>
                  <h4 className="font-bold">Expert Team</h4>
                  <p className="text-muted-foreground">Former government evaluators and industry specialists</p>
                </div>
                <div>
                  <h4 className="font-bold">Local Advantage</h4>
                  <p className="text-muted-foreground">Deep knowledge of WA procurement processes</p>
                </div>
                <div>
                  <h4 className="font-bold">Clear Communication</h4>
                  <p className="text-muted-foreground">Complex capabilities translated into winning narratives</p>
                </div>
              </div>

              <button className="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
                Start Winning More Tenders
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

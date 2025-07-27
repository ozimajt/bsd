"use client"

import { useState } from "react"
import { Clock, FileText, Users, Lightbulb, X, CheckCircle2 } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    headline: "Racing Against Deadlines",
    subtext:
      "When tender deadlines collide with your busiest periods, quality suffers. You need weeks to prepare, but only have days.",
    solution: "2-hour tender analysis • 5-day complete responses",
  },
  {
    icon: FileText,
    headline: "Navigating Requirements",
    subtext:
      "Government tender documents can run hundreds of pages. Missing one small requirement means automatic disqualification.",
    solution: "Expert compliance review • Requirements mapping",
  },
  {
    icon: Users,
    headline: "Your Best People Stuck at Desks",
    subtext:
      "Project managers writing proposals instead of managing sites. Technical experts formatting documents instead of solving problems.",
    solution: "Dedicated tender team • Free up your experts",
  },
  {
    icon: Lightbulb,
    headline: "Understanding What They Really Want",
    subtext: "Each agency has unwritten preferences. What works for Main Roads might fail for Water Corporation.",
    solution: "WA agency specialists • Insider knowledge",
  },
]

const keyBenefits = [
  "Rapid Response: Know viability in 2 hours, complete submissions in 5 days",
  "Priority Processing: Jump the queue with our fast-track service",
  "Expert Team: Former government evaluators and industry specialists",
  "Local Advantage: Deep knowledge of WA procurement processes",
  "Clear Communication: Complex capabilities translated into winning narratives",
]

export default function ProblemStatement() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        id="about"
        aria-labelledby="challenge-heading"
        className="border-t border-border py-32 sm:py-40 bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Main Section Header */}
          <div className="w-full text-left p-16">
            <h2 id="challenge-heading" className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 pr-[26rem]">
              Transform Your Tender Challenges Into Winning Submissions
            </h2>

            {/* Supporting Text - moved directly after heading */}
            <p className="font-semibold text-2xl text-gray-400 leading-[1.75rem] max-w-5xl pr-[17rem]">
              Powered by local expertise and proven methodologies. With deep understanding of WA government requirements
              and evaluation criteria, our tender specialists ensure your submissions stand out for all the right
              reasons. We handle the paperwork complexity so you can focus on what you do best – delivering great
              projects.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="p-16 bg-gray-900/50 border border-gray-800 rounded-3xl space-y-6 text-left">
                <challenge.icon className="w-10 h-10 text-gray-400" />
                <h3 className="text-3xl font-bold text-white">{challenge.headline}</h3>
                <p className="text-xl text-gray-400 leading-tight">{challenge.subtext}</p>
                <p className="text-xl text-gray-500 font-semibold leading-tight">{challenge.solution}</p>
              </div>
            ))}
          </div>

          {/* Feature Highlight Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="p-16 bg-gray-900/50 border border-gray-800 rounded-3xl text-left cursor-pointer hover:border-gray-700 transition-colors"
          >
            <h3 className="text-4xl font-bold text-white mb-4">Your Tender Success System</h3>
            <p className="text-xl text-gray-400 leading-tight max-w-4xl">
              Tender BSD takes the complexity out of winning. After analyzing your tender opportunity, our WA
              specialists craft responses that showcase your strengths in the language evaluators want to see.
            </p>
            <span className="mt-6 inline-block text-xl font-semibold text-purple-400">Learn more →</span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" onClick={() => setIsModalOpen(false)}></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 border border-gray-800 rounded-3xl p-16 overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="space-y-8 text-left">
              <h3 className="text-4xl font-bold text-white">Your Tender Success System</h3>
              <p className="text-2xl text-gray-400">Tender BSD takes the complexity out of winning</p>

              <p className="text-xl text-gray-300 leading-relaxed">
                After analyzing your tender opportunity, our WA specialists craft responses that showcase your strengths
                in the language evaluators want to see. With rapid turnaround and proven frameworks, you'll submit with
                confidence while others scramble to meet deadlines.
              </p>

              <ul className="space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-xl text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-purple-400 mr-4 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-8 px-8 py-4 bg-purple-600 text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition-colors">
                Start Winning More Tenders
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import { useState } from "react"
import { Clock, FileText, Users, Lightbulb, X, CheckCircle2 } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    headline: "Racing Against Deadlines",
    subtext:
      "When tender deadlines collide with your busiest periods, quality suffers. You need weeks to prepare, but only have days. Our 2-hour analysis and 5-day complete responses keep you ahead of the competition.",
  },
  {
    icon: FileText,
    headline: "Navigating Requirements",
    subtext:
      "Government tender documents can run hundreds of pages. Missing one small requirement means automatic disqualification. Our expert compliance review and requirements mapping ensure nothing is missed.",
  },
  {
    icon: Users,
    headline: "Your Best People Stuck at Desks",
    subtext:
      "Project managers writing proposals instead of managing sites. Technical experts formatting documents instead of solving problems. Our dedicated tender team frees up your experts to focus on what they do best.",
  },
  {
    icon: Lightbulb,
    headline: "Understanding What They Really Want",
    subtext:
      "Each agency has unwritten preferences. What works for Main Roads might fail for Water Corporation. Our WA agency specialists bring insider knowledge to every submission.",
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
        className="border-t border-border py-16 sm:py-24 lg:py-32 xl:py-40 bg-black dark:bg-black text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 lg:space-y-24">
          {/* Main Section Header */}
          <div className="w-full text-left p-4 sm:p-8 lg:p-16">
            <h2
              id="challenge-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 sm:mb-8 pr-0 lg:pr-[26rem]"
            >
              Transform Your Tender Challenges Into Winning Submissions
            </h2>

            {/* Supporting Text */}
            <p className="font-semibold text-lg sm:text-xl lg:text-2xl leading-[1.4rem] sm:leading-[1.6rem] lg:leading-[1.75rem] max-w-full lg:max-w-5xl pr-0 lg:pr-[17rem] mb-12 sm:mb-16">
              <span className="text-purple-400">Powered by local expertise and proven methodologies.</span>{" "}
              <span className="text-gray-400">
                With deep understanding of WA government requirements and evaluation criteria, our tender specialists
                ensure your submissions stand out for all the right reasons. We handle the paperwork complexity so you
                can focus on what you do best – delivering great projects.
              </span>
            </p>

            {/* Apple-style Feature Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-x-24 lg:gap-y-16 max-w-full lg:max-w-6xl">
              {challenges.map((challenge, index) => (
                <div key={index} className="pr-0 lg:pr-[9em]">
                  <challenge.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-[1.4rem]" strokeWidth={1.5} />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-[1.4rem]">{challenge.headline}</h3>
                  <p className="text-gray-400 leading-[1.4rem] font-medium text-lg sm:text-xl">{challenge.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlight Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="p-6 sm:p-12 lg:p-16 bg-gray-900/50 border border-gray-800 rounded-2xl sm:rounded-3xl text-left cursor-pointer hover:border-gray-700 transition-colors mx-4 sm:mx-0"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Your Tender Success System
            </h3>
            <p className="text-lg sm:text-xl text-gray-400 leading-tight max-w-full lg:max-w-4xl">
              Tender BSD takes the complexity out of winning. After analyzing your tender opportunity, our WA
              specialists craft responses that showcase your strengths in the language evaluators want to see.
            </p>
            <span className="mt-4 sm:mt-6 inline-block text-lg sm:text-xl font-semibold text-purple-400">
              Learn more →
            </span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" onClick={() => setIsModalOpen(false)}></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 overflow-y-auto">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-gray-500 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="space-y-6 sm:space-y-8 text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Your Tender Success System</h3>
              <p className="text-xl sm:text-2xl text-gray-400">Tender BSD takes the complexity out of winning</p>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                After analyzing your tender opportunity, our WA specialists craft responses that showcase your strengths
                in the language evaluators want to see. With rapid turnaround and proven frameworks, you'll submit with
                confidence while others scramble to meet deadlines.
              </p>

              <ul className="space-y-3 sm:space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-lg sm:text-xl text-gray-300">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 sm:mt-8 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white text-lg font-semibold rounded-full hover:bg-purple-700 transition-colors">
                Start Winning More Tenders
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isModalOpen])

  return (
    <>
      <section
        id="about"
        aria-labelledby="challenge-heading"
        className="border-t border-border py-32 sm:py-40 bg-secondary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Main Section Header */}
          <div className="w-full text-left p-16">
            <h2 id="challenge-heading" className="text-foreground mb-8 lg:pr-[22rem]">
              Transform Your Tender Challenges Into Winning Submissions
            </h2>

            {/* Supporting Text - moved directly after heading */}
            <h5 className="mb-16 lg:pr-[22rem]">
              <span className="text-purple-600 dark:text-purple-400">
                Powered by local expertise and proven methodologies.
              </span>{" "}
              <span className="text-muted-foreground">
                With deep understanding of WA government requirements and evaluation criteria, our tender specialists
                ensure your submissions stand out for all the right reasons. We handle the paperwork complexity so you
                can focus on what you do best – delivering great projects.
              </span>
            </h5>

            {/* Apple-style Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 max-w-6xl">
              {challenges.map((challenge, index) => (
                <div key={index} className="pr-[9em]">
                  <challenge.icon className="w-12 h-12 text-foreground mb-[1.4rem]" strokeWidth={1.5} />
                  <h4 className="text-foreground mb-[1.4rem]">{challenge.headline}</h4>
                  <h6 className="text-muted-foreground">{challenge.subtext}</h6>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlight Card */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="p-16 bg-background border border-border rounded-3xl text-left cursor-pointer hover:bg-muted/30 transition-colors shadow-sm"
          >
            <h3 className="text-foreground mb-4">Your Tender Success System</h3>
            <p className="text-xl text-muted-foreground leading-tight">
              Tender BSD takes the complexity out of winning. After analyzing your tender opportunity, our WA
              specialists craft responses that showcase your strengths in the language evaluators want to see.
            </p>
            <span className="mt-6 inline-block text-xl font-semibold text-purple-600 dark:text-purple-400">
              Learn more →
            </span>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 dark:bg-black/70 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-3xl p-16 overflow-y-auto shadow-xl">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="space-y-8 text-left">
              <h3 id="modal-heading" className="text-foreground">
                Your Tender Success System
              </h3>
              <p className="text-2xl text-muted-foreground">Tender BSD takes the complexity out of winning</p>

              <p className="text-xl text-muted-foreground leading-relaxed">
                After analyzing your tender opportunity, our WA specialists craft responses that showcase your strengths
                in the language evaluators want to see. With rapid turnaround and proven frameworks, you'll submit with
                confidence while others scramble to meet deadlines.
              </p>

              <ul className="space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-xl text-muted-foreground">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-4 mt-1 flex-shrink-0" />
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

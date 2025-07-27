export default function ProblemStatement() {
  const challenges = [
    {
      category: "Time Drain",
      items: [
        "You're burning 2-3 weeks per tender, pulling your best people off billable work",
        "Late nights formatting documents instead of planning tomorrow's site activities",
      ],
    },
    {
      category: "Knowledge Gaps",
      items: [
        "Government tender language feels like a foreign language",
        "Missing one compliance requirement = instant disqualification",
        "WAIPS protocols change faster than you can keep up",
      ],
    },
    {
      category: "Competitive Disadvantage",
      items: [
        "Your competitors have dedicated tender teams while you're juggling everything",
        "Professional firms are winning 'your' contracts with polished submissions",
      ],
    },
    {
      category: "Opportunity Cost",
      items: [
        "While you're writing one tender, three more opportunities pass by",
        "Your team's morale drops with each rejection letter",
      ],
    },
  ]

  const solutions = [
    {
      title: "Local Knowledge That Wins",
      points: [
        "We've decoded every WA government agency's preferences",
        "Direct relationships with procurement officers",
        "We know which buzzwords open doors and which ones close them",
      ],
    },
    {
      title: "Speed That Beats Deadlines",
      points: [
        "Get tender viability analysis in 2 hours (not 2 days)",
        "Complete professional responses in 5 days (not 3 weeks)",
        "Submit early while competitors scramble at the deadline",
      ],
    },
    {
      title: "Results That Speak Volumes",
      points: [
        "65% win rate (vs 45% industry average)",
        "$47M in contracts won for WA businesses last year",
        "3.2x ROI average for our clients",
      ],
    },
    {
      title: "Specialized Support Where It Matters",
      points: [
        "Aboriginal business specialists on staff",
        "Navigate cultural protocols and procurement targets",
        "Access to Aboriginal business networks and partnerships",
        "Turn your Aboriginal business status into a competitive advantage",
      ],
    },
  ]

  return (
    <section id="about" aria-labelledby="challenge-heading" className="py-20 bg-secondary sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2
            id="challenge-heading"
            className="mb-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            The Tender Trap: Why 55% of WA Businesses Lose Winnable Contracts
          </h2>
        </div>

        {/* Opening Statement */}
        <div className="mb-20 text-center">
          <p className="max-w-5xl mx-auto text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
            "Every month, WA construction companies waste 80+ hours on tender submissions that never win. Meanwhile,
            your competitors are on-site, building relationships and delivering projects."
          </p>
        </div>

        {/* The Challenge */}
        <div className="mb-20">
          <h3 className="mb-12 text-3xl font-extrabold text-center text-foreground sm:text-4xl">
            The Real Cost of Going It Alone
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {challenges.map((challenge, index) => (
              <div key={index} className="group">
                <div className="p-8 transition-all duration-300 bg-background border border-border rounded-2xl shadow-sm dark:bg-white/5 hover:scale-105 hover:shadow-md dark:hover:border-white/20">
                  <h4 className="mb-6 text-2xl font-bold text-purple-600 dark:text-purple-400">{challenge.category}</h4>
                  <ul className="space-y-4">
                    {challenge.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base leading-relaxed text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Bridge */}
        <div className="mb-16 text-center">
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 sm:text-3xl">
            But here's what the winning 45% know that you don't...
          </p>
        </div>

        {/* The Solution */}
        <div className="mb-16">
          <h3 className="mb-12 text-3xl font-extrabold text-center text-foreground sm:text-4xl">
            The Tender BSD Advantage
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="group">
                <div className="p-8 transition-all duration-300 bg-background border-2 border-purple-200 dark:border-purple-500/50 rounded-2xl shadow-sm dark:bg-purple-500/5 hover:scale-105 hover:shadow-md">
                  <h4 className="mb-6 text-2xl font-bold text-purple-600 dark:text-purple-400">{solution.title}</h4>
                  <ul className="space-y-4">
                    {solution.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <svg
                          className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-base leading-relaxed text-foreground font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Hook */}
        <div className="text-center">
          <div className="max-w-5xl mx-auto p-8 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-500/50 rounded-2xl">
            <p className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
              "Every day you delay is another tender opportunity lost to a competitor who's already using professional
              help. The question isn't whether you can afford Tender BSD – it's whether you can afford to keep losing."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

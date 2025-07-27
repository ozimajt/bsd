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
      description:
        "We've decoded every WA government agency's preferences with direct relationships and insider knowledge.",
    },
    {
      title: "Speed That Beats Deadlines",
      description: "Get tender analysis in 2 hours and complete responses in 5 days while competitors scramble.",
    },
    {
      title: "Results That Speak Volumes",
      description: "65% win rate, $47M in contracts won for WA businesses, and 3.2x ROI average for our clients.",
    },
    {
      title: "Specialized Aboriginal Support",
      description:
        "Navigate cultural protocols and procurement targets with our Aboriginal business specialists on staff.",
    },
  ]

  return (
    <section id="about" aria-labelledby="challenge-heading" className="py-20 bg-secondary sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="challenge-heading"
            className="mb-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            The Tender Trap
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Why 55% of WA businesses lose winnable contracts while competitors secure the work they deserve.
          </p>
        </div>

        {/* Opening Statement */}
        <div className="mb-20 text-center">
          <div className="max-w-5xl mx-auto p-8 bg-background border border-border rounded-2xl shadow-sm dark:bg-white/5">
            <p className="text-xl font-bold leading-tight text-foreground sm:text-2xl">
              "Every month, WA construction companies waste 80+ hours on tender submissions that never win. Meanwhile,
              your competitors are on-site, building relationships and delivering projects."
            </p>
          </div>
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
                  <h4 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">{challenge.category}</h4>
                  <ul className="space-y-3">
                    {challenge.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-base leading-relaxed text-muted-foreground">
                        {item}
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
                <div className="p-8 transition-all duration-300 bg-background border border-border rounded-2xl shadow-sm dark:bg-white/5 hover:scale-105 hover:shadow-md dark:hover:border-white/20">
                  <h4 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">{solution.title}</h4>
                  <p className="text-base leading-relaxed text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Hook */}
        <div className="text-center">
          <div className="max-w-5xl mx-auto p-8 bg-background border border-border rounded-2xl shadow-sm dark:bg-white/5">
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

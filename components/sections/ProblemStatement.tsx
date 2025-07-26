export default function ProblemStatement() {
  const problems = [
    {
      title: "Tender Rejections",
      description:
        "Missing critical requirements and scoring poorly on evaluation criteria leads to consistent rejections.",
    },
    {
      title: "Time Pressure",
      description: "Tight deadlines and complex documentation requirements leave no room for thorough preparation.",
    },
    {
      title: "Lost Revenue",
      description: "Every failed tender represents thousands in lost potential revenue and wasted preparation costs.",
    },
    {
      title: "Compliance Issues",
      description:
        "Navigating WA-specific regulations and requirements without expert guidance creates costly mistakes.",
    },
  ]

  return (
    <section className="py-20 sm:py-32 bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-headline text-fluid-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            The Challenge
          </h2>
          <p className="section-subheading text-fluid-xl max-w-3xl mx-auto leading-relaxed text-gray-700 dark:text-white/80">
            Construction businesses face mounting pressure in an increasingly competitive tender landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 rounded-3xl p-8 transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-white/10 shadow-md dark:shadow-none"
            >
              <h3 className="card-title text-fluid-3xl font-semibold text-gray-900 dark:text-white mb-4">
                {problem.title}
              </h3>
              <p className="card-description text-fluid-base leading-relaxed text-gray-600 dark:text-white/70">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

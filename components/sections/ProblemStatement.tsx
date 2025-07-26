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
    <section
      id="about"
      aria-labelledby="problem-heading"
      className="py-20 bg-gray-50 dark:bg-black sm:py-32 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2
            id="problem-heading"
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
          >
            The Challenge
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 dark:text-white/80 sm:text-xl">
            Construction businesses face mounting pressure in an increasingly competitive tender landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="p-8 transition-all duration-300 bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-white/5 dark:border-white/10 hover:scale-105 hover:shadow-md">
                <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white sm:text-3xl">
                  {problem.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 dark:text-white/70 sm:text-lg">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section className="section-padding bg-light-secondary dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">The Challenge</h2>
          <p className="section-description">
            Construction businesses face mounting pressure in an increasingly competitive tender landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="info-card">
              <h3 className="card-title mb-4">{problem.title}</h3>
              <p className="card-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

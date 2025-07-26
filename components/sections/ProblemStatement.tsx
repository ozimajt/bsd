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
    <section className="py-20 sm:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2>The Challenge</h2>
          <p className="text-muted-foreground text-body-lg max-w-3xl mx-auto mt-6">
            Construction businesses face mounting pressure in an increasingly competitive tender landscape.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-background hover:bg-accent rounded-2xl p-8 transition-all duration-300 hover:scale-105 border">
                <h3>{problem.title}</h3>
                <p className="text-muted-foreground text-body-base mt-4">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Hero from "@/components/sections/Hero"
import ProblemStatement from "@/components/sections/ProblemStatement"
import Services from "@/components/sections/Services"
import ValueProps from "@/components/sections/ValueProps"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import FinalCTA from "@/components/sections/FinalCTA"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground transition-colors duration-300">
      <Hero />
      <ProblemStatement />
      <Services />
      <ValueProps />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

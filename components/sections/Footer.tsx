import { Twitter } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: ["Tender Bash", "Tender Smash", "Tender Dash", "Consultation", "Training"],
    },
    {
      title: "Industries",
      links: ["Construction", "Infrastructure", "Government", "Commercial", "Residential"],
    },
    {
      title: "Resources",
      links: ["Success Stories", "Tender Tips", "WA Regulations", "Industry News", "Downloads"],
    },
    {
      title: "Company",
      links: ["About Us", "Our Team", "Careers", "Contact", "Partners"],
    },
    {
      title: "Support",
      links: ["Help Center", "Documentation", "API Reference", "System Status", "Community"],
    },
  ]

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-16 border-t border-border">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-6">
              <p className="text-xs text-muted-foreground">Copyright © 2025 Tender BSD. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                  Legal
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-xs text-muted-foreground">Australia</span>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Tender BSD on Twitter"
                >
                  <Twitter className="w-4 h-4" fill="currentColor" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

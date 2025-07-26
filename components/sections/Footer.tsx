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
              <h3 className="mb-4 text-sm font-medium text-foreground">{section.title}</h3>
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
              <p className="text-xs text-muted-foreground">Copyright © 2024 Tender BSD. All rights reserved.</p>
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
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

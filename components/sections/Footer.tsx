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
    <footer className="bg-secondary border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-medium text-body-sm mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-muted-foreground hover:text-foreground text-body-xs transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-body-xs text-muted-foreground">
              <p>Copyright © 2024 Tender BSD. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Legal
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-body-xs">Australia</span>
              <div className="flex space-x-3 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
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

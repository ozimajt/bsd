"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Search, ShoppingBag, Menu } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ]

  const secondaryNavLinks = [
    { href: "#overview", label: "Overview", active: true },
    { href: "#services", label: "Services" },
    { href: "#results", label: "Results" },
    { href: "#compare", label: "Compare" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-xl border-b border-light-border dark:border-dark-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <div className="flex-shrink-0">
            <Link href="/" className="text-lg font-medium text-light-foreground dark:text-dark-foreground">
              🍎
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-normal text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground transition-colors">
              <Search className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <button className="text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground transition-colors">
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-light-border dark:border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <h1 className="text-lg font-medium text-light-foreground dark:text-dark-foreground">Tender BSD</h1>
              <nav className="hidden sm:flex items-center space-x-6">
                {secondaryNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-normal transition-colors pb-3 ${
                      link.active
                        ? "text-light-foreground dark:text-dark-foreground border-b-2 border-light-foreground dark:border-dark-foreground"
                        : "text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-light-background/95 dark:bg-dark-background/95 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-normal text-light-muted-foreground dark:text-dark-muted-foreground hover:text-light-foreground dark:hover:text-dark-foreground"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

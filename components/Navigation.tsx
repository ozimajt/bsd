"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-foreground hover:opacity-70 transition-opacity" aria-label="Tender BSD Home">
              <span className="font-black tracking-[-0.2em] text-3xl">BSD</span>
            </Link>
          </div>

          {/* Middle - Navigation */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <div className="flex items-center space-x-8">
              <Link href="#overview" className="text-sm font-medium text-foreground transition-colors">
                Overview
              </Link>
              <Link
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#results"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Results
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Right - Theme Toggle and Cart */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View shopping bag"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open main menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          aria-label="Mobile navigation"
        >
          <div className="px-4 pt-4 pb-6 space-y-4">
            <Link href="#overview" className="block px-3 py-2 text-base font-medium text-foreground">
              Overview
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#results"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Results
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
            <div className="px-3 pt-2 flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Shopping Bag</span>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View shopping bag"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <div className="flex-shrink-0">
            <Link href="/" className="text-foreground hover:opacity-70 transition-opacity" aria-label="Tender BSD Home">
              <span className="text-lg font-medium">🍎</span>
            </Link>
          </div>

          <nav className="hidden md:block" aria-label="Main navigation">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#services"
                className="text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#testimonials"
                className="text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#faq"
                className="text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="#contact"
                className="text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <ThemeToggle />
            <button
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View shopping bag"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open main menu"
              aria-expanded={isOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <h1 className="text-lg font-medium text-foreground">Tender BSD</h1>
              <nav className="hidden sm:flex items-center space-x-6" aria-label="Secondary navigation">
                <Link
                  href="#overview"
                  className="pb-3 text-xs font-normal text-foreground border-b-2 border-foreground transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="#services"
                  className="pb-3 text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#results"
                  className="pb-3 text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
                >
                  Results
                </Link>
                <Link
                  href="#testimonials"
                  className="pb-3 text-xs font-normal text-muted-foreground hover:text-foreground transition-colors"
                >
                  Compare
                </Link>
              </nav>
            </div>
            <button className="px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-xl" aria-label="Mobile navigation">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#services"
              className="block px-3 py-2 text-sm font-normal text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 text-sm font-normal text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="block px-3 py-2 text-sm font-normal text-muted-foreground hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#faq"
              className="block px-3 py-2 text-sm font-normal text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-sm font-normal text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

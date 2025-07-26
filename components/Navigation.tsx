"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <div className="flex-shrink-0">
            <Link href="/" className="text-foreground hover:text-muted-foreground transition-colors">
              <span className="text-lg font-medium">🍎</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-body-xs">
              <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
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
            <button className="text-muted-foreground hover:text-foreground transition-colors">
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
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <h1 className="text-lg font-medium">Tender BSD</h1>
              <div className="hidden sm:flex items-center space-x-6 text-body-xs">
                <Link
                  href="#overview"
                  className="text-foreground hover:text-muted-foreground transition-colors border-b-2 border-foreground pb-3"
                >
                  Overview
                </Link>
                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors pb-3">
                  Services
                </Link>
                <Link href="#results" className="text-muted-foreground hover:text-foreground transition-colors pb-3">
                  Results
                </Link>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground transition-colors pb-3"
                >
                  Compare
                </Link>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-body-xs font-medium px-4 py-2 rounded-full transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 text-body-sm">
            <Link href="#services" className="text-muted-foreground hover:text-foreground block px-3 py-2">
              Services
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground block px-3 py-2">
              About
            </Link>
            <Link href="#testimonials" className="text-muted-foreground hover:text-foreground block px-3 py-2">
              Testimonials
            </Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground block px-3 py-2">
              FAQ
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground block px-3 py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

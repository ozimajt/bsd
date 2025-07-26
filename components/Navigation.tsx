"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { Search, ShoppingBag, Menu } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          <div className="flex-shrink-0">
            <Link href="/" className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity">
              <span className="text-lg font-medium"></span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8 text-xs font-normal text-gray-700 dark:text-white/80">
              <Link href="#services" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#about" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                About
              </Link>
              <Link href="#testimonials" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="#faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-gray-700 dark:text-white/80">
            <button className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <Search className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <ThemeToggle />
            <button className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center space-x-8">
              <h1 className="text-lg font-medium text-gray-900 dark:text-white">Tender BSD</h1>
              <div className="hidden sm:flex items-center space-x-6 text-xs font-normal">
                <Link
                  href="#overview"
                  className="text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-3 transition-colors"
                >
                  Overview
                </Link>
                <Link
                  href="#services"
                  className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white pb-3 transition-colors"
                >
                  Services
                </Link>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 text-sm font-normal text-gray-700 dark:text-white/80">
            <Link href="#services" className="block px-3 py-2 hover:text-gray-900 dark:hover:text-white">
              Services
            </Link>
            <Link href="#about" className="block px-3 py-2 hover:text-gray-900 dark:hover:text-white">
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

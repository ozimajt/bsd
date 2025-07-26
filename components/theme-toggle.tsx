"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded-full border animate-pulse" />
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const getIcon = () => {
    return theme === "light" ? (
      <Sun className="w-3 h-3 text-yellow-500" />
    ) : (
      <Moon className="w-3 h-3 text-purple-400" />
    )
  }

  const getPosition = () => {
    return theme === "light" ? "translate-x-0" : "translate-x-6"
  }

  const getTrackColor = () => {
    return theme === "light" ? "bg-purple-100 border-purple-200" : "bg-gray-800 border-gray-700"
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-6 rounded-full border transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${getTrackColor()}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Current theme: ${theme}. Click to toggle.`}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-gray-100 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ${getPosition()}`}
      >
        {getIcon()}
      </div>

      {/* Track indicators */}
      <div className="absolute inset-0 flex items-center justify-between px-1">
        <div
          className={`w-1 h-1 rounded-full transition-opacity duration-300 ${theme === "light" ? "opacity-0" : "opacity-30 bg-yellow-400"}`}
        />
        <div
          className={`w-1 h-1 rounded-full transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-30 bg-purple-400"}`}
        />
      </div>
    </button>
  )
}

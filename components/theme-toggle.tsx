"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-16 h-8 bg-gray-200 dark:bg-gray-800 rounded-full border animate-pulse" />
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-4 h-4 text-yellow-500" />
      case "dark":
        return <Moon className="w-4 h-4 text-blue-400" />
      case "system":
        return <Monitor className="w-4 h-4 text-gray-500" />
      default:
        return <Sun className="w-4 h-4 text-yellow-500" />
    }
  }

  const getPosition = () => {
    switch (theme) {
      case "light":
        return "translate-x-0"
      case "dark":
        return "translate-x-4"
      case "system":
        return "translate-x-8"
      default:
        return "translate-x-0"
    }
  }

  const getTrackColor = () => {
    switch (theme) {
      case "light":
        return "bg-blue-100 border-blue-200"
      case "dark":
        return "bg-gray-800 border-gray-700"
      case "system":
        return "bg-purple-100 dark:bg-purple-900 border-purple-200 dark:border-purple-700"
      default:
        return "bg-blue-100 border-blue-200"
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className={`relative w-16 h-8 rounded-full border transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${getTrackColor()}`}
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} theme`}
      title={`Current theme: ${theme}. Click to cycle through themes.`}
    >
      <div
        className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-100 rounded-full shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center ${getPosition()}`}
      >
        {getIcon()}
      </div>

      {/* Track indicators */}
      <div className="absolute inset-0 flex items-center justify-around px-1">
        <div
          className={`w-1 h-1 rounded-full transition-opacity duration-300 ${theme === "light" ? "opacity-0" : "opacity-30 bg-yellow-400"}`}
        />
        <div
          className={`w-1 h-1 rounded-full transition-opacity duration-300 ${theme === "dark" ? "opacity-0" : "opacity-30 bg-blue-400"}`}
        />
        <div
          className={`w-1 h-1 rounded-full transition-opacity duration-300 ${theme === "system" ? "opacity-0" : "opacity-30 bg-purple-400"}`}
        />
      </div>
    </button>
  )
}

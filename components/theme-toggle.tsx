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
    return (
      <div className="w-10 h-6 bg-white/10 dark:bg-white/10 light:bg-black/10 rounded-full border border-white/20 dark:border-white/20 light:border-black/20 animate-pulse" />
    )
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
        return <Sun className="w-3 h-3 text-yellow-600" />
      case "dark":
        return <Moon className="w-3 h-3 text-blue-400" />
      case "system":
        return <Monitor className="w-3 h-3 text-gray-600" />
      default:
        return <Sun className="w-3 h-3 text-yellow-600" />
    }
  }

  const getPosition = () => {
    switch (theme) {
      case "light":
        return "left-0.5"
      case "dark":
        return "left-6"
      case "system":
        return "left-3"
      default:
        return "left-0.5"
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative w-12 h-6 bg-white/10 rounded-full border border-white/20 transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} theme`}
      title={`Current theme: ${theme}. Click to cycle through themes.`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${getPosition()}`}
      >
        {getIcon()}
      </div>
    </button>
  )
}

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
    return <div className="relative w-12 h-6 rounded-full bg-muted border border-border animate-pulse" />
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
        return <Sun className="w-3 h-3 text-yellow-500" />
      case "dark":
        return <Moon className="w-3 h-3 text-blue-400" />
      case "system":
        return <Monitor className="w-3 h-3 text-muted-foreground" />
      default:
        // Handle case where theme might be system initially
        if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return <Moon className="w-3 h-3 text-blue-400" />
        }
        return <Sun className="w-3 h-3 text-yellow-500" />
    }
  }

  const getPosition = () => {
    switch (theme) {
      case "light":
        return "translate-x-0.5"
      case "dark":
        return "translate-x-6"
      case "system":
        return "translate-x-3"
      default:
        return "translate-x-3"
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative w-12 h-6 bg-muted rounded-full border border-border transition-all duration-300 hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} theme`}
      title={`Current theme: ${theme}. Click to cycle.`}
    >
      <div
        className={`absolute top-0.5 w-5 h-5 bg-background rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${getPosition()}`}
      >
        {getIcon()}
      </div>
    </button>
  )
}

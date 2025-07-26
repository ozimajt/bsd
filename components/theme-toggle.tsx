"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className="w-12 h-6 rounded-full bg-gray-200 dark:bg-white/10 animate-pulse" />
  }

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const getIcon = () => {
    if (theme === "light") return <Sun className="w-3 h-3 text-yellow-500" />
    if (theme === "dark") return <Moon className="w-3 h-3 text-blue-400" />
    return <Monitor className="w-3 h-3 text-gray-500 dark:text-gray-400" />
  }

  const getPosition = () => {
    if (theme === "light") return "translate-x-0.5"
    if (theme === "dark") return "translate-x-[22px]" // 48px (width) - 20px (indicator) - 2px (padding) - 4px (offset)
    return "translate-x-[11px]" // Center
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-white/10 border border-gray-300 dark:border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} theme`}
      title={`Current theme: ${theme}. Click to cycle.`}
    >
      <div
        className={`absolute top-[1px] w-5 h-5 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 flex items-center justify-center ${getPosition()}`}
      >
        {getIcon()}
      </div>
    </button>
  )
}

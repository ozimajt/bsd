import type { Config } from "tailwindcss"
import defaultConfig from "shadcn/ui/tailwind.config"

const config: Config = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "BlinkMacSystemFont",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        // Fluid typography using clamp(min, preferred, max)
        "fluid-xs": "clamp(0.75rem, 1.5vw, 0.875rem)", // 12px -> 14px
        "fluid-sm": "clamp(0.875rem, 2vw, 1rem)", // 14px -> 16px
        "fluid-base": "clamp(1rem, 2.5vw, 1.125rem)", // 16px -> 18px
        "fluid-lg": "clamp(1.125rem, 3vw, 1.25rem)", // 18px -> 20px
        "fluid-xl": "clamp(1.25rem, 3.5vw, 1.5rem)", // 20px -> 24px
        "fluid-2xl": "clamp(1.5rem, 4vw, 1.875rem)", // 24px -> 30px
        "fluid-3xl": "clamp(1.875rem, 5vw, 2.25rem)", // 30px -> 36px
        "fluid-4xl": "clamp(2.25rem, 6vw, 3rem)", // 36px -> 48px
        "fluid-5xl": "clamp(3rem, 7vw, 3.75rem)", // 48px -> 60px
        "fluid-6xl": "clamp(3.75rem, 8.5vw, 4.5rem)", // 60px -> 72px
        "fluid-7xl": "clamp(4.5rem, 10vw, 6rem)", // 72px -> 96px
        "fluid-8xl": "clamp(6rem, 12vw, 8rem)", // 96px -> 128px
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
      },
      backdropBlur: {
        xl: "24px",
      },
      borderRadius: {
        ...defaultConfig.theme.extend.borderRadius,
        "4xl": "2rem",
        "3xl": "1.5rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}

export default config

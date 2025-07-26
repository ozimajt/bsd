import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"
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
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
      },
      backdropBlur: {
        xl: "24px",
      },
    },
  },
  plugins: [
    ...defaultConfig.plugins,
    plugin(({ addUtilities, theme }) => {
      const newUtilities = {
        ".text-fluid-base": {
          fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)", // 16px -> 18px
        },
        ".text-fluid-lg": {
          fontSize: "clamp(1.125rem, 1rem + 0.625vw, 1.5rem)", // 18px -> 24px
        },
        ".text-fluid-xl": {
          fontSize: "clamp(1.25rem, 1.05rem + 1vw, 1.875rem)", // 20px -> 30px
        },
        ".text-fluid-2xl": {
          fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)", // 24px -> 36px
        },
        ".text-fluid-3xl": {
          fontSize: "clamp(1.875rem, 1.5rem + 1.875vw, 3rem)", // 30px -> 48px
        },
        ".text-fluid-4xl": {
          fontSize: "clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)", // 36px -> 60px
        },
        ".text-fluid-5xl": {
          fontSize: "clamp(3rem, 2.25rem + 3.75vw, 5rem)", // 48px -> 80px
        },
        ".text-fluid-6xl": {
          fontSize: "clamp(3.75rem, 2.75rem + 5vw, 6rem)", // 60px -> 96px
        },
        ".text-fluid-7xl": {
          fontSize: "clamp(4.5rem, 3.25rem + 6.25vw, 8rem)", // 72px -> 128px
        },
      }
      addUtilities(newUtilities, ["responsive"])
    }),
  ],
}

export default config

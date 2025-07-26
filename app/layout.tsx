import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tender BSD - Win More Tenders in Western Australia",
  description:
    "Expert tender writing and analysis services that help construction businesses secure more contracts with our proven 65% win rate methodology.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="tender-bsd-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

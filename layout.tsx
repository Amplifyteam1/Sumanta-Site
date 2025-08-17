import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mortgages by Sumanta - Licensed Mortgage Broker in Hamilton, ON",
  description:
    "Sumanta Mahabir, licensed mortgage broker in Hamilton. Specializing in home purchases, refinancing, debt consolidation, renewals, and HELOCs. Call 437-241-2954 for expert mortgage advice.",
  keywords:
    "mortgage broker Hamilton, home loans Ontario, refinancing, debt consolidation, HELOC, Sumanta Mahabir, Verico Best Mortgage Loans",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}

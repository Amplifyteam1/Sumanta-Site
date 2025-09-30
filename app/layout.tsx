import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export const metadata: Metadata = {
  title: "Mortgages by Sumanta - Licensed Mortgage Agent in Hamilton, ON",
  description:
    "Sumanta Mahabir, licensed mortgage agent in Hamilton. Specializing in home purchases, refinancing, debt consolidation, renewals, and HELOCs. Call 437-241-2954 for expert mortgage advice.",
  keywords:
    "mortgage agent Hamilton, home loans Ontario, refinancing, debt consolidation, HELOC, Sumanta Mahabir, Verico Best Mortgage Loans",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  )
}

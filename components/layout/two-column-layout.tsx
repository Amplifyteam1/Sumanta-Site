import type React from "react"
import { cn } from "@/lib/utils"

interface TwoColumnLayoutProps {
  children: React.ReactNode
  sidebar?: React.ReactNode
  sidebarPosition?: "left" | "right"
  className?: string
}

export function TwoColumnLayout({ children, sidebar, sidebarPosition = "right", className }: TwoColumnLayoutProps) {
  return (
    <div className={cn("grid lg:grid-cols-12 gap-8 lg:gap-12", className)}>
      {sidebarPosition === "left" && sidebar && <aside className="lg:col-span-4">{sidebar}</aside>}

      <main className={cn(sidebar ? "lg:col-span-8" : "lg:col-span-12")}>{children}</main>

      {sidebarPosition === "right" && sidebar && <aside className="lg:col-span-4">{sidebar}</aside>}
    </div>
  )
}

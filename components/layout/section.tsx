import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  spacing?: "sm" | "md" | "lg" | "xl"
  background?: "default" | "muted" | "accent" | "gradient"
}

export function Section({ children, className, id, spacing = "md", background = "default" }: SectionProps) {
  const spacingClasses = {
    sm: "py-8 md:py-12",
    md: "py-12 md:py-16",
    lg: "py-16 md:py-20",
    xl: "py-20 md:py-24",
  }

  const backgroundClasses = {
    default: "bg-background",
    muted: "bg-muted/30",
    accent: "bg-accent/5",
    gradient: "bg-gradient-to-b from-background to-muted/20",
  }

  return (
    <section id={id} className={cn(spacingClasses[spacing], backgroundClasses[background], className)}>
      {children}
    </section>
  )
}

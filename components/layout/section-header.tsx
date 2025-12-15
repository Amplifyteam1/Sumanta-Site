import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({ badge, title, description, className, align = "center" }: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left"

  return (
    <div className={cn("mb-10 md:mb-14 max-w-3xl", alignClasses, className)}>
      {badge && (
        <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0 px-4 py-1.5 text-sm font-semibold">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground text-balance">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg sm:text-xl text-muted-foreground text-pretty">{description}</p>}
    </div>
  )
}

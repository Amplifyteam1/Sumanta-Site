import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Home, RefreshCw, Wallet, TrendingUp, Layers, Briefcase, Building } from "lucide-react"
import { mortgageSolutions } from "@/lib/site"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  RefreshCw,
  Wallet,
  TrendingUp,
  Layers,
  Briefcase,
  Building,
}

interface RelatedSolutionsProps {
  exclude?: string
  limit?: number
}

export function RelatedSolutions({ exclude, limit = 3 }: RelatedSolutionsProps) {
  const solutions = mortgageSolutions.filter((s) => s.href !== exclude).slice(0, limit)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6">Related Mortgage Solutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((solution) => {
          const Icon = iconMap[solution.icon] || Home
          return (
            <Link key={solution.href} href={solution.href}>
              <Card className="h-full hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="flex items-center gap-2">
                    {solution.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{solution.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Calendar } from "lucide-react"

interface SidebarCTAProps {
  className?: string
  sticky?: boolean
}

export function SidebarCTA({ className, sticky = true }: SidebarCTAProps) {
  return (
    <Card className={cn("border-2 border-primary/20 shadow-lg", sticky && "lg:sticky lg:top-24", className)}>
      <CardContent className="p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
          <p className="text-sm text-muted-foreground">
            Contact me today for a free consultation and personalized mortgage solution.
          </p>
        </div>

        <div className="space-y-3">
          <Button asChild className="w-full" size="lg">
            <a href="https://calendly.com/mortgagesbysumanta" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4 mr-2" />
              Book Consultation
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
            <a href="tel:437-241-2954">
              <Phone className="w-4 h-4 mr-2" />
              Call: 437-241-2954
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full bg-transparent" size="lg">
            <a href="mailto:sumanta@dominionlending.ca">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </a>
          </Button>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Response time:</span>
            <span className="font-semibold text-foreground">Under 2 hours</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="text-muted-foreground">Access to:</span>
            <span className="font-semibold text-foreground">50+ Lenders</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

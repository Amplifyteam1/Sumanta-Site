import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site"

interface CTASectionProps {
  title?: string
  description?: string
  variant?: "default" | "compact"
}

export function CTASection({
  title = "Ready to Get Started?",
  description = "Take the first step toward your mortgage goals. Apply online, call us, or book a free consultation.",
  variant = "default",
}: CTASectionProps) {
  if (variant === "compact") {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild>
            <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              {siteConfig.phone}
            </a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-primary/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">{title}</h2>
        <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call {siteConfig.phone}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <a href={siteConfig.bookingLink} target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Call
            </a>
          </Button>
        </div>
        <p className="text-primary-foreground/70 text-sm mt-6">{siteConfig.license}</p>
      </div>
    </section>
  )
}

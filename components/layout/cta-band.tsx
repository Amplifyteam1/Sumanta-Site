import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Container } from "./container"
import { Phone, Calendar } from "lucide-react"

interface CTABandProps {
  title: string
  description?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  className?: string
}

export function CTABand({ title, description, primaryCTA, secondaryCTA, className }: CTABandProps) {
  return (
    <section
      className={cn("relative py-16 md:py-20 overflow-hidden", className)}
      style={{
        background: "linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)",
      }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container size="wide" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">{title}</h2>
          {description && <p className="text-lg sm:text-xl text-white/90 mb-8 text-pretty">{description}</p>}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-xl">
                <a href={primaryCTA.href} target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  {primaryCTA.text}
                </a>
              </Button>
            )}

            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                <a href={secondaryCTA.href}>
                  <Phone className="w-5 h-5 mr-2" />
                  {secondaryCTA.text}
                </a>
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

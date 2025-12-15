import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowRight } from "lucide-react"
import { siteConfig } from "@/lib/site"
import Link from "next/link"

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
      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200/60 rounded-xl p-6 text-center shadow-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white shadow-lg"
            asChild
          >
            <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent" asChild>
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
    <section
      className="relative py-16 overflow-hidden"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all"
            asChild
          >
            <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all"
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
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all"
            asChild
          >
            <Link href="/contact">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Call
            </Link>
          </Button>
        </div>
        <p className="text-white/70 text-sm mt-6">{siteConfig.license}</p>
      </div>
    </section>
  )
}

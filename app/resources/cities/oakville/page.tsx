import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Oakville Mortgage Agent | Luxury Home Financing | Sumanta Mahabir",
  description:
    "Expert Oakville mortgage agent specializing in luxury home financing. Serving all Oakville neighborhoods with access to 50+ lenders. Call 437-241-2954.",
  keywords: ["Oakville mortgage agent", "luxury home financing Oakville", "Oakville mortgage broker"],
  alternates: {
    canonical: "https://sumantamahabir.ca/resources/cities/oakville",
  },
}

export default function OakvilleMortgagePage() {
  return (
    <>
      <Navigation />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-oakville-lakefront.jpg"
            alt="Oakville lakefront luxury - Your mortgage specialist"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-blue-800/95" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 font-semibold">
              <MapPin className="w-4 h-4 mr-2 inline" />
              Oakville, Ontario
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl text-balance">
              Oakville Mortgage Specialist
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed text-pretty">
              Specializing in luxury home financing and premium mortgage solutions for Oakville residents. Expert
              service with access to 50+ lenders.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-xl text-lg px-8 py-6"
              asChild
            >
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call 437-241-2954
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CalendlyWidget />
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Sumanta Mahabir - Oakville Mortgage Agent",
            areaServed: { "@type": "City", name: "Oakville" },
            telephone: "437-241-2954",
            url: "https://sumantamahabir.ca/resources/cities/oakville",
          }),
        }}
      />
    </>
  )
}

import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Markham Mortgage Agent | Competitive Rates | Sumanta Mahabir",
  description:
    "Expert Markham mortgage agent serving Unionville, Thornhill, Markham Village & all areas. Access to 50+ lenders. Call 437-241-2954 for best mortgage rates.",
  keywords: ["Markham mortgage agent", "mortgage broker Markham", "Unionville mortgages", "Thornhill home loans"],
  alternates: {
    canonical: "https://sumantamahabir.ca/resources/cities/markham",
  },
}

export default function MarkhamMortgagePage() {
  return (
    <>
      <Navigation />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-markham-luxury.jpg"
            alt="Markham luxury homes - Your mortgage expert"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-blue-800/95" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 60% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 font-semibold">
              <MapPin className="w-4 h-4 mr-2 inline" />
              Markham, Ontario
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl text-balance">
              Markham Mortgage Expert
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed text-pretty">
              Serving Unionville, Thornhill, Markham Village, Cornell, and all Markham communities with competitive
              mortgage rates and personalized service.
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

      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border border-white/40 backdrop-blur-md px-6 py-2 text-sm font-bold shadow-xl">
            Expert Service
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance drop-shadow-lg">
            Why Choose Me for Your Markham Mortgage
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-pretty">
            Local expertise combined with access to Canada's top lenders means you get the best rates and service for
            your Markham home purchase or refinance.
          </p>
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
            name: "Sumanta Mahabir - Markham Mortgage Agent",
            areaServed: { "@type": "City", name: "Markham" },
            telephone: "437-241-2954",
            url: "https://sumantamahabir.ca/resources/cities/markham",
          }),
        }}
      />
    </>
  )
}

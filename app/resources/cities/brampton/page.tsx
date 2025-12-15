import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Home, Users } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Brampton Mortgage Agent | Best Rates & Fast Approvals | Sumanta Mahabir",
  description:
    "Expert Brampton mortgage agent with access to 50+ lenders. Serving all Brampton neighborhoods with competitive rates and fast approvals. Call 437-241-2954.",
  keywords: [
    "Brampton mortgage agent",
    "mortgage broker Brampton",
    "Brampton home loans",
    "best mortgage rates Brampton",
    "first time home buyer Brampton",
  ],
  alternates: {
    canonical: "https://sumantamahabir.ca/resources/cities/brampton",
  },
}

export default function BramptonMortgagePage() {
  return (
    <>
      <Navigation />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-brampton-residential.jpg"
            alt="Brampton residential homes - Your trusted mortgage agent"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-blue-800/95" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold">
              <MapPin className="w-4 h-4 mr-2 inline" />
              Brampton, Ontario
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl text-balance">
              Brampton's Trusted Mortgage Agent
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed text-pretty">
              Serving all Brampton neighborhoods including Bramalea, Heart Lake, Sandalwood, and Churchville with
              exceptional mortgage service and access to 50+ lenders.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
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

      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white border-0 px-6 py-2 text-sm font-bold shadow-lg">
              Market Overview
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
              Brampton Real Estate Market
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
              <CardHeader className="relative z-10">
                <Home className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">$920K</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600">Average Home Price</CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full" />
              <CardHeader className="relative z-10">
                <Users className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">656K</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600">Population</CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full" />
              <CardHeader className="relative z-10">
                <MapPin className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">50+</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600">Neighborhoods Served</CardDescription>
              </CardHeader>
            </Card>
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/20 text-white border border-white/40 backdrop-blur-md px-6 py-2 text-sm font-bold shadow-xl">
              Service Areas
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance drop-shadow-lg">
              Serving All Brampton Areas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Bramalea",
              "Heart Lake",
              "Sandalwood",
              "Churchville",
              "Castlemore",
              "Gore Meadows",
              "Credit Valley",
              "Springdale",
            ].map((area) => (
              <Card
                key={area}
                className="relative overflow-hidden border-0 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
              >
                <CardHeader>
                  <MapPin className="w-7 h-7 text-blue-600 mb-2 group-hover:text-blue-700 transition-colors" />
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {area}
                  </CardTitle>
                </CardHeader>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Card>
            ))}
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
            name: "Sumanta Mahabir - Brampton Mortgage Agent",
            areaServed: { "@type": "City", name: "Brampton" },
            telephone: "437-241-2954",
            url: "https://sumantamahabir.ca/resources/cities/brampton",
          }),
        }}
      />
    </>
  )
}

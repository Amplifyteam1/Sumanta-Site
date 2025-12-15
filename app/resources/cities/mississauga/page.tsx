import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, TrendingUp, Home, Users, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mississauga Mortgage Agent | Best Rates & Expert Service | Sumanta Mahabir",
  description:
    "Looking for a Mississauga mortgage agent? Get access to 50+ lenders, competitive rates, and personalized service. Serving all Mississauga areas. Call 437-241-2954.",
  keywords: [
    "Mississauga mortgage agent",
    "mortgage broker Mississauga",
    "Mississauga home loans",
    "best mortgage rates Mississauga",
    "first time home buyer Mississauga",
    "mortgage refinancing Mississauga",
  ],
  alternates: {
    canonical: "https://sumantamahabir.ca/resources/cities/mississauga",
  },
  openGraph: {
    title: "Mississauga Mortgage Agent | Sumanta Mahabir",
    description:
      "Expert mortgage services in Mississauga. Access to 50+ lenders with competitive rates. Serving Port Credit, Streetsville, Meadowvale & all areas.",
    url: "https://sumantamahabir.ca/resources/cities/mississauga",
    type: "website",
  },
}

export default function MississaugaMortgagePage() {
  return (
    <>
      <Navigation />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-mississauga-downtown.jpg"
            alt="Mississauga downtown - Your trusted mortgage agent"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-blue-800/95" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold">
              <MapPin className="w-4 h-4 mr-2 inline" />
              Mississauga, Ontario
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl text-balance">
              Your Trusted Mississauga Mortgage Agent
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed text-pretty">
              Serving Port Credit, Streetsville, Meadowvale, and all Mississauga neighborhoods with access to 50+
              lenders and competitive mortgage rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6"
                asChild
              >
                <Link href="/application">Get Pre-Approved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white border-0 px-6 py-2 text-sm font-bold shadow-lg">
              <TrendingUp className="w-4 h-4 mr-2 inline" />
              Market Overview
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
              Mississauga Real Estate Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
              Ontario's third-largest city with diverse housing and strong market fundamentals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full" />
              <CardHeader className="relative z-10">
                <Home className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">$1.0M</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600">Average Home Price</CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full" />
              <CardHeader className="relative z-10">
                <TrendingUp className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">4.9%</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600">Year-Over-Year Growth</CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full" />
              <CardHeader className="relative z-10">
                <Building className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">20</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600">Days on Market</CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-orange-50 to-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full" />
              <CardHeader className="relative z-10">
                <Users className="w-12 h-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">812K</CardTitle>
                <CardDescription className="text-base font-medium text-gray-600">Population</CardDescription>
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
              <MapPin className="w-4 h-4 mr-2 inline" />
              Service Areas
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight text-balance drop-shadow-lg">
              Serving All Mississauga Neighborhoods
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Port Credit", avgPrice: "$1.2M" },
              { name: "Streetsville", avgPrice: "$1.1M" },
              { name: "Meadowvale", avgPrice: "$950K" },
              { name: "Erin Mills", avgPrice: "$1.0M" },
              { name: "Clarkson", avgPrice: "$1.1M" },
              { name: "Cooksville", avgPrice: "$850K" },
              { name: "Lorne Park", avgPrice: "$1.5M" },
              { name: "Mineola", avgPrice: "$1.3M" },
              { name: "Malton", avgPrice: "$900K" },
              { name: "Churchill Meadows", avgPrice: "$1.2M" },
              { name: "Lakeview", avgPrice: "$1.1M" },
              { name: "Heartland", avgPrice: "$980K" },
            ].map((neighborhood) => (
              <Card
                key={neighborhood.name}
                className="relative overflow-hidden border-0 bg-white/95 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between">
                    <MapPin className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
                    <div className="flex-1 ml-3">
                      <CardTitle className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {neighborhood.name}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium">
                        Avg: <span className="font-bold text-gray-900">{neighborhood.avgPrice}</span>
                      </CardDescription>
                    </div>
                  </div>
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
            name: "Sumanta Mahabir - Mississauga Mortgage Agent",
            areaServed: {
              "@type": "City",
              name: "Mississauga",
              containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
            },
            telephone: "437-241-2954",
            url: "https://sumantamahabir.ca/resources/cities/mississauga",
          }),
        }}
      />
    </>
  )
}

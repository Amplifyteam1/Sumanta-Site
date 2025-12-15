import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, TrendingUp, Home, DollarSign, Users, Building, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Toronto Mortgage Agent | Best Rates & Expert Service | Sumanta Mahabir",
  description:
    "Looking for a Toronto mortgage agent? Get access to 50+ lenders, competitive rates, and personalized service. Serving all Toronto neighborhoods. Call 437-241-2954.",
  keywords: [
    "Toronto mortgage agent",
    "mortgage broker Toronto",
    "Toronto home loans",
    "best mortgage rates Toronto",
    "first time home buyer Toronto",
    "mortgage refinancing Toronto",
    "Toronto mortgage specialist",
  ],
  alternates: {
    canonical: "https://sumantamahabir.ca/resources/cities/toronto",
  },
  openGraph: {
    title: "Toronto Mortgage Agent | Sumanta Mahabir",
    description:
      "Expert mortgage services in Toronto. Access to 50+ lenders with competitive rates. Serving Downtown, North York, Scarborough, Etobicoke & all GTA areas.",
    url: "https://sumantamahabir.ca/resources/cities/toronto",
    type: "website",
    images: [
      {
        url: "https://sumantamahabir.ca/images/og-toronto.jpg",
        width: 1200,
        height: 630,
        alt: "Toronto Mortgage Agent - Sumanta Mahabir",
      },
    ],
  },
}

export default function TorontoMortgagePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-toronto-cityscape.jpg"
            alt="Toronto skyline - Your trusted mortgage agent in Toronto"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border border-blue-400/50 backdrop-blur-sm px-5 py-2 text-base font-bold">
              <MapPin className="w-4 h-4 mr-2 inline" />
              Toronto, Ontario
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              Your Trusted{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)",
                }}
              >
                Mortgage Agent
              </span>{" "}
              in Toronto
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50/95 mb-10 leading-relaxed font-medium text-pretty">
              Access to 50+ lenders, competitive rates, and personalized service for all Toronto neighborhoods. Whether
              you're in Downtown, North York, Scarborough, or Etobicoke, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-lg px-10 py-7"
                asChild
              >
                <a href="tel:437-241-2954">
                  <Phone className="w-6 h-6 mr-3" />
                  Call 437-241-2954
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-bold text-lg px-10 py-7 transition-all duration-300"
                asChild
              >
                <Link href="/application">
                  Get Pre-Approved
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </section>

      {/* Toronto Market Stats */}
      <section className="py-20 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 hover:from-blue-200 hover:to-blue-100 border-0 px-5 py-2 text-base font-bold shadow-sm">
              Market Overview
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
              Toronto Real Estate Market
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
              Understanding the Toronto market helps you make informed mortgage decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">$1.1M</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-600">Average Home Price</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">5.2%</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-600">
                  Year-Over-Year Growth
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-purple-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">23</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-600">
                  Average Days on Market
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-orange-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-4xl font-extrabold text-gray-900 mb-2">2.9M</CardTitle>
                <CardDescription className="text-base font-semibold text-gray-600">Population</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Toronto Neighborhoods */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 hover:from-blue-200 hover:to-blue-100 border-0 px-5 py-2 text-base font-bold shadow-sm">
              Service Areas
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
              Serving All Toronto Neighborhoods
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-pretty">
              Expert mortgage service across the entire Greater Toronto Area
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { name: "Downtown Toronto", avgPrice: "$900K", color: "blue" },
              { name: "North York", avgPrice: "$1.2M", color: "purple" },
              { name: "Scarborough", avgPrice: "$850K", color: "green" },
              { name: "Etobicoke", avgPrice: "$1.1M", color: "orange" },
              { name: "East York", avgPrice: "$950K", color: "blue" },
              { name: "York", avgPrice: "$1.0M", color: "purple" },
              { name: "The Beaches", avgPrice: "$1.3M", color: "green" },
              { name: "High Park", avgPrice: "$1.4M", color: "orange" },
              { name: "Yorkville", avgPrice: "$1.8M", color: "blue" },
              { name: "Liberty Village", avgPrice: "$750K", color: "purple" },
              { name: "Leslieville", avgPrice: "$1.2M", color: "green" },
              { name: "Roncesvalles", avgPrice: "$1.3M", color: "orange" },
            ].map((neighborhood) => (
              <Card
                key={neighborhood.name}
                className={`border-0 bg-gradient-to-br from-${neighborhood.color}-50/80 via-white to-white hover:from-${neighborhood.color}-100/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group`}
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br from-${neighborhood.color}-500 to-${neighborhood.color}-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 leading-snug">{neighborhood.name}</CardTitle>
                  <CardDescription className="text-sm font-semibold">
                    Avg: <span className="text-gray-900">{neighborhood.avgPrice}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me for Toronto */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight text-balance drop-shadow-lg">
              Why Toronto Residents Choose Me
            </h2>
            <p className="text-xl sm:text-2xl text-blue-100/95 max-w-3xl mx-auto leading-relaxed text-pretty font-medium">
              Local expertise meets exceptional mortgage service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Building,
                title: "Toronto Market Expertise",
                description:
                  "Deep understanding of Toronto's diverse neighborhoods and unique property market dynamics.",
              },
              {
                icon: DollarSign,
                title: "Access to 50+ Lenders",
                description:
                  "Work with all major banks, credit unions, and alternative lenders to find you the best rate.",
              },
              {
                icon: Users,
                title: "Personalized Service",
                description:
                  "One-on-one attention with fast response times and clear communication every step of the way.",
              },
              {
                icon: Home,
                title: "All Property Types",
                description: "Condos, townhouses, detached homes, investment properties - I handle it all.",
              },
              {
                icon: CheckCircle,
                title: "Fast Approvals",
                description: "Streamlined process with pre-approvals often completed within 24-48 hours.",
              },
              {
                icon: TrendingUp,
                title: "First-Time Buyer Programs",
                description: "Expert guidance on FTHBI, HBP, and land transfer tax rebates available in Toronto.",
              },
            ].map((benefit) => (
              <Card
                key={benefit.title}
                className="bg-white/10 backdrop-blur-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/30 group-hover:scale-110 transition-all">
                    <benefit.icon className="w-7 h-7 text-blue-100" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-3">{benefit.title}</CardTitle>
                  <CardDescription className="text-blue-50/90 text-base leading-relaxed font-medium">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ for Toronto */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Frequently Asked
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Toronto Mortgage Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What's the minimum down payment for a home in Toronto?",
                a: "For homes under $500K, you need 5% down. For homes $500K-$1M, you need 5% on the first $500K and 10% on the remainder. Over $1M requires 20% down. With Toronto's average price around $1.1M, most buyers need approximately $220K down payment.",
              },
              {
                q: "How much do I need to earn to buy a home in Toronto?",
                a: "For a $1.1M home with 20% down, you'd typically need a household income of around $200K-$220K to qualify under current stress test rules. However, this varies based on your debts, credit score, and other factors.",
              },
              {
                q: "Do you serve all areas of Toronto?",
                a: "Yes! I serve all Toronto neighborhoods including Downtown, North York, Scarborough, Etobicoke, East York, and York. I also serve the entire Greater Toronto Area including Mississauga, Brampton, Vaughan, Markham, and Richmond Hill.",
              },
              {
                q: "What's the advantage of using a mortgage agent vs going to my bank?",
                a: "As a mortgage agent, I have access to 50+ lenders including all major banks, credit unions, and alternative lenders. This means I can shop your mortgage to find the best rate and terms, often saving you thousands over the life of your mortgage. Banks can only offer their own products.",
              },
              {
                q: "How long does it take to get pre-approved?",
                a: "Most pre-approvals are completed within 24-48 hours. In Toronto's competitive market, having a pre-approval is essential as it shows sellers you're a serious buyer and can move quickly on offers.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 bg-white shadow-sm hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(147,197,253,0.15),transparent_50%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight text-balance drop-shadow-lg">
            Ready to Buy Your Toronto Home?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100/95 mb-10 max-w-3xl mx-auto leading-relaxed text-pretty font-medium">
            Let's discuss your mortgage options and get you pre-approved today.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-extrabold shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 text-lg px-10 py-7"
              asChild
            >
              <a href="tel:437-241-2954">
                <Phone className="w-6 h-6 mr-3" />
                Call 437-241-2954
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-bold text-lg px-10 py-7 transition-all duration-300"
              asChild
            >
              <Link href="/application">
                Apply Online
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CalendlyWidget />
      <Footer />

      {/* LocalBusiness Schema for Toronto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "Sumanta Mahabir - Toronto Mortgage Agent",
            description: "Expert mortgage agent serving Toronto and the Greater Toronto Area",
            areaServed: {
              "@type": "City",
              name: "Toronto",
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Ontario",
              },
            },
            telephone: "437-241-2954",
            email: "sumanta@dominionlending.ca",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Toronto",
              addressRegion: "ON",
              addressCountry: "CA",
            },
            url: "https://sumantamahabir.ca/resources/cities/toronto",
            priceRange: "$$",
            openingHours: "Mo-Fr 09:00-18:00, Sa 10:00-16:00",
          }),
        }}
      />
    </>
  )
}

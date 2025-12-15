import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, TrendingUp, Calculator, Clock, Users, Building, Phone } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Mortgage Services | Home Loans, Refinancing, Debt Consolidation",
  description:
    "Comprehensive mortgage services in Hamilton, Ontario. Home purchases, refinancing, debt consolidation, HELOCs, mortgage renewals, and new construction financing. Access to 50+ lenders.",
  keywords: [
    "mortgage services Hamilton",
    "home purchase mortgage Ontario",
    "refinancing services",
    "debt consolidation mortgage",
    "HELOC Hamilton",
    "mortgage renewal Ontario",
    "new construction financing",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Mortgage Services | Hamilton, Ontario",
    description:
      "Full range of mortgage services: home purchases, refinancing, debt consolidation, HELOCs, and more. Access to 50+ lenders.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
}

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Home Purchases",
      description:
        "Whether you're a first-time buyer or looking to move up, I'll help you secure the perfect mortgage.",
      features: ["First-time buyer programs", "Move-up buyer solutions", "Investment property financing"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Refinancing",
      description: "Lower your interest rate, access your home's equity, or switch to better terms.",
      features: ["Rate and term refinancing", "Cash-out refinancing", "Switch lender programs"],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Calculator,
      title: "Debt Consolidation",
      description: "Combine high-interest debts into one manageable mortgage payment.",
      features: ["Credit card consolidation", "Personal loan consolidation", "Line of credit consolidation"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Mortgage Renewals",
      description: "Don't just auto-renew! Let me negotiate better terms and rates.",
      features: ["Rate negotiation", "Term optimization", "Lender comparison"],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Building,
      title: "New Construction",
      description: "Specialized financing for new builds, custom homes, and construction projects.",
      features: ["Construction-to-permanent loans", "Progress draw financing", "Custom home financing"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "HELOCs",
      description: "Home Equity Lines of Credit provide flexible access to your home's equity.",
      features: ["Flexible credit access", "Interest-only payments", "Competitive rates"],
      color: "from-blue-600 to-blue-700",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden min-h-[55vh] sm:min-h-[60vh] lg:min-h-[70vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-services-modern-office.jpg"
            alt="Professional mortgage office - Comprehensive Mortgage Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-800/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <Badge className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 border border-blue-400/40 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium shadow-lg">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              Mortgage Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 mb-4 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-normal drop-shadow-lg text-pretty">
              From first-time home purchases to refinancing solutions, I offer a full range of mortgage services
              tailored to your needs.
            </p>
            <div className="pt-2 sm:pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-2xl shadow-blue-500/50 transition-all duration-300 border border-blue-400/30 text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7"
                asChild
              >
                <a href="tel:437-241-2954">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-6 sm:leading-7">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-sm sm:text-base">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Property Financing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Properties I Help Finance
            </h2>
            <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              From condos to luxury homes, I find the right financing for every property type
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/modern-downtown-condo-building-exterior-with-glass.jpg"
                  alt="Modern Downtown Condo"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Downtown Condos</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $400K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/beautiful-family-home-with-front-yard-and-driveway.jpg"
                  alt="Family Home"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Family Homes</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $600K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/luxury-estate-home-with-landscaped-gardens.jpg"
                  alt="Luxury Estate"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Luxury Estates</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $1M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-700 border-0 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold">
              Simple Process
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight text-balance">
              My Process
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Simple steps to get you the best mortgage
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { num: "1", title: "Consultation", desc: "Discuss your needs and goals" },
              { num: "2", title: "Pre-Approval", desc: "Know your budget" },
              { num: "3", title: "Shop Rates", desc: "I shop 50+ lenders for you" },
              { num: "4", title: "Close", desc: "Handle all paperwork" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 shadow-lg">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">{step.num}</span>
                </div>
                <h3 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 lg:mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-5 sm:leading-7">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <CalendlyWidget />

      <Footer />
    </div>
  )
}

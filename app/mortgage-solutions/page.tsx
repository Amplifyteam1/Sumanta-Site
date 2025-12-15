import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import {
  Home,
  RefreshCw,
  Wallet,
  TrendingUp,
  Layers,
  Briefcase,
  Building,
  ArrowRight,
  CheckCircle2,
  Phone,
  Calendar,
  Shield,
  Clock,
  Users,
  Star,
} from "lucide-react"
import { siteConfig, mortgageSolutions } from "@/lib/site"
import { LeadForm } from "@/components/mortgage/lead-form"

export const metadata: Metadata = {
  title: "Mortgage Solutions in Ontario | Sumanta Mahabir Mortgages",
  description:
    "Explore comprehensive mortgage solutions for Ontario homeowners. First-time buyers, refinancing, debt consolidation, reverse mortgages, and more. Access 50+ lenders.",
  openGraph: {
    title: "Mortgage Solutions in Ontario | Sumanta Mahabir Mortgages",
    description:
      "Explore comprehensive mortgage solutions for Ontario homeowners. First-time buyers, refinancing, debt consolidation, reverse mortgages, and more.",
    url: `${siteConfig.url}/mortgage-solutions`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mortgage Solutions in Ontario | Sumanta Mahabir Mortgages",
    description:
      "Explore comprehensive mortgage solutions for Ontario homeowners. First-time buyers, refinancing, debt consolidation, reverse mortgages, and more.",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions`,
  },
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  RefreshCw,
  Wallet,
  TrendingUp,
  Layers,
  Briefcase,
  Building,
}

const gradientColors = [
  "from-blue-500 to-cyan-500",
  "from-emerald-500 to-teal-500",
  "from-violet-500 to-purple-500",
  "from-amber-500 to-orange-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-blue-500",
  "from-cyan-500 to-blue-500",
]

export default function MortgageSolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-mortgage-solutions-skyline.jpg"
              alt="Ontario cityscape"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">Ontario Mortgage Expert</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Mortgage Solutions for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Every Stage of Life
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re buying your first home, refinancing, or looking for specialized mortgage products, I
              provide personalized solutions tailored to Ontario homeowners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/25"
                asChild
              >
                <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
                  Get Pre-Approved <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <a href="#calendly-widget">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-8 bg-gradient-to-b from-slate-900 to-background border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Shield, label: "Licensed Agent", value: "FSRA Regulated" },
                { icon: Building, label: "Lenders", value: "50+ Partners" },
                { icon: Clock, label: "Response Time", value: "Same Day" },
                { icon: Star, label: "Service", value: "5-Star Rated" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-3">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-background via-blue-50/30 to-background overflow-hidden">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 lg:mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Comprehensive Solutions</Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                Find Your Perfect{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Mortgage Solution
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every situation is unique. Explore our comprehensive range of mortgage options designed for Ontario
                residents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {mortgageSolutions.map((solution, index) => {
                const Icon = iconMap[solution.icon] || Home
                const gradient = gradientColors[index % gradientColors.length]
                return (
                  <Link key={solution.href} href={solution.href} className="group">
                    <Card className="h-full bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 border border-gray-200/50 hover:border-blue-300/50 overflow-hidden">
                      {/* Gradient top border */}
                      <div className={`h-1 bg-gradient-to-r ${gradient}`} />
                      <CardHeader className="pb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <CardTitle className="text-xl flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                          {solution.title}
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">{solution.description}</CardDescription>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                            Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          className="relative py-16 lg:py-24 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)" }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)" }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">Why Choose Us</Badge>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
                  Why Ontario Homeowners{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Trust Us
                  </span>
                </h2>
                <p className="text-lg text-white/80 mb-8">
                  With access to over 50 lenders across Canada, I can find competitive mortgage solutions that banks
                  often can&apos;t offer. As a licensed mortgage agent in Ontario, I&apos;m committed to transparent,
                  personalized service.
                </p>
                <div className="space-y-4">
                  {[
                    "Access to 50+ major lenders and private financing options",
                    "Free, no-obligation mortgage consultations",
                    "Personalized solutions for your unique situation",
                    "Expert guidance through the entire mortgage process",
                    "Fast pre-approvals to strengthen your offers",
                    "Dedicated support from application to closing",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl blur-xl" />
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl shadow-black/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Your Free Consultation</h3>
                    <p className="text-muted-foreground mt-2">No obligation. Expert advice.</p>
                  </div>
                  <LeadForm variant="short" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-gray-50/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">Expert Insights</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Comprehensive Mortgage Solutions for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Ontario Residents
                </span>
              </h2>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Mortgage Guidance</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Navigating the Ontario mortgage market requires expertise, access to multiple lenders, and a deep
                      understanding of each client&apos;s unique financial situation. As a licensed mortgage agent with
                      Dominion Lending Centres, I specialize in connecting Ontario homeowners and buyers with the right
                      mortgage products from over 50 leading lenders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">First-Time Home Buyers in Ontario</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Purchasing your first home in Ontario is an exciting milestone. The Ontario housing market
                      presents unique opportunities and challenges, from the bustling Greater Toronto Area to growing
                      cities like Hamilton, Ottawa, and London. First-time buyers can benefit from programs like the
                      First-Time Home Buyer Incentive, RRSP Home Buyers&apos; Plan, and the Land Transfer Tax Rebate
                      available to Ontario first-time purchasers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Refinancing Your Ontario Mortgage</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Refinancing can help you access your home equity, consolidate debt, or secure better terms on your
                      existing mortgage. Whether you&apos;re looking to fund home renovations, consolidate high-interest
                      debt, or simply take advantage of lower rates, I can help you evaluate your options and find the
                      most beneficial refinancing solution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">Specialized Mortgage Products</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Not everyone fits the traditional mortgage mold. Self-employed professionals, real estate
                      investors, and those with unique financial circumstances often require specialized mortgage
                      solutions. With access to alternative lenders and private mortgage options, I can help clients who
                      may have been turned down by traditional banks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">The Ontario Mortgage Process</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Working with a mortgage agent simplifies the home financing process. From initial consultation to
                      final closing, I provide guidance at every step: assessing your financial situation, identifying
                      the best mortgage products, handling paperwork, and coordinating with lawyers and real estate
                      professionals. My goal is to make your mortgage experience as smooth and stress-free as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-16 lg:py-20 overflow-hidden"
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
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Get Started Today</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Ready to Explore Your Options?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step toward your mortgage goals. Apply online, call me directly, or book a free
              consultation to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl shadow-black/20" asChild>
                <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
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
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <a href="#calendly-widget">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Call
                </a>
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6">{siteConfig.license}</p>
          </div>
        </section>

        {/* Calendly Widget */}
        <CalendlyWidget
          heading="Let's Discuss Your Mortgage Options"
          subheading="Book a free consultation to explore the best solution for your needs."
        />

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: siteConfig.name,
              description:
                "Comprehensive mortgage solutions for Ontario homeowners including first-time buyers, refinancing, debt consolidation, and specialized mortgage products.",
              url: `${siteConfig.url}/mortgage-solutions`,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hamilton",
                addressRegion: "Ontario",
                addressCountry: "CA",
              },
              areaServed: {
                "@type": "State",
                name: "Ontario",
                containedInPlace: {
                  "@type": "Country",
                  name: "Canada",
                },
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Mortgage Solutions",
                itemListElement: mortgageSolutions.map((solution, index) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: solution.title,
                    description: solution.description,
                  },
                  position: index + 1,
                })),
              },
            }),
          }}
        />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  )
}

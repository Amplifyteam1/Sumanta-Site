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
              <Button size="lg" asChild>
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
                <a href={siteConfig.bookingLink} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Find Your Perfect Mortgage Solution</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every situation is unique. Explore our comprehensive range of mortgage options designed for Ontario
                residents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mortgageSolutions.map((solution) => {
                const Icon = iconMap[solution.icon] || Home
                return (
                  <Link key={solution.href} href={solution.href} className="group">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                      <CardHeader>
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                        </div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          {solution.title}
                          <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{solution.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 lg:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Why Ontario Homeowners Choose Us</h2>
                <p className="text-lg text-muted-foreground mb-8">
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
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-background rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-center">Get Your Free Consultation</h3>
                <LeadForm variant="short" />
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>Comprehensive Mortgage Solutions for Ontario Residents</h2>
              <p>
                Navigating the Ontario mortgage market requires expertise, access to multiple lenders, and a deep
                understanding of each client&apos;s unique financial situation. As a licensed mortgage agent with
                Dominion Lending Centres, I specialize in connecting Ontario homeowners and buyers with the right
                mortgage products from over 50 leading lenders.
              </p>

              <h3>First-Time Home Buyers in Ontario</h3>
              <p>
                Purchasing your first home in Ontario is an exciting milestone. The Ontario housing market presents
                unique opportunities and challenges, from the bustling Greater Toronto Area to growing cities like
                Hamilton, Ottawa, and London. First-time buyers can benefit from programs like the First-Time Home Buyer
                Incentive, RRSP Home Buyers&apos; Plan, and the Land Transfer Tax Rebate available to Ontario first-time
                purchasers.
              </p>

              <h3>Refinancing Your Ontario Mortgage</h3>
              <p>
                Refinancing can help you access your home equity, consolidate debt, or secure better terms on your
                existing mortgage. Whether you&apos;re looking to fund home renovations, consolidate high-interest debt,
                or simply take advantage of lower rates, I can help you evaluate your options and find the most
                beneficial refinancing solution.
              </p>

              <h3>Specialized Mortgage Products</h3>
              <p>
                Not everyone fits the traditional mortgage mold. Self-employed professionals, real estate investors, and
                those with unique financial circumstances often require specialized mortgage solutions. With access to
                alternative lenders and private mortgage options, I can help clients who may have been turned down by
                traditional banks.
              </p>

              <h3>The Ontario Mortgage Process</h3>
              <p>
                Working with a mortgage agent simplifies the home financing process. From initial consultation to final
                closing, I provide guidance at every step: assessing your financial situation, identifying the best
                mortgage products, handling paperwork, and coordinating with lawyers and real estate professionals. My
                goal is to make your mortgage experience as smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Explore Your Options?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step toward your mortgage goals. Apply online, call me directly, or book a free
              consultation to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl" asChild>
                <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600"
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
                <a href={siteConfig.bookingLink} target="_blank" rel="noopener noreferrer">
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

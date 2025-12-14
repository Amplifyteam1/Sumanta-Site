import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import Link from "next/link"
import Image from "next/image"
import {
  Phone,
  Calculator,
  TrendingUp,
  Home,
  Hammer,
  CreditCard,
  ChevronRight,
  Clock3,
  Building2,
  Headset,
  ShieldCheck,
  Zap,
  Shield,
} from "lucide-react"
import PartnersSlider from "@/components/partners-slider"

export const metadata: Metadata = {
  title: "Mortgage Agent Hamilton | First-Time Buyers, Refinancing & More",
  description:
    "Sumanta Mahabir, licensed mortgage agent in Hamilton, Ontario. Specializing in first-time buyers, refinancing, debt consolidation, and self-employed mortgages. Access to 50+ lenders. Free consultation.",
  keywords: [
    "mortgage agent Hamilton",
    "mortgage broker Hamilton Ontario",
    "first time home buyer mortgage",
    "refinance mortgage Hamilton",
    "debt consolidation mortgage Ontario",
    "self-employed mortgage",
    "Hamilton home loans",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Sumanta Mahabir | Mortgage Agent Hamilton, Ontario",
    description:
      "Smart mortgage financing for Ontario homeowners. Access to 50+ lenders, personalized service, and expert guidance for first-time buyers, refinancing, and more.",
    url: siteConfig.url,
    type: "website",
  },
}

// LocalBusiness Schema for homepage
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "949 Garth Street",
    addressLocality: "Hamilton",
    addressRegion: "ON",
    postalCode: "L9C 4L3",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.2501,
    longitude: -79.8447,
  },
  areaServed: [
    { "@type": "City", name: "Hamilton" },
    { "@type": "City", name: "Burlington" },
    { "@type": "City", name: "Oakville" },
    { "@type": "City", name: "Milton" },
    { "@type": "City", name: "Toronto" },
    { "@type": "State", name: "Ontario" },
  ],
  serviceType: [
    "Mortgage Brokerage",
    "First-Time Home Buyer Mortgages",
    "Mortgage Refinancing",
    "Debt Consolidation",
    "Self-Employed Mortgages",
    "Investment Property Mortgages",
  ],
  priceRange: "Free Consultation",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: [siteConfig.socialLinks.facebook, siteConfig.socialLinks.linkedin, siteConfig.socialLinks.instagram],
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <Navigation />

      {/* Hero Section - Completely redesigned with centered content and floating badges */}
      <section
        className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background Video */}
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source
              src="https://cv7c4tyuk5b7n5o2.public.blob.vercel-storage.com/20251214_1459_01kcf6wtnefbbr4fskk3s49kg5-vmake.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
        </div>

        {/* Floating Badges - positioned around the center */}
        {/* Top Left - Free Consultation */}
        <div className="absolute top-[18%] left-[8%] lg:left-[12%] hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-2xl animate-float-slow">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Headset className="w-5 h-5 text-green-600" />
          </div>
          <span className="font-semibold text-gray-900">Free Consultation</span>
        </div>

        {/* Top Right - 50+ Lenders */}
        <div className="absolute top-[15%] right-[8%] lg:right-[12%] hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-2xl animate-float-delayed">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <span className="font-semibold text-gray-900">50+ Lenders</span>
        </div>

        {/* Bottom Left - Fast Approval */}
        <div className="absolute bottom-[22%] left-[10%] lg:left-[15%] hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-2xl animate-float-delayed-2">
          <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-amber-600" />
          </div>
          <span className="font-semibold text-gray-900">Fast Approval</span>
        </div>

        {/* Bottom Right - Personalized Service (UPDATED FROM 500+ Families Helped) */}
        <div className="absolute bottom-[25%] right-[10%] lg:right-[15%] hidden md:flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-2xl animate-float-slow">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <span className="font-semibold text-gray-900">Personalized Service</span>
        </div>

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/90">Licensed Mortgage Agent in Ontario</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Your Path to{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Homeownership
              </span>
              <span
                className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-blue-500/30 -z-0 -rotate-1"
                aria-hidden="true"
              />
            </span>
            <br />
            Starts Here
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Expert mortgage solutions for first-time buyers, refinancing, and investment properties across Ontario.
          </p>

          {/* Contact info */}
          <div className="flex items-center justify-center gap-2 mb-8 text-white/90">
            <Phone className="w-5 h-5" />
            <span className="text-xl font-bold">Call or Text: 437-241-2954</span>
          </div>

          {/* Mobile floating badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 md:hidden">
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Headset className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-900">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-900">50+ Lenders</span>
            </div>
            <div className="flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Zap className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-gray-900">Fast Approval</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-xl shadow-blue-600/25 hover:shadow-blue-700/30 transition-all duration-300 hover:scale-[1.02] text-lg px-10 py-7 rounded-xl"
              asChild
            >
              <a href="https://www.mortgageweb.ca/en-CA/18665/Apply" target="_blank" rel="noopener noreferrer">
                Get Pre-Approved
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 text-white hover:bg-white hover:text-slate-900 bg-white/10 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-[1.02] text-lg px-10 py-7 rounded-xl"
              asChild
            >
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Book a Call
              </Link>
            </Button>
          </div>

          {/* Agent info */}
          <p className="mt-8 text-sm text-white/60">Sumanta Mahabir · Mortgage Agent · Mortgage Architects #12728</p>
        </div>

        {/* Bottom gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* About Us Section - Completely revamped with video embed and new layout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-primary-light/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <Badge className="mb-4 bg-primary-muted text-primary hover:bg-primary/20 border-0 px-4 py-1.5 text-sm font-semibold">
              Why Work With Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
              Your Mortgage Journey,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Simplified
              </span>
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Video Column */}
            <div className="order-1 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-background">
                {/* Video Container with 16:9 aspect ratio */}
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    src="https://app.heygen.com/embedded-player/fa909cecf6804b148cf57d3ccd74f7e0"
                    title="HeyGen video player - Introduction"
                    className="absolute top-0 left-0 w-full h-full"
                    allow="encrypted-media; fullscreen;"
                    allowFullScreen
                  />
                </div>
              </div>
              {/* Video caption */}
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Watch this quick introduction to learn how I can help you
              </p>
            </div>

            {/* Content Column */}
            <div className="order-2 lg:order-2 space-y-6">
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
                <p className="text-pretty">
                  Navigating the mortgage process doesn't have to be overwhelming. As a licensed mortgage agent serving
                  Hamilton and the Greater Toronto Area, I'm here to make your path to homeownership clear and
                  stress-free.
                </p>
                <p className="text-pretty">
                  With access to <span className="font-semibold text-foreground">50+ lenders</span> including major
                  banks, credit unions, and private lenders, I find the best rates and terms tailored to your unique
                  situation—whether you're a first-time buyer, refinancing, or building your investment portfolio.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Transparent Process</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Headset className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">Dedicated Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-amber-600" />
                  </div>
                  <span className="text-sm font-medium text-foreground">50+ Lenders</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  className="text-base sm:text-lg bg-primary hover:bg-primary-hover text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] px-6 sm:px-8 py-5 sm:py-6"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Me
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base sm:text-lg border-2 border-primary text-primary hover:bg-primary-light font-semibold transition-all duration-300 hover:scale-[1.02] px-6 sm:px-8 py-5 sm:py-6 bg-transparent"
                  asChild
                >
                  <a href="tel:437-241-2954">
                    <Phone className="w-5 h-5 mr-2" />
                    Let's Talk
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Slider Section */}
      <PartnersSlider />

      {/* How We Work Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 overflow-hidden rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-8 sm:my-10 lg:my-12"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)",
        }}
      >
        {/* Decorative background elements */}
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-10 sm:mb-12 lg:mb-16 tracking-tight text-balance"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            How I Work
          </h2>

          {/* Three Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
            {/* Step 1 */}
            <div className="relative">
              {/* Number Badge */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-xl">
                <span className="text-4xl font-extrabold text-blue-600">1</span>
              </div>

              {/* Dotted connector line - hidden on mobile, visible on md+ */}
              <div
                className="hidden md:block absolute top-10 left-20 w-full h-0.5 border-t-2 border-dotted border-white/40"
                style={{ width: "calc(100% - 80px)" }}
                aria-hidden="true"
              />

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">Initial Consultation</h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-pretty">
                Begin your journey with a free, no-obligation consultation from your mortgage agent in Hamilton. During
                this meeting, we will discuss your financial goals, review your current situation, and outline the steps
                necessary to secure the best mortgage for your needs. I will answer any questions you may have and
                provide you with a clear understanding of the mortgage process.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              {/* Number Badge */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-xl">
                <span className="text-4xl font-extrabold text-blue-600">2</span>
              </div>

              {/* Dotted connector line - hidden on mobile, visible on md+ */}
              <div
                className="hidden md:block absolute top-10 left-20 w-full h-0.5 border-t-2 border-dotted border-white/40"
                style={{ width: "calc(100% - 80px)" }}
                aria-hidden="true"
              />

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
                Tailored Mortgage Solutions
              </h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-pretty">
                Based on the information gathered during our initial consultation, I will research and identify the best
                mortgage options tailored to your unique circumstances. I compare products from 50+ lenders including
                major banks, credit unions, and private lenders to ensure you get competitive rates and favorable terms.
                I will present you with a detailed comparison and guide you through the pros and cons of each option.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              {/* Number Badge */}
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-xl">
                <span className="text-4xl font-extrabold text-blue-600">3</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">Application and Approval</h3>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed text-pretty">
                Once you have selected the best mortgage solution, I will assist you with the application process. I
                will help you gather the necessary documentation, submit your application, and follow up with the lender
                to expedite approval. I will keep you informed every step of the way, ensuring a smooth and stress-free
                experience until your mortgage is approved.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 lg:mt-12">
            <Button
              size="lg"
              className="text-lg bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              asChild
            >
              <Link href="/contact">
                Get Started
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          background: "linear-gradient(to bottom, rgba(249, 250, 251, 0.5), rgba(255, 255, 255, 0.9))",
        }}
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 text-balance"
            >
              Mortgage Services I Offer
            </h2>
            <p className="mt-3 sm:mt-4 text-lg sm:text-xl leading-8 text-gray-600 text-pretty">
              Comprehensive mortgage solutions tailored to your unique financial goals
            </p>
            <div
              className="mx-auto mt-4 sm:mt-6 h-px w-24 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Grid */}
          <div className="mt-8 sm:mt-10 lg:mt-12 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Home Purchases",
                desc: "First-time to move-up buyers—find the right mortgage for your new home.",
                href: "/services",
                Icon: Home,
              },
              {
                title: "Refinancing",
                desc: "Lower your rate, access equity, or consolidate debt with a refinance.",
                href: "/services",
                Icon: TrendingUp,
              },
              {
                title: "Debt Consolidation",
                desc: "Roll high-interest balances into one manageable, lower-rate payment.",
                href: "/services",
                Icon: Calculator,
              },
              {
                title: "Mortgage Renewals",
                desc: "Don't auto-renew—negotiate better terms before your renewal.",
                href: "/services",
                Icon: Clock3,
              },
              {
                title: "New Construction",
                desc: "Specialized financing for new builds and construction projects.",
                href: "/services",
                Icon: Hammer,
              },
              {
                title: "HELOCs",
                desc: "Flexible access to home equity with a Line of Credit.",
                href: "/services",
                Icon: CreditCard,
              },
            ].map(({ title, desc, href, Icon }) => (
              <Link
                key={title}
                href={href}
                className="group relative rounded-2xl border border-gray-200/80 bg-white/70 backdrop-blur-sm p-6 sm:p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.12)] focus-visible:shadow-[0_8px_24px_rgba(59,130,246,0.15)] hover:border-blue-300/60 focus:outline-none focus-visible:ring-2 focus:visible:ring-blue-500 focus:visible:ring-offset-2"
              >
                {/* Icon badge */}
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "rgba(59, 130, 246, 0.12)",
                  }}
                  aria-hidden="true"
                >
                  <Icon
                    className="h-6 w-6 text-blue-600"
                    strokeWidth={2}
                    style={{
                      filter: "drop-shadow(0 1px 0 rgba(255,255,255,0.25))",
                    }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 text-balance">{title}</h3>

                <p className="mt-3 text-base leading-7 text-gray-600 text-pretty">{desc}</p>

                <span className="mt-5 inline-flex items-center text-base font-semibold text-blue-600">
                  Learn more
                  <ChevronRight
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
            <Button
              size="lg"
              className="text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-6"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Property Showcase Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Property Financing
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 text-balance">
              Properties I Help Finance
            </h2>
            <p className="text-lg sm:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              From first-time buyers to seasoned investors, I provide tailored mortgage solutions for every property
              type
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
            {/* First-Time Buyer Homes */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/modern-starter-home-exterior-for-first-time-buyers.jpg"
                  alt="First-Time Buyer Home"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600 text-white border-0 shadow-lg text-sm font-semibold">
                    First-Time Buyers
                  </Badge>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Starter Homes</h3>
                <p className="text-base text-gray-100 mb-4 text-pretty">
                  Perfect for first-time buyers entering the market
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-base font-bold text-white hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Luxury Properties */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/luxury-modern-mansion-with-pool-and-landscaped-gar.jpg"
                  alt="Luxury Property"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-600 text-white border-0 shadow-lg text-sm font-semibold">Premium</Badge>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Luxury Estates</h3>
                <p className="text-base text-gray-100 mb-4 text-pretty">
                  High-end properties with custom financing solutions
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-base font-bold text-white hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Investment Properties */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/modern-multi-family-duplex-residential-building-fo.jpg"
                  alt="Investment Property"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-600 text-white border-0 shadow-lg text-sm font-semibold">Investment</Badge>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Investment Properties</h3>
                <p className="text-base text-gray-100 mb-4 text-pretty">
                  Build wealth with rental and multi-family properties
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-base font-bold text-white hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Vacation Homes */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/beautiful-lakefront-cottage-vacation-home-with-doc.jpg"
                  alt="Vacation Home"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-teal-600 text-white border-0 shadow-lg text-sm font-semibold">Second Home</Badge>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Vacation Homes</h3>
                <p className="text-base text-gray-100 mb-4 text-pretty">Cottages and second homes for your getaway</p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-base font-bold text-white hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* New Construction */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/brand-new-construction-home-with-modern-architectu.jpg"
                  alt="New Construction"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-600 text-white border-0 shadow-lg text-sm font-semibold">New Build</Badge>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">New Construction</h3>
                <p className="text-base text-gray-100 mb-4 text-pretty">
                  Brand new homes with builder financing options
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-base font-bold text-white hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Refinancing */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/beautiful-family-home-with-manicured-lawn-perfect-.jpg"
                  alt="Refinancing Property"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-indigo-600 text-white border-0 shadow-lg text-sm font-semibold">Refinance</Badge>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Refinancing</h3>
                <p className="text-base text-gray-100 mb-4 text-pretty">
                  Lower rates and access equity from your current home
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-base font-bold text-white hover:text-blue-300 transition-colors"
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
              asChild
            >
              <Link href="/contact">
                Get Your Free Consultation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        className="relative py-10 sm:py-14 lg:py-24"
        style={{
          background: "color-mix(in srgb, #ffffff 94%, rgba(59,130,246,0.06) 6%)",
        }}
      >
        {/* Subtle vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.02) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="max-w-7xl mx-auto relative z-10"
          style={{ paddingLeft: "clamp(16px, 4vw, 40px)", paddingRight: "clamp(16px, 4vw, 40px)" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-start">
            {/* Left Column - Why Choose */}
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div>
                <h2
                  className="font-extrabold text-gray-900 mb-6 sm:mb-8 tracking-tight text-balance"
                  style={{ fontSize: "clamp(28px, 3.8vw, 48px)", lineHeight: "1.15" }}
                >
                  Why Choose Sumanta Mahabir?
                </h2>

                {/* Feature rows */}
                <div className="space-y-4 sm:space-5">
                  {/* Licensed Professional */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                      style={{ background: "rgba(59, 130, 246, 0.14)" }}
                      aria-hidden="true"
                    >
                      <ShieldCheck className="w-6 h-6 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Licensed Professional</h3>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(10, 14, 20, 0.68)" }}>
                        Licensed mortgage agent (M23005389) with Verico - Best Mortgage Loans (Lic # 12625)
                      </p>
                    </div>
                  </div>

                  {/* Access to 50+ Lenders */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                      style={{ background: "rgba(59, 130, 246, 0.14)" }}
                      aria-hidden="true"
                    >
                      <Building2 className="w-6 h-6 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Access to 50+ Lenders</h3>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(10, 14, 20, 0.68)" }}>
                        I work with major banks, credit unions, and private lenders to find you the best rates
                      </p>
                    </div>
                  </div>

                  {/* Fast Approvals */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                      style={{ background: "rgba(59, 130, 246, 0.14)" }}
                      aria-hidden="true"
                    >
                      <Zap className="w-6 h-6 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Fast Approvals</h3>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(10, 14, 20, 0.68)" }}>
                        Quick pre-approvals and streamlined application process
                      </p>
                    </div>
                  </div>

                  {/* Personalized Service */}
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105"
                      style={{ background: "rgba(59, 130, 246, 0.14)" }}
                      aria-hidden="true"
                    >
                      <Headset className="w-6 h-6 text-blue-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Personalized Service</h3>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(10, 14, 20, 0.68)" }}>
                        One-on-one guidance throughout your entire mortgage journey
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reassurance row */}
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-200">
                  <p className="text-base font-medium" style={{ color: "rgba(10, 14, 20, 0.54)" }}>
                    No obligation • Quick response • Hamilton, ON
                  </p>
                </div>
              </div>

              {/* Secondary CTA */}
              <div>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 bg-transparent px-8 py-6"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Me
                    <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Get Started Today Form */}
            <div className="animate-fade-in-up">
              <div
                className="rounded-2xl shadow-xl border"
                style={{
                  backdropFilter: "blur(8px)",
                  background: "color-mix(in srgb, #ffffff 92%, rgba(59,130,246,0.04) 8%)",
                  borderColor: "rgba(10,14,20,0.08)",
                  boxShadow: "0 20px 40px rgba(2,6,23,0.08)",
                  padding: "clamp(20px, 3.2vw, 32px)",
                }}
              >
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2 text-balance">
                    Get Started Today
                  </h3>
                  <p className="text-base font-medium" style={{ color: "rgba(10, 14, 20, 0.70)" }}>
                    No credit impact to ask a question.
                  </p>
                </div>

                <form className="space-y-4 sm:space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="full-name" className="block text-base font-semibold text-gray-900 mb-2">
                      Full Name
                    </label>
                    <input
                      id="full-name"
                      type="text"
                      required
                      className="w-full h-12 px-4 text-base bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                      placeholder="John Smith"
                      aria-label="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="w-full h-12 px-4 text-base bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                      placeholder="john@example.com"
                      aria-label="Enter your email address"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-base font-semibold text-gray-900 mb-2">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="w-full h-12 px-4 text-base bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                      placeholder="(437) 241-2954"
                      aria-label="Enter your phone number"
                    />
                  </div>

                  {/* How can I help you? */}
                  <div>
                    <label htmlFor="help-type" className="block text-base font-semibold text-gray-900 mb-2">
                      How can I help you?
                    </label>
                    <select
                      id="help-type"
                      required
                      className="w-full h-12 px-4 text-base bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-900"
                      aria-label="Select how we can help you"
                    >
                      <option value="purchase">Purchase a home</option>
                      <option value="refinance">Refinance</option>
                      <option value="renew">Renew my mortgage</option>
                      <option value="debt">Debt consolidation</option>
                      <option value="heloc">HELOC</option>
                      <option value="construction">New construction</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Privacy & Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      id="consent"
                      type="checkbox"
                      defaultChecked
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
                      aria-label="Agree to be contacted"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm leading-relaxed font-medium"
                      style={{ color: "rgba(10, 14, 20, 0.64)" }}
                    >
                      I agree to be contacted by phone or email about mortgage options.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-14 text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  >
                    Send My Information
                  </Button>

                  {/* Privacy note */}
                  <p
                    className="text-sm text-center leading-relaxed font-medium"
                    style={{ color: "rgba(10, 14, 20, 0.54)" }}
                  >
                    By submitting, you agree to be contacted about mortgage options. We respect your privacy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)",
        }}
        aria-labelledby="cta-heading"
      >
        {/* Radial highlight behind heading */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-3 sm:mb-4 tracking-tight text-balance"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium text-pretty"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
          >
            Contact me today for a free consultation
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            {/* Primary Button - Filled */}
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              asChild
            >
              <a href="tel:437-241-2954" aria-label="Call Sumanta at 437-241-2954">
                <Phone className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                Call: 437-241-2954
              </a>
            </Button>

            {/* Secondary Button - Get Pre-Approved */}
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg bg-white/12 backdrop-blur-sm text-white border-2 border-white/95 hover:bg-white/20 font-semibold px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              asChild
            >
              <a
                href="https://www.mortgageweb.ca/en-CA/18665/Apply"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get pre-approved for a mortgage"
              >
                <Calculator className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                Get Pre-Approved
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CalendlyWidget />

      <Footer />
    </div>
  )
}

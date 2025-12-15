import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Users, Clock, Shield, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Sumanta Mahabir | Licensed Mortgage Agent Hamilton",
  description:
    "Meet Sumanta Mahabir, your trusted mortgage agent in Hamilton, Ontario. Licensed professional with access to 50+ lenders. Personalized mortgage solutions for first-time buyers, refinancing, and more.",
  keywords: [
    "Sumanta Mahabir",
    "mortgage agent Hamilton",
    "licensed mortgage broker Ontario",
    "Hamilton mortgage professional",
    "Ontario mortgage expert",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About Sumanta Mahabir | Licensed Mortgage Agent",
    description:
      "Meet your trusted mortgage agent in Hamilton, Ontario. Personalized service and access to 50+ lenders.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative py-12 sm:py-16 lg:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] sm:min-h-[65vh] lg:min-h-[70vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-about-luxury-home.jpg"
            alt="Luxury modern home - Sumanta Mahabir Mortgage Agent"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/75 to-slate-800/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 animate-fade-in text-center lg:text-left">
              <Badge className="mb-1 sm:mb-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/40 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium shadow-lg shadow-blue-500/20">
                Licensed Mortgage Agent
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 sm:mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
                Meet Sumanta Mahabir
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-50 mb-4 sm:mb-8 max-w-[62ch] mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-lg text-pretty">
                Your dedicated mortgage agent committed to helping you achieve your homeownership dreams with
                personalized service throughout Hamilton and the GTA.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-2xl shadow-blue-500/50 transition-all duration-300 border border-blue-400/30 text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7"
                  asChild
                >
                  <a href="tel:437-241-2954">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Call: 437-241-2954
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/90 text-white hover:bg-white hover:text-blue-900 bg-white/5 backdrop-blur-sm font-semibold transition-all duration-300 shadow-xl text-sm sm:text-base lg:text-lg px-5 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-7"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up hidden md:block">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl shadow-blue-900/30 p-5 sm:p-6 lg:p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-tight text-balance">
                  Professional Credentials
                </h3>
                <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">License Number</p>
                      <p className="text-blue-100 text-xs sm:text-sm">M23005389</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">Brokerage</p>
                      <p className="text-blue-100 text-xs sm:text-sm">Verico - Best Mortgage Loans</p>
                      <p className="text-xs text-blue-200">License # 12625</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm sm:text-base">Office Location</p>
                      <p className="text-blue-100 text-xs sm:text-sm">949 Garth Street, Hamilton, ON</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-5 sm:gap-8 mb-8 sm:mb-12">
                <div className="md:w-1/3 flex justify-center md:justify-start">
                  <div className="relative">
                    <Image
                      src="/images/the-20photo-20depot.jpeg"
                      alt="Sumanta Mahabir - Licensed Mortgage Agent"
                      width={300}
                      height={400}
                      className="rounded-xl sm:rounded-2xl shadow-xl object-cover w-48 sm:w-full border-4 border-white"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight text-balance">
                    My Story
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-700">
                    <p className="text-pretty">
                      Welcome! I'm Sumanta Mahabir, a licensed mortgage agent serving the Hamilton, Ontario area and
                      beyond. With my dedication to personalized service and deep understanding of the mortgage
                      industry, I help families and individuals navigate the complex world of home financing.
                    </p>
                    <p className="text-pretty">
                      As a Level 1 agent with Verico - Best Mortgage Loans, I have access to a vast network of over 50
                      lenders, including major banks, credit unions, and private lenders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <Card className="border-2 border-gray-200/80 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6">
                  <CardTitle className="text-gray-900 text-lg sm:text-xl lg:text-2xl font-bold">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 px-4 sm:px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone</p>
                      <a
                        href="tel:437-241-2954"
                        className="text-blue-600 hover:underline font-semibold text-sm sm:text-base"
                      >
                        437-241-2954
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Email</p>
                      <a
                        href="mailto:mortgagesbysumanta@gmail.com"
                        className="text-blue-600 hover:underline font-semibold text-xs sm:text-sm break-all"
                      >
                        mortgagesbysumanta@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200/80 shadow-lg bg-white/70 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6">
                  <CardTitle className="text-gray-900 text-lg sm:text-xl lg:text-2xl font-bold">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-blue-600 mb-1">50+</div>
                      <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Lenders</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-blue-600 mb-1">24h</div>
                      <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Pre-Approval</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-blue-600 mb-1">100%</div>
                      <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">Dedicated</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold">
              Why Choose Me
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 tracking-tight text-balance">
              Why Work With Me?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Experience the difference of personalized mortgage service
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4 lg:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-2xl font-bold text-gray-900">Licensed Pro</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                <CardDescription className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-7 text-gray-600 hidden sm:block">
                  Fully licensed and regulated mortgage agent with proven expertise.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4 lg:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-2xl font-bold text-gray-900">50+ Lenders</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                <CardDescription className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-7 text-gray-600 hidden sm:block">
                  Access to 50+ lenders means more options and better rates.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4 lg:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-2xl font-bold text-gray-900">Fast Service</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                <CardDescription className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-7 text-gray-600 hidden sm:block">
                  Quick pre-approvals and efficient processing.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader className="p-3 sm:p-4 lg:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <CardTitle className="text-sm sm:text-base lg:text-2xl font-bold text-gray-900">
                  Your Advocate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
                <CardDescription className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-7 text-gray-600 hidden sm:block">
                  I work for you, not the lenders.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CalendlyWidget />
      <Footer />
    </div>
  )
}

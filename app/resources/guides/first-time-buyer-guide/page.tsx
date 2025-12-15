import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  CheckCircle,
  AlertCircle,
  DollarSign,
  FileText,
  Home,
  Clock,
  ArrowRight,
  Sparkles,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "First-Time Home Buyer Guide Ontario 2025 | Step-by-Step Process",
  description:
    "Complete first-time home buyer guide for Ontario. Learn about down payments, FTHBI, HBP, land transfer tax rebates, and step-by-step buying process. Free consultation available.",
  keywords: [
    "first time home buyer Ontario",
    "first time buyer guide",
    "FTHBI Ontario",
    "Home Buyers Plan",
    "Ontario land transfer tax rebate",
    "first home buying process",
    "down payment first home",
    "how to buy first house Ontario",
  ],
  alternates: {
    canonical: "https://sumantamahabir.ca/resources/guides/first-time-buyer-guide",
  },
  openGraph: {
    title: "First-Time Home Buyer Guide Ontario 2025",
    description:
      "Everything you need to know about buying your first home in Ontario. Programs, incentives, and step-by-step process.",
    url: "https://sumantamahabir.ca/resources/guides/first-time-buyer-guide",
    type: "article",
  },
}

export default function FirstTimeBuyerGuidePage() {
  return (
    <>
      <Navigation />

      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-first-time-buyer-guide.jpg"
            alt="First-time home buyers receiving keys to their new Ontario home"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border border-blue-400/50 backdrop-blur-sm px-5 py-2 font-semibold text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Complete 2025 Guide
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              First-Time Home Buyer Guide
              <span
                className="block bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)" }}
              >
                Ontario 2025
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50/95 mb-10 leading-relaxed text-pretty max-w-3xl font-medium">
              Everything you need to know about buying your first home - from saving for a down payment to getting the
              keys to your dream home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 text-lg px-8 py-7 rounded-xl"
                asChild
              >
                <a href="tel:437-241-2954">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Consultation
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 font-bold text-lg px-8 py-7 rounded-xl transition-all duration-300"
                asChild
              >
                <Link href="/application">
                  Get Pre-Approved
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats - Premium Cards */}
      <section className="py-16 bg-white relative -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "5%", label: "Minimum Down Payment", icon: DollarSign, color: "blue" },
              { value: "$60K", label: "Max HBP Withdrawal", icon: TrendingUp, color: "green" },
              { value: "$4,000", label: "Land Transfer Tax Rebate", icon: Shield, color: "purple" },
              { value: "50+", label: "Lenders I Work With", icon: Users, color: "orange" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color === "blue" ? "rgba(59, 130, 246, 0.1)" : stat.color === "green" ? "rgba(34, 197, 94, 0.1)" : stat.color === "purple" ? "rgba(168, 85, 247, 0.1)" : "rgba(249, 115, 22, 0.1)"} 0%, transparent 100%)`,
                  }}
                />
                <CardContent className="p-8 text-center relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      stat.color === "blue"
                        ? "bg-blue-100"
                        : stat.color === "green"
                          ? "bg-green-100"
                          : stat.color === "purple"
                            ? "bg-purple-100"
                            : "bg-orange-100"
                    }`}
                  >
                    <stat.icon
                      className={`w-8 h-8 ${
                        stat.color === "blue"
                          ? "text-blue-600"
                          : stat.color === "green"
                            ? "text-green-600"
                            : stat.color === "purple"
                              ? "text-purple-600"
                              : "text-orange-600"
                      }`}
                    />
                  </div>
                  <div
                    className={`text-4xl font-extrabold mb-2 ${
                      stat.color === "blue"
                        ? "text-blue-600"
                        : stat.color === "green"
                          ? "text-green-600"
                          : stat.color === "purple"
                            ? "text-purple-600"
                            : "text-orange-600"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Table of Contents - Premium Grid */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(239, 246, 255, 0.5) 0%, rgba(255, 255, 255, 1) 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)" }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-4 py-1.5">Complete Guide</Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">What's Covered in This Guide</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to navigate your first home purchase with confidence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Down Payment Requirements", icon: DollarSign, color: "blue" },
              { title: "Government Programs & Incentives", icon: Home, color: "green" },
              { title: "Step-by-Step Buying Process", icon: Clock, color: "purple" },
              { title: "Required Documents", icon: FileText, color: "orange" },
              { title: "Common Mistakes to Avoid", icon: AlertCircle, color: "red" },
              { title: "FAQs for First-Time Buyers", icon: Users, color: "teal" },
            ].map((item, index) => (
              <a
                key={item.title}
                href={`#section-${index + 1}`}
                className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                    item.color === "blue"
                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                      : item.color === "green"
                        ? "bg-gradient-to-br from-green-500 to-green-600"
                        : item.color === "purple"
                          ? "bg-gradient-to-br from-purple-500 to-purple-600"
                          : item.color === "orange"
                            ? "bg-gradient-to-br from-orange-500 to-orange-600"
                            : item.color === "red"
                              ? "bg-gradient-to-br from-red-500 to-red-600"
                              : "bg-gradient-to-br from-teal-500 to-teal-600"
                  }`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Down Payment - Premium Design */}
      <section id="section-1" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 mb-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)" }}
            >
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div>
              <Badge className="mb-2 bg-blue-100 text-blue-700 border-blue-200">Section 1</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Down Payment Requirements</h2>
            </div>
          </div>

          <div className="prose prose-lg max-w-none mb-10">
            <p className="text-gray-600 text-xl leading-relaxed">
              In Ontario, the minimum down payment depends on the purchase price of your home. Understanding these
              requirements is the first step to homeownership.
            </p>
          </div>

          {/* Down Payment Calculator Card */}
          <Card className="mb-10 border-0 shadow-2xl overflow-hidden">
            <div
              className="p-1"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)" }}
            >
              <div className="bg-white rounded-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">Down Payment Calculator</CardTitle>
                  <CardDescription className="text-base">Minimum requirements based on purchase price</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-0">
                    {[
                      { range: "Purchase Price up to $500,000", amount: "5% minimum", example: "$25,000 on $500K" },
                      {
                        range: "$500,000 - $999,999",
                        amount: "5% on first $500K + 10% on remainder",
                        example: "$35,000 on $600K",
                      },
                      { range: "$1,000,000 and above", amount: "20% minimum", example: "$200,000 on $1M" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex flex-col md:flex-row md:items-center justify-between py-5 ${index < 2 ? "border-b border-gray-100" : ""}`}
                      >
                        <div className="mb-2 md:mb-0">
                          <span className="text-gray-900 font-semibold">{item.range}</span>
                          <span className="block text-sm text-gray-500 mt-1">Example: {item.example}</span>
                        </div>
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200 font-bold px-4 py-2 w-fit">
                          {item.amount}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>

          {/* Example Calculations */}
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Calculations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                price: "$600,000",
                items: ["5% on $500,000 = $25,000", "10% on $100,000 = $10,000"],
                total: "$35,000 (5.8%)",
              },
              {
                price: "$800,000",
                items: ["5% on $500,000 = $25,000", "10% on $300,000 = $30,000"],
                total: "$55,000 (6.9%)",
              },
            ].map((calc, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600" />
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{calc.price} Home</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600 mb-4">
                    {calc.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-2xl font-extrabold text-blue-600">{calc.total}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Government Programs - Premium Design */}
      <section id="section-2" className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(240, 253, 244, 0.5) 0%, rgba(255, 255, 255, 1) 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)" }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-5 mb-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)" }}
            >
              <Home className="w-8 h-8 text-white" />
            </div>
            <div>
              <Badge className="mb-2 bg-green-100 text-green-700 border-green-200">Section 2</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Government Programs & Incentives</h2>
            </div>
          </div>

          <div className="space-y-8">
            {/* FTHBI Card */}
            <Card className="border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      First-Time Home Buyer Incentive (FTHBI)
                    </CardTitle>
                    <CardDescription className="text-base">
                      A shared-equity mortgage program from the Government of Canada
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200 font-semibold">Federal Program</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg">
                  The FTHBI offers 5% or 10% of the home's purchase price towards your down payment. This reduces your
                  mortgage amount and monthly payments.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "5% for existing homes",
                    "10% for new construction",
                    "No monthly payments on incentive",
                    "Repay after 25 years or when you sell",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* HBP Card */}
            <Card className="border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-violet-500" />
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Home Buyers' Plan (HBP)</CardTitle>
                    <CardDescription className="text-base">
                      Withdraw from your RRSP tax-free for your first home
                    </CardDescription>
                  </div>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 font-semibold">RRSP Program</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg">
                  The HBP allows you to withdraw up to $60,000 from your RRSPs to put toward your down payment - without
                  paying tax on the withdrawal.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Up to $60,000 per person ($120,000 per couple)",
                    "Tax-free withdrawal",
                    "15 years to repay",
                    "Start repayment in 2nd year after withdrawal",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-purple-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Land Transfer Tax Card */}
            <Card className="border-0 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      Ontario Land Transfer Tax Rebate
                    </CardTitle>
                    <CardDescription className="text-base">Save up to $4,000 on land transfer tax</CardDescription>
                  </div>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 font-semibold">Provincial</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 text-lg">
                  First-time home buyers in Ontario can receive a refund of up to $4,000 on the provincial land transfer
                  tax. Toronto buyers can also get up to $4,475 from the municipal rebate.
                </p>
                <div
                  className="p-5 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                    <span className="font-bold text-orange-800 text-lg">Toronto Buyers - Extra Savings!</span>
                  </div>
                  <p className="text-orange-700">
                    You may qualify for both provincial ($4,000) and Toronto ($4,475) rebates for a total savings of up
                    to <strong>$8,475</strong>!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Step-by-Step Process */}
      <section id="section-3" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 mb-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)" }}
            >
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div>
              <Badge className="mb-2 bg-purple-100 text-purple-700 border-purple-200">Section 3</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Step-by-Step Buying Process</h2>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Get Pre-Approved",
                description:
                  "Before house hunting, get mortgage pre-approval to know your budget and show sellers you're serious.",
                time: "1-2 days",
              },
              {
                step: 2,
                title: "Find a Real Estate Agent",
                description:
                  "Work with a licensed agent who knows your target neighborhoods and can negotiate on your behalf.",
                time: "1 week",
              },
              {
                step: 3,
                title: "House Hunt",
                description:
                  "View properties that match your criteria and budget. Take your time to find the right home.",
                time: "2-8 weeks",
              },
              {
                step: 4,
                title: "Make an Offer",
                description: "Submit a competitive offer with your agent's guidance. Be prepared for negotiations.",
                time: "1-3 days",
              },
              {
                step: 5,
                title: "Home Inspection & Appraisal",
                description:
                  "Get a professional inspection and the lender will order an appraisal to verify the value.",
                time: "1-2 weeks",
              },
              {
                step: 6,
                title: "Final Mortgage Approval",
                description: "Submit all final documents for mortgage approval and finalize your rate.",
                time: "1-2 weeks",
              },
              {
                step: 7,
                title: "Closing Day",
                description: "Meet with your lawyer, sign documents, get your keys, and move into your new home!",
                time: "Closing day",
              },
            ].map((item, index) => (
              <div key={item.step} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)" }}
                  >
                    {item.step}
                  </div>
                  {item.step < 7 && (
                    <div className="w-1 h-full bg-gradient-to-b from-purple-300 to-purple-100 mt-3 rounded-full" />
                  )}
                </div>
                <Card className="flex-1 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                      <CardTitle className="text-xl font-bold text-gray-900">{item.title}</CardTitle>
                      <Badge className="bg-purple-100 text-purple-700 border-purple-200 font-semibold w-fit">
                        {item.time}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Documents */}
      <section id="section-4" className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(254, 243, 199, 0.3) 0%, rgba(255, 255, 255, 1) 100%)" }}
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-5 mb-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)" }}
            >
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <Badge className="mb-2 bg-orange-100 text-orange-700 border-orange-200">Section 4</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Required Documents</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Income Verification</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Most recent pay stubs (2-3)",
                    "T4 slips (last 2 years)",
                    "Notice of Assessment (last 2 years)",
                    "Employment letter",
                    "T1 General (if self-employed)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 p-3 bg-orange-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">Assets & ID</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Bank statements (3 months)",
                    "Down payment proof/source",
                    "Government-issued photo ID",
                    "Void cheque",
                    "Gift letter (if applicable)",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Common Mistakes */}
      <section id="section-5" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5 mb-10">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
              style={{ background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)" }}
            >
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <Badge className="mb-2 bg-red-100 text-red-700 border-red-200">Section 5</Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Common Mistakes to Avoid</h2>
            </div>
          </div>

          <div className="space-y-5">
            {[
              {
                mistake: "Not getting pre-approved first",
                why: "You might fall in love with a home you can't afford, or lose out because you weren't prepared to move quickly.",
              },
              {
                mistake: "Making large purchases before closing",
                why: "Buying a car or furniture on credit can affect your debt ratios and jeopardize your mortgage approval.",
              },
              {
                mistake: "Not accounting for closing costs",
                why: "Closing costs typically run 1.5-4% of the purchase price. Budget for these in addition to your down payment.",
              },
              {
                mistake: "Skipping the home inspection",
                why: "A $500 inspection can save you from thousands in unexpected repairs. Never skip this step.",
              },
              {
                mistake: "Only comparing mortgage rates",
                why: "Terms, penalties, prepayment options, and portability matter as much as the rate. Look at the full picture.",
              },
            ].map((item, index) => (
              <Card
                key={item.mistake}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="flex">
                  <div
                    className="w-2 flex-shrink-0"
                    style={{ background: "linear-gradient(180deg, #ef4444 0%, #dc2626 100%)" }}
                  />
                  <div className="flex-1">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                          <span className="text-red-600 font-bold">{index + 1}</span>
                        </div>
                        <CardTitle className="text-xl font-bold text-red-900">{item.mistake}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.why}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)" }}
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(147, 197, 253, 0.4) 0%, transparent 50%)" }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(ellipse at 70% 80%, rgba(96, 165, 250, 0.3) 0%, transparent 40%)" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-5 py-2 font-semibold backdrop-blur-sm">
            Ready to Get Started?
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight text-balance leading-tight">
            Ready to Buy Your First Home?
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Let's discuss your situation and get you pre-approved. I'll guide you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-2xl text-lg px-10 py-7 rounded-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call 437-241-2954
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-10 py-7 rounded-xl transition-all duration-300"
              asChild
            >
              <Link href="/application">
                Start Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CalendlyWidget />
      <Footer />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "First-Time Home Buyer Guide Ontario 2025",
            description:
              "Complete guide for first-time home buyers in Ontario including down payment requirements, government programs, and step-by-step buying process.",
            author: {
              "@type": "Person",
              name: "Sumanta Mahabir",
              jobTitle: "Mortgage Agent",
            },
            publisher: {
              "@type": "Organization",
              name: "Sumanta Mahabir Mortgages",
            },
            datePublished: "2025-01-01",
            dateModified: "2025-12-14",
          }),
        }}
      />
    </>
  )
}

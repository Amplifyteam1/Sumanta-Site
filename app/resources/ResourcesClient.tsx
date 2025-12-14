"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calculator, FileText, TrendingUp, Phone, DollarSign, Percent, Home, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ResourcesClient() {
  const [loanAmount, setLoanAmount] = useState(500000)
  const [downPayment, setDownPayment] = useState(100000)
  const [interestRate, setInterestRate] = useState(5.5)
  const [amortization, setAmortization] = useState(25)

  const calculatePayment = () => {
    const principal = loanAmount - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numberOfPayments = amortization * 12

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    return monthlyPayment
  }

  const monthlyPayment = calculatePayment()

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-resources-family-home.jpg"
            alt="Beautiful family home - Mortgage Resources and Tools"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <div className="space-y-6 animate-fade-in">
            <Badge className="mb-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-lg shadow-blue-500/20">
              Tools & Resources
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              Mortgage Resources & Tools
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg text-pretty">
              Use these helpful tools and resources to better understand your mortgage options and make informed
              decisions about your home financing.
            </p>
          </div>
        </div>
      </section>

      {/* Property Inspiration Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Property Examples
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Calculate Payments for Your Dream Property
            </h2>
            <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Explore different property types and see what your payments could look like
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/modern-downtown-condo-building-exterior-with-glass.jpg"
                  alt="Downtown Condos"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-extrabold mb-2 text-balance">Downtown Condos</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $400K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/beautiful-family-home-with-front-yard-and-driveway.jpg"
                  alt="Family Homes"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-extrabold mb-2 text-balance">Family Homes</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $600K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/luxury-estate-home-with-landscaped-gardens.jpg"
                  alt="Luxury Estates"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-extrabold mb-2 text-balance">Luxury Estates</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $1M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
                Calculator
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
                Mortgage Payment Calculator
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8 text-pretty">
                Get an estimate of your monthly mortgage payments based on the loan amount, down payment, interest rate,
                and amortization period.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    Purchase Price: ${loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="200000"
                    max="2000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>$200K</span>
                    <span>$2M</span>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    Down Payment: ${downPayment.toLocaleString()} ({((downPayment / loanAmount) * 100).toFixed(1)}%)
                  </label>
                  <input
                    type="range"
                    min="25000"
                    max={loanAmount * 0.35}
                    step="5000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>$25K</span>
                    <span>${Math.round((loanAmount * 0.35) / 1000)}K</span>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    Interest Rate: {interestRate}%
                  </label>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>2%</span>
                    <span>15%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    Amortization: {amortization} years
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="30"
                    step="5"
                    value={amortization}
                    onChange={(e) => setAmortization(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>15 years</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-gray-200/80 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900 text-2xl font-bold">
                    <Calculator className="w-6 h-6 mr-3 text-blue-600" />
                    Payment Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">
                      ${monthlyPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </div>
                    <p className="text-gray-700 font-semibold text-lg">Monthly Payment (P&I)</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Loan Amount:</span>
                      <span className="font-bold text-gray-900">${(loanAmount - downPayment).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Down Payment:</span>
                      <span className="font-bold text-gray-900">${downPayment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Interest Rate:</span>
                      <span className="font-bold text-gray-900">{interestRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Amortization:</span>
                      <span className="font-bold text-gray-900">{amortization} years</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      *This calculation is for principal and interest only. Additional costs like property taxes,
                      insurance, and CMHC premiums are not included.
                    </p>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-6"
                      asChild
                    >
                      <a href="tel:437-241-2954">
                        <Phone className="w-5 h-5 mr-2" />
                        Get Accurate Quote
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Knowledge Base
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Helpful Resources
            </h2>
            <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Everything you need to know about mortgages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">First-Time Buyer Guide</CardTitle>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Complete guide for first-time homebuyers including programs, incentives, and step-by-step process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-gray-700 mb-4">
                  <li>• First-Time Home Buyer Incentive</li>
                  <li>• Home Buyers' Plan (HBP)</li>
                  <li>• Land Transfer Tax Rebates</li>
                  <li>• Minimum down payment requirements</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                >
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Current Rates</CardTitle>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Stay updated with the latest mortgage rates from various lenders across Canada.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-700">5-Year Fixed:</span>
                    <span className="font-bold text-green-600">5.49%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-700">5-Year Variable:</span>
                    <span className="font-bold text-green-600">5.95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base font-medium text-gray-700">3-Year Fixed:</span>
                    <span className="font-bold text-green-600">5.79%</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">*Rates as of today. Subject to change.</p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                >
                  Get Personal Rate
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Affordability Calculator</CardTitle>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Determine how much house you can afford based on your income and expenses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-gray-700 mb-4">
                  <li>• Gross Debt Service (GDS) ratio</li>
                  <li>• Total Debt Service (TDS) ratio</li>
                  <li>• Stress test calculations</li>
                  <li>• Maximum purchase price</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                >
                  Calculate Affordability
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <Percent className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Refinancing Guide</CardTitle>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Learn when and how to refinance your mortgage to save money or access equity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-gray-700 mb-4">
                  <li>• When to refinance</li>
                  <li>• Costs and penalties</li>
                  <li>• Cash-out refinancing</li>
                  <li>• Rate and term refinancing</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <Home className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">CMHC Insurance</CardTitle>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Understanding mortgage default insurance and when it's required.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-gray-700 mb-4">
                  <li>• When CMHC is required</li>
                  <li>• Premium calculations</li>
                  <li>• Payment options</li>
                  <li>• Alternative insurers</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                >
                  CMHC Calculator
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <Calculator className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle className="text-2xl font-bold text-gray-900">Prepayment Calculator</CardTitle>
                <CardDescription className="text-base leading-7 text-gray-600">
                  See how extra payments can save you thousands in interest over time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-base text-gray-700 mb-4">
                  <li>• Lump sum payments</li>
                  <li>• Increased payment frequency</li>
                  <li>• Payment increases</li>
                  <li>• Interest savings</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                >
                  Calculate Savings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-xl leading-8 text-gray-600 text-pretty">
              Common questions about mortgages and the application process
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-gray-200/80 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">How much can I afford to borrow?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base leading-7">
                  The amount you can borrow depends on your income, debts, credit score, and the property value.
                  Generally, your housing costs shouldn't exceed 32% of your gross monthly income (GDS ratio), and your
                  total debt payments shouldn't exceed 40% (TDS ratio).
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  What's the minimum down payment required?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base leading-7">
                  For homes under $500,000, the minimum down payment is 5%. For homes between $500,000-$999,999, it's 5%
                  on the first $500,000 and 10% on the remaining amount. For homes $1 million and above, the minimum is
                  20%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  How long does the mortgage approval process take?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base leading-7">
                  Pre-approval typically takes 24-48 hours with all required documents. Full approval after you've made
                  an offer on a property usually takes 5-10 business days, depending on the lender and complexity of
                  your application.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  What documents do I need for a mortgage application?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-base leading-7">
                  You'll typically need: employment letter, recent pay stubs, T4s/NOAs, bank statements, credit report
                  authorization, property details (if purchasing), and identification. Self-employed applicants may need
                  additional documentation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight text-balance"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            Ready to Get Started?
          </h2>
          <p
            className="text-xl sm:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-medium text-pretty"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
          >
            Use these tools to get an idea of your mortgage options, then contact me for personalized advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              asChild
            >
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call: 437-241-2954
              </a>
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg bg-white/12 backdrop-blur-sm text-white border-2 border-white/95 hover:bg-white/20 font-semibold px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              asChild
            >
              <Link href="/application">
                Apply Online
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <CalendlyWidget
        heading="Have Questions?"
        subheading="Schedule a free consultation to discuss your mortgage questions."
      />

      <Footer />
    </div>
  )
}

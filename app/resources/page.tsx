"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calculator, FileText, TrendingUp, Phone, DollarSign, Percent, Home } from "lucide-react"

export default function ResourcesPage() {
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Mortgage Resources & Tools</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Use these helpful tools and resources to better understand your mortgage options and make informed
            decisions.
          </p>
        </div>
      </section>

      {/* Mortgage Calculator */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mortgage Payment Calculator</h2>
              <p className="text-gray-600 mb-8">
                Get an estimate of your monthly mortgage payments based on the loan amount, down payment, interest rate,
                and amortization period.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$200K</span>
                    <span>$2M</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>$25K</span>
                    <span>${Math.round((loanAmount * 0.35) / 1000)}K</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate: {interestRate}%</label>
                  <input
                    type="range"
                    min="3"
                    max="8"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3%</span>
                    <span>8%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
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
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>15 years</span>
                    <span>30 years</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <Calculator className="w-6 h-6 mr-3" />
                    Payment Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      ${monthlyPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </div>
                    <p className="text-blue-700">Monthly Payment (P&I)</p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-blue-200">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Loan Amount:</span>
                      <span className="font-semibold">${(loanAmount - downPayment).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Down Payment:</span>
                      <span className="font-semibold">${downPayment.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Interest Rate:</span>
                      <span className="font-semibold">{interestRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Amortization:</span>
                      <span className="font-semibold">{amortization} years</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blue-200">
                    <p className="text-xs text-gray-600 mb-4">
                      *This calculation is for principal and interest only. Additional costs like property taxes,
                      insurance, and CMHC premiums are not included.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                      <a href="tel:437-241-2954">
                        <Phone className="w-4 h-4 mr-2" />
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-600">Everything you need to know about mortgages</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>First-Time Buyer Guide</CardTitle>
                <CardDescription>
                  Complete guide for first-time homebuyers including programs, incentives, and step-by-step process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• First-Time Home Buyer Incentive</li>
                  <li>• Home Buyers' Plan (HBP)</li>
                  <li>• Land Transfer Tax Rebates</li>
                  <li>• Minimum down payment requirements</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Download Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Current Rates</CardTitle>
                <CardDescription>
                  Stay updated with the latest mortgage rates from various lenders across Canada.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm">5-Year Fixed:</span>
                    <span className="font-semibold text-green-600">5.49%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">5-Year Variable:</span>
                    <span className="font-semibold text-green-600">5.95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">3-Year Fixed:</span>
                    <span className="font-semibold text-green-600">5.79%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-4">*Rates as of today. Subject to change.</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Get Personal Rate
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>Affordability Calculator</CardTitle>
                <CardDescription>
                  Determine how much house you can afford based on your income and expenses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Gross Debt Service (GDS) ratio</li>
                  <li>• Total Debt Service (TDS) ratio</li>
                  <li>• Stress test calculations</li>
                  <li>• Maximum purchase price</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Calculate Affordability
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Percent className="w-12 h-12 text-orange-600 mb-4" />
                <CardTitle>Refinancing Guide</CardTitle>
                <CardDescription>
                  Learn when and how to refinance your mortgage to save money or access equity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• When to refinance</li>
                  <li>• Costs and penalties</li>
                  <li>• Cash-out refinancing</li>
                  <li>• Rate and term refinancing</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="w-12 h-12 text-indigo-600 mb-4" />
                <CardTitle>CMHC Insurance</CardTitle>
                <CardDescription>Understanding mortgage default insurance and when it's required.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• When CMHC is required</li>
                  <li>• Premium calculations</li>
                  <li>• Payment options</li>
                  <li>• Alternative insurers</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  CMHC Calculator
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calculator className="w-12 h-12 text-teal-600 mb-4" />
                <CardTitle>Prepayment Calculator</CardTitle>
                <CardDescription>See how extra payments can save you thousands in interest over time.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Lump sum payments</li>
                  <li>• Increased payment frequency</li>
                  <li>• Payment increases</li>
                  <li>• Interest savings</li>
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Calculate Savings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about mortgages and the application process</p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much can I afford to borrow?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The amount you can borrow depends on your income, debts, credit score, and the property value.
                  Generally, your housing costs shouldn't exceed 32% of your gross monthly income (GDS ratio), and your
                  total debt payments shouldn't exceed 40% (TDS ratio).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's the minimum down payment required?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  For homes under $500,000, the minimum down payment is 5%. For homes between $500,000-$999,999, it's 5%
                  on the first $500,000 and 10% on the remaining amount. For homes $1 million and above, the minimum is
                  20%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the mortgage approval process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pre-approval typically takes 24-48 hours with all required documents. Full approval after you've made
                  an offer on a property usually takes 5-10 business days, depending on the lender and complexity of
                  your application.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What documents do I need for a mortgage application?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Use these tools to get an idea of your mortgage options, then contact me for personalized advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call: 437-241-2954
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-blue-600 border-white hover:bg-white bg-transparent"
              asChild
            >
              <Link href="/application">Apply Online</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

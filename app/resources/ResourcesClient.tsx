"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Calculator,
  FileText,
  TrendingUp,
  Phone,
  DollarSign,
  Percent,
  Home,
  ChevronRight,
  RefreshCw,
  Building2,
  Receipt,
  ArrowLeftRight,
  Grid3X3,
  ArrowLeft,
  Check,
} from "lucide-react"
import Image from "next/image"

// Calculator types
type CalculatorType =
  | "hub"
  | "purchase"
  | "renewal"
  | "mortgage"
  | "compare"
  | "affordability"
  | "closing-costs"
  | "land-transfer"

// Calculator Hub Card Component
function CalculatorCard({
  icon: Icon,
  title,
  description,
  onClick,
  gradient,
}: {
  icon: React.ElementType
  title: string
  description: string
  onClick: () => void
  gradient: string
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`w-14 h-14 rounded-xl ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
        Try this tool <ChevronRight className="w-4 h-4 ml-1" />
      </span>
    </button>
  )
}

// Purchase Calculator Component
function PurchaseCalculator({ onBack }: { onBack: () => void }) {
  const [homePrice, setHomePrice] = useState(600000)
  const [downPayment, setDownPayment] = useState(60000)
  const [interestRate, setInterestRate] = useState(5.99)
  const [amortization, setAmortization] = useState(25)
  const [paymentFrequency, setPaymentFrequency] = useState<"monthly" | "biweekly" | "weekly">("monthly")
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false)
  const [isNewlyBuilt, setIsNewlyBuilt] = useState(false)

  const downPaymentPercent = (downPayment / homePrice) * 100
  const mortgageAmount = homePrice - downPayment

  // CMHC Insurance calculation
  const needsInsurance = downPaymentPercent < 20
  let insuranceRate = 0
  if (needsInsurance) {
    if (downPaymentPercent < 10) insuranceRate = 4.0
    else if (downPaymentPercent < 15) insuranceRate = 3.1
    else if (downPaymentPercent < 20) insuranceRate = 2.8
  }
  const insuranceAmount = (mortgageAmount * insuranceRate) / 100
  const totalMortgage = mortgageAmount + insuranceAmount

  // Monthly payment calculation
  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = amortization * 12
  const monthlyPayment =
    (totalMortgage * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  // Payment by frequency
  const getPaymentByFrequency = () => {
    switch (paymentFrequency) {
      case "biweekly":
        return (monthlyPayment * 12) / 26
      case "weekly":
        return (monthlyPayment * 12) / 52
      default:
        return monthlyPayment
    }
  }

  // Term calculations (5 year)
  const termPayments = 60
  const termInterest = Array.from({ length: termPayments }).reduce((acc: number, _, i) => {
    const remainingBalance = totalMortgage - (monthlyPayment - totalMortgage * monthlyRate) * i
    return acc + remainingBalance * monthlyRate
  }, 0) as number
  const termPrincipal = monthlyPayment * termPayments - termInterest
  const balanceEndOfTerm = totalMortgage - termPrincipal

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Calculator Hub
          </Badge>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Badge variant="outline" className="border-blue-200 text-blue-700 px-3 py-1">
            Purchase Calculator
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Purchase Calculator</h2>

          {/* Home Price */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Home Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={homePrice.toLocaleString()}
                onChange={(e) => setHomePrice(Number(e.target.value.replace(/,/g, "")) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-semibold"
              />
            </div>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="10000"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          {/* Down Payment */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-700">Down Payment</label>
              <span className="text-sm text-blue-600 font-medium">
                Min {downPaymentPercent < 5 ? "5" : downPaymentPercent.toFixed(1)}%
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={downPayment.toLocaleString()}
                  onChange={(e) => setDownPayment(Number(e.target.value.replace(/,/g, "")) || 0)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-semibold"
                />
              </div>
              <select
                value={paymentFrequency}
                onChange={(e) => setPaymentFrequency(e.target.value as "monthly" | "biweekly" | "weekly")}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="monthly">Monthly</option>
                <option value="biweekly">Bi-weekly</option>
                <option value="weekly">Weekly</option>
              </select>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isFirstTimeBuyer}
                onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">First-time Homebuyer</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isNewlyBuilt}
                onChange={(e) => setIsNewlyBuilt(e.target.checked)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-gray-700">Newly Built Home</span>
            </label>
          </div>

          {/* Rate Section */}
          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Percent className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Rate</h3>
            </div>
            <p className="text-sm text-gray-600">
              Your mortgage interest rate can either be Fixed for the term or Variable.
            </p>
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="number"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
                />
              </div>
              <div className="flex gap-1">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">Fixed</button>
                <button className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-300">
                  Variable
                </button>
              </div>
            </div>
          </div>

          {/* Amortization */}
          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Amortization</h3>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:underline">View schedule</button>
            </div>
            <p className="text-sm text-gray-600">The total time it takes to pay off your mortgage in full.</p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-gray-900">{amortization} years</span>
              <span className="text-gray-500">0 months</span>
            </div>
            <input
              type="range"
              min="15"
              max="30"
              value={amortization}
              onChange={(e) => setAmortization(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
            <div className="border-l-4 border-blue-500 pl-4 mb-6">
              <p className="text-sm text-gray-400 mb-1">Total Monthly Cost</p>
              <p className="text-4xl font-bold">
                ${getPaymentByFrequency().toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </p>
            </div>

            {/* Payment Breakdown Bar */}
            <div className="h-3 rounded-full bg-gray-700 flex overflow-hidden mb-4">
              <div className="bg-blue-500 h-full" style={{ width: "75%" }}></div>
              <div className="bg-green-500 h-full" style={{ width: "15%" }}></div>
              <div className="bg-purple-500 h-full" style={{ width: "10%" }}></div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  Monthly Mortgage
                </span>
                <span className="font-semibold">
                  ${monthlyPayment.toLocaleString("en-CA", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  Home Expenses
                </span>
                <span className="font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                  Other Expenses
                </span>
                <span className="font-semibold">$0.00</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-700">
              <div>
                <p className="text-xs text-gray-400">Mortgage Amount</p>
                <p className="text-lg font-semibold">
                  ${totalMortgage.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </p>
              </div>
              {needsInsurance && (
                <div>
                  <p className="text-xs text-gray-400">CMHC Insurance</p>
                  <p className="text-lg font-semibold">
                    ${insuranceAmount.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="font-bold text-gray-900">Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Mortgage Payment</span>
                <span className="font-semibold text-blue-600">
                  ${monthlyPayment.toLocaleString("en-CA", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Net Mortgage</span>
                <span className="font-semibold">${mortgageAmount.toLocaleString()}</span>
              </div>
              {needsInsurance && (
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 flex items-center gap-1">
                    <span>+</span> Mortgage Insurance
                  </span>
                  <span className="font-semibold">
                    + ${insuranceAmount.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </span>
                </div>
              )}
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Interest paid over Term</span>
                <span className="font-semibold text-blue-600">
                  ${termInterest.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Balance end of Term</span>
                <span className="font-semibold">
                  ${balanceEndOfTerm.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Effective Amortization</span>
                <span className="font-semibold">{amortization} Years</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Get Pre-Approved Today
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Mortgage Calculator Component
function MortgageCalculator({ onBack }: { onBack: () => void }) {
  const [mortgageAmount, setMortgageAmount] = useState(500000)
  const [interestRate, setInterestRate] = useState(6.29)
  const [amortization, setAmortization] = useState(25)
  const [paymentFrequency, setPaymentFrequency] = useState<"monthly" | "biweekly" | "weekly">("monthly")
  const [rateType, setRateType] = useState<"fixed" | "variable">("fixed")

  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = amortization * 12
  const monthlyPayment =
    (mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  const getPaymentByFrequency = () => {
    switch (paymentFrequency) {
      case "biweekly":
        return (monthlyPayment * 12) / 26
      case "weekly":
        return (monthlyPayment * 12) / 52
      default:
        return monthlyPayment
    }
  }

  const termPayments = 60
  const principalPaid = monthlyPayment * termPayments * 0.21
  const interestPaid = monthlyPayment * termPayments * 0.79
  const totalPayment = monthlyPayment * termPayments
  const balanceEndOfTerm = mortgageAmount - principalPaid

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Calculator Hub
          </Badge>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Badge variant="outline" className="border-purple-200 text-purple-700 px-3 py-1">
            Mortgage Calculator
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Mortgage Calculator</h2>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Mortgage Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={mortgageAmount.toLocaleString()}
                onChange={(e) => setMortgageAmount(Number(e.target.value.replace(/,/g, "")) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
              />
            </div>
            <input
              type="range"
              min="50000"
              max="2000000"
              step="10000"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Payment Frequency</label>
            <select
              value={paymentFrequency}
              onChange={(e) => setPaymentFrequency(e.target.value as "monthly" | "biweekly" | "weekly")}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
            >
              <option value="monthly">Monthly</option>
              <option value="biweekly">Bi-weekly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <Percent className="w-4 h-4 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Rate</h3>
            </div>
            <div className="flex gap-4">
              <input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
              />
              <div className="flex gap-1">
                <button
                  onClick={() => setRateType("fixed")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${rateType === "fixed" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                >
                  Fixed
                </button>
                <button
                  onClick={() => setRateType("variable")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${rateType === "variable" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"}`}
                >
                  Variable
                </button>
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-xl">
                <option>5 Year</option>
                <option>3 Year</option>
                <option>2 Year</option>
                <option>1 Year</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Amortization</h3>
              </div>
              <button className="text-blue-600 text-sm font-medium hover:underline">View schedule</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-gray-900">{amortization} years</span>
              <span className="text-gray-500">0 months</span>
            </div>
            <input
              type="range"
              min="15"
              max="30"
              value={amortization}
              onChange={(e) => setAmortization(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="bg-blue-50 rounded-xl p-5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
              <Check className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-blue-800 font-medium">Pay your mortgage faster</span>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-2">Mortgage Payment</p>
              <p className="text-5xl font-bold">
                ${getPaymentByFrequency().toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </p>
              <p className="text-gray-400 capitalize">{paymentFrequency}</p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div className="bg-slate-700/50 rounded-xl p-3">
                <p className="text-gray-400">Payment</p>
                <p className="font-semibold">
                  ${getPaymentByFrequency().toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-3">
                <p className="text-gray-400">Term</p>
                <p className="font-semibold">5 Year</p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-3">
                <p className="text-gray-400">Total</p>
                <p className="font-semibold">${totalPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="font-bold text-gray-900">Payment breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Principal Paid</span>
                <span className="font-semibold">
                  ${principalPaid.toLocaleString("en-CA", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Interest Paid</span>
                <span className="font-semibold">
                  ${interestPaid.toLocaleString("en-CA", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Total payment</span>
                <span className="font-semibold">
                  ${totalPayment.toLocaleString("en-CA", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Balance end of Term</span>
                <span className="font-semibold">
                  ${balanceEndOfTerm.toLocaleString("en-CA", { maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Effective Amortization</span>
                <span className="font-semibold">{amortization} Years</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 text-lg rounded-xl shadow-lg"
            asChild
          >
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Speak with an Expert
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Land Transfer Tax Calculator
function LandTransferCalculator({ onBack }: { onBack: () => void }) {
  const [purchasePrice, setPurchasePrice] = useState(600000)
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false)
  const [city, setCity] = useState<"toronto" | "other">("toronto")

  // Ontario Land Transfer Tax calculation
  const calculateOntarioLTT = (price: number) => {
    let tax = 0
    if (price > 2000000) {
      tax += (price - 2000000) * 0.025
      tax += 1000000 * 0.02
      tax += 650000 * 0.015
      tax += 200000 * 0.01
      tax += 55000 * 0.005
    } else if (price > 1000000) {
      tax += (price - 1000000) * 0.02
      tax += 650000 * 0.015
      tax += 200000 * 0.01
      tax += 55000 * 0.005
    } else if (price > 400000) {
      tax += (price - 400000) * 0.015
      tax += 145000 * 0.01
      tax += 55000 * 0.005
    } else if (price > 250000) {
      tax += (price - 250000) * 0.01
      tax += 195000 * 0.005
    } else {
      tax += Math.min(price, 55000) * 0.005
      if (price > 55000) tax += Math.min(price - 55000, 195000) * 0.01
    }
    return tax
  }

  // Toronto Municipal Land Transfer Tax (mirrors Ontario rates)
  const calculateTorontoLTT = (price: number) => {
    if (city !== "toronto") return 0
    return calculateOntarioLTT(price) // Toronto rate mirrors Ontario rate
  }

  const ontarioLTT = calculateOntarioLTT(purchasePrice)
  const torontoLTT = calculateTorontoLTT(purchasePrice)
  const firstTimeBuyerRebateON = isFirstTimeBuyer ? Math.min(ontarioLTT, 4000) : 0
  const firstTimeBuyerRebateTO = isFirstTimeBuyer && city === "toronto" ? Math.min(torontoLTT, 4475) : 0
  const totalLTT = ontarioLTT + torontoLTT - firstTimeBuyerRebateON - firstTimeBuyerRebateTO

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Calculator Hub
          </Badge>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Badge variant="outline" className="border-cyan-200 text-cyan-700 px-3 py-1">
            Land Transfer Tax
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Land Transfer Tax Calculator</h2>
          <p className="text-gray-600">
            Calculate your Ontario and Toronto land transfer taxes including first-time home buyer rebates.
          </p>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Purchase Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={purchasePrice.toLocaleString()}
                onChange={(e) => setPurchasePrice(Number(e.target.value.replace(/,/g, "")) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
              />
            </div>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="10000"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <div className="flex gap-4">
              <button
                onClick={() => setCity("toronto")}
                className={`flex-1 py-3 rounded-xl font-medium transition-colors ${city === "toronto" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Toronto
              </button>
              <button
                onClick={() => setCity("other")}
                className={`flex-1 py-3 rounded-xl font-medium transition-colors ${city === "other" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                Other Ontario
              </button>
            </div>
          </div>

          <label className="flex items-center gap-3 cursor-pointer p-4 bg-blue-50 rounded-xl">
            <input
              type="checkbox"
              checked={isFirstTimeBuyer}
              onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600"
            />
            <div>
              <span className="text-gray-900 font-medium">First-time Home Buyer</span>
              <p className="text-sm text-gray-600">
                Get up to ${(4000 + (city === "toronto" ? 4475 : 0)).toLocaleString()} in rebates
              </p>
            </div>
          </label>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-2">Total Land Transfer Tax</p>
              <p className="text-5xl font-bold">${totalLTT.toLocaleString("en-CA", { maximumFractionDigits: 0 })}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="font-bold text-gray-900">Tax Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Ontario Land Transfer Tax</span>
                <span className="font-semibold">
                  ${ontarioLTT.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>
              {city === "toronto" && (
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Toronto Municipal LTT</span>
                  <span className="font-semibold">
                    ${torontoLTT.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                  </span>
                </div>
              )}
              {isFirstTimeBuyer && (
                <>
                  <div className="flex justify-between py-2 border-b border-gray-100 text-green-600">
                    <span>Ontario FTHB Rebate</span>
                    <span className="font-semibold">-${firstTimeBuyerRebateON.toLocaleString()}</span>
                  </div>
                  {city === "toronto" && (
                    <div className="flex justify-between py-2 border-b border-gray-100 text-green-600">
                      <span>Toronto FTHB Rebate</span>
                      <span className="font-semibold">-${firstTimeBuyerRebateTO.toLocaleString()}</span>
                    </div>
                  )}
                </>
              )}
              <div className="flex justify-between py-2 font-bold text-lg">
                <span className="text-gray-900">Total Due</span>
                <span className="text-blue-600">${totalLTT.toLocaleString("en-CA", { maximumFractionDigits: 0 })}</span>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 text-lg rounded-xl shadow-lg"
            asChild
          >
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Get Expert Advice
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Closing Costs Calculator
function ClosingCostsCalculator({ onBack }: { onBack: () => void }) {
  const [purchasePrice, setPurchasePrice] = useState(600000)
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(false)
  const [city, setCity] = useState<"toronto" | "other">("toronto")

  const calculateOntarioLTT = (price: number) => {
    let tax = 0
    if (price > 400000) {
      tax += (price - 400000) * 0.015
      tax += 145000 * 0.01
      tax += 55000 * 0.005
    } else if (price > 250000) {
      tax += (price - 250000) * 0.01
      tax += 195000 * 0.005
    } else {
      tax += Math.min(price, 55000) * 0.005
      if (price > 55000) tax += Math.min(price - 55000, 195000) * 0.01
    }
    return tax
  }

  const ontarioLTT = calculateOntarioLTT(purchasePrice)
  const torontoLTT = city === "toronto" ? calculateOntarioLTT(purchasePrice) : 0
  const firstTimeBuyerRebate = isFirstTimeBuyer
    ? Math.min(ontarioLTT, 4000) + (city === "toronto" ? Math.min(torontoLTT, 4475) : 0)
    : 0
  const totalLTT = ontarioLTT + torontoLTT - firstTimeBuyerRebate

  const legalFees = 1800
  const titleInsurance = 350
  const homeInspection = 500
  const appraisal = 350
  const adjustments = purchasePrice * 0.005
  const totalClosingCosts = totalLTT + legalFees + titleInsurance + homeInspection + appraisal + adjustments

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Calculator Hub
          </Badge>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Badge variant="outline" className="border-orange-200 text-orange-700 px-3 py-1">
            Closing Costs
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Closing Costs Calculator</h2>
          <p className="text-gray-600">
            Estimate your total closing costs including land transfer taxes, legal fees, and other expenses.
          </p>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Purchase Price</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={purchasePrice.toLocaleString()}
                onChange={(e) => setPurchasePrice(Number(e.target.value.replace(/,/g, "")) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCity("toronto")}
              className={`flex-1 py-3 rounded-xl font-medium ${city === "toronto" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              Toronto
            </button>
            <button
              onClick={() => setCity("other")}
              className={`flex-1 py-3 rounded-xl font-medium ${city === "other" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              Other Ontario
            </button>
          </div>

          <label className="flex items-center gap-3 cursor-pointer p-4 bg-blue-50 rounded-xl">
            <input
              type="checkbox"
              checked={isFirstTimeBuyer}
              onChange={(e) => setIsFirstTimeBuyer(e.target.checked)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600"
            />
            <span className="text-gray-900 font-medium">First-time Home Buyer</span>
          </label>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-2">Total Estimated Closing Costs</p>
              <p className="text-5xl font-bold">
                ${totalClosingCosts.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="font-bold text-gray-900">Cost Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Land Transfer Tax</span>
                <span className="font-semibold">${totalLTT.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Legal Fees</span>
                <span className="font-semibold">${legalFees.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Title Insurance</span>
                <span className="font-semibold">${titleInsurance.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Home Inspection</span>
                <span className="font-semibold">${homeInspection.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Appraisal</span>
                <span className="font-semibold">${appraisal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-600">Adjustments (est.)</span>
                <span className="font-semibold">
                  ${adjustments.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </span>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-6 text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Get Expert Guidance
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Affordability Calculator
function AffordabilityCalculator({ onBack }: { onBack: () => void }) {
  const [annualIncome, setAnnualIncome] = useState(100000)
  const [monthlyDebts, setMonthlyDebts] = useState(500)
  const [downPayment, setDownPayment] = useState(100000)
  const [interestRate, setInterestRate] = useState(5.99)

  const monthlyIncome = annualIncome / 12
  const gdsLimit = 0.39
  const tdsLimit = 0.44

  const maxMonthlyHousingGDS = monthlyIncome * gdsLimit
  const maxMonthlyHousingTDS = monthlyIncome * tdsLimit - monthlyDebts
  const maxMonthlyPayment = Math.min(maxMonthlyHousingGDS, maxMonthlyHousingTDS) * 0.75

  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = 25 * 12
  const maxMortgage =
    (maxMonthlyPayment * (Math.pow(1 + monthlyRate, numberOfPayments) - 1)) /
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))
  const maxPurchasePrice = maxMortgage + downPayment

  const actualGDS = ((maxMonthlyPayment * 1.33) / monthlyIncome) * 100
  const actualTDS = ((maxMonthlyPayment * 1.33 + monthlyDebts) / monthlyIncome) * 100

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Calculator Hub
          </Badge>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Badge variant="outline" className="border-green-200 text-green-700 px-3 py-1">
            Affordability
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Affordability Calculator</h2>
          <p className="text-gray-600">Find out how much home you can afford based on your income and debts.</p>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Annual Household Income</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={annualIncome.toLocaleString()}
                onChange={(e) => setAnnualIncome(Number(e.target.value.replace(/,/g, "")) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Monthly Debt Payments</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={monthlyDebts.toLocaleString()}
                onChange={(e) => setMonthlyDebts(Number(e.target.value.replace(/,/g, "")) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
              />
            </div>
            <p className="text-sm text-gray-500">Include car loans, credit cards, student loans, etc.</p>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Available Down Payment</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <input
                type="text"
                value={downPayment.toLocaleString()}
                onChange={(e) => setDownPayment(Number(e.target.value.replace(/,/g, "")) || 0)}
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Interest Rate</label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-2">Maximum Purchase Price</p>
              <p className="text-5xl font-bold">
                ${maxPurchasePrice.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400">Max Mortgage</p>
                <p className="text-xl font-bold">
                  ${maxMortgage.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400">Monthly Payment</p>
                <p className="text-xl font-bold">
                  ${maxMonthlyPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <h3 className="font-bold text-gray-900">Debt Service Ratios</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">GDS Ratio</span>
                  <span className="font-semibold">{actualGDS.toFixed(1)}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${actualGDS <= 39 ? "bg-green-500" : "bg-red-500"}`}
                    style={{ width: `${Math.min(actualGDS, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Maximum: 39%</p>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">TDS Ratio</span>
                  <span className="font-semibold">{actualTDS.toFixed(1)}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${actualTDS <= 44 ? "bg-green-500" : "bg-red-500"}`}
                    style={{ width: `${Math.min(actualTDS, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">Maximum: 44%</p>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-6 text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Get Pre-Approved
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Renewal Calculator
function RenewalCalculator({ onBack }: { onBack: () => void }) {
  const [currentBalance, setCurrentBalance] = useState(475000)
  const [currentPayment, setCurrentPayment] = useState(2952)
  const [currentRate, setCurrentRate] = useState(5.25)
  const [remainingAmortization, setRemainingAmortization] = useState(23)
  const [newRate, setNewRate] = useState(6.29)

  const monthlyRate = newRate / 100 / 12
  const numberOfPayments = remainingAmortization * 12
  const newPayment =
    (currentBalance * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  const paymentDifference = newPayment - currentPayment

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Calculator Hub
          </Badge>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Badge variant="outline" className="border-emerald-200 text-emerald-700 px-3 py-1">
            Renewal Calculator
          </Badge>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Renewal / Switch Calculator</h2>
          <p className="text-gray-600">See how your payments will change at renewal time.</p>

          <div className="bg-gray-50 rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-gray-900">Current Situation</h3>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Outstanding Balance</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={currentBalance.toLocaleString()}
                  onChange={(e) => setCurrentBalance(Number(e.target.value.replace(/,/g, "")) || 0)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl font-semibold"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">Current Payment</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="text"
                  value={currentPayment.toLocaleString()}
                  onChange={(e) => setCurrentPayment(Number(e.target.value.replace(/,/g, "")) || 0)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl font-semibold"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Current Rate</label>
                <input
                  type="number"
                  step="0.01"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl font-semibold"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Remaining Years</label>
                <input
                  type="number"
                  value={remainingAmortization}
                  onChange={(e) => setRemainingAmortization(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl font-semibold"
                />
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-gray-900">New Rate at Renewal</h3>
            <input
              type="number"
              step="0.01"
              value={newRate}
              onChange={(e) => setNewRate(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg font-semibold"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">How much will your Payments change?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Compared to your current mortgage payment, your new payment will{" "}
              {paymentDifference > 0 ? "increase" : "decrease"} by
            </p>
            <p className={`text-4xl font-bold ${paymentDifference > 0 ? "text-red-400" : "text-green-400"}`}>
              {paymentDifference > 0 ? "+" : ""}$
              {Math.abs(paymentDifference).toLocaleString("en-CA", { maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-500">Current Payment</p>
                <p className="text-xl font-bold text-gray-900">${currentPayment.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-600">New Payment</p>
                <p className="text-xl font-bold text-blue-700">
                  ${newPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${paymentDifference > 0 ? "bg-red-50" : "bg-green-50"}`}>
                <p className={`text-sm ${paymentDifference > 0 ? "text-red-600" : "text-green-600"}`}>Difference</p>
                <p className={`text-xl font-bold ${paymentDifference > 0 ? "text-red-700" : "text-green-700"}`}>
                  {paymentDifference > 0 ? "+" : ""}$
                  {paymentDifference.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                </p>
              </div>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-6 text-lg rounded-xl"
            asChild
          >
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Explore Better Rates
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

// Compare Side by Side Calculator
function CompareCalculator({ onBack }: { onBack: () => void }) {
  const [scenarios, setScenarios] = useState([
    { id: 1, name: "Scenario 1", amount: 500000, rate: 5.49, amortization: 25, type: "fixed" as const },
    { id: 2, name: "Scenario 2", amount: 500000, rate: 5.95, amortization: 25, type: "variable" as const },
  ])

  const calculatePayment = (amount: number, rate: number, amortization: number) => {
    const monthlyRate = rate / 100 / 12
    const numberOfPayments = amortization * 12
    return (
      (amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
    )
  }

  const addScenario = () => {
    if (scenarios.length < 4) {
      setScenarios([
        ...scenarios,
        {
          id: Date.now(),
          name: `Scenario ${scenarios.length + 1}`,
          amount: 500000,
          rate: 5.99,
          amortization: 25,
          type: "fixed" as const,
        },
      ])
    }
  }

  const removeScenario = (id: number) => {
    if (scenarios.length > 2) {
      setScenarios(scenarios.filter((s) => s.id !== id))
    }
  }

  const updateScenario = (id: number, field: string, value: number | string) => {
    setScenarios(scenarios.map((s) => (s.id === id ? { ...s, [field]: value } : s)))
  }

  const lowestPayment = Math.min(...scenarios.map((s) => calculatePayment(s.amount, s.rate, s.amortization)))

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div className="flex items-center gap-3">
          <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1">
            <Grid3X3 className="w-4 h-4 mr-2" />
            Calculator Hub
          </Badge>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Badge variant="outline" className="border-violet-200 text-violet-700 px-3 py-1">
            Compare Side by Side
          </Badge>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Compare Scenarios</h2>
            <p className="text-gray-600 mt-1">Compare up to four mortgage options side by side</p>
          </div>
          {scenarios.length < 4 && (
            <Button
              onClick={addScenario}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              + Add Scenario
            </Button>
          )}
        </div>

        {/* Comparison Grid */}
        <div
          className={`grid gap-6 ${scenarios.length === 2 ? "lg:grid-cols-2" : scenarios.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
        >
          {scenarios.map((scenario, index) => {
            const payment = calculatePayment(scenario.amount, scenario.rate, scenario.amortization)
            const totalInterest = payment * scenario.amortization * 12 - scenario.amount
            const isLowest = payment === lowestPayment

            return (
              <div
                key={scenario.id}
                className={`relative bg-white rounded-2xl border-2 p-6 space-y-5 transition-all ${isLowest ? "border-green-500 shadow-lg shadow-green-100" : "border-gray-200"}`}
              >
                {isLowest && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-500 text-white">Best Option</Badge>
                  </div>
                )}

                {scenarios.length > 2 && (
                  <button
                    onClick={() => removeScenario(scenario.id)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    ×
                  </button>
                )}

                <input
                  type="text"
                  value={scenario.name}
                  onChange={(e) => updateScenario(scenario.id, "name", e.target.value)}
                  className="text-lg font-bold text-gray-900 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none w-full"
                />

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase">Mortgage Amount</label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="text"
                        value={scenario.amount.toLocaleString()}
                        onChange={(e) =>
                          updateScenario(scenario.id, "amount", Number(e.target.value.replace(/,/g, "")) || 0)
                        }
                        className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase">Interest Rate</label>
                    <div className="flex gap-2 mt-1">
                      <input
                        type="number"
                        step="0.01"
                        value={scenario.rate}
                        onChange={(e) => updateScenario(scenario.id, "rate", Number(e.target.value))}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold"
                      />
                      <select
                        value={scenario.type}
                        onChange={(e) => updateScenario(scenario.id, "type", e.target.value)}
                        className="px-2 py-2 border border-gray-300 rounded-lg text-xs"
                      >
                        <option value="fixed">Fixed</option>
                        <option value="variable">Variable</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-gray-500 uppercase">Amortization</label>
                    <select
                      value={scenario.amortization}
                      onChange={(e) => updateScenario(scenario.id, "amortization", Number(e.target.value))}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold"
                    >
                      <option value={15}>15 Years</option>
                      <option value={20}>20 Years</option>
                      <option value={25}>25 Years</option>
                      <option value={30}>30 Years</option>
                    </select>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 text-white space-y-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-400">Monthly Payment</p>
                    <p className="text-2xl font-bold">
                      ${payment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-700 space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Interest</span>
                      <span className="font-semibold">
                        ${totalInterest.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Total Cost</span>
                      <span className="font-semibold">
                        ${(scenario.amount + totalInterest).toLocaleString("en-CA", { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary */}
        <div className="bg-blue-50 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Summary</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600">Lowest Monthly Payment</p>
              <p className="text-2xl font-bold text-green-600">
                ${lowestPayment.toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600">Payment Difference</p>
              <p className="text-2xl font-bold text-blue-600">
                $
                {(
                  Math.max(...scenarios.map((s) => calculatePayment(s.amount, s.rate, s.amortization))) - lowestPayment
                ).toLocaleString("en-CA", { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600">Scenarios Compared</p>
              <p className="text-2xl font-bold text-gray-900">{scenarios.length}</p>
            </div>
          </div>
        </div>

        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-6 text-lg rounded-xl shadow-lg"
          asChild
        >
          <Link href="/contact">
            <Phone className="w-5 h-5 mr-2" />
            Get Expert Advice on Your Options
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function ResourcesClient() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>("hub")

  const calculators = [
    {
      id: "purchase" as CalculatorType,
      icon: Home,
      title: "Purchase Calculator",
      description: "Calculate your total monthly cost and the minimum required down payment.",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      id: "renewal" as CalculatorType,
      icon: RefreshCw,
      title: "Renewal Calculator",
      description: "Find out how much your payments will increase or decrease at renewal time.",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    },
    {
      id: "affordability" as CalculatorType,
      icon: DollarSign,
      title: "Required Income",
      description: "Estimate how much annual income you need for any size of mortgage.",
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      id: "compare" as CalculatorType,
      icon: ArrowLeftRight,
      title: "Compare Side by Side",
      description: "Compare up to four scenarios side by side to see which option is best for you.",
      gradient: "bg-gradient-to-br from-violet-500 to-violet-600",
    },
    {
      id: "mortgage" as CalculatorType,
      icon: Calculator,
      title: "Mortgage Calculator",
      description: "Easy to use Canadian Mortgage Calculator jam-packed with awesome features.",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      id: "closing-costs" as CalculatorType,
      icon: Receipt,
      title: "Closing Costs",
      description:
        "Calculate closing costs including land transfer taxes, title insurance, legal fees and ancillary costs.",
      gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      id: "land-transfer" as CalculatorType,
      icon: Building2,
      title: "Land Transfer Tax",
      description: "Calculate your Ontario and Toronto land transfer taxes including first-time home buyer rebates.",
      gradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    },
  ]

  const renderCalculator = () => {
    switch (activeCalculator) {
      case "purchase":
        return <PurchaseCalculator onBack={() => setActiveCalculator("hub")} />
      case "mortgage":
        return <MortgageCalculator onBack={() => setActiveCalculator("hub")} />
      case "land-transfer":
        return <LandTransferCalculator onBack={() => setActiveCalculator("hub")} />
      case "closing-costs":
        return <ClosingCostsCalculator onBack={() => setActiveCalculator("hub")} />
      case "affordability":
        return <AffordabilityCalculator onBack={() => setActiveCalculator("hub")} />
      case "renewal":
        return <RenewalCalculator onBack={() => setActiveCalculator("hub")} />
      case "compare":
        return <CompareCalculator onBack={() => setActiveCalculator("hub")} />
      default:
        return (
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1.5">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Calculator Hub
              </Badge>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The Calculator Hub</h2>
              <p className="text-gray-600 mt-2">Choose a calculator to get started</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {calculators.map((calc) => (
                <CalculatorCard
                  key={calc.id}
                  icon={calc.icon}
                  title={calc.title}
                  description={calc.description}
                  gradient={calc.gradient}
                  onClick={() => setActiveCalculator(calc.id)}
                />
              ))}
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh] sm:min-h-[70vh] flex items-center">
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
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <Badge className="mb-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-lg shadow-blue-500/20">
              Tools & Resources
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              Mortgage Resources & Tools
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-50 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg text-pretty">
              Use these helpful tools and resources to better understand your mortgage options and make informed
              decisions about your home financing.
            </p>
          </div>
        </div>
      </section>

      {/* Property Inspiration Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Property Examples
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Calculate Payments for Your Dream Property
            </h2>
            <p className="text-lg sm:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Explore different property types and see what your payments could look like
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <Image
                  src="/modern-downtown-condo-building-exterior-with-glass.jpg"
                  alt="Downtown Condos"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2 text-balance">Downtown Condos</h3>
                  <p className="text-sm sm:text-base text-gray-100 text-pretty">Starting from $400K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <Image
                  src="/beautiful-family-home-with-front-yard-and-driveway.jpg"
                  alt="Family Homes"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2 text-balance">Family Homes</h3>
                  <p className="text-sm sm:text-base text-gray-100 text-pretty">Starting from $600K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 sm:col-span-2 lg:col-span-1">
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <Image
                  src="/luxury-estate-home-with-landscaped-gardens.jpg"
                  alt="Luxury Estates"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold mb-1 sm:mb-2 text-balance">Luxury Estates</h3>
                  <p className="text-sm sm:text-base text-gray-100 text-pretty">Starting from $1M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator-hub" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{renderCalculator()}</div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Knowledge Base
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Helpful Resources
            </h2>
            <p className="text-lg sm:text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Everything you need to know about mortgages
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">First-Time Buyer Guide</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-7 text-gray-600">
                  Complete guide for first-time homebuyers including programs, incentives, and step-by-step process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>• First-Time Home Buyer Incentive</li>
                  <li>• Home Buyers Plan (HBP)</li>
                  <li>• Land Transfer Tax Rebates</li>
                  <li>• Minimum down payment requirements</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                  asChild
                >
                  <Link href="/resources/guides/first-time-buyer-guide">View Guide</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mb-4" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Current Rates</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-7 text-gray-600">
                  Stay updated with the latest mortgage rates from various lenders across Canada.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base font-medium text-gray-700">5-Year Fixed:</span>
                    <span className="font-bold text-green-600">5.49%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base font-medium text-gray-700">5-Year Variable:</span>
                    <span className="font-bold text-green-600">5.95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm sm:text-base font-medium text-gray-700">3-Year Fixed:</span>
                    <span className="font-bold text-green-600">5.79%</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-4">*Rates as of today. Subject to change.</p>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                  asChild
                >
                  <Link href="/contact">Get Personal Rate</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Mortgage Glossary</CardTitle>
                <CardDescription className="text-sm sm:text-base leading-7 text-gray-600">
                  Understand mortgage terminology with our comprehensive glossary of terms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base text-gray-700 mb-4">
                  <li>• Amortization explained</li>
                  <li>• Fixed vs Variable rates</li>
                  <li>• CMHC Insurance</li>
                  <li>• Pre-approval process</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold bg-transparent"
                  asChild
                >
                  <Link href="/resources/guides/mortgage-glossary">View Glossary</Link>
                </Button>
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

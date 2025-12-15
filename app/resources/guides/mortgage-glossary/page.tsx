import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, BookOpen, Search, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Mortgage Glossary | 50+ Terms Explained | Sumanta Mahabir",
  description:
    "Complete mortgage glossary with 50+ terms explained in plain English. Understand amortization, CMHC, stress test, and more. Your guide to mortgage terminology.",
  keywords: [
    "mortgage glossary",
    "mortgage terms explained",
    "what is amortization",
    "CMHC insurance",
    "mortgage terminology",
    "real estate terms",
  ],
  alternates: {
    canonical: "https://sumantamahabir.ca/resources/guides/mortgage-glossary",
  },
}

const glossaryTerms = [
  {
    term: "Amortization",
    definition:
      "The total length of time it takes to pay off your mortgage in full. Common amortization periods in Canada are 25 or 30 years.",
  },
  {
    term: "Appraisal",
    definition:
      "A professional assessment of a property's market value, typically required by lenders before approving a mortgage.",
  },
  {
    term: "Blended Rate",
    definition:
      "When you refinance or renew early, a blended rate combines your existing rate with the new rate to create a single rate.",
  },
  {
    term: "Bridge Financing",
    definition:
      "Short-term financing that helps you cover the gap when your new home closes before your current home sells.",
  },
  {
    term: "Closed Mortgage",
    definition:
      "A mortgage with restrictions on prepayments. Breaking a closed mortgage early usually results in significant penalties.",
  },
  {
    term: "CMHC Insurance",
    definition:
      "Mortgage default insurance required when your down payment is less than 20%. Protects the lender if you default on your loan.",
  },
  {
    term: "Conventional Mortgage",
    definition: "A mortgage where the down payment is 20% or more of the purchase price, not requiring CMHC insurance.",
  },
  {
    term: "Debt Service Ratio",
    definition:
      "The percentage of your gross income used to pay housing costs (GDS) and all debts (TDS). Lenders use this to determine affordability.",
  },
  {
    term: "Down Payment",
    definition: "The portion of the purchase price you pay upfront. Minimum is 5% for homes under $500K in Canada.",
  },
  {
    term: "Equity",
    definition:
      "The difference between your home's market value and the amount you owe on your mortgage. Your ownership stake.",
  },
  {
    term: "Fixed Rate Mortgage",
    definition:
      "A mortgage where the interest rate stays the same for the entire term, providing predictable payments.",
  },
  {
    term: "GDS (Gross Debt Service)",
    definition:
      "The percentage of your gross income needed for housing costs (mortgage, taxes, heating, condo fees). Should be under 39%.",
  },
  {
    term: "High-Ratio Mortgage",
    definition:
      "A mortgage where your down payment is less than 20%, requiring mortgage default insurance (CMHC, Sagen, or Canada Guaranty).",
  },
  {
    term: "Home Equity Line of Credit (HELOC)",
    definition:
      "A revolving line of credit secured against your home equity. You can borrow, repay, and borrow again up to your limit.",
  },
  {
    term: "Interest Rate",
    definition:
      "The cost of borrowing money, expressed as a percentage. Can be fixed or variable over your mortgage term.",
  },
  {
    term: "Land Transfer Tax",
    definition:
      "A provincial tax paid when you purchase property in Ontario. First-time buyers may qualify for rebates up to $4,000.",
  },
  {
    term: "Lump Sum Payment",
    definition:
      "An extra payment made on your mortgage in addition to regular payments, helping you pay down principal faster.",
  },
  {
    term: "Maturity Date",
    definition:
      "The date when your mortgage term ends and you need to renew, refinance, or pay off the remaining balance.",
  },
  {
    term: "Mortgage Broker/Agent",
    definition:
      "A licensed professional who works with multiple lenders to find you the best mortgage product and rate.",
  },
  {
    term: "Open Mortgage",
    definition:
      "A mortgage that allows you to pay off the entire balance at any time without penalty. Usually has higher rates.",
  },
  {
    term: "Portable Mortgage",
    definition:
      "A mortgage that can be transferred to a new property if you move, keeping your existing rate and terms.",
  },
  {
    term: "Pre-Approval",
    definition: "A conditional commitment from a lender for a specific mortgage amount, usually valid for 90-120 days.",
  },
  {
    term: "Prepayment Penalty",
    definition:
      "A fee charged if you pay off your mortgage early or make payments exceeding your prepayment privileges.",
  },
  {
    term: "Prepayment Privileges",
    definition:
      "The amount you're allowed to pay extra on your mortgage each year without penalty, typically 15-20% of the original amount.",
  },
  {
    term: "Prime Rate",
    definition:
      "The benchmark interest rate set by banks, which variable rate mortgages are typically based on (e.g., Prime - 0.5%).",
  },
  {
    term: "Principal",
    definition: "The original amount borrowed, not including interest. Your payments reduce principal over time.",
  },
  {
    term: "Refinance",
    definition:
      "Replacing your existing mortgage with a new one, often to access equity, consolidate debt, or get better terms.",
  },
  {
    term: "Renewal",
    definition:
      "When your mortgage term ends, you renew with your current lender or switch to a new one for another term.",
  },
  {
    term: "Reverse Mortgage",
    definition:
      "A loan for homeowners 55+ that lets you access home equity without monthly payments. Repaid when you sell or pass away.",
  },
  {
    term: "Second Mortgage",
    definition:
      "An additional mortgage on a property that already has a first mortgage. Higher rates but doesn't disturb first mortgage.",
  },
  {
    term: "Stress Test",
    definition:
      "A federal requirement to qualify at a rate higher than your actual rate (currently contract rate + 2% or 5.25%, whichever is higher).",
  },
  {
    term: "TDS (Total Debt Service)",
    definition:
      "The percentage of your gross income needed for all debts including housing costs. Should be under 44%.",
  },
  {
    term: "Term",
    definition:
      "The length of time your mortgage contract is in effect (usually 1-5 years). Not the same as amortization.",
  },
  {
    term: "Title Insurance",
    definition:
      "Insurance that protects against problems with property ownership, like unknown liens or survey issues.",
  },
  {
    term: "Variable Rate Mortgage",
    definition:
      "A mortgage where the interest rate fluctuates with the prime rate. Payments may stay fixed or change with rates.",
  },
]

export default function MortgageGlossaryPage() {
  const alphabet = [...new Set(glossaryTerms.map((t) => t.term[0]))].sort()

  return (
    <>
      <Navigation />

      {/* Hero Section - Premium Design */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-mortgage-glossary.jpg"
            alt="Mortgage glossary reference guide"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <Badge className="mb-6 bg-blue-500/20 text-blue-200 hover:bg-blue-500/30 border border-blue-400/50 backdrop-blur-sm px-5 py-2 font-semibold text-sm">
            <BookOpen className="w-4 h-4 mr-2 inline" />
            Reference Guide
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl text-balance">
            Mortgage{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)" }}
            >
              Glossary
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-blue-50/95 mb-10 leading-relaxed text-pretty max-w-3xl mx-auto font-medium">
            35+ mortgage terms explained in plain English. Bookmark this page for quick reference during your home
            buying journey.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { value: "35+", label: "Terms Defined" },
              { value: "A-Z", label: "Alphabetically Organized" },
              { value: "100%", label: "Plain English" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center"
              >
                <div className="text-3xl font-extrabold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search hint */}
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <Search className="w-5 h-5" />
            <span className="text-sm">Use Ctrl/Cmd + F to search for any term</span>
          </div>
        </div>
      </section>

      {/* Alphabet Navigation - Premium Sticky Bar */}
      <section className="py-4 bg-white/95 backdrop-blur-md border-b border-blue-100 sticky top-16 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {alphabet.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-11 h-11 flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 font-bold rounded-xl hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Terms - Enhanced Design */}
      <section className="py-16 sm:py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-30"
          style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {alphabet.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="mb-16 scroll-mt-32">
              {/* Letter Header */}
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl text-3xl font-extrabold text-white shadow-lg"
                  style={{ background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)" }}
                >
                  {letter}
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-blue-200 to-transparent rounded-full" />
              </div>

              {/* Terms Grid */}
              <div className="grid gap-4">
                {glossaryTerms
                  .filter((t) => t.term[0] === letter)
                  .map((item, index) => (
                    <Card
                      key={item.term}
                      className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                      <CardContent className="p-6 pl-8">
                        <div className="flex items-start gap-4">
                          <div
                            className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md"
                            style={{
                              background: `linear-gradient(135deg, ${index % 2 === 0 ? "#2563eb, #1e40af" : "#3b82f6, #2563eb"})`,
                            }}
                          >
                            {item.term[0]}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                              {item.term}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">{item.definition}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Terms Quick Reference */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #eff6ff 100%)" }}
      >
        <div
          className="absolute top-0 left-1/4 w-96 h-96 opacity-40"
          style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 px-4 py-1.5 font-semibold">
              Quick Reference
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Most Searched Terms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the terms first-time buyers ask about most frequently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { term: "Stress Test", icon: "📊" },
              { term: "CMHC Insurance", icon: "🛡️" },
              { term: "Down Payment", icon: "💰" },
              { term: "Pre-Approval", icon: "✅" },
              { term: "Fixed Rate Mortgage", icon: "🔒" },
              { term: "Variable Rate Mortgage", icon: "📈" },
            ].map((item) => {
              const termData = glossaryTerms.find((t) => t.term === item.term)
              return (
                <Card
                  key={item.term}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.term}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{termData?.definition}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Design */}
      <section className="relative py-20 sm:py-24 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at top right, rgba(59,130,246,0.4) 0%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at bottom left, rgba(30,58,138,0.4) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-1.5 font-semibold backdrop-blur-sm">
            <CheckCircle2 className="w-5 h-5 mr-2 inline" />
            Expert Guidance
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 drop-shadow-lg text-balance">
            Still Have Questions About Your Mortgage?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            I'm here to explain everything in plain language and help you make confident decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-xl text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call 437-241-2954
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 bg-transparent"
              asChild
            >
              <a href="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CalendlyWidget />
      <Footer />
    </>
  )
}

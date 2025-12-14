import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Building,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Calendar,
  DollarSign,
  TrendingUp,
  Home,
  Calculator,
} from "lucide-react"
import { siteConfig } from "@/lib/site"
import { TableOfContents } from "@/components/mortgage/table-of-contents"
import { FAQAccordion, generateFAQSchema } from "@/components/mortgage/faq-accordion"
import { ProcessTimeline } from "@/components/mortgage/process-timeline"
import { RelatedSolutions } from "@/components/mortgage/related-solutions"
import { CTASection } from "@/components/mortgage/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"

export const metadata: Metadata = {
  title: "Investment Property Mortgages Ontario | Rental Property Financing | Sumanta Mahabir",
  description:
    "Finance your Ontario investment property with competitive rates. Rental properties, multi-unit buildings, and real estate investments. Expert guidance for investors.",
  openGraph: {
    title: "Investment Property Mortgages Ontario | Sumanta Mahabir",
    description:
      "Finance your investment property with competitive rates. Rental properties, multi-unit buildings, and real estate investments.",
    url: `${siteConfig.url}/mortgage-solutions/investment-properties`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions/investment-properties`,
  },
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "property-types", title: "Property Types", level: 2 },
  { id: "down-payment", title: "Down Payment Requirements", level: 2 },
  { id: "qualification", title: "How to Qualify", level: 2 },
  { id: "rental-income", title: "Using Rental Income", level: 2 },
  { id: "process", title: "The Process", level: 2 },
  { id: "strategies", title: "Investment Strategies", level: 2 },
  { id: "scenarios", title: "Real Scenarios", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
]

const faqs = [
  {
    question: "What down payment do I need for an investment property?",
    answer:
      "Investment properties require a minimum 20% down payment in Canada—there's no mortgage default insurance available for non-owner-occupied properties. However, some strategies can reduce this: owner-occupied multi-unit properties (live in one unit, rent others) can qualify for as low as 5% down, and using a HELOC from your primary residence can help fund the down payment.",
  },
  {
    question: "Can I use rental income to qualify for the mortgage?",
    answer:
      "Yes, lenders typically allow you to use 50-80% of the expected rental income to offset the property's expenses and help you qualify. Some lenders use actual market rent (from an appraisal), while others use the lease amount if you already have tenants. This rental income can significantly boost your purchasing power.",
  },
  {
    question: "What interest rates can I expect for investment properties?",
    answer:
      "Investment property rates are typically 0.10% to 0.50% higher than owner-occupied rates due to the higher perceived risk. However, with access to multiple lenders, I can often find competitive rates. Your rate will depend on your credit score, down payment, property type, and whether the property is already tenanted.",
  },
  {
    question: "Can I buy an investment property if I don't own my own home?",
    answer:
      "Yes, you can buy an investment property without owning a primary residence. However, you'll need the 20% minimum down payment and must qualify based on your income and debts. Some investors choose to rent their primary residence while owning rental properties—this can be a valid investment strategy.",
  },
  {
    question: "How many investment properties can I finance?",
    answer:
      "Most traditional lenders limit you to 4-5 financed properties (including your primary residence). However, alternative lenders and portfolio lending options exist for investors with more properties. Each subsequent property typically requires slightly higher down payments and rates. I specialize in helping investors build portfolios.",
  },
  {
    question: "What's the difference between residential and commercial investment mortgages?",
    answer:
      "Residential investment mortgages are for properties with 1-4 units and are processed like regular residential mortgages. Properties with 5+ units are considered commercial and have different qualification criteria, rates, and terms. Commercial mortgages often require 25-35% down and have shorter amortization periods.",
  },
  {
    question: "Can I refinance my primary residence to buy an investment property?",
    answer:
      "Yes, this is a common strategy. By refinancing your primary residence or taking out a HELOC, you can access your home equity for the down payment on an investment property. The funds become 'your own' once withdrawn, making them an acceptable down payment source for the investment property purchase.",
  },
  {
    question: "What expenses should I consider beyond the mortgage payment?",
    answer:
      "Investment property expenses include: property taxes, insurance (typically higher for rentals), maintenance and repairs (budget 5-10% of rent), vacancy costs (budget 1-2 months/year), property management (typically 8-10% of rent if using a manager), utilities (if included in rent), and potential condo fees. Cash flow analysis should account for all these costs.",
  },
  {
    question: "Should I incorporate for my investment properties?",
    answer:
      "This depends on your situation. Holding properties personally offers mortgage flexibility and lower rates but exposes you to personal liability. Corporations provide liability protection and potential tax benefits but face higher mortgage rates and stricter lending criteria. Consult with an accountant and lawyer for advice specific to your situation.",
  },
  {
    question: "What if my investment property has negative cash flow?",
    answer:
      "Negative cash flow (where expenses exceed rent) isn't ideal but isn't necessarily a deal-breaker. Many investors accept modest negative cash flow for properties with strong appreciation potential or in prime locations. Lenders will still consider your ability to cover the shortfall from other income. I can help you analyze whether a property makes sense despite negative cash flow.",
  },
]

const processSteps = [
  {
    title: "Investment Strategy Consultation",
    description:
      "Discuss your investment goals, risk tolerance, and target markets. Determine your purchasing power and optimal property type.",
    duration: "45 min",
  },
  {
    title: "Pre-Approval & Purchasing Power",
    description:
      "Get pre-approved showing the maximum investment property value you can finance. Understand how rental income will be factored.",
    duration: "2-3 days",
  },
  {
    title: "Property Search & Analysis",
    description:
      "Work with your real estate agent to find properties. I can help analyze cash flow projections for potential purchases.",
    duration: "Varies",
  },
  {
    title: "Mortgage Application",
    description:
      "Submit your full application once you have an accepted offer. Provide property details, lease agreements if applicable, and required documents.",
    duration: "2-3 days",
  },
  {
    title: "Appraisal & Rental Analysis",
    description:
      "Lender orders appraisal including market rent assessment. This determines the property value and qualifying rental income.",
    duration: "5-10 days",
  },
  {
    title: "Approval & Closing",
    description:
      "Receive final approval, complete legal work, and close on your investment property. Start building your rental portfolio!",
    duration: "Closing day",
  },
]

export default function InvestmentPropertiesPage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-investment-property-rental.jpg"
              alt="Investment property in Ontario"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">Investment Properties</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Build Wealth Through{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Real Estate
              </span>{" "}
              in Ontario
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Finance your investment property portfolio with competitive rates. From single-family rentals to
              multi-unit buildings, I help investors succeed.
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
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 bg-primary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">20%</div>
                <div className="text-sm text-muted-foreground">Minimum Down Payment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50-80%</div>
                <div className="text-sm text-muted-foreground">Rental Income Used</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30yr</div>
                <div className="text-sm text-muted-foreground">Max Amortization</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Lenders Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with TOC */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
              {/* Main Content */}
              <div className="space-y-16">
                {/* Overview */}
                <div id="overview" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Investment Property Financing in Ontario</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Real estate investment has long been one of the most reliable paths to building wealth in Ontario.
                      With strong population growth, limited housing supply, and steady rental demand in cities like
                      Toronto, Hamilton, Ottawa, Kitchener-Waterloo, and London, investment properties continue to offer
                      attractive returns for savvy investors.
                    </p>
                    <p>
                      However, financing investment properties differs significantly from owner-occupied home purchases.
                      Higher down payment requirements, different qualification rules, and the need to analyze cash flow
                      make expert guidance essential. As a mortgage agent specializing in investment properties, I help
                      investors navigate these complexities and find financing that supports their wealth-building
                      goals.
                    </p>
                    <p>
                      Whether you&apos;re buying your first rental property or expanding an existing portfolio, I
                      provide personalized strategies to maximize your purchasing power and return on investment.
                    </p>
                  </div>
                </div>

                {/* Property Types */}
                <div id="property-types" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Types of Investment Properties We Finance</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <Home className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Single-Family Rentals</h3>
                        <p className="text-muted-foreground text-sm">
                          Detached homes, semis, and townhouses rented to single tenants or families. Often the easiest
                          entry point for new investors with straightforward management.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Building className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Multi-Unit Properties (2-4 Units)</h3>
                        <p className="text-muted-foreground text-sm">
                          Duplexes, triplexes, and fourplexes offer multiple income streams. Can qualify as residential
                          (easier financing) while benefiting from diversified tenant base.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Building className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Condominiums</h3>
                        <p className="text-muted-foreground text-sm">
                          Condo units as rentals offer lower entry costs and minimal maintenance responsibilities.
                          Popular in urban markets with strong tenant demand.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Building className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Vacation/Short-Term Rentals</h3>
                        <p className="text-muted-foreground text-sm">
                          Properties for Airbnb or vacation rentals in tourist areas. Financing available with specific
                          lenders who understand short-term rental income.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Down Payment Requirements */}
                <div id="down-payment" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Down Payment Requirements</h2>
                  <div className="space-y-6">
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-primary" />
                        Non-Owner Occupied Investment Properties
                      </h3>
                      <ul className="text-muted-foreground space-y-2">
                        <li>
                          • <strong>Minimum 20%</strong> down payment required
                        </li>
                        <li>• No CMHC insurance available for pure investment properties</li>
                        <li>• Higher down payments (25%+) may qualify for better rates</li>
                        <li>• Down payment source must be verified (savings, HELOC, gifted equity)</li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary" />
                        Owner-Occupied Investment (House Hack)
                      </h3>
                      <ul className="text-muted-foreground space-y-2">
                        <li>
                          • <strong>As low as 5%</strong> down if you live in one unit
                        </li>
                        <li>• Available for properties up to 4 units</li>
                        <li>• CMHC insurance applies (added to mortgage)</li>
                        <li>• Must intend to occupy as your primary residence</li>
                        <li>• Excellent strategy for first-time investors</li>
                      </ul>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Down Payment Strategies
                      </h3>
                      <ul className="text-muted-foreground space-y-2">
                        <li>
                          • <strong>HELOC from primary residence:</strong> Access home equity for down payment
                        </li>
                        <li>
                          • <strong>Refinance to invest:</strong> Pull equity from existing properties
                        </li>
                        <li>
                          • <strong>Gifted equity:</strong> If buying from family below market value
                        </li>
                        <li>
                          • <strong>Vendor take-back:</strong> Seller provides part of financing (rare)
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Qualification */}
                <div id="qualification" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">How Investment Property Qualification Works</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>Investment property qualification considers several factors beyond owner-occupied purchases:</p>
                    <ul>
                      <li>
                        <strong>Debt Service Ratios:</strong> Your GDS/TDS ratios include your existing mortgage
                        payments plus the new investment property costs, offset by rental income.
                      </li>
                      <li>
                        <strong>Stress Test:</strong> You must qualify at the higher of your contract rate +2% or the
                        benchmark rate (currently 5.25%), applied to all mortgages.
                      </li>
                      <li>
                        <strong>Net Worth:</strong> Lenders may require minimum net worth, especially for larger
                        portfolios or higher-value properties.
                      </li>
                      <li>
                        <strong>Property Cash Flow:</strong> The property&apos;s ability to generate positive (or
                        near-positive) cash flow is considered.
                      </li>
                      <li>
                        <strong>Credit Score:</strong> Investment properties typically require 680+ credit for best
                        rates; 620-680 may still qualify with alternative lenders.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Using Rental Income */}
                <div id="rental-income" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Using Rental Income to Qualify</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <Calculator className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Add-Back Method</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          50% of gross rental income is added to your qualifying income. This is the most common method
                          used by major lenders.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Example: $2,000/month rent = $1,000/month added to income
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Calculator className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Offset Method</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Rental income offsets the property&apos;s carrying costs (mortgage + taxes + heat/condo fees).
                          Some lenders use 80% of rent for this calculation.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Example: $2,000 rent offsets $1,600 of property costs
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="mt-6 bg-muted/50 rounded-xl p-6">
                    <h3 className="font-semibold mb-3">Rental Income Documentation</h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>
                        • <strong>Existing tenants:</strong> Signed lease agreement showing rental amount and term
                      </li>
                      <li>
                        • <strong>Vacant properties:</strong> Appraiser provides market rent estimate based on
                        comparables
                      </li>
                      <li>
                        • <strong>Existing landlords:</strong> T776 tax forms and rental history strengthen applications
                      </li>
                      <li>
                        • <strong>Pro tip:</strong> Properties with existing strong leases can qualify for more
                        financing
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Process */}
                <div id="process" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">The Investment Property Mortgage Process</h2>
                  <ProcessTimeline steps={processSteps} />
                </div>

                {/* Investment Strategies */}
                <div id="strategies" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Investment Strategies We Support</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "House Hacking",
                        description:
                          "Live in one unit of a multi-unit property while renting others. Qualify with as little as 5% down while building equity and rental income experience.",
                      },
                      {
                        title: "BRRRR Strategy",
                        description:
                          "Buy, Rehab, Rent, Refinance, Repeat. Purchase undervalued properties, renovate to increase value, refinance to pull out equity, and repeat with next property.",
                      },
                      {
                        title: "Buy and Hold",
                        description:
                          "Long-term wealth building through property appreciation and mortgage paydown. Focus on stable, cash-flowing properties in growing markets.",
                      },
                      {
                        title: "Portfolio Building",
                        description:
                          "Systematically acquire multiple properties over time. I help investors navigate financing for their 2nd, 3rd, 4th+ properties.",
                      },
                      {
                        title: "Value-Add Investments",
                        description:
                          "Properties with below-market rents or improvement potential. Finance the purchase, then refinance after increasing property value or rents.",
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 bg-primary/5 rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Considerations */}
                <div className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Important Considerations</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Cash Flow Analysis",
                        description:
                          "Don't rely solely on appreciation. Analyze all expenses including vacancy, maintenance, and property management. Aim for positive or near-positive cash flow.",
                      },
                      {
                        title: "Reserve Funds",
                        description:
                          "Maintain 3-6 months of expenses in reserve for vacancies, repairs, and unexpected costs. Lenders may require proof of reserves.",
                      },
                      {
                        title: "Insurance Requirements",
                        description:
                          "Investment properties require landlord insurance, which is more expensive than homeowner insurance. Factor this into your cash flow projections.",
                      },
                      {
                        title: "Tax Implications",
                        description:
                          "Rental income is taxable. However, many expenses are deductible. Consult with an accountant about depreciation, expense deductions, and tax planning.",
                      },
                      {
                        title: "Property Management",
                        description:
                          "Decide if you'll self-manage or hire a property manager (typically 8-10% of rent). Factor this into your numbers before purchasing.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800"
                      >
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scenarios */}
                <div id="scenarios" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Real Investment Property Scenarios</h2>
                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">First-Time Investor: House Hack</h3>
                        <p className="text-muted-foreground mb-3">
                          Jordan, 28, wanted to start investing but only had $40,000 saved. Instead of buying a
                          single-family home, he purchased a $550,000 triplex in Hamilton, living in one unit and
                          renting two. With just 5% down ($27,500) plus closing costs, the two rental units
                          ($1,400/month each) cover most of his mortgage. He&apos;s building equity while paying minimal
                          housing costs.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Down payment: 5% ($27,500) | Rental income: $2,800/month | Net housing cost: ~$400/month
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Portfolio Expansion: Second Property</h3>
                        <p className="text-muted-foreground mb-3">
                          Lisa and Raj own their $800,000 home with a $400,000 mortgage. They took out a $200,000 HELOC
                          against their equity and used $130,000 for a down payment on a $650,000 rental condo in
                          Mississauga. The rental income ($2,500/month) covers the condo&apos;s mortgage and expenses
                          plus the interest on the HELOC portion used. They now own two appreciating properties.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          HELOC used: $130,000 | Rental income: $2,500/month | Cash flow neutral while building equity
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">BRRRR Strategy Success</h3>
                        <p className="text-muted-foreground mb-3">
                          Alex purchased an outdated 4-unit property in London for $600,000 with 20% down ($120,000). He
                          invested $60,000 in renovations, increasing rents from $4,000 to $5,600/month total. The
                          property appraised at $850,000 after renovations. He refinanced at 75% LTV ($637,500), pulling
                          out more than his original investment to use for the next property—all while owning a
                          cash-flowing asset.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Initial investment: $180,000 | Refinanced amount: $637,500 | Monthly rental increase:
                          $1,600/month
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * These scenarios are illustrative examples. Actual results vary based on market conditions and
                    individual circumstances.
                  </p>
                </div>

                {/* FAQ */}
                <div id="faq" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <FAQAccordion faqs={faqs} />
                </div>

                {/* CTA */}
                <CTASection
                  variant="compact"
                  title="Ready to Invest in Real Estate?"
                  description="Get expert guidance on financing your investment property. Free consultation for investors."
                />

                {/* Related Solutions */}
                <RelatedSolutions exclude="/mortgage-solutions/investment-properties" />
              </div>

              {/* Table of Contents Sidebar */}
              <aside className="hidden lg:block">
                <TableOfContents items={tocItems} />
                <div className="mt-8 sticky top-96">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <Building className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Investor Consultation</h3>
                      <p className="text-sm text-muted-foreground mb-4">Let&apos;s discuss your investment strategy.</p>
                      <Button className="w-full" asChild>
                        <a href={`tel:${siteConfig.phone}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <CTASection />

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              Investment property financing involves risks including market fluctuations and vacancy. This information
              is general in nature. Contact us for personalized guidance based on your specific investment goals.
            </p>
          </div>
        </section>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(faqs)),
          }}
        />
      </main>
      {/* Footer */}
      <Footer />
      {/* Calendly Widget */}
      <CalendlyWidget />
    </>
  )
}

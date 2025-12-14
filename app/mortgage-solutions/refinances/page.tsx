import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Phone,
  Calendar,
  TrendingDown,
  Home,
  CreditCard,
  Hammer,
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
  title: "Mortgage Refinancing Ontario | Access Home Equity | Sumanta Mahabir",
  description:
    "Refinance your Ontario mortgage to access home equity, lower your rate, or consolidate debt. Compare 50+ lenders. Free consultation available.",
  openGraph: {
    title: "Mortgage Refinancing Ontario | Sumanta Mahabir",
    description:
      "Refinance your Ontario mortgage to access home equity, lower your rate, or consolidate debt. Compare 50+ lenders.",
    url: `${siteConfig.url}/mortgage-solutions/refinances`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions/refinances`,
  },
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "reasons", title: "Reasons to Refinance", level: 2 },
  { id: "who-benefits", title: "Who Benefits", level: 2 },
  { id: "how-it-works", title: "How It Works", level: 2 },
  { id: "costs", title: "Costs & Considerations", level: 2 },
  { id: "process", title: "The Process", level: 2 },
  { id: "scenarios", title: "Real Scenarios", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
]

const faqs = [
  {
    question: "How much equity can I access when refinancing?",
    answer:
      "In Ontario, you can typically refinance up to 80% of your home's current appraised value. For example, if your home is worth $700,000, you could have a maximum mortgage of $560,000. If you currently owe $350,000, you could potentially access up to $210,000 in equity.",
  },
  {
    question: "What are the costs of refinancing a mortgage?",
    answer:
      "Refinancing costs typically include: legal fees ($800-$1,500), appraisal fee ($300-$500), discharge fee from current lender ($200-$350), and potentially a prepayment penalty if breaking your current mortgage early. The penalty can be significant for fixed-rate mortgages (up to 3 months' interest or IRD, whichever is greater). I help you calculate whether refinancing makes financial sense.",
  },
  {
    question: "When is the best time to refinance?",
    answer:
      "The best time to refinance is typically at renewal (to avoid penalties), when rates have dropped significantly, when you need to access equity for major expenses, when consolidating high-interest debt, or when your home value has increased substantially. However, refinancing can make sense at any time if the benefits outweigh the costs.",
  },
  {
    question: "Will refinancing affect my credit score?",
    answer:
      "Refinancing involves a hard credit inquiry, which may temporarily lower your score by a few points. However, if you're consolidating debt and paying down credit cards, your credit score typically improves over time due to better credit utilization ratios.",
  },
  {
    question: "Can I refinance with bad credit?",
    answer:
      "Yes, refinancing options exist for homeowners with less-than-perfect credit. While prime lenders require credit scores of 650+, alternative lenders and private mortgage solutions can work with lower scores. The key is having sufficient home equity. I specialize in finding solutions for all credit situations.",
  },
  {
    question: "How long does refinancing take?",
    answer:
      "A typical refinance takes 2-4 weeks from application to funding, though it can be faster or slower depending on your situation complexity, the lender, and how quickly documents are provided. Planning ahead is recommended, especially if you're trying to time a renewal date.",
  },
  {
    question: "Should I refinance to a fixed or variable rate?",
    answer:
      "This depends on your risk tolerance, financial goals, and market conditions. Fixed rates offer payment stability and protection against rate increases. Variable rates are often lower initially and may save money if rates decrease. I'll help you analyze the pros and cons based on your specific situation and current market trends.",
  },
  {
    question: "Can I refinance if I'm self-employed?",
    answer:
      "Yes, self-employed individuals can refinance, though documentation requirements differ. You may need 2 years of business financial statements, NOAs, and proof of business ownership. Some lenders offer stated income programs for self-employed borrowers with strong equity positions.",
  },
]

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "We review your current mortgage, home value, and financial goals to determine if refinancing makes sense for your situation.",
    duration: "30 min",
  },
  {
    title: "Cost-Benefit Analysis",
    description:
      "I calculate all refinancing costs including penalties, fees, and new terms to ensure the numbers work in your favor.",
    duration: "1-2 days",
  },
  {
    title: "Application & Documentation",
    description:
      "Submit your application with required documents. We shop your file to multiple lenders for the best rates and terms.",
    duration: "2-3 days",
  },
  {
    title: "Property Appraisal",
    description:
      "The lender orders an appraisal to confirm your home's current market value, which determines your maximum refinance amount.",
    duration: "3-7 days",
  },
  {
    title: "Approval & Conditions",
    description:
      "Receive lender approval and satisfy any remaining conditions. We coordinate with your lawyer for closing preparation.",
    duration: "5-10 days",
  },
  {
    title: "Closing & Funding",
    description:
      "Sign new mortgage documents with your lawyer. Funds are disbursed to pay out your existing mortgage and provide any equity withdrawal.",
    duration: "Closing day",
  },
]

export default function RefinancesPage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-refinance-modern-interior.jpg"
              alt="Luxury Ontario home"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">Mortgage Refinancing</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Home Equity
              </span>{" "}
              in Ontario
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Access the equity you&apos;ve built, secure better rates, or consolidate debt. Refinancing options from
              50+ lenders tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={siteConfig.applicationLink} target="_blank" rel="noopener noreferrer">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
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
                <div className="text-3xl font-bold text-primary">80%</div>
                <div className="text-sm text-muted-foreground">Max LTV Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Lenders Compared</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2-4</div>
                <div className="text-sm text-muted-foreground">Weeks to Close</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Consultation</div>
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
                  <h2 className="text-3xl font-bold mb-6">What Is Mortgage Refinancing?</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Mortgage refinancing replaces your existing mortgage with a new one, typically with different
                      terms, a new interest rate, or a higher loan amount that allows you to access your home&apos;s
                      equity. For Ontario homeowners who have built equity through property appreciation or mortgage
                      payments, refinancing can be a powerful financial tool.
                    </p>
                    <p>
                      Whether you want to take advantage of lower interest rates, access cash for home improvements,
                      consolidate high-interest debt, or simply restructure your mortgage to better fit your current
                      financial situation, refinancing offers flexibility that your original mortgage may not provide.
                    </p>
                    <p>
                      As a licensed mortgage agent with access to over 50 lenders, I help Ontario homeowners navigate
                      refinancing options to find the solution that makes the most financial sense. Not every refinance
                      is a good idea—I&apos;ll provide an honest assessment of whether the benefits outweigh the costs
                      in your specific situation.
                    </p>
                  </div>
                </div>

                {/* Reasons to Refinance */}
                <div id="reasons" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Top Reasons to Refinance</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <TrendingDown className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Lower Your Interest Rate</h3>
                        <p className="text-muted-foreground text-sm">
                          If rates have dropped since you got your mortgage, or if your credit has improved, refinancing
                          could secure you a lower rate and reduce your monthly payments.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Home className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Access Home Equity</h3>
                        <p className="text-muted-foreground text-sm">
                          Turn your home equity into cash for major expenses like renovations, education, investments,
                          or other financial needs.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <CreditCard className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Consolidate Debt</h3>
                        <p className="text-muted-foreground text-sm">
                          Roll high-interest credit cards, car loans, and other debts into your mortgage at a much lower
                          rate, potentially saving thousands in interest.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Hammer className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Fund Renovations</h3>
                        <p className="text-muted-foreground text-sm">
                          Use your equity to finance home improvements that can increase your property value and quality
                          of life.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Who Benefits */}
                <div id="who-benefits" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Who Benefits Most from Refinancing?</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Homeowners with Significant Equity",
                        description:
                          "If your home has appreciated in value or you've paid down substantial principal, you have equity that can be accessed.",
                      },
                      {
                        title: "Those with High-Interest Debt",
                        description:
                          "Credit card rates of 19-29% can be consolidated into mortgage rates around 5-7%, saving significant interest.",
                      },
                      {
                        title: "Homeowners at Mortgage Renewal",
                        description: "Renewal time is the ideal opportunity to refinance without prepayment penalties.",
                      },
                      {
                        title: "Those Whose Financial Situation Has Improved",
                        description:
                          "Better income or improved credit may qualify you for significantly better rates than your current mortgage.",
                      },
                      {
                        title: "Property Investors",
                        description: "Access equity from one property to fund down payments on investment properties.",
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

                {/* How It Works */}
                <div id="how-it-works" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">How Refinancing Works in Ontario</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      When you refinance, you&apos;re essentially taking out a new mortgage to replace your existing
                      one. The new mortgage pays off the old one, and any additional funds (if you&apos;re accessing
                      equity) are provided to you.
                    </p>
                    <h3>Key Points to Understand:</h3>
                    <ul>
                      <li>
                        <strong>Maximum LTV (Loan-to-Value):</strong> You can refinance up to 80% of your home&apos;s
                        appraised value with traditional lenders, or higher with alternative lenders.
                      </li>
                      <li>
                        <strong>Qualification:</strong> You&apos;ll need to re-qualify for the new mortgage, including
                        passing the stress test at the higher of your contract rate +2% or the benchmark rate.
                      </li>
                      <li>
                        <strong>Costs:</strong> Include legal fees, appraisal, potential prepayment penalty, and
                        discharge fees. These must be factored into your decision.
                      </li>
                      <li>
                        <strong>Break-Even Analysis:</strong> I calculate how long it takes for the refinancing benefits
                        to exceed the costs, helping you make an informed decision.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Costs & Considerations */}
                <div id="costs" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Costs & Considerations</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <FileText className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Typical Costs</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Legal fees: $800-$1,500</li>
                          <li>• Appraisal: $300-$500</li>
                          <li>• Discharge fee: $200-$350</li>
                          <li>• Title insurance: $200-$400</li>
                          <li>• Prepayment penalty: Varies</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <AlertTriangle className="w-8 h-8 text-destructive mb-3" />
                        <h3 className="font-semibold mb-2">Prepayment Penalties</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Variable rate: Usually 3 months&apos; interest</li>
                          <li>• Fixed rate: Greater of 3 months&apos; interest or IRD</li>
                          <li>• IRD can be substantial mid-term</li>
                          <li>• Request penalty quote from lender</li>
                          <li>• Time refinance with renewal if possible</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Process */}
                <div id="process" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">The Refinancing Process</h2>
                  <ProcessTimeline steps={processSteps} />
                </div>

                {/* Scenarios */}
                <div id="scenarios" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Real Refinancing Scenarios</h2>
                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Debt Consolidation Success</h3>
                        <p className="text-muted-foreground mb-3">
                          David and Lisa had a $400,000 mortgage on their $650,000 Hamilton home, plus $45,000 in credit
                          card debt at 19.99% APR. By refinancing to a $480,000 mortgage at 5.5%, they paid off all
                          credit cards. Their monthly debt payments dropped by $800, and they&apos;re now debt-free
                          except for their mortgage.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Monthly savings: $800 | Interest savings over 5 years: $35,000+
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Home Renovation Funding</h3>
                        <p className="text-muted-foreground mb-3">
                          The Chen family wanted to add a basement apartment to their Toronto home for rental income.
                          Their home was worth $1.1M with a $550,000 mortgage. They refinanced to $780,000, accessing
                          $200,000 for the renovation (after costs). The completed apartment now generates $2,200/month
                          in rental income.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Investment: $200,000 | New monthly income: $2,200 | Property value increase: $150,000+
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Rate Improvement at Renewal</h3>
                        <p className="text-muted-foreground mb-3">
                          Maria&apos;s mortgage was coming up for renewal. Her bank offered 6.1%, but by refinancing
                          through a different lender, she secured 5.4%. On her $350,000 mortgage, this saves her $2,400
                          per year in interest—$12,000 over her 5-year term.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Rate reduction: 0.7% | Annual savings: $2,400 | 5-year savings: $12,000
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * These scenarios are illustrative examples. Actual results vary based on individual circumstances,
                    property values, and lender requirements.
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
                  title="Explore Your Refinancing Options"
                  description="Get a free analysis of your refinancing potential. No obligation, no pressure."
                />

                {/* Related Solutions */}
                <RelatedSolutions exclude="/mortgage-solutions/refinances" />
              </div>

              {/* Table of Contents Sidebar */}
              <aside className="hidden lg:block">
                <TableOfContents items={tocItems} />
                <div className="mt-8 sticky top-96">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <RefreshCw className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Free Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-4">Find out if refinancing makes sense for you.</p>
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
              Information is general in nature and may vary by lender and borrower profile. Refinancing involves costs
              that should be weighed against potential benefits. Contact us for personalized guidance based on your
              specific situation.
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

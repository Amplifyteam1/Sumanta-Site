import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Calendar,
  CreditCard,
  TrendingDown,
  Calculator,
  Shield,
} from "lucide-react"
import { siteConfig } from "@/lib/site"
import { TableOfContents } from "@/components/mortgage/table-of-contents"
import { FAQAccordion } from "@/components/mortgage/faq-accordion"
import { generateFAQSchema } from "@/lib/faq-schema"
import { ProcessTimeline } from "@/components/mortgage/process-timeline"
import { RelatedSolutions } from "@/components/mortgage/related-solutions"
import { CTASection } from "@/components/mortgage/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"

export const metadata: Metadata = {
  title: "Debt Consolidation Mortgages Ontario | Lower Your Payments | Sumanta Mahabir",
  description:
    "Consolidate high-interest debt into your mortgage in Ontario. Combine credit cards, loans, and other debts into one low payment. Free consultation.",
  openGraph: {
    title: "Debt Consolidation Mortgages Ontario | Sumanta Mahabir",
    description:
      "Consolidate high-interest debt into your mortgage. Combine credit cards, loans, and other debts into one low payment.",
    url: `${siteConfig.url}/mortgage-solutions/debt-consolidation`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions/debt-consolidation`,
  },
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "how-it-works", title: "How It Works", level: 2 },
  { id: "benefits", title: "Benefits", level: 2 },
  { id: "who-qualifies", title: "Who Qualifies", level: 2 },
  { id: "process", title: "The Process", level: 2 },
  { id: "considerations", title: "Important Considerations", level: 2 },
  { id: "scenarios", title: "Real Scenarios", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
]

const faqs = [
  {
    question: "How much can I save by consolidating debt into my mortgage?",
    answer:
      "Savings depend on your current debt interest rates versus your new mortgage rate. For example, $50,000 in credit card debt at 19.99% costs approximately $10,000/year in interest. The same amount at a 5.5% mortgage rate costs about $2,750/year—a savings of over $7,000 annually. I provide a detailed analysis showing your exact potential savings.",
  },
  {
    question: "Will debt consolidation hurt my credit score?",
    answer:
      "Initially, a refinance involves a hard credit inquiry which may temporarily lower your score by a few points. However, consolidating debt typically improves your credit over time because: (1) your credit utilization ratio improves when credit cards are paid off, (2) you have fewer accounts with balances, and (3) consistent mortgage payments build positive credit history.",
  },
  {
    question: "Can I consolidate debt if I have bad credit?",
    answer:
      "Yes, options exist for homeowners with less-than-perfect credit. While prime lenders require higher credit scores, alternative lenders and private mortgage solutions can work with lower scores as long as you have sufficient home equity. The key factor is your equity position, not just your credit score.",
  },
  {
    question: "What types of debt can I consolidate?",
    answer:
      "You can consolidate virtually any type of debt including: credit cards, lines of credit, car loans, personal loans, student loans, tax debt, medical bills, and even other mortgages (like a second mortgage or HELOC). We'll review your complete debt picture to determine what makes sense to consolidate.",
  },
  {
    question: "Is debt consolidation the same as refinancing?",
    answer:
      "Debt consolidation is a type of refinancing. When you consolidate debt, you refinance your mortgage for a higher amount—enough to pay off your existing mortgage plus your other debts. The result is a single mortgage payment instead of multiple debt payments.",
  },
  {
    question: "How much equity do I need for debt consolidation?",
    answer:
      "You need enough equity to cover your existing mortgage balance plus the debts you want to consolidate, while staying within 80% loan-to-value (LTV) for prime lenders. Alternative lenders may go up to 85% LTV, and private lenders can sometimes go higher. I'll calculate your exact equity position and options.",
  },
  {
    question: "Are there risks to debt consolidation through my mortgage?",
    answer:
      "The main consideration is that you're converting unsecured debt (like credit cards) into secured debt (your home). If you fail to make mortgage payments, your home could be at risk. Additionally, spreading debt over a longer term may result in more total interest paid over time, even at a lower rate. I help you understand these trade-offs.",
  },
  {
    question: "Should I close my credit cards after consolidating?",
    answer:
      "This depends on your situation and discipline. Keeping one or two cards open (but not using them) can help maintain your credit score by keeping your credit history length and available credit high. However, if you're concerned about running up debt again, closing cards may be the right choice. We can discuss strategies during your consultation.",
  },
]

const processSteps = [
  {
    title: "Debt Assessment",
    description:
      "We review all your debts, interest rates, and monthly payments to understand your complete financial picture and consolidation potential.",
    duration: "30 min",
  },
  {
    title: "Equity Analysis",
    description:
      "Calculate your home equity and determine the maximum consolidation amount available to you through various lender options.",
    duration: "1 day",
  },
  {
    title: "Savings Comparison",
    description:
      "I prepare a detailed comparison showing your current payments vs. consolidated payment, total interest savings, and break-even timeline.",
    duration: "1-2 days",
  },
  {
    title: "Application Submission",
    description:
      "Submit your application to the best-suited lender(s) with all required documentation for the fastest approval.",
    duration: "2-3 days",
  },
  {
    title: "Approval & Conditions",
    description:
      "Receive approval and work through any lender conditions. Coordinate with lawyers to prepare for closing.",
    duration: "5-10 days",
  },
  {
    title: "Closing & Payout",
    description:
      "Sign your new mortgage documents. The lender pays off your existing mortgage and all consolidated debts directly.",
    duration: "Closing day",
  },
]

export default function DebtConsolidationPage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-debt-consolidation-peaceful-home.jpg"
              alt="Ontario homes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">Debt Consolidation</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Escape High-Interest{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Debt</span> in
              Ontario
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Combine credit cards, loans, and other high-interest debts into one manageable mortgage payment. Save
              thousands in interest.
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

        {/* Comparison Stats */}
        <section className="py-8 bg-primary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-destructive line-through">19.99%</div>
                <div className="text-sm text-muted-foreground">Typical Credit Card Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">~5-7%</div>
                <div className="text-sm text-muted-foreground">Mortgage Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">70%+</div>
                <div className="text-sm text-muted-foreground">Potential Interest Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Simple Monthly Payment</div>
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
                  <h2 className="text-3xl font-bold mb-6">What Is Debt Consolidation?</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Debt consolidation through your mortgage is a strategy where you refinance your home to access
                      equity and pay off multiple high-interest debts. Instead of juggling several payments to different
                      creditors at various interest rates, you have one mortgage payment at a much lower rate.
                    </p>
                    <p>
                      For many Ontario homeowners, this approach transforms an overwhelming debt situation into
                      something manageable. Credit cards charging 19.99% or more, car loans at 7-12%, and personal lines
                      of credit can all be rolled into a mortgage rate that&apos;s typically 5-7%—potentially saving you
                      thousands of dollars in interest each year.
                    </p>
                    <p>
                      As a licensed mortgage agent, I help homeowners evaluate whether debt consolidation makes sense
                      for their situation. It&apos;s not the right solution for everyone, but for those with significant
                      high-interest debt and sufficient home equity, it can be life-changing.
                    </p>
                  </div>
                </div>

                {/* How It Works */}
                <div id="how-it-works" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">How Debt Consolidation Works</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <CreditCard className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Before Consolidation</h3>
                        <ul className="text-muted-foreground text-sm space-y-2">
                          <li>• Multiple monthly payments</li>
                          <li>• Various due dates to track</li>
                          <li>• High interest rates (15-29%)</li>
                          <li>• Minimum payments barely cover interest</li>
                          <li>• Debt seems never-ending</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card className="border-primary">
                      <CardContent className="pt-6">
                        <Shield className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">After Consolidation</h3>
                        <ul className="text-muted-foreground text-sm space-y-2">
                          <li>• One simple monthly payment</li>
                          <li>• One due date to remember</li>
                          <li>• Low mortgage rate (5-7%)</li>
                          <li>• Payments reduce principal faster</li>
                          <li>• Clear path to being debt-free</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="mt-8 bg-primary/5 rounded-xl p-6">
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-primary" />
                      Example Calculation
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground mb-1">Current Debts</p>
                        <p className="font-semibold">$40,000 credit cards @ 19.99%</p>
                        <p className="font-semibold">$15,000 car loan @ 8%</p>
                        <p className="font-semibold">$10,000 line of credit @ 9%</p>
                        <p className="text-destructive font-semibold mt-2">Total: $65,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">Current Monthly Payments</p>
                        <p className="font-semibold">Credit cards: $1,200</p>
                        <p className="font-semibold">Car loan: $450</p>
                        <p className="font-semibold">Line of credit: $300</p>
                        <p className="text-destructive font-semibold mt-2">Total: $1,950/month</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-1">After Consolidation</p>
                        <p className="font-semibold">$65,000 added to mortgage</p>
                        <p className="font-semibold">@ 5.5% over 25 years</p>
                        <p className="text-primary font-semibold mt-2">New payment: ~$400/month*</p>
                        <p className="text-primary font-semibold">Savings: ~$1,550/month</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">
                      * Incremental payment increase on mortgage. Total mortgage payment will be higher. This is a
                      simplified example; actual figures vary.
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <div id="benefits" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Benefits of Debt Consolidation</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Dramatically Lower Interest Rates",
                        description:
                          "Replace 15-29% interest rates with mortgage rates of 5-7%. The interest savings can be substantial.",
                      },
                      {
                        title: "Reduced Monthly Payments",
                        description:
                          "Lower rates and longer amortization significantly reduce your monthly cash outflow, improving your budget.",
                      },
                      {
                        title: "Simplified Finances",
                        description:
                          "One payment, one due date, one interest rate. No more juggling multiple creditors and statements.",
                      },
                      {
                        title: "Improved Cash Flow",
                        description:
                          "Lower payments free up money for savings, investments, emergencies, or accelerated debt repayment.",
                      },
                      {
                        title: "Potential Credit Score Improvement",
                        description:
                          "Paying off credit cards improves your utilization ratio, which can boost your credit score over time.",
                      },
                      {
                        title: "Peace of Mind",
                        description:
                          "Transform an overwhelming debt situation into a clear, manageable path to financial freedom.",
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

                {/* Who Qualifies */}
                <div id="who-qualifies" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Who Qualifies for Debt Consolidation?</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>To qualify for debt consolidation through your mortgage, you typically need:</p>
                    <ul>
                      <li>
                        <strong>Sufficient Home Equity:</strong> At least 20% equity remaining after consolidation for
                        prime lenders; alternative lenders may work with less.
                      </li>
                      <li>
                        <strong>Income to Support Payments:</strong> You must demonstrate ability to make the new
                        mortgage payment, including passing the stress test.
                      </li>
                      <li>
                        <strong>Property in Ontario:</strong> Your home must be your primary residence (or rental
                        property with some lenders).
                      </li>
                    </ul>
                    <p>
                      Credit score is less critical than equity for debt consolidation. Even homeowners with bruised
                      credit can often qualify through alternative or private lenders if they have substantial equity.
                    </p>
                  </div>
                </div>

                {/* Process */}
                <div id="process" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">The Debt Consolidation Process</h2>
                  <ProcessTimeline steps={processSteps} />
                </div>

                {/* Considerations */}
                <div id="considerations" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Important Considerations</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Secured vs. Unsecured Debt",
                        description:
                          "You're converting unsecured debt (like credit cards) to secured debt (mortgage). Your home becomes collateral for all consolidated debt.",
                      },
                      {
                        title: "Total Interest Over Time",
                        description:
                          "While your rate is lower, a longer amortization may result in more total interest paid. Consider making extra payments to offset this.",
                      },
                      {
                        title: "Avoiding New Debt",
                        description:
                          "Consolidation only works if you don't run up new debt on paid-off credit cards. Consider your spending habits honestly.",
                      },
                      {
                        title: "Prepayment Penalties",
                        description:
                          "Breaking your current mortgage early may incur penalties. We factor these into the cost-benefit analysis.",
                      },
                      {
                        title: "Future Flexibility",
                        description:
                          "A larger mortgage may affect your ability to borrow in the future. Consider your medium-term financial plans.",
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
                  <h2 className="text-3xl font-bold mb-6">Real Consolidation Scenarios</h2>
                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The Overwhelmed Professional</h3>
                        <p className="text-muted-foreground mb-3">
                          James, a 42-year-old project manager in Mississauga, had accumulated $75,000 in credit card
                          debt across 6 cards after a divorce. Monthly minimums totaled $2,200, barely covering
                          interest. His $550,000 home had a $320,000 mortgage. By consolidating into a $420,000 mortgage
                          at 5.75%, he pays $400/month more on his mortgage but eliminated $2,200 in credit card
                          payments—saving $1,800/month.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Monthly savings: $1,800 | Annual interest savings: $12,000+
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The Young Family</h3>
                        <p className="text-muted-foreground mb-3">
                          Aisha and Marcus in Hamilton had $30,000 in credit cards and a $20,000 car loan accumulated
                          during parental leaves. With a $450,000 home and $300,000 mortgage, they consolidated to a
                          $370,000 mortgage. Their combined debt payments dropped from $1,400 to $400/month—freeing up
                          $1,000 monthly for childcare costs and savings.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Monthly freed up: $1,000 | Debts consolidated: $50,000
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The Credit-Challenged Homeowner</h3>
                        <p className="text-muted-foreground mb-3">
                          Robert in London had a credit score of 580 due to missed payments during illness. Banks
                          wouldn't help with his $40,000 in debt. With $200,000 equity in his home, we secured an
                          alternative lender consolidation at 7.5%—higher than prime but still far below his 19-29%
                          credit card rates. Within 2 years of on-time mortgage payments, his credit recovered to 680.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Credit score improvement: 580 → 680 | Interest rate reduction: 22% average → 7.5%
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * These scenarios are illustrative examples. Actual results vary based on individual circumstances.
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
                  title="Ready to Get Out of Debt?"
                  description="Get a free debt consolidation analysis. See exactly how much you could save."
                />

                {/* Related Solutions */}
                <RelatedSolutions exclude="/mortgage-solutions/debt-consolidation" />
              </div>

              {/* Table of Contents Sidebar */}
              <aside className="hidden lg:block">
                <TableOfContents items={tocItems} />
                <div className="mt-8 sticky top-96">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <TrendingDown className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Free Analysis</h3>
                      <p className="text-sm text-muted-foreground mb-4">See how much you could save.</p>
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
              Debt consolidation involves converting unsecured debt to secured debt against your home. Results vary by
              individual situation. Contact us for personalized guidance.
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

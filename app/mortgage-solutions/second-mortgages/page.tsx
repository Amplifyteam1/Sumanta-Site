import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Layers, ArrowRight, CheckCircle2, Phone, Calendar, Banknote, Clock, Shield, Target } from "lucide-react"
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
  title: "Second Mortgages Ontario | Access Home Equity Fast | Sumanta Mahabir",
  description:
    "Get a second mortgage in Ontario without refinancing your first. Quick approval, flexible terms. Access home equity for any purpose. Free consultation.",
  openGraph: {
    title: "Second Mortgages Ontario | Sumanta Mahabir",
    description:
      "Access home equity without refinancing your first mortgage. Quick approval, flexible terms for Ontario homeowners.",
    url: `${siteConfig.url}/mortgage-solutions/second-mortgages`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions/second-mortgages`,
  },
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "vs-refinance", title: "Second Mortgage vs Refinance", level: 2 },
  { id: "benefits", title: "Benefits", level: 2 },
  { id: "who-qualifies", title: "Who Qualifies", level: 2 },
  { id: "process", title: "The Process", level: 2 },
  { id: "costs", title: "Costs & Rates", level: 2 },
  { id: "scenarios", title: "Real Scenarios", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
]

const faqs = [
  {
    question: "What is a second mortgage?",
    answer:
      "A second mortgage is an additional loan secured against your home's equity while keeping your existing (first) mortgage in place. It sits in 'second position' behind your first mortgage, meaning if the home is sold, the first mortgage is paid first. Second mortgages allow you to access equity without disturbing a favorable first mortgage rate or term.",
  },
  {
    question: "How much can I borrow with a second mortgage?",
    answer:
      "You can typically borrow up to 80-90% of your home's value (combined with your first mortgage) through traditional second mortgage lenders, or up to 95% with private lenders. For example, if your home is worth $600,000 and you owe $350,000 on your first mortgage, you could potentially access $130,000-$220,000 as a second mortgage.",
  },
  {
    question: "Why get a second mortgage instead of refinancing?",
    answer:
      "A second mortgage makes sense when: (1) your first mortgage has a great rate you want to keep, (2) breaking your first mortgage would incur large penalties, (3) you need funds quickly (second mortgages close faster), or (4) you only need a smaller amount that doesn't justify full refinancing costs.",
  },
  {
    question: "What are second mortgage interest rates?",
    answer:
      "Second mortgage rates are higher than first mortgages because they carry more risk for lenders (they're paid second if the home is sold). Rates typically range from 7-15% depending on the lender type (bank, alternative, or private), your credit, equity position, and loan amount. Despite higher rates, monthly payments may still be lower than credit card minimums.",
  },
  {
    question: "How fast can I get a second mortgage?",
    answer:
      "Second mortgages close much faster than refinances. Private second mortgages can close in as little as 3-7 days. Alternative lender second mortgages typically take 1-2 weeks. This speed makes second mortgages ideal for time-sensitive needs like investment opportunities or urgent repairs.",
  },
  {
    question: "Can I get a second mortgage with bad credit?",
    answer:
      "Yes, second mortgages are often available to borrowers with credit challenges. Private lenders focus primarily on equity rather than credit scores. If you have 25-35% equity, second mortgage options likely exist regardless of your credit history. The rate will reflect the risk, but approval is often possible.",
  },
  {
    question: "What can I use second mortgage funds for?",
    answer:
      "Second mortgage funds can be used for any purpose: debt consolidation, home renovations, investment opportunities, business funding, education expenses, emergency costs, tax bills, or anything else. Unlike some first mortgage programs, there are typically no restrictions on use.",
  },
  {
    question: "Do I make separate payments on a second mortgage?",
    answer:
      "Yes, a second mortgage is a separate loan with its own payment. You'll make payments on both your first and second mortgages. Second mortgage payments are typically interest-only or fully amortized over a shorter term (1-5 years), depending on the lender and product type.",
  },
]

const processSteps = [
  {
    title: "Quick Consultation",
    description:
      "We assess your equity, discuss your needs, and determine whether a second mortgage or refinance is the better option.",
    duration: "20 min",
  },
  {
    title: "Application",
    description:
      "Submit a streamlined application. Documentation requirements are lighter than full refinances, especially for private lenders.",
    duration: "1 day",
  },
  {
    title: "Property Valuation",
    description: "Quick appraisal or desktop valuation confirms your home's current market value and available equity.",
    duration: "1-3 days",
  },
  {
    title: "Approval",
    description:
      "Receive lender approval and final terms. Private lenders can often approve within 24-48 hours of receiving documents.",
    duration: "1-5 days",
  },
  {
    title: "Legal & Closing",
    description:
      "Your lawyer registers the second mortgage. The process is simpler than refinancing since your first mortgage stays in place.",
    duration: "2-5 days",
  },
  {
    title: "Funds Released",
    description: "Receive your funds. Total timeline can be as fast as one week for private second mortgages.",
    duration: "Closing day",
  },
]

export default function SecondMortgagesPage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-second-mortgage-equity.jpg"
              alt="Ontario properties"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">Second Mortgages</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Access Equity{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Fast</span>{" "}
              Without Refinancing
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Keep your existing mortgage rate and tap into your home equity with a second mortgage. Quick approvals,
              flexible terms.
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
                <a href="#calendly-widget">
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
                <div className="text-3xl font-bold text-primary">Up to 90%</div>
                <div className="text-sm text-muted-foreground">Combined LTV</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">3-7 Days</div>
                <div className="text-sm text-muted-foreground">Fast Closing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Any Purpose</div>
                <div className="text-sm text-muted-foreground">Flexible Use</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Keep 1st</div>
                <div className="text-sm text-muted-foreground">Rate Protected</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with TOC */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
              {/* Table of Contents Sidebar - Now on left */}
              <aside className="hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto">
                <TableOfContents items={tocItems} />
                <div className="mt-6">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <Layers className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Quick Quote</h3>
                      <p className="text-sm text-muted-foreground mb-4">Find out how much equity you can access.</p>
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

              {/* Main Content */}
              <div className="space-y-16">
                {/* Overview */}
                <div id="overview" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">What Is a Second Mortgage?</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      A second mortgage is a loan taken against your home&apos;s equity while your existing (first)
                      mortgage remains in place. Unlike refinancing, which replaces your current mortgage entirely, a
                      second mortgage is an additional loan that sits behind your first mortgage in priority.
                    </p>
                    <p>
                      For Ontario homeowners who have built equity but don&apos;t want to disturb their first
                      mortgage—perhaps because of a favorable rate or to avoid prepayment penalties—a second mortgage
                      offers a way to access that equity quickly and efficiently.
                    </p>
                    <p>
                      Second mortgages are available through banks, alternative lenders, and private lenders, each with
                      different qualification requirements, rates, and terms. As a mortgage agent with access to all
                      these channels, I can find the best second mortgage solution for your specific situation.
                    </p>
                  </div>
                </div>

                {/* Second Mortgage vs Refinance */}
                <div id="vs-refinance" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Second Mortgage vs. Refinancing</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-4 text-primary">Second Mortgage</h3>
                        <ul className="text-muted-foreground text-sm space-y-2">
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            Keep your existing first mortgage rate
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            Avoid prepayment penalties
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            Faster approval and closing
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            Lower closing costs
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                            Easier qualification
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-4">Refinancing</h3>
                        <ul className="text-muted-foreground text-sm space-y-2">
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                            One mortgage, one payment
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                            Potentially lower blended rate
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                            Longer amortization possible
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                            Best when first mortgage rate is high
                          </li>
                          <li className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground mt-0.5" />
                            Good at renewal time
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Benefits */}
                <div id="benefits" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Benefits of a Second Mortgage</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <Shield className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Protect Your First Rate</h3>
                        <p className="text-muted-foreground text-sm">
                          If you have a low rate on your first mortgage (especially from 2020-2021), a second mortgage
                          lets you access equity without losing that favorable rate.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Clock className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Speed</h3>
                        <p className="text-muted-foreground text-sm">
                          Private second mortgages can close in days, not weeks. Ideal when you need funds quickly for
                          opportunities or emergencies.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Banknote className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Avoid Penalties</h3>
                        <p className="text-muted-foreground text-sm">
                          Breaking a fixed-rate mortgage early can cost thousands in penalties. A second mortgage avoids
                          this completely.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Target className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Flexible Qualification</h3>
                        <p className="text-muted-foreground text-sm">
                          Private second mortgages focus on equity rather than income or credit, opening doors for those
                          who don&apos;t qualify for traditional refinancing.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Who Qualifies */}
                <div id="who-qualifies" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Who Qualifies for a Second Mortgage?</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>Qualification depends on the lender type:</p>
                    <h3>Bank/Credit Union Second Mortgages</h3>
                    <ul>
                      <li>Good credit (typically 650+)</li>
                      <li>Provable income meeting debt service ratios</li>
                      <li>Maximum combined LTV usually 80%</li>
                      <li>Lowest rates but strictest requirements</li>
                    </ul>
                    <h3>Alternative Lender Second Mortgages</h3>
                    <ul>
                      <li>Fair credit (580+)</li>
                      <li>More flexible income verification</li>
                      <li>Maximum combined LTV up to 85%</li>
                      <li>Middle-ground rates and requirements</li>
                    </ul>
                    <h3>Private Second Mortgages</h3>
                    <ul>
                      <li>Credit score is secondary to equity</li>
                      <li>Income verification often not required</li>
                      <li>Maximum combined LTV up to 90-95%</li>
                      <li>Higher rates but maximum flexibility</li>
                    </ul>
                  </div>
                </div>

                {/* Process */}
                <div id="process" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">The Second Mortgage Process</h2>
                  <ProcessTimeline steps={processSteps} />
                </div>

                {/* Costs & Rates */}
                <div id="costs" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Costs & Interest Rates</h2>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="text-center">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-2">Bank/Credit Union</h3>
                          <p className="text-2xl font-bold text-primary">7-9%</p>
                          <p className="text-sm text-muted-foreground">Typical rate range</p>
                        </CardContent>
                      </Card>
                      <Card className="text-center">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-2">Alternative Lenders</h3>
                          <p className="text-2xl font-bold text-primary">9-12%</p>
                          <p className="text-sm text-muted-foreground">Typical rate range</p>
                        </CardContent>
                      </Card>
                      <Card className="text-center">
                        <CardContent className="pt-6">
                          <h3 className="font-semibold mb-2">Private Lenders</h3>
                          <p className="text-2xl font-bold text-primary">10-15%</p>
                          <p className="text-sm text-muted-foreground">Typical rate range</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-6">
                      <h3 className="font-semibold mb-3">Additional Costs to Consider</h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>
                          • <strong>Legal fees:</strong> $800-$1,500 (registration of second mortgage)
                        </li>
                        <li>
                          • <strong>Appraisal:</strong> $300-$500 (sometimes waived for smaller amounts)
                        </li>
                        <li>
                          • <strong>Lender fees:</strong> Some lenders charge setup or broker fees (1-3% of loan)
                        </li>
                        <li>
                          • <strong>Title insurance:</strong> $200-$400
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Scenarios */}
                <div id="scenarios" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Real Second Mortgage Scenarios</h2>
                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Protecting a Great Rate</h3>
                        <p className="text-muted-foreground mb-3">
                          The Patels in Brampton secured a 1.99% variable rate in 2021 on their $500,000 first mortgage.
                          When they needed $75,000 for home renovations, refinancing would have meant losing that rate
                          and paying a significant penalty. Instead, they took a $75,000 second mortgage at 9.5%. Even
                          with the higher second mortgage rate, their blended cost is far less than what a full
                          refinance would cost.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          First mortgage rate preserved: 1.99% | Penalty avoided: ~$15,000
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Quick Business Opportunity</h3>
                        <p className="text-muted-foreground mb-3">
                          Marcus, a contractor in Hamilton, had an opportunity to buy equipment at auction for
                          $40,000—but needed funds within a week. His $450,000 home had a $280,000 first mortgage. A
                          private second mortgage was approved in 2 days and funded within a week, allowing him to seize
                          the business opportunity. He plans to pay it off within 12 months from increased revenue.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Time to funding: 5 days | Opportunity captured: $40,000 in equipment
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Credit Challenges Solution</h3>
                        <p className="text-muted-foreground mb-3">
                          After a job loss, Jennifer&apos;s credit dropped to 540. She needed $30,000 to consolidate
                          debts and couldn&apos;t qualify for a traditional refinance. With $150,000 equity in her
                          Oshawa home, she qualified for a private second mortgage despite her credit score. After 18
                          months of on-time payments and debt reduction, her credit recovered enough to refinance into a
                          better rate.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Approved despite 540 credit score | Bridge to credit recovery
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * These scenarios are illustrative examples. Actual rates and terms vary by situation.
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
                  title="Need Quick Access to Equity?"
                  description="Get a second mortgage quote in minutes. No obligation consultation."
                />

                {/* Related Solutions */}
                <RelatedSolutions exclude="/mortgage-solutions/second-mortgages" />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <CTASection />

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              Second mortgage rates and terms vary by lender and borrower qualification. Contact us for personalized
              guidance based on your specific situation.
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
      {/* CalendlyWidget */}
      <CalendlyWidget id="calendly-widget" />
      {/* Footer */}
      <Footer />
    </>
  )
}

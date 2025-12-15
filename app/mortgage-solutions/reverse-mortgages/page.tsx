import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Calendar,
  Home,
  Banknote,
  HeartPulse,
  Users,
} from "lucide-react"
import { siteConfig } from "@/lib/site"
import { TableOfContents } from "@/components/mortgage/table-of-contents"
import { FAQAccordion } from "@/components/mortgage/faq-accordion"
import { generateFAQSchema } from "@/lib/faq-schema"
import { RelatedSolutions } from "@/components/mortgage/related-solutions"
import { CTASection } from "@/components/mortgage/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"

export const metadata: Metadata = {
  title: "Reverse Mortgages Ontario | Tax-Free Retirement Income | Sumanta Mahabir",
  description:
    "Access your home equity tax-free in retirement with a reverse mortgage in Ontario. No monthly payments required. Stay in your home. Free consultation.",
  openGraph: {
    title: "Reverse Mortgages Ontario | Sumanta Mahabir",
    description: "Access your home equity tax-free in retirement. No monthly payments required. Stay in your home.",
    url: `${siteConfig.url}/mortgage-solutions/reverse-mortgages`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions/reverse-mortgages`,
  },
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "how-it-works", title: "How It Works", level: 2 },
  { id: "benefits", title: "Benefits", level: 2 },
  { id: "who-qualifies", title: "Who Qualifies", level: 2 },
  { id: "options", title: "Payout Options", level: 2 },
  { id: "considerations", title: "Important Considerations", level: 2 },
  { id: "scenarios", title: "Real Scenarios", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
]

const faqs = [
  {
    question: "How much can I get from a reverse mortgage?",
    answer:
      "Typically, you can access up to 55% of your home's appraised value, minus any existing mortgage balance. The exact amount depends on your age (older borrowers qualify for more), property location, property type, and current home value. For example, a 70-year-old with a $600,000 home and no mortgage might access up to $330,000.",
  },
  {
    question: "Do I have to make monthly payments?",
    answer:
      "No monthly mortgage payments are required with a reverse mortgage. The loan (plus accumulated interest) is repaid when you sell the home, move out permanently, or pass away. You only need to maintain the property, pay property taxes, and keep home insurance current.",
  },
  {
    question: "Will I still own my home?",
    answer:
      "Yes, you retain full ownership of your home. You remain on the title, can make changes to the property, and continue living there as long as you wish. The reverse mortgage is simply a loan secured against your home equity.",
  },
  {
    question: "Is reverse mortgage income taxable?",
    answer:
      "No, the money you receive from a reverse mortgage is not considered income—it's a loan advance against your equity. This means it doesn't affect your Old Age Security (OAS) or Guaranteed Income Supplement (GIS) benefits, and you don't pay income tax on the funds received.",
  },
  {
    question: "What happens when I pass away?",
    answer:
      "Your estate (typically your heirs) has up to 180 days to repay the reverse mortgage, usually by selling the home. Any equity remaining after repaying the loan goes to your heirs. Importantly, reverse mortgages in Canada have a 'no negative equity guarantee'—you or your heirs will never owe more than the home's fair market value.",
  },
  {
    question: "Can both spouses be on the reverse mortgage?",
    answer:
      "Yes, both spouses can be listed as borrowers. This is recommended because it ensures the surviving spouse can remain in the home under the same terms if one spouse passes away. The loan amount is based on the age of the younger spouse.",
  },
  {
    question: "What are the costs of a reverse mortgage?",
    answer:
      "Costs include: appraisal fee ($300-$500), legal fees ($800-$1,500), setup/administration fee (varies by lender), and potentially a title insurance fee. Interest rates on reverse mortgages are typically higher than traditional mortgages because no payments are made during the loan term.",
  },
  {
    question: "Can I pay off my reverse mortgage early?",
    answer:
      "Yes, you can repay the reverse mortgage at any time. Some lenders charge a prepayment penalty if repaid within the first few years, typically around 3 months' interest. After that period, you can usually repay without penalty. Many people repay when they eventually decide to sell and downsize.",
  },
  {
    question: "Will my home equity completely disappear?",
    answer:
      "Not necessarily. While the loan balance grows over time due to accumulated interest, many homes also appreciate in value. Depending on your home's appreciation rate versus the interest rate, you may retain significant equity. I can provide projections showing estimated equity over time.",
  },
  {
    question: "Are there alternatives to reverse mortgages?",
    answer:
      "Yes, alternatives include: HELOC (requires monthly payments), refinancing (requires payments), downsizing, or renting out part of your home. Each option has pros and cons depending on your situation. I can help you evaluate all options to determine the best fit for your needs.",
  },
]

const processSteps = [
  {
    title: "Initial Consultation",
    description:
      "We discuss your financial goals, explore whether a reverse mortgage is right for you, and explain all options and considerations.",
    duration: "45 min",
  },
  {
    title: "Application & Documentation",
    description:
      "Complete the application with basic personal and property information. Documentation requirements are minimal compared to traditional mortgages.",
    duration: "1-2 days",
  },
  {
    title: "Property Appraisal",
    description:
      "An independent appraiser assesses your home's current market value to determine the maximum reverse mortgage amount available.",
    duration: "3-7 days",
  },
  {
    title: "Legal Review",
    description:
      "You must receive independent legal advice before proceeding. Your lawyer ensures you understand all terms and implications.",
    duration: "1-2 days",
  },
  {
    title: "Approval & Closing",
    description:
      "Receive final approval and sign mortgage documents with your lawyer. Any existing mortgage is paid off from proceeds.",
    duration: "5-10 days",
  },
  {
    title: "Funds Disbursement",
    description:
      "Receive your funds as a lump sum, scheduled payments, or as needed. Use the money however you wish—tax-free.",
    duration: "Closing day",
  },
]

export default function ReverseMortgagesPage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-reverse-mortgage-retirement.jpg"
              alt="Beautiful Ontario retirement home"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">Reverse Mortgages</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Unlock Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Retirement Equity
              </span>{" "}
              Tax-Free
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Access up to 55% of your home&apos;s value with no monthly payments. Stay in your home and enjoy
              retirement on your terms.
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
                <div className="text-3xl font-bold text-primary">55+</div>
                <div className="text-sm text-muted-foreground">Minimum Age</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Up to 55%</div>
                <div className="text-sm text-muted-foreground">Of Home Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$0</div>
                <div className="text-sm text-muted-foreground">Monthly Payments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Tax-Free</div>
                <div className="text-sm text-muted-foreground">Funds Received</div>
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
                      <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Free Consultation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Explore if a reverse mortgage is right for you.
                      </p>
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
                  <h2 className="text-3xl font-bold mb-6">What Is a Reverse Mortgage?</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      A reverse mortgage allows Canadian homeowners aged 55 and older to convert part of their home
                      equity into tax-free cash without selling their home or making monthly mortgage payments.
                      It&apos;s designed specifically for retirement, providing financial flexibility while letting you
                      stay in the home you love.
                    </p>
                    <p>
                      Unlike a traditional mortgage where you make payments to the lender, with a reverse mortgage, the
                      lender pays you. The loan, plus accumulated interest, is repaid when you sell the home, move out
                      permanently, or pass away. Until then, you maintain full ownership and can live in your home as
                      long as you wish.
                    </p>
                    <p>
                      For many Ontario seniors, a reverse mortgage provides the financial freedom to enjoy retirement
                      without the stress of downsizing or the pressure of monthly payments. Whether you need funds for
                      healthcare, home renovations, travel, helping family, or simply supplementing retirement income, a
                      reverse mortgage offers flexibility that other options may not provide.
                    </p>
                  </div>
                </div>

                {/* How It Works */}
                <div id="how-it-works" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">How Reverse Mortgages Work</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <Banknote className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">You Receive Funds</h3>
                        <p className="text-muted-foreground text-sm">
                          Access up to 55% of your home&apos;s value as a lump sum, regular payments, or a combination.
                          The exact amount depends on your age, home value, and location.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Home className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Stay in Your Home</h3>
                        <p className="text-muted-foreground text-sm">
                          You retain full ownership and continue living in your home. No need to downsize, move, or make
                          lifestyle changes you don&apos;t want.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <HeartPulse className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">No Monthly Payments</h3>
                        <p className="text-muted-foreground text-sm">
                          Unlike traditional mortgages or HELOCs, you don&apos;t make monthly payments. The loan is
                          repaid when you leave the home.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Users className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Protected Inheritance</h3>
                        <p className="text-muted-foreground text-sm">
                          Any remaining equity after the loan is repaid goes to your heirs. The &quot;no negative equity
                          guarantee&quot; ensures they&apos;ll never owe more than the home&apos;s value.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Benefits */}
                <div id="benefits" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Benefits of a Reverse Mortgage</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Tax-Free Income",
                        description:
                          "Funds received are not taxable income and won't affect OAS, GIS, or other government benefits.",
                      },
                      {
                        title: "No Monthly Payments",
                        description: "Preserve your retirement cash flow without monthly mortgage payment obligations.",
                      },
                      {
                        title: "Maintain Ownership",
                        description:
                          "You remain on the title, can renovate, and continue living in your home as long as you wish.",
                      },
                      {
                        title: "Flexible Use of Funds",
                        description:
                          "Use the money for anything: healthcare, travel, home modifications, helping family, or daily expenses.",
                      },
                      {
                        title: "No Repayment Until You Leave",
                        description: "The loan is only repaid when you sell, move to long-term care, or pass away.",
                      },
                      {
                        title: "Guaranteed Protection",
                        description:
                          "You'll never owe more than your home's fair market value, protecting both you and your heirs.",
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
                  <h2 className="text-3xl font-bold mb-6">Who Qualifies?</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>Reverse mortgage eligibility in Canada is straightforward:</p>
                    <ul>
                      <li>
                        <strong>Age:</strong> All homeowners on title must be 55 years or older
                      </li>
                      <li>
                        <strong>Property:</strong> Must be your primary residence in Canada
                      </li>
                      <li>
                        <strong>Equity:</strong> Sufficient home equity (existing mortgages are paid off from proceeds)
                      </li>
                      <li>
                        <strong>Property Condition:</strong> Home must be in reasonable condition and marketable
                      </li>
                    </ul>
                    <p>
                      Notably, there are no income requirements and no credit score minimums. The loan is secured
                      entirely by your home equity, making it accessible to seniors who might not qualify for
                      traditional financing.
                    </p>
                  </div>
                </div>

                {/* Payout Options */}
                <div id="options" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Payout Options</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <h3 className="font-semibold text-lg mb-2">Lump Sum</h3>
                        <p className="text-muted-foreground text-sm">
                          Receive all funds at once. Ideal for paying off existing mortgage, major purchases, or
                          one-time expenses.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <h3 className="font-semibold text-lg mb-2">Scheduled Payments</h3>
                        <p className="text-muted-foreground text-sm">
                          Regular monthly or quarterly payments. Perfect for supplementing retirement income on an
                          ongoing basis.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <h3 className="font-semibold text-lg mb-2">Combination</h3>
                        <p className="text-muted-foreground text-sm">
                          Initial lump sum plus regular payments, or draw funds as needed. Maximum flexibility for
                          varying needs.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Considerations */}
                <div id="considerations" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Important Considerations</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Interest Accumulation",
                        description:
                          "Since you don't make payments, interest compounds over time. The loan balance grows, reducing your remaining equity.",
                      },
                      {
                        title: "Higher Interest Rates",
                        description:
                          "Reverse mortgage rates are typically higher than traditional mortgages due to the deferred repayment structure.",
                      },
                      {
                        title: "Impact on Estate",
                        description:
                          "The loan must be repaid from the estate, which may reduce inheritance for heirs. Discuss with family.",
                      },
                      {
                        title: "Costs and Fees",
                        description:
                          "Setup costs include appraisal, legal fees, and administration fees. These are typically deducted from proceeds.",
                      },
                      {
                        title: "Obligations Remain",
                        description:
                          "You must maintain the property, pay property taxes, and keep home insurance current to stay in good standing.",
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
                  <h2 className="text-3xl font-bold mb-6">Real Reverse Mortgage Scenarios</h2>
                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Supplementing Retirement Income</h3>
                        <p className="text-muted-foreground mb-3">
                          Margaret, 72, in Oakville has a $750,000 home fully paid off. Her pension and OAS provide
                          $2,800/month, but she wanted more comfortable living. She accessed $200,000 through a reverse
                          mortgage, taking $1,500/month in scheduled payments. This supplements her income without
                          affecting her government benefits.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Monthly supplement: $1,500 | No impact on OAS/GIS
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Healthcare & Home Modifications</h3>
                        <p className="text-muted-foreground mb-3">
                          George and Helen, both 78, needed $80,000 for accessibility renovations (stairlift, bathroom
                          modifications, widened doorways) to age in place safely. Their Toronto home was worth $1.1M.
                          The reverse mortgage provided funds for renovations plus a reserve for future healthcare
                          needs—all without monthly payments straining their fixed income.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Renovation funds: $80,000 | Healthcare reserve: $50,000
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">Helping Family</h3>
                        <p className="text-muted-foreground mb-3">
                          Robert, 68, in Burlington wanted to help his daughter with a down payment on her first home.
                          Rather than selling his $650,000 home, he accessed $100,000 through a reverse mortgage as a
                          lump sum gift to his daughter. He continues living in his home while watching his
                          grandchildren grow up in the neighborhood.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Gift to daughter: $100,000 | Remained in family home
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * These scenarios are illustrative examples. Actual amounts and terms vary by individual situation.
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
                  title="Explore Your Reverse Mortgage Options"
                  description="Get personalized information for your situation. No obligation consultation."
                />

                {/* Related Solutions */}
                <RelatedSolutions exclude="/mortgage-solutions/reverse-mortgages" />
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
              Reverse mortgages have implications for your estate and long-term finances. Independent legal advice is
              required. Contact us for personalized guidance based on your specific situation.
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

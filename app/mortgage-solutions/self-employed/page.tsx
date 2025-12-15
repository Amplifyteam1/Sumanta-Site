import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  FileText,
  Building2,
  Users,
  TrendingUp,
  Phone,
  Briefcase,
} from "lucide-react"
import { siteConfig } from "@/lib/site"
import { ProcessTimeline } from "@/components/mortgage/process-timeline"
import { TableOfContents } from "@/components/mortgage/table-of-contents"
import { FAQAccordion } from "@/components/mortgage/faq-accordion"
import { generateFAQSchema } from "@/lib/faq-schema"
import { RelatedSolutions } from "@/components/mortgage/related-solutions"
import { CTASection } from "@/components/mortgage/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"

export const metadata: Metadata = {
  title: "Self-Employed Mortgages Ontario | Business Owner Home Loans | Sumanta Mahabir",
  description:
    "Specialized mortgages for self-employed professionals in Ontario. Stated income, business-for-self programs. Contractors, freelancers, and business owners welcome.",
  openGraph: {
    title: "Self-Employed Mortgages Ontario | Sumanta Mahabir",
    description:
      "Specialized mortgages for self-employed professionals. Stated income programs for contractors, freelancers, and business owners.",
    url: `${siteConfig.url}/mortgage-solutions/self-employed`,
    siteName: siteConfig.name,
    type: "website",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions/self-employed`,
  },
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "challenges", title: "Self-Employed Challenges", level: 2 },
  { id: "programs", title: "Mortgage Programs", level: 2 },
  { id: "documentation", title: "Documentation Options", level: 2 },
  { id: "process", title: "The Process", level: 2 },
  { id: "tips", title: "Tips for Approval", level: 2 },
  { id: "scenarios", title: "Real Scenarios", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
]

const faqs = [
  {
    question: "How do lenders verify self-employed income?",
    answer:
      "Lenders use several methods: (1) Traditional verification through 2 years of personal and business tax returns, NOAs, and financial statements showing consistent income. (2) Stated income programs where you declare income supported by business bank statements showing cash flow. (3) Bank statement programs using 12-24 months of deposits to calculate effective income. Each method has different rate and down payment implications.",
  },
  {
    question: "Why is it harder for self-employed people to get mortgages?",
    answer:
      "Self-employed individuals often report lower income on taxes to minimize tax liability. While this is legal and sensible for tax purposes, it creates a gap between your actual earning capacity and your reported income. Banks typically use the lower reported income for qualification, making it harder to qualify for the mortgage amount you need.",
  },
  {
    question: "What is a stated income mortgage?",
    answer:
      "A stated income (or business-for-self) mortgage allows you to declare your income rather than proving it through traditional tax documents. You typically need to show business ownership (2+ years), reasonable income relative to your industry, and support the stated income with business bank statements. These programs usually require 10-20% down payment.",
  },
  {
    question: "How long do I need to be self-employed to qualify?",
    answer:
      "Most lenders require at least 2 years of self-employment history. Some alternative lenders may accept 1 year with strong financials. If you've been self-employed less than 2 years but have prior experience in the same industry as an employee, some lenders may consider your combined history.",
  },
  {
    question: "What down payment do self-employed borrowers need?",
    answer:
      "Down payment requirements vary: Traditional income verification: As low as 5% down with CMHC insurance. Stated income programs: Typically 10-20% minimum. Alternative/private lenders: Usually 15-25% depending on the lender. Higher down payments often result in better rates and more lending options.",
  },
  {
    question: "Can I get a mortgage if I write off a lot of expenses?",
    answer:
      "Yes, but the approach matters. Traditional lenders use your net income after expenses, which may be low. Stated income programs allow you to declare gross revenue and reasonable income based on your business type. I can help you determine which approach gives you the best qualification while staying within lending guidelines.",
  },
  {
    question: "Do I need a business license to qualify as self-employed?",
    answer:
      "Requirements vary by lender. Some accept: registered business (corporation, sole proprietorship, partnership), business license, HST/GST registration, or professional license (for contractors, consultants, etc.). Having formal business documentation strengthens your application, but options exist for gig workers and freelancers too.",
  },
  {
    question: "What if my income varies year to year?",
    answer:
      "Income fluctuation is common for self-employed individuals. Lenders typically average your income over 2 years. If income is trending up, some lenders weight recent income more heavily. If it's trending down, lenders may use the lower recent year. Bank statement programs can sometimes work around dramatic fluctuations.",
  },
  {
    question: "Can I include rental income in my qualification?",
    answer:
      "Yes, rental income from investment properties can be added to your self-employment income for qualification purposes. Typically, lenders count 50-80% of gross rental income (to account for expenses and vacancies). This can significantly boost your borrowing power.",
  },
  {
    question: "Are interest rates higher for self-employed mortgages?",
    answer:
      "Not necessarily. If you can provide full income documentation (2 years of taxes, NOAs, financials) and qualify traditionally, you'll get the same rates as salaried employees. Stated income programs typically add 0.10-0.50% to rates. Alternative lenders have higher rates (1-2% above prime). The best option depends on your specific situation.",
  },
]

const processSteps = [
  {
    title: "Income Strategy Session",
    description:
      "We review your business structure, income patterns, and documentation to determine the best mortgage approach for your situation.",
    duration: "45 min",
  },
  {
    title: "Documentation Gathering",
    description:
      "Collect the required documents based on your chosen program—either full income verification or stated income with business banking.",
    duration: "3-7 days",
  },
  {
    title: "Lender Matching",
    description:
      "I match your profile to lenders most likely to approve and offer competitive rates. Self-employed expertise matters here.",
    duration: "1-2 days",
  },
  {
    title: "Application & Submission",
    description:
      "Submit your application with a cover letter explaining your business and income. Presentation matters for self-employed files.",
    duration: "2-3 days",
  },
  {
    title: "Underwriting & Approval",
    description:
      "Work through underwriter questions and provide any additional documentation requested. I advocate for your file throughout.",
    duration: "5-10 days",
  },
  {
    title: "Closing",
    description:
      "Finalize with your lawyer and receive your funds. Celebrate being a homeowner or accessing your equity!",
    duration: "Closing day",
  },
]

export default function SelfEmployedPage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-self-employed-office.jpg"
              alt="Toronto business district"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">Self-Employed Mortgages</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Mortgages for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Business Owners
              </span>{" "}
              in Ontario
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Specialized mortgage solutions for entrepreneurs, contractors, freelancers, and business owners. We
              understand self-employed income.
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
                <a href="#calendly-widget">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Who We Help Stats */}
        <section className="py-8 bg-primary/5 border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">Contractors</div>
                <div className="text-sm text-muted-foreground">Trades & Construction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Freelancers</div>
                <div className="text-sm text-muted-foreground">Creative & Tech</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Consultants</div>
                <div className="text-sm text-muted-foreground">Professional Services</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Owners</div>
                <div className="text-sm text-muted-foreground">Small Business</div>
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
                      <Briefcase className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Self-Employed Specialist</h3>
                      <p className="text-sm text-muted-foreground mb-4">Get advice tailored to your business income.</p>
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
                  <h2 className="text-3xl font-bold mb-6">Self-Employed Mortgage Solutions</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Being your own boss comes with many advantages, but getting a mortgage shouldn&apos;t be one of
                      the challenges. Traditional lenders often struggle to understand self-employed income, leading to
                      frustrating declines despite your obvious financial success.
                    </p>
                    <p>
                      As a mortgage agent who specializes in self-employed clients, I understand the unique income
                      patterns of entrepreneurs, contractors, and freelancers. Your business bank statements, industry
                      success, and real-world cash flow matter just as much as your tax returns—sometimes more.
                    </p>
                    <p>
                      Whether you&apos;re a contractor who writes off vehicle expenses, a consultant who incorporates
                      for tax efficiency, or a business owner reinvesting profits into growth, there are mortgage
                      programs designed for your situation. With access to specialized lenders who understand
                      self-employment, I can often find approval where banks say no.
                    </p>
                  </div>
                </div>

                {/* Self-Employed Challenges */}
                <div id="challenges" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Why Traditional Lenders Struggle with Self-Employed</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <TrendingUp className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Tax Optimization Gap</h3>
                        <p className="text-muted-foreground text-sm">
                          Smart tax planning means writing off legitimate expenses, lowering your taxable income. But
                          banks use this lower number, not your actual cash flow.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <FileText className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Complex Income Structure</h3>
                        <p className="text-muted-foreground text-sm">
                          Salary, dividends, retained earnings, multiple revenue streams—self-employed income is rarely
                          straightforward, confusing traditional underwriters.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Building2 className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Business Investment</h3>
                        <p className="text-muted-foreground text-sm">
                          Reinvesting profits into equipment, inventory, or expansion is smart business—but it reduces
                          the income banks see.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Users className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Income Variability</h3>
                        <p className="text-muted-foreground text-sm">
                          Seasonal businesses, project-based work, and growth phases create income swings that spook
                          risk-averse bank underwriters.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Mortgage Programs */}
                <div id="programs" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Self-Employed Mortgage Programs</h2>
                  <div className="space-y-6">
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Traditional Full Documentation
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        If your declared income on tax returns supports the mortgage amount you need, traditional
                        programs offer the best rates. Requires 2 years of T1 Generals, NOAs, and possibly business
                        financial statements.
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Best for:</span> Self-employed with higher reported income |{" "}
                        <span className="font-medium">Down payment:</span> As low as 5%
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Stated Income (Business-for-Self)
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Declare a reasonable income based on your business type and support it with business bank
                        statements showing cash flow. No need to use low tax return income for qualification.
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Best for:</span> Tax-optimizers with strong cash flow |{" "}
                        <span className="font-medium">Down payment:</span> 10-20%
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Bank Statement Programs
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Income calculated from 12-24 months of business or personal bank deposits. Great for those with
                        complex income structures or significant write-offs.
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Best for:</span> Heavy write-offs, variable income |{" "}
                        <span className="font-medium">Down payment:</span> 15-25%
                      </div>
                    </div>

                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Equity-Based Programs
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        For self-employed with significant down payment or equity, some programs focus primarily on the
                        equity position rather than income verification.
                      </p>
                      <div className="text-sm">
                        <span className="font-medium">Best for:</span> Asset-rich, complex income |{" "}
                        <span className="font-medium">Down payment:</span> 25-35%
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documentation Options */}
                <div id="documentation" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Documentation Options</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-3">Traditional Documentation</h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• 2 years personal T1 General tax returns</li>
                          <li>• 2 years Notice of Assessments (NOAs)</li>
                          <li>• Business financial statements</li>
                          <li>• Articles of incorporation/business license</li>
                          <li>• Accountant-prepared statements (if applicable)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-3">Stated Income Documentation</h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Proof of business ownership (2+ years)</li>
                          <li>• Business license or registration</li>
                          <li>• 6-12 months business bank statements</li>
                          <li>• Signed income declaration</li>
                          <li>• Sometimes: CRA business number confirmation</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Process */}
                <div id="process" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">The Self-Employed Mortgage Process</h2>
                  <ProcessTimeline steps={processSteps} />
                </div>

                {/* Tips for Approval */}
                <div id="tips" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Tips for Self-Employed Mortgage Approval</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Plan 6-12 Months Ahead",
                        description:
                          "If possible, adjust your tax strategy the year before applying. Reporting slightly higher income can open better mortgage options.",
                      },
                      {
                        title: "Keep Business and Personal Finances Separate",
                        description:
                          "Separate bank accounts make it easier to demonstrate business income and professional financial management.",
                      },
                      {
                        title: "Maintain Clean Bank Statements",
                        description:
                          "Consistent deposits, no NSF charges, and clear business patterns strengthen your application.",
                      },
                      {
                        title: "Document Everything",
                        description:
                          "Contracts, invoices, and client lists can support your income claims and business stability.",
                      },
                      {
                        title: "Consider a Larger Down Payment",
                        description:
                          "Larger down payments open more lending options and better rates for self-employed borrowers.",
                      },
                      {
                        title: "Work with a Self-Employed Specialist",
                        description:
                          "Mortgage agents who understand self-employment can present your file effectively and know which lenders are most receptive.",
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

                {/* Scenarios */}
                <div id="scenarios" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Real Self-Employed Scenarios</h2>
                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The Tax-Efficient Contractor</h3>
                        <p className="text-muted-foreground mb-3">
                          Dave, an electrical contractor in the GTA, earns $180,000/year but reports $65,000 after
                          vehicle, tools, and home office deductions. Banks offered him only $280,000. Using a stated
                          income program with his strong business bank statements showing $12,000+ monthly deposits, he
                          qualified for $520,000—enough for his first home.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Tax return income: $65,000 | Stated income: $140,000 | Mortgage approved: $520,000
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The Incorporated Consultant</h3>
                        <p className="text-muted-foreground mb-3">
                          Sarah runs a successful marketing consultancy through her corporation. She pays herself a
                          modest salary and takes dividends, keeping most profits in the business. Her personal income
                          appears low on tax returns. By using a business-for-self program that considered her corporate
                          retained earnings and gross billings, she qualified for $650,000.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Corporate gross revenue: $350,000 | Personal income: $80,000 | Mortgage approved: $650,000
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The New Business Owner</h3>
                        <p className="text-muted-foreground mb-3">
                          Mike left his corporate job 18 months ago to start his own IT consulting firm. With only 1.5
                          years of self-employment, most lenders declined. However, his 10 years of prior experience in
                          IT and strong first-year financials helped him qualify through an alternative lender who
                          considered his industry background.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Self-employed: 18 months | Industry experience: 10 years | Mortgage approved: $400,000
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
                  title="Self-Employed? Let's Find Your Mortgage"
                  description="Get specialized guidance for your unique income situation. Free consultation."
                />

                {/* Related Solutions */}
                <RelatedSolutions exclude="/mortgage-solutions/self-employed" />
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
              Self-employed mortgage options vary by lender and individual situation. Income verification requirements
              differ by program. Contact us for personalized guidance.
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

      {/* Calendly Widget */}
      <CalendlyWidget id="calendly-widget" />

      {/* Footer */}
      <Footer />
    </>
  )
}

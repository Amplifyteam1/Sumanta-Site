import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Home,
  ArrowRight,
  CheckCircle2,
  FileText,
  AlertTriangle,
  Phone,
  Calendar,
  Users,
  Target,
  Zap,
  Shield,
} from "lucide-react"
import { siteConfig } from "@/lib/site"
import { TableOfContents } from "@/components/mortgage/table-of-contents"
import { FAQAccordion } from "@/components/mortgage/faq-accordion"
import { ProcessTimeline } from "@/components/mortgage/process-timeline"
import { RelatedSolutions } from "@/components/mortgage/related-solutions"
import { CTASection } from "@/components/mortgage/cta-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { generateFAQSchema } from "@/lib/faq-schema"

export const metadata: Metadata = {
  title: "First-Time Home Buyer Mortgages Ontario | Sumanta Mahabir",
  description:
    "Expert guidance for first-time home buyers in Ontario. Access 50+ lenders, government incentives, and personalized mortgage solutions. Get pre-approved today.",
  openGraph: {
    title: "First-Time Home Buyer Mortgages Ontario | Sumanta Mahabir",
    description:
      "Expert guidance for first-time home buyers in Ontario. Access 50+ lenders, government incentives, and personalized mortgage solutions.",
    url: `${siteConfig.url}/mortgage-solutions/first-time-buyers`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "First-Time Home Buyer Mortgages Ontario",
    description: "Expert guidance for first-time home buyers in Ontario. Access 50+ lenders and government incentives.",
  },
  alternates: {
    canonical: `${siteConfig.url}/mortgage-solutions/first-time-buyers`,
  },
}

const tocItems = [
  { id: "overview", title: "Overview", level: 2 },
  { id: "who-qualifies", title: "Who Qualifies", level: 2 },
  { id: "benefits", title: "Benefits & Incentives", level: 2 },
  { id: "qualification", title: "How to Qualify", level: 2 },
  { id: "documents", title: "Documents Needed", level: 2 },
  { id: "process", title: "The Process", level: 2 },
  { id: "mistakes", title: "Common Mistakes", level: 2 },
  { id: "scenarios", title: "Real Scenarios", level: 2 },
  { id: "faq", title: "FAQ", level: 2 },
]

const faqs = [
  {
    question: "How much down payment do I need as a first-time buyer in Ontario?",
    answer:
      "In Ontario, the minimum down payment depends on the purchase price. For homes up to $500,000, you need at least 5% down. For the portion between $500,000 and $999,999, you need 10%. For homes $1 million or more, you need 20% minimum. For example, a $600,000 home would require $25,000 (5% of $500,000) + $10,000 (10% of $100,000) = $35,000 minimum down payment.",
  },
  {
    question: "What is the First-Time Home Buyer Incentive (FTHBI)?",
    answer:
      "The FTHBI is a shared-equity mortgage program where the government contributes 5% or 10% toward your down payment. This reduces your mortgage amount and monthly payments. You repay the incentive when you sell the home or after 25 years. The program has income limits ($120,000 or $150,000 in Toronto/Vancouver) and purchase price caps.",
  },
  {
    question: "Can I use my RRSP for a down payment?",
    answer:
      "Yes! The Home Buyers' Plan (HBP) allows first-time buyers to withdraw up to $35,000 from their RRSPs tax-free ($70,000 for couples) for a down payment. You must repay the amount to your RRSP over 15 years, starting the second year after withdrawal. This is an excellent way to leverage your retirement savings for homeownership.",
  },
  {
    question: "What credit score do I need to buy my first home?",
    answer:
      "Most lenders require a minimum credit score of 600-650 for conventional mortgages. However, with mortgage default insurance (required for down payments under 20%), some lenders may accept scores as low as 600. A higher credit score (680+) typically qualifies you for better interest rates. I can help you understand your options regardless of your credit situation.",
  },
  {
    question: "How much can I afford as a first-time buyer?",
    answer:
      "Affordability depends on your income, debts, down payment, and current interest rates. Generally, your housing costs (mortgage, taxes, heating, 50% of condo fees) shouldn't exceed 32-39% of your gross income (GDS ratio), and total debt payments shouldn't exceed 40-44% (TDS ratio). I provide free pre-approval assessments to determine your exact purchasing power.",
  },
  {
    question: "What is mortgage default insurance?",
    answer:
      "Mortgage default insurance (often called CMHC insurance) is required when your down payment is less than 20%. It protects the lender if you default on your mortgage. The premium ranges from 2.8% to 4% of your mortgage amount and is typically added to your mortgage. While it's an additional cost, it allows you to buy a home with as little as 5% down.",
  },
  {
    question: "Should I get pre-approved before house hunting?",
    answer:
      "Pre-approval is essential for first-time buyers. It tells you exactly how much you can afford, locks in an interest rate for 90-120 days, shows sellers you're a serious buyer, and can speed up the closing process. In competitive Ontario markets, pre-approval can make your offer more attractive to sellers.",
  },
  {
    question: "What's the Ontario Land Transfer Tax Rebate for first-time buyers?",
    answer:
      "First-time home buyers in Ontario can receive a rebate of up to $4,000 on the provincial land transfer tax. If you're buying in Toronto, you may also qualify for an additional municipal rebate of up to $4,475. Combined, first-time buyers could save up to $8,475 in land transfer taxes.",
  },
  {
    question: "How long does the first-time buyer mortgage process take?",
    answer:
      "From pre-approval to closing, the process typically takes 30-90 days depending on your situation and the property. Pre-approval takes 1-3 days, house hunting varies, and once you have an accepted offer, closing usually occurs within 30-60 days. Having your documents ready and working with an experienced mortgage agent can speed up the process.",
  },
  {
    question: "Can I buy a home with student loan debt?",
    answer:
      "Yes, you can buy a home while carrying student loan debt. Your student loan payments will be factored into your debt service ratios, which may affect how much you can borrow. However, many first-time buyers successfully purchase homes while managing student debt. I'll help you understand how your specific debt situation impacts your mortgage options.",
  },
]

const processSteps = [
  {
    title: "Free Consultation & Pre-Approval",
    description:
      "We review your finances, credit, and goals. You receive a pre-approval letter showing your maximum purchase price and locked-in rate.",
    duration: "1-3 days",
  },
  {
    title: "House Hunting",
    description:
      "Armed with your pre-approval, you search for your perfect home with confidence, knowing exactly what you can afford.",
    duration: "Varies",
  },
  {
    title: "Make an Offer",
    description:
      "When you find the right home, your real estate agent helps you make a competitive offer. Pre-approval strengthens your position.",
    duration: "1-2 days",
  },
  {
    title: "Mortgage Application",
    description:
      "Once your offer is accepted, we submit your full mortgage application with property details and required documents.",
    duration: "2-5 days",
  },
  {
    title: "Appraisal & Approval",
    description:
      "The lender orders an appraisal to verify the property value. We address any conditions and work toward final approval.",
    duration: "5-10 days",
  },
  {
    title: "Closing Day",
    description:
      "Your lawyer handles the final paperwork. You sign the mortgage documents, receive your keys, and become a homeowner!",
    duration: "Closing day",
  },
]

export default function FirstTimeBuyersPage() {
  return (
    <>
      {/* Navigation */}
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-first-time-buyers-cozy-home.jpg"
              alt="Modern Ontario home"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/80" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <Badge className="mb-4 bg-primary/20 text-primary-foreground border-0">First-Time Buyers</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight text-balance">
              Your First Home in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Ontario</span>{" "}
              Starts Here
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Navigate the exciting journey of homeownership with expert guidance, access to 50+ lenders, and all the
              government incentives you deserve.
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
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Lenders Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5%</div>
                <div className="text-sm text-muted-foreground">Minimum Down Payment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">$8,475</div>
                <div className="text-sm text-muted-foreground">Potential Tax Rebates</div>
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
                  <h2 className="text-3xl font-bold mb-6">Buying Your First Home in Ontario</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>
                      Purchasing your first home is one of life&apos;s most significant milestones. In Ontario&apos;s
                      dynamic real estate market—from the bustling Greater Toronto Area to growing cities like Hamilton,
                      Ottawa, Kitchener-Waterloo, and London—having the right mortgage guidance can make all the
                      difference.
                    </p>
                    <p>
                      As a licensed mortgage agent with access to over 50 lenders, I specialize in helping first-time
                      buyers navigate the complexities of home financing. Whether you&apos;re a young professional, a
                      new family, or someone who&apos;s been renting and is ready to build equity, I&apos;ll help you
                      find the mortgage solution that fits your unique situation.
                    </p>
                    <p>
                      First-time buyers in Ontario have access to several programs and incentives designed to make
                      homeownership more accessible. From federal programs like the First-Time Home Buyer Incentive and
                      RRSP Home Buyers&apos; Plan to provincial benefits like the Ontario Land Transfer Tax Rebate,
                      I&apos;ll ensure you take advantage of every opportunity available to you.
                    </p>
                  </div>
                </div>

                {/* Who Qualifies */}
                <div id="who-qualifies" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Who Qualifies as a First-Time Home Buyer?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <Users className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Federal Definition</h3>
                        <p className="text-muted-foreground text-sm">
                          You&apos;re considered a first-time buyer if you haven&apos;t owned a home in the past 4
                          years. This applies to both you and your spouse/partner.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Target className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Provincial Rebates</h3>
                        <p className="text-muted-foreground text-sm">
                          For Ontario Land Transfer Tax Rebates, you must have never owned a home anywhere in the world,
                          and you must be 18+ years old.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Zap className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">Recent Separation</h3>
                        <p className="text-muted-foreground text-sm">
                          If you previously owned a home with a spouse but no longer do due to separation, you may
                          qualify as a first-time buyer for certain programs.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <Shield className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-semibold text-lg mb-2">New to Canada</h3>
                        <p className="text-muted-foreground text-sm">
                          Newcomers to Canada who haven&apos;t owned property here typically qualify for first-time
                          buyer programs, even if they owned property abroad.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Benefits & Incentives */}
                <div id="benefits" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Benefits & Government Incentives</h2>
                  <div className="space-y-6">
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Ontario Land Transfer Tax Rebate
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        First-time buyers can receive up to <strong>$4,000</strong> back on provincial land transfer
                        tax. Toronto buyers may receive an additional <strong>$4,475</strong> municipal rebate—a
                        combined savings of up to <strong>$8,475</strong>.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        RRSP Home Buyers&apos; Plan (HBP)
                      </h3>
                      <p className="text-muted-foreground">
                        Withdraw up to <strong>$35,000</strong> from your RRSPs tax-free for your down payment (
                        <strong>$70,000</strong> for couples). Repay over 15 years starting the second year after
                        withdrawal.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        First-Time Home Buyer Incentive (FTHBI)
                      </h3>
                      <p className="text-muted-foreground">
                        The federal government contributes <strong>5% or 10%</strong> toward your down payment as a
                        shared-equity mortgage, reducing your monthly payments.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        First Home Savings Account (FHSA)
                      </h3>
                      <p className="text-muted-foreground">
                        A new tax-advantaged account allowing you to save up to <strong>$40,000</strong> for your first
                        home with tax-deductible contributions and tax-free withdrawals.
                      </p>
                    </div>
                    <div className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Home Buyers&apos; Tax Credit
                      </h3>
                      <p className="text-muted-foreground">
                        Claim up to <strong>$10,000</strong> on your tax return for a tax credit of up to{" "}
                        <strong>$1,500</strong> to offset closing costs.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Qualification */}
                <div id="qualification" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">How Qualification Works in Ontario</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p>Lenders evaluate first-time buyers based on several key factors:</p>
                    <ul>
                      <li>
                        <strong>Credit Score:</strong> Most lenders require a minimum score of 600-650. Higher scores
                        (680+) qualify for better rates.
                      </li>
                      <li>
                        <strong>Income Verification:</strong> Stable employment history (typically 2+ years) with
                        verifiable income from pay stubs, T4s, and NOAs.
                      </li>
                      <li>
                        <strong>Debt Service Ratios:</strong> GDS ratio (housing costs) should be under 32-39% of gross
                        income. TDS ratio (total debts) should be under 40-44%.
                      </li>
                      <li>
                        <strong>Down Payment:</strong> Minimum 5% for homes under $500K, with additional requirements
                        for higher-priced properties.
                      </li>
                      <li>
                        <strong>Stress Test:</strong> You must qualify at the higher of your contract rate plus 2% or
                        5.25% (the benchmark rate).
                      </li>
                    </ul>
                    <p>
                      Don&apos;t worry if your situation doesn&apos;t fit perfectly into these boxes. With access to
                      alternative lenders and creative financing solutions, I can often find options for buyers who
                      don&apos;t meet traditional criteria.
                    </p>
                  </div>
                </div>

                {/* Documents */}
                <div id="documents" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Documents You&apos;ll Need</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <FileText className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Income Verification</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Recent pay stubs (last 30 days)</li>
                          <li>• Letter of employment</li>
                          <li>• T4 statements (last 2 years)</li>
                          <li>• Notice of Assessment (last 2 years)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <FileText className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Identification</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Valid government-issued photo ID</li>
                          <li>• Social Insurance Number</li>
                          <li>• Proof of current address</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <FileText className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Financial Documents</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Bank statements (last 90 days)</li>
                          <li>• Proof of down payment source</li>
                          <li>• Investment/RRSP statements</li>
                          <li>• Gift letter (if applicable)</li>
                        </ul>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <FileText className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold mb-2">Property Documents</h3>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Signed purchase agreement</li>
                          <li>• MLS listing</li>
                          <li>• Property tax information</li>
                          <li>• Condo status certificate (if applicable)</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Process */}
                <div id="process" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">The First-Time Buyer Process</h2>
                  <ProcessTimeline steps={processSteps} />
                </div>

                {/* Common Mistakes */}
                <div id="mistakes" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Common Mistakes to Avoid</h2>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Skipping Pre-Approval",
                        description:
                          "Shopping without pre-approval wastes time on homes you can't afford and weakens your negotiating position.",
                      },
                      {
                        title: "Making Large Purchases Before Closing",
                        description:
                          "Buying a car or furniture on credit before closing can affect your debt ratios and jeopardize your mortgage approval.",
                      },
                      {
                        title: "Ignoring Closing Costs",
                        description:
                          "Budget 1.5-4% of the purchase price for land transfer tax, legal fees, inspections, and moving costs.",
                      },
                      {
                        title: "Only Considering the Purchase Price",
                        description:
                          "Factor in property taxes, insurance, utilities, maintenance, and condo fees when determining affordability.",
                      },
                      {
                        title: "Not Comparing Mortgage Options",
                        description:
                          "Working with a mortgage agent gives you access to multiple lenders and potentially better rates than going directly to one bank.",
                      },
                      {
                        title: "Waiving Home Inspection",
                        description:
                          "Even in competitive markets, a home inspection can reveal costly issues. Consider inspection conditions carefully.",
                      },
                    ].map((mistake, index) => (
                      <div
                        key={index}
                        className="flex gap-4 p-4 bg-destructive/5 rounded-lg border border-destructive/20"
                      >
                        <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-semibold">{mistake.title}</h3>
                          <p className="text-sm text-muted-foreground">{mistake.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Scenarios */}
                <div id="scenarios" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mb-6">Real Scenarios</h2>
                  <div className="space-y-6">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The Young Professional</h3>
                        <p className="text-muted-foreground mb-3">
                          Sarah, 28, is a marketing manager earning $75,000/year in Toronto. She&apos;s been renting and
                          has saved $40,000. With her RRSP of $25,000, she used the Home Buyers&apos; Plan to boost her
                          down payment to $65,000, qualifying for a $550,000 condo. The Ontario Land Transfer Tax Rebate
                          and Toronto rebate saved her over $8,000 in closing costs.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Key strategy: Maximized government incentives and RRSP withdrawal
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The Growing Family</h3>
                        <p className="text-muted-foreground mb-3">
                          Mike and Jennifer, both 32, have a combined income of $130,000 and a toddler. They wanted to
                          move from their Toronto condo to a Hamilton townhouse for more space. With 10% down on a
                          $650,000 property and the First-Time Home Buyer Incentive, they reduced their mortgage amount
                          and monthly payments significantly while gaining extra bedrooms and a backyard.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Key strategy: Used FTHBI to reduce monthly costs while upgrading space
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold text-lg mb-2">The New Canadian</h3>
                        <p className="text-muted-foreground mb-3">
                          Priya moved to Canada 18 months ago with her husband, both working in tech. Despite limited
                          Canadian credit history, they qualified through an alternative lending program using their
                          international credit history and strong income documentation. They purchased a $700,000 home
                          in Mississauga with 20% down.
                        </p>
                        <p className="text-sm text-primary font-medium">
                          Key strategy: Leveraged alternative lender program for newcomers
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    * These scenarios are illustrative examples. Actual results vary based on individual circumstances,
                    market conditions, and lender requirements.
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
                  title="Ready to Buy Your First Home?"
                  description="Get personalized guidance and access to 50+ lenders. Start with a free consultation."
                />

                {/* Related Solutions */}
                <RelatedSolutions exclude="/mortgage-solutions/first-time-buyers" />
              </div>

              {/* Table of Contents Sidebar */}
              <aside className="hidden lg:block">
                <TableOfContents items={tocItems} />
                <div className="mt-8 sticky top-96 z-10">
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="pt-6 text-center">
                      <Home className="w-10 h-10 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">Free Consultation</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get personalized advice for your first home purchase.
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
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <CTASection />

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground">
              Information is general in nature and may vary by lender and borrower profile. Government programs and
              incentives are subject to change and eligibility requirements. Contact us for personalized guidance based
              on your specific situation.
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: `${siteConfig.name} - First-Time Home Buyer Mortgages`,
              description:
                "Expert mortgage guidance for first-time home buyers in Ontario. Access to 50+ lenders, government incentives, and personalized solutions.",
              url: `${siteConfig.url}/mortgage-solutions/first-time-buyers`,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              areaServed: {
                "@type": "State",
                name: "Ontario",
              },
            }),
          }}
        />
      </main>
      {/* Calendly Widget */}
      <CalendlyWidget />
      {/* Footer */}
      <Footer />
    </>
  )
}

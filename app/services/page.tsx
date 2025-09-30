import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Home,
  TrendingUp,
  Calculator,
  Clock,
  Users,
  DollarSign,
  Building,
  Percent,
  Phone,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: Home,
      title: "Home Purchases",
      description:
        "Whether you're a first-time buyer or looking to move up, I'll help you secure the perfect mortgage for your new home.",
      features: [
        "First-time buyer programs",
        "Move-up buyer solutions",
        "Investment property financing",
        "New construction mortgages",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Refinancing",
      description:
        "Lower your interest rate, access your home's equity, or switch to better terms with a mortgage refinance.",
      features: [
        "Rate and term refinancing",
        "Cash-out refinancing",
        "Switch lender programs",
        "Equity access solutions",
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Calculator,
      title: "Debt Consolidation",
      description: "Combine high-interest debts into one manageable mortgage payment and save thousands in interest.",
      features: [
        "Credit card consolidation",
        "Personal loan consolidation",
        "Line of credit consolidation",
        "Tax debt solutions",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Clock,
      title: "Mortgage Renewals",
      description: "Don't just auto-renew! Let me negotiate better terms and rates for your mortgage renewal.",
      features: ["Rate negotiation", "Term optimization", "Lender comparison", "Switch at renewal"],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Building,
      title: "New Construction",
      description: "Specialized financing solutions for new builds, custom homes, and construction projects.",
      features: [
        "Construction-to-permanent loans",
        "Progress draw financing",
        "Custom home financing",
        "Builder relationships",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "HELOCs",
      description: "Home Equity Lines of Credit provide flexible access to your home's equity when you need it.",
      features: ["Flexible credit access", "Interest-only payments", "Revolving credit line", "Competitive rates"],
      color: "from-blue-600 to-blue-700",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250930_0001_Mortgage%20Billboard%20by%20CN%20Tower_remix_01k6ccd7psf7xt2re7mk47n6hx-mZiReVjdZCIwjkARCbfIL4dQeoL2GL.png"
            alt="Sumanta Mahabir Mortgage Billboard"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          <div className="space-y-6 animate-fade-in">
            <Badge className="mb-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-lg shadow-blue-500/20">
              Comprehensive Solutions
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              Comprehensive Mortgage Services
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50 mb-8 max-w-4xl mx-auto leading-relaxed font-normal drop-shadow-lg text-pretty">
              From first-time home purchases to complex refinancing solutions, I offer a full range of mortgage services
              tailored to your unique financial needs and goals.
            </p>
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/60 transition-all duration-300 hover:scale-[1.03] focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent border border-blue-400/30 text-lg px-8 py-7"
                asChild
              >
                <a href="tel:437-241-2954">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm"
              >
                <CardHeader>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-7">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700 text-base">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Property Financing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Properties I Help Finance
            </h2>
            <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              From condos to luxury homes, I find the right financing for every property type
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/modern-downtown-condo-building-exterior-with-glass.jpg"
                  alt="Modern Downtown Condo"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Downtown Condos</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $400K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/beautiful-family-home-with-front-yard-and-driveway.jpg"
                  alt="Family Home"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Family Homes</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $600K</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/luxury-estate-home-with-landscaped-gardens.jpg"
                  alt="Luxury Estate"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Luxury Estates</h3>
                  <p className="text-base text-gray-100 text-pretty">Starting from $1M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Simple Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              My Process
            </h2>
            <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Simple steps to get you the best mortgage
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "1",
                title: "Initial Consultation",
                desc: "We discuss your needs, goals, and financial situation",
              },
              { num: "2", title: "Pre-Approval", desc: "Get pre-approved to know your budget and strengthen offers" },
              { num: "3", title: "Shop & Compare", desc: "I shop 50+ lenders to find you the best rates and terms" },
              { num: "4", title: "Close & Support", desc: "Handle all paperwork and provide ongoing support" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl font-extrabold text-white">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-base leading-7">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
                Broker Advantage
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 tracking-tight text-balance">
                Why Choose a Mortgage Broker?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Percent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Better Rates</h3>
                    <p className="text-gray-600 text-base leading-7">
                      Access to wholesale rates and special programs not available to the public
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">More Options</h3>
                    <p className="text-gray-600 text-base leading-7">50+ lenders vs. just one bank's products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Save Time</h3>
                    <p className="text-gray-600 text-base leading-7">I do the shopping and paperwork for you</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">No Cost to You</h3>
                    <p className="text-gray-600 text-base leading-7">Lenders pay my fees - my service is free to you</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/modern-evening-home.jpeg"
                alt="Modern Evening Home"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full mb-8 border-4 border-white"
              />
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200/80 shadow-xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6 text-base leading-7">
                  Contact me today for a free consultation. I'll review your situation and recommend the best mortgage
                  solution for your needs.
                </p>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-6"
                    asChild
                  >
                    <a href="tel:437-241-2954">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 437-241-2954
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-6 bg-transparent"
                    asChild
                  >
                    <Link href="/application">
                      Start Online Application
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

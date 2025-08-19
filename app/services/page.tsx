import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Home, TrendingUp, Calculator, Clock, Users, DollarSign, Building, Percent, Phone } from "lucide-react"

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
      color: "bg-blue-600",
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
      color: "bg-green-600",
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
      color: "bg-purple-600",
    },
    {
      icon: Clock,
      title: "Mortgage Renewals",
      description: "Don't just auto-renew! Let me negotiate better terms and rates for your mortgage renewal.",
      features: ["Rate negotiation", "Term optimization", "Lender comparison", "Switch at renewal"],
      color: "bg-orange-600",
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
      color: "bg-indigo-600",
    },
    {
      icon: Users,
      title: "HELOCs",
      description: "Home Equity Lines of Credit provide flexible access to your home's equity when you need it.",
      features: ["Flexible credit access", "Interest-only payments", "Revolving credit line", "Competitive rates"],
      color: "bg-teal-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Comprehensive Mortgage Services</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From first-time home purchases to complex refinancing solutions, I offer a full range of mortgage services
            tailored to your unique financial needs and goals.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
            <a href="tel:437-241-2954">
              <Phone className="w-5 h-5 mr-2" />
              Call for Free Consultation
            </a>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-xl text-gray-600">Simple steps to get you the best mortgage</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">We discuss your needs, goals, and financial situation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pre-Approval</h3>
              <p className="text-gray-600">Get pre-approved to know your budget and strengthen offers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Shop & Compare</h3>
              <p className="text-gray-600">I shop 50+ lenders to find you the best rates and terms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Close & Support</h3>
              <p className="text-gray-600">Handle all paperwork and provide ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose a Mortgage Broker?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Percent className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Better Rates</h3>
                    <p className="text-gray-600">
                      Access to wholesale rates and special programs not available to the public
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">More Options</h3>
                    <p className="text-gray-600">50+ lenders vs. just one bank's products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Save Time</h3>
                    <p className="text-gray-600">I do the shopping and paperwork for you</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">No Cost to You</h3>
                    <p className="text-gray-600">Lenders pay my fees - my service is free to you</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-6">
                Contact me today for a free consultation. I'll review your situation and recommend the best mortgage
                solution for your needs.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:437-241-2954">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 437-241-2954
                  </a>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/application">Start Online Application</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

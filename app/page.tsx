import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Link from "next/link"
import { Phone, Mail, Calculator, FileText, Shield, Clock, Users, TrendingUp, Award, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Licensed Mortgage Professional</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Mortgage Expert in Hamilton
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hi, I'm Sumanta Mahabir, your dedicated mortgage broker. I help families and investors secure the best
                mortgage rates and terms for purchases, refinances, renewals, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:437-241-2954">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: 437-241-2954
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Rate Check</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Amount</label>
                    <input
                      type="text"
                      placeholder="$500,000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Primary Residence</option>
                      <option>Investment Property</option>
                      <option>Vacation Home</option>
                    </select>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/resources">
                      <Calculator className="w-5 h-5 mr-2" />
                      Get My Rate Quote
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mortgage Services I Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive mortgage solutions for all your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "Home Purchases",
                description:
                  "First-time buyers to move-up buyers, I'll find you the perfect mortgage for your new home.",
              },
              {
                icon: TrendingUp,
                title: "Refinancing",
                description: "Lower your rate, access equity, or consolidate debt with a mortgage refinance.",
              },
              {
                icon: Calculator,
                title: "Debt Consolidation",
                description: "Combine high-interest debts into one low-rate mortgage payment.",
              },
              {
                icon: Clock,
                title: "Mortgage Renewals",
                description: "Don't auto-renew! Let me negotiate better terms for your mortgage renewal.",
              },
              {
                icon: Shield,
                title: "New Construction",
                description: "Specialized financing for new builds and construction projects.",
              },
              {
                icon: Users,
                title: "HELOCs",
                description: "Home Equity Lines of Credit for flexible access to your home's equity.",
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Sumanta Mahabir?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Licensed Professional</h3>
                    <p className="text-gray-600">
                      Licensed mortgage broker (M23005389) with Verico - Best Mortgage Loans (Lic # 12625)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Access to 50+ Lenders</h3>
                    <p className="text-gray-600">
                      I work with major banks, credit unions, and private lenders to find you the best rates
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Approvals</h3>
                    <p className="text-gray-600">Quick pre-approvals and streamlined application process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Service</h3>
                    <p className="text-gray-600">One-on-one guidance throughout your entire mortgage journey</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/about">Learn More About Me</Link>
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How can I help you?</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Purchase a home</option>
                    <option>Refinance my mortgage</option>
                    <option>Debt consolidation</option>
                    <option>Mortgage renewal</option>
                    <option>HELOC</option>
                    <option>Other</option>
                  </select>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Send My Information</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact me today for a free consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call: 437-241-2954
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-blue-600 border-white hover:bg-white bg-transparent"
              asChild
            >
              <Link href="/application">Apply Online</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

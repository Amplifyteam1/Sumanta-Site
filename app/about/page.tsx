import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Users, Clock, Shield, Phone, Mail, MapPin, Star, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Licensed Mortgage Professional</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Sumanta Mahabir</h1>
              <p className="text-xl text-gray-600 mb-8">
                Your dedicated mortgage broker committed to helping you achieve your homeownership dreams with
                personalized service and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="tel:437-241-2954">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 437-241-2954
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Credentials</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">License Number</p>
                      <p className="text-gray-600">M23005389</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Brokerage</p>
                      <p className="text-gray-600">Verico - Best Mortgage Loans</p>
                      <p className="text-sm text-gray-500">License # 12625</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Agent Level</p>
                      <p className="text-gray-600">Level 1</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Office Location</p>
                      <p className="text-gray-600">949 Garth Street</p>
                      <p className="text-gray-600">Hamilton, ON L9C 4L3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/3">
                  <div className="relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Photo%20Depot.jpg-xQVs18eqCW5geNqwdCUjCxttDdPAOY.jpeg"
                      alt="Sumanta Mahabir - Licensed Mortgage Broker"
                      width={300}
                      height={400}
                      className="rounded-2xl shadow-lg object-cover w-full"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">My Story</h2>
                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      Welcome! I'm Sumanta Mahabir, a licensed mortgage broker serving the Hamilton, Ontario area and
                      beyond. With my dedication to personalized service and deep understanding of the mortgage
                      industry, I help families and individuals navigate the complex world of home financing.
                    </p>
                    <p>
                      As a Level 1 agent with Verico - Best Mortgage Loans, I have access to a vast network of over 50
                      lenders, including major banks, credit unions, and private lenders. This allows me to find the
                      most competitive rates and terms tailored to your unique financial situation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  Whether you're a first-time homebuyer, looking to refinance, or need specialized financing solutions,
                  I'm committed to making your mortgage experience as smooth and stress-free as possible. I believe in
                  building lasting relationships with my clients, providing ongoing support even after your mortgage
                  closes.
                </p>
                <p>
                  My approach is simple: listen to your needs, explain your options clearly, and work tirelessly to
                  secure the best possible mortgage solution for you. I'm here to guide you through every step of the
                  process, from pre-approval to closing and beyond.
                </p>
              </div>
            </div>
            <div>
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:437-241-2954" className="text-blue-600 hover:underline">
                        437-241-2954
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:mortgagesbysumanta@gmail.com" className="text-blue-600 hover:underline">
                        mortgagesbysumanta@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-gray-600">949 Garth Street</p>
                      <p className="text-gray-600">Hamilton, ON L9C 4L3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <p className="text-gray-600">Lender Partners</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24-48</div>
                    <p className="text-gray-600">Hour Pre-Approval</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <p className="text-gray-600">Client Focused</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Me?</h2>
            <p className="text-xl text-gray-600">Experience the difference of personalized mortgage service</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Licensed Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Fully licensed and regulated mortgage broker with proven expertise in the industry.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Extensive Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access to 50+ lenders means more options and better rates for your mortgage.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Fast Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quick pre-approvals and efficient processing to meet your timeline.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Personal Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  One-on-one service with ongoing support throughout your mortgage journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss your mortgage needs and find the perfect solution</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-blue-600 border-white hover:bg-white bg-transparent"
              asChild
            >
              <Link href="/application">Start Application</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

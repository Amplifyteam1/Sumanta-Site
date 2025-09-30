import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Award, Users, Clock, Shield, Phone, Mail, MapPin, Star, CheckCircle, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/assets_task_01k6cdtvfneccv3pdx03d1vzpc_1759206412_img_1-6XacR2BySwCcxjjJgqnLJYMshqOOFP.webp"
            alt="Sumanta Mahabir with happy family - Best Mortgage Loans"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="mb-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-lg shadow-blue-500/20">
                Licensed Mortgage Agent
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
                Meet Sumanta Mahabir
              </h1>
              <p className="text-xl sm:text-2xl text-blue-50 mb-8 max-w-[62ch] leading-relaxed font-normal drop-shadow-lg text-pretty">
                Your dedicated mortgage agent committed to helping you achieve your homeownership dreams with
                personalized service and expert guidance throughout Hamilton and the Greater Toronto Area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/60 transition-all duration-300 hover:scale-[1.03] focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent border border-blue-400/30 text-lg px-8 py-7"
                  asChild
                >
                  <a href="tel:437-241-2954">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 437-241-2954
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/90 text-white hover:bg-white hover:text-blue-900 bg-white/5 backdrop-blur-sm font-semibold transition-all duration-300 hover:scale-[1.03] focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent shadow-xl text-lg px-8 py-7"
                  asChild
                >
                  <Link href="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-900/30 p-8 border border-white/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-blue-500/20">
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight text-balance">
                  Professional Credentials
                </h3>
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base">License Number</p>
                      <p className="text-blue-100 text-sm">M23005389</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base">Brokerage</p>
                      <p className="text-blue-100 text-sm">Verico - Best Mortgage Loans</p>
                      <p className="text-xs text-blue-200">License # 12625</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base">Agent Level</p>
                      <p className="text-blue-100 text-sm">Level 1</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base">Office Location</p>
                      <p className="text-blue-100 text-sm">949 Garth Street</p>
                      <p className="text-blue-100 text-sm">Hamilton, ON L9C 4L3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 mb-12">
                <div className="md:w-1/3">
                  <div className="relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Photo%20Depot.jpg-xQVs18eqCW5geNqwdCUjCxttDdPAOY.jpeg"
                      alt="Sumanta Mahabir - Licensed Mortgage Agent"
                      width={300}
                      height={400}
                      className="rounded-2xl shadow-xl object-cover w-full border-4 border-white"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
                    My Story
                  </h2>
                  <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                    <p className="text-pretty">
                      Welcome! I'm Sumanta Mahabir, a licensed mortgage agent serving the Hamilton, Ontario area and
                      beyond. With my dedication to personalized service and deep understanding of the mortgage
                      industry, I help families and individuals navigate the complex world of home financing.
                    </p>
                    <p className="text-pretty">
                      As a Level 1 agent with Verico - Best Mortgage Loans, I have access to a vast network of over 50
                      lenders, including major banks, credit unions, and private lenders. This allows me to find the
                      most competitive rates and terms tailored to your unique financial situation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-lg leading-relaxed text-gray-700">
                <p className="text-pretty">
                  Whether you're a first-time homebuyer, looking to refinance, or need specialized financing solutions,
                  I'm committed to making your mortgage experience as smooth and stress-free as possible. I believe in
                  building lasting relationships with my clients, providing ongoing support even after your mortgage
                  closes.
                </p>
                <p className="text-pretty">
                  My approach is simple: listen to your needs, explain your options clearly, and work tirelessly to
                  secure the best possible mortgage solution for you. I'm here to guide you through every step of the
                  process, from pre-approval to closing and beyond.
                </p>
              </div>
            </div>
            <div>
              <Card className="mb-8 border-2 border-gray-200/80 shadow-lg hover:shadow-xl transition-shadow bg-white/70 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-white">
                  <CardTitle className="text-gray-900 text-2xl font-bold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:437-241-2954" className="text-blue-600 hover:underline font-semibold text-base">
                        437-241-2954
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a
                        href="mailto:mortgagesbysumanta@gmail.com"
                        className="text-blue-600 hover:underline font-semibold text-sm break-all"
                      >
                        mortgagesbysumanta@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Office</p>
                      <p className="text-gray-600 text-base">949 Garth Street</p>
                      <p className="text-gray-600 text-base">Hamilton, ON L9C 4L3</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200/80 shadow-lg hover:shadow-xl transition-shadow bg-white/70 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-white">
                  <CardTitle className="text-gray-900 text-2xl font-bold">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">50+</div>
                    <p className="text-gray-600 font-medium text-base">Lender Partners</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">24-48</div>
                    <p className="text-gray-600 font-medium text-base">Hour Pre-Approval</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-blue-600 mb-2">100%</div>
                    <p className="text-gray-600 font-medium text-base">Client Focused</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/hamilton-luxury-home.jpeg"
                alt="Luxury Hamilton Home - Mortgage Success Story"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full border-4 border-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
                Success Stories
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight text-balance">
                Your Dream Home Awaits
              </h2>
              <p className="text-xl leading-8 text-gray-600 mb-8 text-pretty">
                From luxury estates to cozy starter homes, I've helped countless families secure financing for their
                perfect property. With access to over 50 lenders, I find solutions that others can't.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium">Luxury home financing specialists</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium">Jumbo mortgage expertise</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg font-medium">Custom financing solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Why Choose Me
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Why Work With Me?
            </h2>
            <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Experience the difference of personalized mortgage service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Licensed Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Fully licensed and regulated mortgage agent with proven expertise in the industry.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Extensive Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Access to 50+ lenders means more options and better rates for your mortgage.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Fast Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7 text-gray-600">
                  Quick pre-approvals and efficient processing to meet your timeline.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-2xl transition-all duration-300 group bg-white/70 backdrop-blur-sm">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Personal Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7 text-gray-600">
                  One-on-one service with ongoing support throughout your mortgage journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight text-balance"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
          >
            Ready to Work Together?
          </h2>
          <p
            className="text-xl sm:text-2xl text-white/95 mb-10 max-w-2xl mx-auto font-medium text-pretty"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.1)" }}
          >
            Let's discuss your mortgage needs and find the perfect solution
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-7 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              asChild
            >
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call: 437-241-2954
              </a>
            </Button>
            <Button
              size="lg"
              className="w-full sm:w-auto text-lg bg-white/12 backdrop-blur-sm text-white border-2 border-white/95 hover:bg-white/20 font-semibold px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              asChild
            >
              <Link href="/application">
                Start Application
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

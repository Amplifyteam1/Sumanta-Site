"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CalendlyWidget } from "@/components/calendly-widget"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, FileText, CheckCircle, Clock, Shield, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ClientApplicationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 4

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-application-consultation.jpg"
            alt="Mortgage consultation meeting - Apply for Pre-Approval"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <div className="space-y-6 animate-fade-in">
            <Badge className="mb-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 hover:from-blue-500/30 hover:to-cyan-500/30 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium shadow-lg shadow-blue-500/20">
              Secure Application
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              Mortgage Application
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg text-pretty">
              Get pre-approved in as little as 24-48 hours. Your information is secure and confidential.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-base text-blue-50">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-300" />
                Secure & Encrypted
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-300" />
                24-48 Hour Response
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-300" />
                No Obligation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dream Home Showcase */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Dream Homes
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Your Dream Home is Within Reach
            </h2>
            <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
              Let me help you secure financing for the perfect property
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/hamilton-pool-home.jpeg"
                  alt="Beautiful Hamilton Home with Pool"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Luxury Family Homes</h3>
                  <p className="text-base text-gray-100 text-pretty">Complete with all the amenities</p>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src="/images/modern-evening-home.jpeg"
                  alt="Modern Evening Home"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-2 text-balance">Contemporary Designs</h3>
                  <p className="text-base text-gray-100 text-pretty">Modern architecture and style</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-base font-semibold text-gray-900">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-base font-semibold text-blue-600">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card className="border-2 border-gray-200/80 shadow-xl bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900">
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Employment & Income"}
                {currentStep === 3 && "Property & Loan Details"}
                {currentStep === 4 && "Review & Submit"}
              </CardTitle>
              <CardDescription className="text-base leading-7 text-gray-600">
                {currentStep === 1 && "Let's start with your basic information"}
                {currentStep === 2 && "Tell us about your employment and income"}
                {currentStep === 3 && "Property details and loan requirements"}
                {currentStep === 4 && "Review your information and submit"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Current Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="Street Address"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base mb-3"
                    />
                    <div className="grid md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                      <input
                        type="text"
                        placeholder="Province"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                      <input
                        type="text"
                        placeholder="Postal Code"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Employment & Income */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Employment Status *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base">
                      <option>Select employment status</option>
                      <option>Full-time Employee</option>
                      <option>Part-time Employee</option>
                      <option>Self-employed</option>
                      <option>Contract Worker</option>
                      <option>Retired</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Employer Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Job Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Annual Gross Income *</label>
                      <input
                        type="number"
                        placeholder="$75,000"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Years at Current Job</label>
                      <input
                        type="number"
                        placeholder="2"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Other Income Sources</label>
                    <textarea
                      rows={3}
                      placeholder="Rental income, investments, etc."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 3: Property & Loan Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Loan Purpose *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base">
                      <option>Select loan purpose</option>
                      <option>Purchase a home</option>
                      <option>Refinance existing mortgage</option>
                      <option>Debt consolidation</option>
                      <option>Mortgage renewal</option>
                      <option>HELOC</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">
                        Property Value/Purchase Price *
                      </label>
                      <input
                        type="number"
                        placeholder="$500,000"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">Down Payment *</label>
                      <input
                        type="number"
                        placeholder="$100,000"
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Property Type *</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base">
                      <option>Select property type</option>
                      <option>Single Family Home</option>
                      <option>Townhouse</option>
                      <option>Condominium</option>
                      <option>Multi-family</option>
                      <option>Investment Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Property Location</label>
                    <input
                      type="text"
                      placeholder="City, Province"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-2">Additional Comments</label>
                    <textarea
                      rows={3}
                      placeholder="Any additional information you'd like to share..."
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 border-2 border-green-300/60 rounded-2xl p-8 shadow-lg">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                      <h3 className="text-2xl font-bold text-green-800">Ready to Submit</h3>
                    </div>
                    <p className="text-green-700 mb-6 text-base leading-7">
                      Thank you for completing the application. Please review your information and submit when ready.
                    </p>
                    <div className="space-y-3 text-base text-green-700 font-medium">
                      <p>✓ Personal information completed</p>
                      <p>✓ Employment details provided</p>
                      <p>✓ Property information entered</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-300/60 rounded-2xl p-8 shadow-lg">
                    <h4 className="text-xl font-bold text-blue-800 mb-4">What happens next?</h4>
                    <ul className="space-y-3 text-base text-blue-700 leading-7">
                      <li>• I'll review your application within 24-48 hours</li>
                      <li>• You'll receive a call to discuss your options</li>
                      <li>• I'll shop 50+ lenders for the best rates</li>
                      <li>• We'll work together to secure your mortgage</li>
                    </ul>
                  </div>

                  <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <input type="checkbox" className="mt-1 w-5 h-5" />
                    <label className="text-base text-gray-700 leading-7">
                      I consent to Sumanta Mahabir contacting me regarding my mortgage application and agree to the
                      <a href="#" className="text-blue-600 hover:underline font-semibold">
                        {" "}
                        privacy policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t-2 border-gray-200">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-lg px-8 py-6 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
                >
                  Previous
                </Button>
                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-6"
                  >
                    Next Step
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                ) : (
                  <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-6">
                    <FileText className="w-5 h-5 mr-2" />
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30"></section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
            Need Assistance?
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
            Need Help with Your Application?
          </h2>
          <p className="text-xl leading-8 text-gray-600 mb-10 max-w-2xl mx-auto text-pretty">
            I'm here to help! Contact me directly if you have questions or prefer to apply over the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-7"
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
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-7 bg-transparent"
              asChild
            >
              <a href="mailto:mortgagesbysumanta@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <CalendlyWidget
        heading="Prefer to Talk First?"
        subheading="Book a free consultation before starting your application."
      />

      <Footer />
    </div>
  )
}

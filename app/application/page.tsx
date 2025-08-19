"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, FileText, CheckCircle, Clock, Shield } from "lucide-react"

export default function ApplicationPage() {
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Secure Application</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mortgage Application</h1>
          <p className="text-xl text-gray-600 mb-8">
            Get pre-approved in as little as 24-48 hours. Your information is secure and confidential.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              Secure & Encrypted
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-blue-600" />
              24-48 Hour Response
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-purple-600" />
              No Obligation
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round((currentStep / totalSteps) * 100)}% Complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Employment & Income"}
                {currentStep === 3 && "Property & Loan Details"}
                {currentStep === 4 && "Review & Submit"}
              </CardTitle>
              <CardDescription>
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="Street Address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
                    />
                    <div className="grid md:grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Province"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        placeholder="Postal Code"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Employment & Income */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Employment Status *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">Employer Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Annual Gross Income *</label>
                      <input
                        type="number"
                        placeholder="$75,000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Years at Current Job</label>
                      <input
                        type="number"
                        placeholder="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Other Income Sources</label>
                    <textarea
                      rows={3}
                      placeholder="Rental income, investments, etc."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 3: Property & Loan Details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Loan Purpose *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Property Value/Purchase Price *
                      </label>
                      <input
                        type="number"
                        placeholder="$500,000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment *</label>
                      <input
                        type="number"
                        placeholder="$100,000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type *</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option>Select property type</option>
                      <option>Single Family Home</option>
                      <option>Townhouse</option>
                      <option>Condominium</option>
                      <option>Multi-family</option>
                      <option>Investment Property</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Location</label>
                    <input
                      type="text"
                      placeholder="City, Province"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments</label>
                    <textarea
                      rows={3}
                      placeholder="Any additional information you'd like to share..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-green-800">Ready to Submit</h3>
                    </div>
                    <p className="text-green-700 mb-4">
                      Thank you for completing the application. Please review your information and submit when ready.
                    </p>
                    <div className="space-y-2 text-sm text-green-700">
                      <p>✓ Personal information completed</p>
                      <p>✓ Employment details provided</p>
                      <p>✓ Property information entered</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
                    <ul className="space-y-2 text-sm text-blue-700">
                      <li>• I'll review your application within 24-48 hours</li>
                      <li>• You'll receive a call to discuss your options</li>
                      <li>• I'll shop 50+ lenders for the best rates</li>
                      <li>• We'll work together to secure your mortgage</li>
                    </ul>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" />
                    <label className="text-sm text-gray-600">
                      I consent to Sumanta Mahabir contacting me regarding my mortgage application and agree to the
                      <a href="#" className="text-blue-600 hover:underline">
                        {" "}
                        privacy policy
                      </a>
                      .
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                  Previous
                </Button>
                {currentStep < totalSteps ? (
                  <Button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700">
                    Next Step
                  </Button>
                ) : (
                  <Button className="bg-green-600 hover:bg-green-700">
                    <FileText className="w-4 h-4 mr-2" />
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Your Application?</h2>
          <p className="text-gray-600 mb-8">
            I'm here to help! Contact me directly if you have questions or prefer to apply over the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="tel:437-241-2954">
                <Phone className="w-5 h-5 mr-2" />
                Call: 437-241-2954
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:mortgagesbysumanta@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

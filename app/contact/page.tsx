import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare, Linkedin, Facebook, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to discuss your mortgage needs? I'm here to help you every step of the way. Contact me today for a
            free consultation.
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

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-2">Call me directly for immediate assistance</p>
                        <a href="tel:437-241-2954" className="text-blue-600 hover:underline font-medium">
                          437-241-2954
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">Send me your questions or documents</p>
                        <a
                          href="mailto:mortgagesbysumanta@gmail.com"
                          className="text-blue-600 hover:underline font-medium"
                        >
                          mortgagesbysumanta@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
                        <p className="text-gray-600 mb-2">Visit me at my Hamilton office</p>
                        <div className="text-gray-700">
                          <p>949 Garth Street</p>
                          <p>Hamilton, ON L9C 4L3</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                        <p className="text-gray-600 mb-2">I'm available when you need me</p>
                        <div className="text-gray-700 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                          <p>Saturday: 9:00 AM - 5:00 PM</p>
                          <p>Sunday: By appointment</p>
                          <p className="text-sm text-blue-600 mt-2">Evening and weekend calls welcome!</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Me</h3>
                    <p className="text-gray-600 mb-4">Follow me on social media for mortgage tips and updates</p>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://www.instagram.com/mortgages_bysumanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/MortgagesbySumanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <Facebook className="w-5 h-5" />
                        <span>Facebook</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                    Send Me a Message
                  </CardTitle>
                  <CardDescription>Fill out the form below and I'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">How can I help you? *</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Select a service</option>
                        <option>Purchase a home</option>
                        <option>Refinance my mortgage</option>
                        <option>Debt consolidation</option>
                        <option>Mortgage renewal</option>
                        <option>HELOC</option>
                        <option>General questions</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your mortgage needs, timeline, or any questions you have..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Best time to contact you</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option>Anytime</option>
                        <option>Morning (8 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 5 PM)</option>
                        <option>Evening (5 PM - 8 PM)</option>
                        <option>Weekends</option>
                      </select>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1" />
                      <label className="text-sm text-gray-600">
                        I consent to Sumanta Mahabir contacting me regarding my mortgage inquiry and agree to the
                        privacy policy.
                      </label>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Professional Information</CardTitle>
              <CardDescription className="text-center">
                Licensed mortgage professional serving Hamilton and surrounding areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Mortgage Broker</h4>
                    <p className="text-gray-600">Sumanta Mahabir</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">License Number</h4>
                    <p className="text-gray-600">M23005389</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Agent Level</h4>
                    <p className="text-gray-600">Level 1</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Brokerage</h4>
                    <p className="text-gray-600">Verico - Best Mortgage Loans</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Brokerage License</h4>
                    <p className="text-gray-600"># 12625</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Service Areas</h4>
                    <p className="text-gray-600">Hamilton, Burlington, Oakville, Milton, and surrounding GTA</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit My Office</h2>
            <p className="text-xl text-gray-600">Located in Hamilton, Ontario</p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">949 Garth Street</p>
              <p className="text-gray-600 mb-4">Hamilton, ON L9C 4L3</p>
              <Button variant="outline" asChild>
                <a
                  href="https://maps.google.com/?q=949+Garth+Street,+Hamilton,+ON+L9C+4L3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

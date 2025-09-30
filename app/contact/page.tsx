import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, MessageSquare, Linkedin, Facebook, Instagram, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tmp56zi437y-4V0CjSLFMT4rYjjZeJa5XboBXLbNXd.webp"
            alt="Beautiful suburban home with blue sky"
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
              Let's Connect
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
              Get In Touch
            </h1>
            <p className="text-xl sm:text-2xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed font-normal drop-shadow-lg text-pretty">
              Ready to discuss your mortgage needs? I'm here to help you every step of the way. Contact me today for a
              free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                className="bg-white/12 backdrop-blur-sm text-white border-2 border-white/95 hover:bg-white/20 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent text-lg px-8 py-7"
                asChild
              >
                <a href="mailto:mortgagesbysumanta@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
                Contact Details
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 tracking-tight text-balance">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-3 text-base leading-7">
                          Call me directly for immediate assistance
                        </p>
                        <a href="tel:437-241-2954" className="text-blue-600 hover:underline font-semibold text-lg">
                          437-241-2954
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-3 text-base leading-7">Send me your questions or documents</p>
                        <a
                          href="mailto:mortgagesbysumanta@gmail.com"
                          className="text-blue-600 hover:underline font-semibold text-base break-all"
                        >
                          mortgagesbysumanta@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Office Location</h3>
                        <p className="text-gray-600 mb-3 text-base leading-7">Visit me at my Hamilton office</p>
                        <div className="text-gray-700 text-base leading-7">
                          <p>949 Garth Street</p>
                          <p>Hamilton, ON L9C 4L3</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Clock className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                        <p className="text-gray-600 mb-3 text-base leading-7">I'm available when you need me</p>
                        <div className="text-gray-700 space-y-1 text-base leading-7">
                          <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                          <p>Saturday: 9:00 AM - 5:00 PM</p>
                          <p>Sunday: By appointment</p>
                          <p className="text-sm text-blue-600 mt-3 font-semibold">Evening and weekend calls welcome!</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-gray-200/80 hover:border-blue-300/60 hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Connect With Me</h3>
                    <p className="text-gray-600 mb-4 text-base leading-7">
                      Follow me on social media for mortgage tips and updates
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://www.instagram.com/mortgages_bysumanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold"
                      >
                        <Instagram className="w-5 h-5" />
                        <span>Instagram</span>
                      </a>
                      <a
                        href="https://www.facebook.com/MortgagesbySumanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold"
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
              <Card className="border-2 border-gray-200/80 shadow-xl bg-white/70 backdrop-blur-sm sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                    <MessageSquare className="w-6 h-6 mr-3 text-blue-600" />
                    Send Me a Message
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-gray-600">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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

                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">How can I help you? *</label>
                      <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base">
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
                      <label className="block text-base font-semibold text-gray-900 mb-2">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell me about your mortgage needs, timeline, or any questions you have..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-base font-semibold text-gray-900 mb-2">
                        Best time to contact you
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base">
                        <option>Anytime</option>
                        <option>Morning (8 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 5 PM)</option>
                        <option>Evening (5 PM - 8 PM)</option>
                        <option>Weekends</option>
                      </select>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <input type="checkbox" className="mt-1 w-5 h-5" />
                      <label className="text-base text-gray-700 leading-7">
                        I consent to Sumanta Mahabir contacting me regarding my mortgage inquiry and agree to the
                        privacy policy.
                      </label>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-6">
                      <MessageSquare className="w-5 h-5 mr-2" />
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
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-gray-200/80 shadow-xl bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <Badge className="mb-4 mx-auto bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold w-fit">
                Professional Details
              </Badge>
              <CardTitle className="text-center text-3xl font-bold text-gray-900">Professional Information</CardTitle>
              <CardDescription className="text-center text-base leading-7 text-gray-600">
                Licensed mortgage agent serving Hamilton and surrounding areas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Mortgage Agent</h4>
                    <p className="text-gray-600 text-base">Sumanta Mahabir</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">License Number</h4>
                    <p className="text-gray-600 text-base">M23005389</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Agent Level</h4>
                    <p className="text-gray-600 text-base">Level 1</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Brokerage</h4>
                    <p className="text-gray-600 text-base">Verico - Best Mortgage Loans</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Brokerage License</h4>
                    <p className="text-gray-600 text-base"># 12625</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Service Areas</h4>
                    <p className="text-gray-600 text-base leading-7">
                      Hamilton, Burlington, Oakville, Milton, and surrounding GTA
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-1.5 text-sm font-semibold">
              Office Location
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Visit My Office
            </h2>
            <p className="text-xl leading-8 text-gray-600 text-pretty">Located in Hamilton, Ontario</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-96 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.8!2d-79.8447!3d43.2501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b8e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2s949%20Garth%20St%2C%20Hamilton%2C%20ON%20L9C%204L3!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location - 949 Garth Street, Hamilton, ON"
            ></iframe>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-lg px-8 py-7"
              asChild
            >
              <a
                href="https://maps.google.com/?q=949+Garth+Street,+Hamilton,+ON+L9C+4L3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

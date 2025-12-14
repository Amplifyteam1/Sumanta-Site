import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, Calendar, CheckCircle } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Contact | Book Free Mortgage Consultation Hamilton",
  description:
    "Contact Sumanta Mahabir for a free mortgage consultation in Hamilton, Ontario. Call 437-241-2954 or book online. Available Mon-Sat for all your mortgage needs.",
  keywords: [
    "contact mortgage agent Hamilton",
    "free mortgage consultation",
    "book mortgage appointment",
    "Hamilton mortgage broker contact",
    "mortgage help Ontario",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact Sumanta Mahabir | Free Mortgage Consultation",
    description:
      "Book your free mortgage consultation today. Available Mon-Sat in Hamilton, Ontario. Call 437-241-2954 or schedule online.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="absolute inset-0 bg-[url('/images/hero-contact-office-meeting.jpg')] bg-cover bg-center opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left space-y-6">
              <Badge className="bg-blue-500/20 text-blue-200 border border-blue-400/40 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2 inline" />
                Book Your Free Consultation
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight text-balance">
                Let's Discuss Your{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Mortgage Goals
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-blue-100 max-w-xl leading-relaxed">
                Schedule a free, no-obligation consultation. I'll help you understand your options and find the best
                mortgage solution for your needs.
              </p>

              {/* Quick Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {["Free consultation", "No obligation", "Personalized advice", "Flexible scheduling"].map(
                  (benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-blue-100">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{benefit}</span>
                    </div>
                  ),
                )}
              </div>

              {/* Quick Contact Options */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl transition-all duration-300"
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
                  className="bg-transparent text-white border-2 border-white/80 hover:bg-white/10 font-semibold transition-all duration-300"
                  asChild
                >
                  <a href="mailto:mortgagesbysumanta@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Email Me
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column - Calendly Embed */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/mortgagesbysumanta"
                style={{ minWidth: "320px", height: "650px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Script */}
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-0 px-4 py-1.5 text-sm font-semibold">
              Get In Touch
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight text-balance">
              Other Ways to Reach Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Prefer to connect a different way? I'm available through multiple channels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <Card className="group border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Phone</h3>
                <a href="tel:437-241-2954" className="text-blue-600 hover:underline font-semibold">
                  437-241-2954
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:mortgagesbysumanta@gmail.com"
                  className="text-blue-600 hover:underline font-semibold text-sm break-all"
                >
                  mortgagesbysumanta@gmail.com
                </a>
              </CardContent>
            </Card>

            {/* Office */}
            <Card className="group border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Office</h3>
                <p className="text-gray-600 text-sm">
                  949 Garth Street
                  <br />
                  Hamilton, ON L9C 4L3
                </p>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="group border-2 border-gray-200 hover:border-orange-300 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon-Fri: 8AM-8PM
                  <br />
                  Sat: 9AM-5PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4 font-medium">Connect on Social Media</p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mortgages_bysumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/MortgagesbySumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Professional Information</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <p className="text-blue-200 text-sm mb-1">Mortgage Agent</p>
              <p className="font-semibold text-lg">Sumanta Mahabir</p>
              <p className="text-blue-300 text-sm">License: M23005389</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">Brokerage</p>
              <p className="font-semibold text-lg">Verico - Best Mortgage Loans</p>
              <p className="text-blue-300 text-sm">Brokerage #12625</p>
            </div>
            <div>
              <p className="text-blue-200 text-sm mb-1">Service Areas</p>
              <p className="font-semibold text-lg">Hamilton & GTA</p>
              <p className="text-blue-300 text-sm">Burlington, Oakville, Milton</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Office Location</h2>
            <p className="text-gray-600">949 Garth Street, Hamilton, ON L9C 4L3</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.8!2d-79.8447!3d43.2501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b8e8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2s949%20Garth%20St%2C%20Hamilton%2C%20ON%20L9C%204L3!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location - 949 Garth Street, Hamilton, ON"
            />
          </div>
          <div className="text-center mt-6">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold" asChild>
              <a
                href="https://maps.google.com/?q=949+Garth+Street,+Hamilton,+ON+L9C+4L3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

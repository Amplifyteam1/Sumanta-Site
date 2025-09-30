"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, User, Briefcase, BookOpen, Star, Mail, Send, Shield } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
          {/* Logo */}
          <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center">
            <Image
              src="/images/sumanta-logo-simple.png"
              alt="Sumanta Mahabir"
              width={280}
              height={280}
              className="h-16 sm:h-20 lg:h-32 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors"
            >
              Services
            </Link>
            <Link
              href="/resources"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors"
            >
              Resources
            </Link>
            <a
              href="https://www.mortgageweb.ca/en-CA/18665/Apply"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors"
            >
              Apply Now
            </a>
            <Link
              href="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-gray-700 hover:text-blue-600 font-bold text-xl transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:437-241-2954"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-xl transition-colors"
            >
              <Phone className="w-6 h-6" />
              437-241-2954
            </a>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-md font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/60 transition-all duration-300 hover:scale-[1.03] focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-blue-400/30"
            >
              <a href="https://www.mortgageweb.ca/en-CA/18665/Apply" target="_blank" rel="noopener noreferrer">
                Get Pre-Approved
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7 text-gray-700" /> : <Menu className="w-7 h-7 text-gray-700" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-0 left-0 w-full h-full bg-white z-50 overflow-y-auto">
            {/* Header with logo and close button */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <Image
                src="/images/sumanta-logo-simple.png"
                alt="Sumanta Mahabir"
                width={200}
                height={200}
                className="h-14 w-auto"
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
              >
                <X className="w-7 h-7 text-gray-700" />
              </button>
            </div>

            {/* Profile Section */}
            <div className="px-6 py-8 border-b bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/The%20Photo%20Depot.jpg-xQVs18eqCW5geNqwdCUjCxttDdPAOY.jpeg"
                    alt="Sumanta Mahabir"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Sumanta Mahabir</h2>
                  <p className="text-gray-600 text-sm">Licensed Mortgage Agent</p>
                  <p className="text-gray-500 text-xs">License #M23005389</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm text-gray-600 font-medium">5-Star Service</span>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="px-6 py-6">
              <div className="space-y-1">
                <Link
                  href="/about"
                  onClick={handleNavClick}
                  className="flex items-center gap-4 px-4 py-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <User className="w-6 h-6 text-gray-500 group-hover:text-blue-600" />
                  <span className="text-lg font-medium">About</span>
                </Link>

                <Link
                  href="/services"
                  onClick={handleNavClick}
                  className="flex items-center gap-4 px-4 py-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <Briefcase className="w-6 h-6 text-gray-500 group-hover:text-blue-600" />
                  <span className="text-lg font-medium">Mortgage Services</span>
                </Link>

                <Link
                  href="/resources"
                  onClick={handleNavClick}
                  className="flex items-center gap-4 px-4 py-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <BookOpen className="w-6 h-6 text-gray-500 group-hover:text-blue-600" />
                  <span className="text-lg font-medium">Resources</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="flex items-center gap-4 px-4 py-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <Mail className="w-6 h-6 text-gray-500 group-hover:text-blue-600" />
                  <span className="text-lg font-medium">Contact</span>
                </Link>

                <a
                  href="https://www.mortgageweb.ca/en-CA/18665/Apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-4 py-4 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors group"
                >
                  <Send className="w-6 h-6 text-gray-500 group-hover:text-blue-600" />
                  <span className="text-lg font-medium">Apply Now</span>
                </a>
              </div>
            </nav>

            {/* Social Media Icons */}
            <div className="px-6 py-6 border-t">
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.facebook.com/sumanta.mahabir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Image src="/images/logo-facebook.webp" alt="Facebook" width={40} height={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                >
                  <Image src="/images/logo-linkedin.webp" alt="LinkedIn" width={40} height={40} />
                </a>
                <a
                  href="https://www.instagram.com/mortgagesbysumanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Image src="/images/logo-instagram-new.webp" alt="Instagram" width={40} height={40} />
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="px-6 py-6 space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white font-bold text-lg py-6 shadow-xl shadow-blue-500/30 hover:shadow-blue-600/40 transition-all duration-300"
              >
                <a href="https://www.mortgageweb.ca/en-CA/18665/Apply" target="_blank" rel="noopener noreferrer">
                  Get Pre-Approved
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full border-2 border-gray-300 text-gray-700 font-bold text-lg py-6 hover:bg-gray-50 bg-transparent"
              >
                <a href="tel:437-241-2954">
                  <Phone className="w-5 h-5 mr-2" />
                  Call/Text Sumanta
                </a>
              </Button>
            </div>

            {/* Footer */}
            <div className="px-6 py-6 border-t bg-gray-50 text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>SSL Secure • 256-bit Encryption</span>
              </div>
              <p className="text-xs text-gray-500">© 2025 Sumanta Mahabir Mortgage Services</p>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

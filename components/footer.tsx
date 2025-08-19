import Link from "next/link"
import { Home, Phone, Mail, MapPin, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">Mortgages by Sumanta</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted mortgage broker in Hamilton, Ontario. Licensed professional helping families achieve their
              homeownership dreams.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/mortgages_bysumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/MortgagesbySumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/application" className="hover:text-white">
                  Apply Now
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home Purchases</li>
              <li>Refinancing</li>
              <li>Debt Consolidation</li>
              <li>Mortgage Renewals</li>
              <li>HELOCs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Sumanta Mahabir</p>
              <p>License: M23005389</p>
              <p>Level 1 Agent</p>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>437-241-2954</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>mortgagesbysumanta@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2 mt-2">
                <MapPin className="w-4 h-4 mt-1" />
                <div>
                  <p>Verico - Best Mortgage Loans</p>
                  <p>License # 12625</p>
                  <p>949 Garth Street</p>
                  <p>Hamilton, ON L9C 4L3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Mortgages by Sumanta. All rights reserved. Licensed mortgage broker.</p>
        </div>
      </div>
    </footer>
  )
}

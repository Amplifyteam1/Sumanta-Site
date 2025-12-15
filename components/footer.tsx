import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-8 sm:py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="mb-4 flex justify-center sm:justify-start">
              <Image
                src="/images/sumanta-logo-simple.png"
                alt="Sumanta Mahabir - Mortgages With Heart & Expertise"
                width={280}
                height={280}
                className="h-20 sm:h-32 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Your trusted mortgage agent in Hamilton, Ontario. Licensed professional helping families achieve their
              homeownership dreams.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Image
                  src="/images/logo-linkedin.webp"
                  alt="LinkedIn"
                  width={36}
                  height={36}
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a
                href="https://www.instagram.com/mortgages_bysumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Image
                  src="/images/logo-instagram-new.webp"
                  alt="Instagram"
                  width={36}
                  height={36}
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
              <a
                href="https://www.facebook.com/MortgagesbySumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Facebook Page"
              >
                <Image
                  src="/images/logo-facebook.webp"
                  alt="Facebook"
                  width={36}
                  height={36}
                  className="w-7 h-7 sm:w-9 sm:h-9"
                />
              </a>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <a
                  href="https://www.mortgageweb.ca/en-CA/18665/Apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Apply Now
                </a>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <li>Home Purchases</li>
              <li>Refinancing</li>
              <li>Debt Consolidation</li>
              <li>Mortgage Renewals</li>
              <li>HELOCs</li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact Info</h4>
            <div className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
              <p>Sumanta Mahabir</p>
              <p>License: M23005389</p>
              <p>Level 1 Agent</p>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <a href="tel:437-241-2954" className="hover:text-primary">
                  437-241-2954
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <a
                  href="mailto:mortgagesbysumanta@gmail.com"
                  className="hover:text-primary break-all sm:break-normal text-xs sm:text-sm"
                >
                  mortgagesbysumanta@gmail.com
                </a>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-2 mt-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p>Verico - Best Mortgage Loans</p>
                  <p>License # 12625</p>
                  <p>949 Garth Street</p>
                  <p>Hamilton, ON L9C 4L3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-muted-foreground text-xs sm:text-sm">
          <p>&copy; 2025 Mortgages by Sumanta. All rights reserved. Licensed mortgage agent.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

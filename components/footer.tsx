import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/sumanta-logo-simple.png"
                alt="Sumanta Mahabir - Mortgages With Heart & Expertise"
                width={280}
                height={280}
                className="h-32 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4">
              Your trusted mortgage agent in Hamilton, Ontario. Licensed professional helping families achieve their
              homeownership dreams.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Image src="/images/logo-linkedin.webp" alt="LinkedIn" width={36} height={36} className="w-9 h-9" />
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
                  className="w-9 h-9"
                />
              </a>
              <a
                href="https://www.facebook.com/MortgagesbySumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Facebook Page"
              >
                <Image src="/images/logo-facebook.webp" alt="Facebook" width={36} height={36} className="w-9 h-9" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
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
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Home Purchases</li>
              <li>Refinancing</li>
              <li>Debt Consolidation</li>
              <li>Mortgage Renewals</li>
              <li>HELOCs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-muted-foreground">
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
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Mortgages by Sumanta. All rights reserved. Licensed mortgage agent.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

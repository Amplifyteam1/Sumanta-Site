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
              <a
                href="https://wa.me/14372412954"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
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
                <Link href="/mortgage-solutions" className="hover:text-primary">
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
              <li>
                <Link href="/mortgage-solutions/first-time-buyers" className="hover:text-primary">
                  Home Purchases
                </Link>
              </li>
              <li>
                <Link href="/mortgage-solutions/refinances" className="hover:text-primary">
                  Refinancing
                </Link>
              </li>
              <li>
                <Link href="/mortgage-solutions/debt-consolidation" className="hover:text-primary">
                  Debt Consolidation
                </Link>
              </li>
              <li>
                <Link href="/mortgage-solutions/refinances" className="hover:text-primary">
                  Mortgage Renewals
                </Link>
              </li>
              <li>
                <Link href="/mortgage-solutions/second-mortgages" className="hover:text-primary">
                  HELOCs
                </Link>
              </li>
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
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <a
            href="https://www.amplifyleads.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-300"
          >
            <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
            </svg>
            <span className="text-slate-300 text-sm">
              Website designed, maintained, and hosted by{" "}
              <span className="text-cyan-400 font-medium">AmplifyLeads</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

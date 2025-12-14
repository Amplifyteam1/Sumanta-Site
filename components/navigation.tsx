"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import { mortgageSolutions, resourcesMenu } from "@/lib/site"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Updated to light blue background */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            {/* Social Icons - Updated text colors for light blue bg */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/sumanta.mahabir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mortgagesbysumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            {/* Center Text - Updated colors for light blue bg */}
            <div className="hidden sm:flex items-center text-blue-700">
              <span>Serving Ontario</span>
              <span className="mx-2">•</span>
              <span className="text-blue-900 font-medium">Licensed Mortgage Agent</span>
              <span className="mx-2">•</span>
              <span>Fast Pre-Approvals</span>
            </div>

            {/* Phone & Email - Updated colors for light blue bg */}
            <div className="flex items-center gap-4">
              <a
                href="tel:437-241-2954"
                className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">437-241-2954</span>
              </a>
              <a
                href="mailto:sumanta@dominionlending.ca"
                className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span className="hidden md:inline">sumanta@dominionlending.ca</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Updated to semantic tokens */}
      <div className="bg-background shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center"
            >
              <Image
                src="/images/copy-20of-20untitled-20design-20-287-29.png"
                alt="Sumanta Mahabir Mortgages"
                width={200}
                height={60}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Updated to semantic tokens */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link
                href="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                About
              </Link>

              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-foreground hover:text-primary text-sm font-medium transition-colors"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Mortgage Solutions
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-popover rounded-md shadow-lg border border-border py-2 transition-all duration-200 ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/mortgage-solutions"
                    onClick={handleNavClick}
                    className="block px-4 py-2 text-sm font-medium text-primary hover:bg-accent hover:text-accent-foreground border-b border-border mb-1"
                  >
                    All Mortgage Solutions
                  </Link>
                  {mortgageSolutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {solution.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-foreground hover:text-primary text-sm font-medium transition-colors"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div
                  className={`absolute top-full left-0 mt-1 w-48 bg-popover rounded-md shadow-lg border border-border py-2 transition-all duration-200 ${resourcesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  {resourcesMenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Side - Phone & CTA - Updated to semantic tokens */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:437-241-2954"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-md text-foreground hover:border-primary hover:text-primary text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4" />
                437-241-2954
              </a>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <a href="https://www.mortgageweb.ca/en-CA/18665/Apply" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button - Updated to semantic tokens */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Updated to semantic tokens */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-0 bg-background z-50 overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <Image
              src="/images/copy-20of-20untitled-20design-20-287-29.png"
              alt="Sumanta Mahabir Mortgages"
              width={160}
              height={48}
              className="h-10 w-auto"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="px-4 py-4">
            <div className="space-y-1">
              <Link
                href="/"
                onClick={handleNavClick}
                className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={handleNavClick}
                className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md text-base font-medium"
              >
                About
              </Link>

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md text-base font-medium"
                >
                  Mortgage Solutions
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    <Link
                      href="/mortgage-solutions"
                      onClick={handleNavClick}
                      className="block px-4 py-2 text-primary hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium"
                    >
                      All Mortgage Solutions
                    </Link>
                    {mortgageSolutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={handleNavClick}
                        className="block px-4 py-2 text-foreground/80 hover:bg-accent hover:text-accent-foreground rounded-md text-sm"
                      >
                        {solution.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md text-base font-medium"
                >
                  Resources
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleNavClick}
                        className="block px-4 py-2 text-foreground/80 hover:bg-accent hover:text-accent-foreground rounded-md text-sm"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={handleNavClick}
                className="block px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="px-4 py-4 space-y-3 border-t border-border">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-md text-base font-medium"
            >
              <a href="https://www.mortgageweb.ca/en-CA/18665/Apply" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-border text-foreground py-3 rounded-md text-base font-medium bg-transparent"
            >
              <a href="tel:437-241-2954">
                <Phone className="w-4 h-4 mr-2" />
                Call 437-241-2954
              </a>
            </Button>
          </div>

          {/* Mobile Social Icons */}
          <div className="px-4 py-4 border-t border-border">
            <div className="flex justify-center gap-6">
              <a
                href="https://www.facebook.com/sumanta.mahabir"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sumanta-mahabir-385b104b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/mortgagesbysumanta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export { Navigation }

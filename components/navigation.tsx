"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Home,
  User,
  Building2,
  BookOpen,
  MessageSquare,
  FileText,
  DollarSign,
  RefreshCw,
  PiggyBank,
  Clock,
  Landmark,
  Briefcase,
  TrendingUp,
  MapPin,
  GraduationCap,
  Calculator,
  X,
} from "lucide-react"
import { mortgageSolutions, resourcesMenu } from "@/lib/site"

// Icon mapping for mortgage solutions
const solutionIcons: Record<string, React.ReactNode> = {
  "First-Time Buyers": <Home className="w-4 h-4" />,
  Refinances: <RefreshCw className="w-4 h-4" />,
  "Debt Consolidation": <PiggyBank className="w-4 h-4" />,
  "Reverse Mortgages": <Clock className="w-4 h-4" />,
  "Second Mortgages": <Landmark className="w-4 h-4" />,
  "Self-Employed": <Briefcase className="w-4 h-4" />,
  "Investment Properties": <TrendingUp className="w-4 h-4" />,
}

// Icon mapping for resources
const resourceIcons: Record<string, React.ReactNode> = {
  "Mortgage Calculator": <Calculator className="w-4 h-4" />,
  "First-Time Buyer Guide": <GraduationCap className="w-4 h-4" />,
  "Mortgage Glossary": <BookOpen className="w-4 h-4" />,
  "Ontario Cities": <MapPin className="w-4 h-4" />,
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            {/* Social Icons */}
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
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-4.354 2.617-6.78 6.979-6.98 1.281-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/14372412954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white/70 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>

            {/* Center Text */}
            <div className="hidden sm:flex items-center text-blue-700">
              <span>Serving Ontario</span>
              <span className="mx-2">•</span>
              <span className="text-blue-900 font-medium">Licensed Mortgage Agent</span>
              <span className="mx-2">•</span>
              <span>Fast Pre-Approvals</span>
            </div>

            {/* Phone & Email */}
            <div className="flex items-center gap-4">
              <a
                href="tel:437-241-2954"
                className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span className="hidden sm:inline">437-241-2954</span>
              </a>
              <a
                href="mailto:mortgagesbysumanta@gmail.com"
                className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors"
              >
                <Mail className="w-3 h-3" />
                <span className="hidden md:inline">mortgagesbysumanta@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
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

            {/* Desktop Navigation */}
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

            {/* Right Side - Phone & CTA */}
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

            <button
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center">
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transform transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white rounded-full transform transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Slide-in menu panel - 75% width from right */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-[78%] max-w-sm z-50 shadow-2xl transform transition-transform duration-300 ease-out overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.1),transparent_50%)]" />

        {/* Content container */}
        <div className="relative h-full flex flex-col">
          {/* Menu Header with Logo */}
          <div className="px-5 pt-5 pb-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" onClick={handleNavClick}>
                <Image
                  src="/images/copy-20of-20untitled-20design-20-287-29.png"
                  alt="Sumanta Mahabir Mortgages"
                  width={160}
                  height={48}
                  className="h-10 w-auto brightness-0 invert"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/sumanta.mahabir"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 text-white/70 hover:text-white transition-all duration-200"
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
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600 text-white/70 hover:text-white transition-all duration-200"
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
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 text-white/70 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-4.354 2.617-6.78 6.979-6.98 1.281-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/14372412954"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-green-500 text-white/70 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Scrollable menu content */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-4">
              <div className="space-y-1">
                {/* Home */}
                <Link
                  href="/"
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl text-[15px] font-medium transition-all duration-200 group"
                >
                  <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25">
                    <Home className="w-4 h-4" />
                  </span>
                  <span className="flex-1">Home</span>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                </Link>

                {/* About */}
                <Link
                  href="/about"
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl text-[15px] font-medium transition-all duration-200 group"
                >
                  <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25">
                    <User className="w-4 h-4" />
                  </span>
                  <span className="flex-1">About</span>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                </Link>

                {/* Mortgage Solutions Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center gap-3 w-full px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl text-[15px] font-medium transition-all duration-200 group"
                  >
                    <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg shadow-violet-500/25">
                      <Building2 className="w-4 h-4" />
                    </span>
                    <span className="flex-1 text-left">Mortgage Solutions</span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 text-blue-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="mt-2 ml-[52px] pl-3 border-l-2 border-blue-500/30 space-y-1">
                      <Link
                        href="/mortgage-solutions"
                        onClick={handleNavClick}
                        className="flex items-center gap-2 px-3 py-2.5 text-blue-400 hover:text-blue-300 hover:bg-white/5 rounded-lg text-sm font-semibold transition-colors"
                      >
                        <DollarSign className="w-4 h-4 flex-shrink-0" />
                        <span>All Solutions</span>
                      </Link>
                      {mortgageSolutions.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          onClick={handleNavClick}
                          className="flex items-center gap-2 px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors"
                        >
                          <span className="flex-shrink-0">
                            {solutionIcons[solution.title] || <FileText className="w-4 h-4" />}
                          </span>
                          <span>{solution.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Resources Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex items-center gap-3 w-full px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl text-[15px] font-medium transition-all duration-200 group"
                  >
                    <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/25">
                      <BookOpen className="w-4 h-4" />
                    </span>
                    <span className="flex-1 text-left">Resources</span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 text-blue-400 transition-transform duration-300 ${mobileResourcesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileResourcesOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="mt-2 ml-[52px] pl-3 border-l-2 border-blue-500/30 space-y-1">
                      {resourcesMenu.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleNavClick}
                          className="flex items-center gap-2 px-3 py-2.5 text-white/60 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors"
                        >
                          <span className="flex-shrink-0">
                            {resourceIcons[item.title] || <FileText className="w-4 h-4" />}
                          </span>
                          <span>{item.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={handleNavClick}
                  className="flex items-center gap-3 px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/10 rounded-xl text-[15px] font-medium transition-all duration-200 group"
                >
                  <span className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-500/25">
                    <MessageSquare className="w-4 h-4" />
                  </span>
                  <span className="flex-1">Contact</span>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-400" />
                </Link>
              </div>
            </nav>

            {/* Quick Contact Info */}
            <div className="mt-6 mx-4 p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">Quick Contact</p>
              <a
                href="tel:437-241-2954"
                className="flex items-center justify-center gap-3 text-white/80 hover:text-white text-sm mb-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                437-241-2954
              </a>
              <a
                href="mailto:mortgagesbysumanta@gmail.com"
                className="flex items-center justify-center gap-3 text-white/80 hover:text-white text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                mortgagesbysumanta@gmail.com
              </a>
            </div>
          </div>

          {/* Fixed bottom CTA section */}
          <div className="p-4 border-t border-white/10 bg-slate-900/80 backdrop-blur-sm">
            <div className="space-y-2">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/30"
              >
                <a href="https://www.mortgageweb.ca/en-CA/18665/Apply" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
              <a
                href="tel:437-241-2954"
                className="flex items-center justify-center gap-2 w-full py-3 border border-white/20 text-white rounded-xl text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Navigation }

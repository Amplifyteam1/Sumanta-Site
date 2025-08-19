"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/sumanta-new-logo.png"
              alt="Sumanta Mahabir - Mortgages With Heart & Expertise"
              width={200}
              height={80}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
              Services
            </Link>
            <Link href="/application" className="text-gray-700 hover:text-blue-600 font-medium">
              Apply Now
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-blue-600 font-medium">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:437-241-2954" className="flex items-center text-blue-600 hover:text-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              437-241-2954
            </a>
            <Button asChild>
              <Link href="/application">Get Pre-Approved</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">
                Services
              </Link>
              <Link href="/application" className="text-gray-700 hover:text-blue-600 font-medium">
                Apply Now
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-blue-600 font-medium">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              <div className="pt-4 border-t">
                <a href="tel:437-241-2954" className="flex items-center text-blue-600 hover:text-blue-700 mb-4">
                  <Phone className="w-4 h-4 mr-2" />
                  437-241-2954
                </a>
                <Button asChild className="w-full">
                  <Link href="/application">Get Pre-Approved</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

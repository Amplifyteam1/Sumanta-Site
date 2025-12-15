"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Calendar, Facebook, Instagram, Linkedin } from "lucide-react"

export function WhatsAppWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = "14372412954"
  const message = "Hi Sumanta, I'd like to learn more about mortgage options."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  const calendlyUrl = "https://calendly.com/mortgagesbysumanta"

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Expanded Menu Panel */}
      {isExpanded && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsExpanded(false)} />

          {/* Menu Panel */}
          <div className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300 border border-gray-100">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">Get In Touch</p>
                    <p className="text-xs text-blue-100">Available 7 days a week</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Contact Options */}
            <div className="p-3 space-y-2">
              {/* Book Calendly */}
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-100 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">Book a Consultation</p>
                  <p className="text-xs text-gray-500">Schedule on Calendly</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100/50 hover:from-green-100 hover:to-green-100 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">WhatsApp Chat</p>
                  <p className="text-xs text-gray-500">Instant messaging</p>
                </div>
              </a>

              {/* Call Now */}
              <a
                href="tel:+14372412954"
                className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100/50 hover:from-amber-100 hover:to-amber-100 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">Call Now</p>
                  <p className="text-xs text-gray-500">(437) 241-2954</p>
                </div>
              </a>
            </div>

            {/* Social Media Divider */}
            <div className="px-4">
              <div className="border-t border-gray-100" />
            </div>

            {/* Social Media Icons */}
            <div className="p-4 pt-3">
              <p className="text-xs text-gray-400 text-center mb-3">Follow Me</p>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/sumanta.mahabir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.instagram.com/mortgagesbysumanta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 flex items-center justify-center transition-all duration-200 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumanta-mahabir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-700 flex items-center justify-center transition-all duration-200 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative flex items-center gap-2 rounded-full shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isExpanded
            ? "bg-gray-800 hover:bg-gray-700 px-4 py-3"
            : "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 px-4 py-3 shadow-blue-500/40"
        }`}
        aria-label={isExpanded ? "Close contact menu" : "Open contact menu"}
      >
        {isExpanded ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <>
            <div className="relative">
              <Phone className="w-5 h-5 text-white" />
              {/* Pulse dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-white"></span>
              </span>
            </div>
            <span className="text-white font-medium text-sm">Live Assistance</span>
          </>
        )}
      </button>
    </div>
  )
}

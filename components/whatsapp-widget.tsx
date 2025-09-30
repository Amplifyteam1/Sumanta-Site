"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = "14372412954" // Format: country code + number without spaces
  const message = "Hi Sumanta, I'd like to learn more about mortgage options."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded tooltip */}
      {isExpanded && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Sumanta Mahabir</p>
                <p className="text-xs text-gray-500">Mortgage Agent</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close WhatsApp widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Hi there! 👋 Need help with your mortgage? Chat with me on WhatsApp for instant assistance.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-center py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/60 transition-all duration-300 hover:scale-[1.05] focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-blue-400/30 flex items-center gap-3 px-5 py-4"
        aria-label="Open WhatsApp live assistance"
      >
        <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-semibold text-sm whitespace-nowrap">Live Assistance</span>

        {/* Pulse animation */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </button>
    </div>
  )
}

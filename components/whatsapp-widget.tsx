"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const phoneNumber = "14372412954"
  const message = "Hi Sumanta, I'd like to learn more about mortgage options."

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded tooltip */}
      {isExpanded && (
        <div className="bg-card rounded-2xl shadow-2xl p-4 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Sumanta Mahabir</p>
                <p className="text-xs text-muted-foreground">Mortgage Agent</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close WhatsApp widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Hi there! 👋 Need help with your mortgage? Chat with me on WhatsApp for instant assistance.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-success hover:bg-success-hover text-success-foreground text-center py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
          >
            Start Chat on WhatsApp
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="group relative bg-primary hover:bg-primary-hover text-primary-foreground rounded-full shadow-2xl shadow-primary/50 hover:shadow-primary-hover/60 transition-all duration-300 hover:scale-[1.05] focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-primary/30 flex items-center gap-3 px-5 py-4"
        aria-label="Open WhatsApp live assistance"
      >
        <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="font-semibold text-sm whitespace-nowrap">Live Assistance</span>

        {/* Pulse animation - using success color for online indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
        </span>
      </button>
    </div>
  )
}

"use client"

import { useEffect } from "react"

interface CalendlyWidgetProps {
  heading?: string
  subheading?: string
}

export function CalendlyWidget({
  heading = "Schedule Your Free Consultation",
  subheading = "Book a time that works for you and let's discuss your mortgage needs.",
}: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-balance">{heading}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mortgagesbysumanta"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </section>
  )
}

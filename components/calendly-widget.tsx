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
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section
      id="calendly-widget"
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">{subheading}</p>
        </div>
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-gray-200 overflow-hidden">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/mortgagesbysumanta"
            style={{ minWidth: "280px", height: "600px" }}
          />
        </div>
      </div>
    </section>
  )
}

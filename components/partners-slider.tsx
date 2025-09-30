"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const partners = [
  { name: "Manulife", logo: "/images/partners/manulife.png" },
  { name: "TD Canada Trust", logo: "/images/partners/td-canada-trust.png" },
  { name: "ICICI Bank", logo: "/images/partners/icici-bank.png" },
  { name: "Scotiabank", logo: "/images/partners/scotiabank.png" },
  { name: "Equitable Bank", logo: "/images/partners/equitable-bank.png" },
  { name: "CMLS Financial", logo: "/images/partners/cmls-financial.png" },
  { name: "HomeTrust Bank", logo: "/images/partners/hometrust-bank.png" },
]

export default function PartnersSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId: number
    let position = 0

    const animate = () => {
      position -= 1.0

      if (Math.abs(position) >= slider.scrollWidth / 2) {
        position = 0
      }

      slider.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4 text-balance">
            Our Partners
          </h2>
          <p className="text-xl leading-8 text-gray-600 max-w-3xl mx-auto text-pretty">
            Sumanta partners with leading Canadian banks, credit unions, and finance companies to provide premier
            mortgage, insurance, and investment solutions.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Slider */}
          <div className="overflow-hidden">
            <div ref={sliderRef} className="flex items-center gap-20 whitespace-nowrap">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-64 h-32 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={256}
                    height={128}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-64 h-32 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={256}
                    height={128}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

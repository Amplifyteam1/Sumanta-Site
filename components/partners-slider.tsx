"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Building2, Shield, Award, Users } from "lucide-react"

const partners = [
  { name: "Manulife", logo: "/images/partners/manulife.png" },
  { name: "TD Canada Trust", logo: "/images/partners/td-canada-trust.png" },
  { name: "ICICI Bank", logo: "/images/partners/icici-bank.png" },
  { name: "Scotiabank", logo: "/images/partners/scotiabank.png" },
  { name: "Equitable Bank", logo: "/images/partners/equitable-bank.png" },
  { name: "CMLS Financial", logo: "/images/partners/cmls-financial.png" },
  { name: "HomeTrust Bank", logo: "/images/partners/hometrust-bank.png" },
]

const stats = [
  { icon: Building2, value: "50+", label: "Lending Partners", color: "from-blue-500 to-blue-600" },
  { icon: Shield, value: "Best", label: "Rate Guarantee", color: "from-emerald-500 to-emerald-600" },
  { icon: Award, value: "24/7", label: "Support Available", color: "from-amber-500 to-amber-600" },
  { icon: Users, value: "100%", label: "Client Focused", color: "from-rose-500 to-rose-600" },
]

export default function PartnersSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    let animationId: number
    let position = 0

    const speed = 0.3

    const animate = () => {
      if (!isPaused) {
        position -= speed

        if (Math.abs(position) >= slider.scrollWidth / 2) {
          position = 0
        }

        slider.style.transform = `translateX(${position}px)`
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isPaused])

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%)]" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>Trusted Network</span>
          </div>
          <p className="text-sm sm:text-base text-blue-600 font-semibold uppercase tracking-wider mb-2">
            Partnered with Canada's Leading Lenders
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 text-balance">
            Access to 50+ Banks & Credit Unions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Our extensive network of lenders ensures you get the best rates and terms for your unique situation.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div
                className={`inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${stat.color} mb-2 sm:mb-3`}
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          {/* Slider track */}
          <div className="overflow-hidden py-4">
            <div ref={sliderRef} className="flex items-center gap-6 sm:gap-8 lg:gap-10 whitespace-nowrap">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 group">
                  <div className="w-44 sm:w-56 lg:w-64 h-24 sm:h-32 lg:h-36 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center p-5 sm:p-6 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 group-hover:scale-105">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={220}
                      height={110}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 group">
                  <div className="w-44 sm:w-56 lg:w-64 h-24 sm:h-32 lg:h-36 bg-white rounded-xl border border-gray-100 shadow-sm flex items-center justify-center p-5 sm:p-6 transition-all duration-300 group-hover:shadow-md group-hover:border-blue-200 group-hover:scale-105">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={220}
                      height={110}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            Hover over logos to pause • We compare rates from all major Canadian lenders
          </p>
        </div>
      </div>
    </section>
  )
}

import { siteConfig, mortgageSolutions, ontarioCitiesMenu } from "@/lib/site"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/application`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mortgage-solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  // Mortgage solution pages
  const mortgagePages = mortgageSolutions.map((solution) => ({
    url: `${baseUrl}${solution.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const cityPages = ontarioCitiesMenu.map((city) => ({
    url: `${baseUrl}${city.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }))

  const guidePages = [
    {
      url: `${baseUrl}/resources/guides/first-time-buyer-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/resources/guides/mortgage-glossary`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    },
  ]

  return [...staticPages, ...mortgagePages, ...cityPages, ...guidePages]
}

import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import ResourcesClient from "./ResourcesClient"

export const metadata: Metadata = {
  title: "Mortgage Resources | Calculators, Guides & Tips",
  description:
    "Free mortgage resources including payment calculators, first-time buyer guides, refinancing tips, and debt consolidation information. Learn about mortgages in Ontario.",
  keywords: [
    "mortgage calculator Ontario",
    "first time buyer guide",
    "mortgage resources",
    "home buying tips",
    "refinancing guide",
    "debt consolidation tips",
    "mortgage education",
  ],
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
  openGraph: {
    title: "Mortgage Resources & Guides | Hamilton, Ontario",
    description:
      "Free mortgage calculators, buyer guides, and educational resources to help you make informed decisions.",
    url: `${siteConfig.url}/resources`,
    type: "website",
  },
}

export default function ResourcesPage() {
  return <ResourcesClient />
}

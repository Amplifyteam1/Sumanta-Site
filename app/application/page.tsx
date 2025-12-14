import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import ClientApplicationPage from "./ClientApplicationPage"

export const metadata: Metadata = {
  title: "Apply for Mortgage | Online Application Hamilton",
  description:
    "Start your mortgage application online. Fast pre-approval process for home purchases, refinancing, and more. Licensed mortgage agent in Hamilton, Ontario.",
  keywords: [
    "mortgage application online",
    "apply for mortgage Ontario",
    "mortgage pre-approval Hamilton",
    "online mortgage application",
    "fast mortgage approval",
  ],
  alternates: {
    canonical: `${siteConfig.url}/application`,
  },
  openGraph: {
    title: "Apply for Mortgage Online | Hamilton, Ontario",
    description: "Start your mortgage application online. Fast pre-pre-approval process with access to 50+ lenders.",
    url: `${siteConfig.url}/application`,
    type: "website",
  },
}

export default function ApplicationPage() {
  return <ClientApplicationPage />
}

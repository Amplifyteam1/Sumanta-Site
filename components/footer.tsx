import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, BadgeCheck, Building2 } from "lucide-react"
import { siteConfig, mortgageSolutions } from "@/lib/site"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Mortgage Solutions", href: "/mortgage-solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  {
    label: "LinkedIn",
    href: siteConfig.socialLinks.linkedin,
    icon: "/images/logo-linkedin.webp",
  },
  {
    label: "Instagram",
    href: siteConfig.socialLinks.instagram,
    icon: "/images/logo-instagram-new.webp",
  },
  {
    label: "Facebook",
    href: siteConfig.socialLinks.facebook,
    icon: "/images/logo-facebook.webp",
  },
]

const whatsappHref = `https://wa.me/1${siteConfig.phone.replace(/\D/g, "")}`

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* Soft brand glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Extra bottom padding keeps the last row clear of the fixed chat widget */}
      <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + credentials */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link href="/" className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
              <Image
                src="/images/copy-20of-20untitled-20design-20-287-29.png"
                alt={siteConfig.name}
                width={200}
                height={60}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              {siteConfig.name} — smart, transparent mortgage financing for Hamilton, the GTA and all of Ontario. Access
              to 50+ lenders and one point of contact from first call to funding.
            </p>

            <dl className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">{siteConfig.shortName}</dt>
                  <dd className="text-slate-400">{siteConfig.agentTitle}</dd>
                  <dd className="text-slate-400">License {siteConfig.agentLicense}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" aria-hidden="true" />
                <div>
                  <dt className="font-semibold text-white">{siteConfig.brokerage}</dt>
                  <dd className="text-slate-400">Brokerage #{siteConfig.brokerageLicense}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label={`${label} profile`}
                >
                  <Image src={icon} alt="" width={36} height={36} className="h-9 w-9" />
                </a>
              ))}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 transition-all duration-200 hover:scale-110 hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="WhatsApp"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav className="lg:col-span-2" aria-labelledby="footer-quick-links">
            <h4 id="footer-quick-links" className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav className="lg:col-span-2" aria-labelledby="footer-services">
            <h4 id="footer-services" className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Solutions
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm sm:text-base">
              {mortgageSolutions.map(({ title, href }) => (
                <li key={href}>
                  <Link href={href} className="text-slate-400 transition-colors hover:text-white">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm sm:text-base">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-cyan-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-medium">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-cyan-400 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="break-all font-medium">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-cyan-400">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <address className="not-italic leading-relaxed">
                  {siteConfig.brokerage}
                  <br />
                  {siteConfig.streetAddress}
                  <br />
                  {siteConfig.cityLine}
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. {siteConfig.license}.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <a
              href="https://www.amplifyleads.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <svg className="h-3.5 w-3.5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
              </svg>
              Site by <span className="font-medium text-cyan-400">AmplifyLeads</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

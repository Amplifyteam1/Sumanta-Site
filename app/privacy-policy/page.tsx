import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, Shield, Lock, Eye, FileText, Users, Globe, Scale, Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Mortgages by Sumanta",
  description:
    "Learn how Mortgages by Sumanta and VERICO Financial Group Inc. collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/90 to-slate-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.1),transparent_50%)]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-sm text-blue-200/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Privacy Policy</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-6">
            <Shield className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-medium">Your Privacy Matters</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            VERICO Financial Group Inc. is committed to protecting your personal information
          </p>
          <p className="text-sm text-blue-200/60 mt-4">Last updated: March 16th, 2017</p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-gradient-to-b from-blue-50/50 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: FileText, label: "Scope", href: "#scope" },
              { icon: Users, label: "Collection", href: "#collection" },
              { icon: Eye, label: "Use & Disclosure", href: "#use" },
              { icon: Globe, label: "Location", href: "#location" },
              { icon: Lock, label: "Safeguards", href: "#safeguards" },
              { icon: Mail, label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-gray-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-all"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            {/* Scope */}
            <section id="scope" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Scope</h2>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <p className="text-gray-600 leading-relaxed m-0">
                  This policy applies to Verico Financial Group Inc. and its affiliates ("we", "us" or "our"), and
                  describes how we collect, use and disclose personal information.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4 mb-0">
                  This Privacy Policy applies to personal information we collect, whether through our websites, through
                  mortgage applications or inquiries submitted to us, or otherwise. The term "personal information"
                  means information about an identifiable individual, subject to more particular definitions or
                  interpretations under applicable law. Personal information generally includes the name, address, email
                  address, and financial information relating to an individual, but generally does not include business
                  contact information.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4 mb-0">
                  This Privacy Notice does not apply to personal information about employees or other temporary or
                  permanent staff, consultants or other individuals assigned to us, or to any information that is not
                  "personal information" as defined in or interpreted under applicable law.
                </p>
              </div>
            </section>

            {/* Our Commitment */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Our Commitment</h2>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <p className="text-gray-600 leading-relaxed m-0">
                  We are committed to protecting personal information and collecting, using and disclosing personal
                  information only in accordance with applicable privacy legislation.
                </p>
              </div>
            </section>

            {/* Consent */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Consent</h2>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                <p className="text-gray-600 leading-relaxed m-0">
                  We collect, use and disclose your personal information with your consent (which may be express or
                  implied) or as required or permitted by law. By providing us with your personal information (whether
                  through our websites or otherwise), you consent to our collection, use and disclosure of that personal
                  information in accordance with this policy.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4 mb-0">
                  Subject to legal and contractual requirements and upon reasonable notice, you may withdraw your
                  consent to our further collection, use and disclosure of your personal information by contacting our
                  privacy officer at the address provided below. If you refuse or withdraw consent, we may be unable to
                  provide you with certain products, services or information.
                </p>
              </div>
            </section>

            {/* Nature of Collection */}
            <section id="collection" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Nature of Collection</h2>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <p className="text-gray-600 leading-relaxed m-0">
                  We collect personal information, wherever appropriate, directly from you or from interactions with
                  you, but may where necessary collect personal information from other sources, such as the mortgage
                  brokers and agents in our network, and from consumer reporting agencies, credit bureaus, financial
                  institutions and real estate appraisers.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4 mb-0">
                  The personal information we collect may include your name, address, email address, financial
                  information, credit history and other information relevant to our provision of products and services
                  to you, or that is relevant to a mortgage application or inquiry you have submitted to us, either
                  directly or through one of the mortgage brokers or agents in our network. We limit our collection of
                  your personal information to the information that is necessary to fulfill the purposes we identify to
                  you or as otherwise required or permitted by law.
                </p>
              </div>
            </section>

            {/* Purposes for Collection */}
            <section id="use" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Our Purposes for Collection, Use and Disclosure
                </h2>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect, use and disclose your personal information so we can:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Provide products and services to you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Process mortgage applications and inquiries you submit to us</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Facilitate your relationship with mortgage brokers and agents in our network</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Understand and respond to your needs and preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Develop, market, sell or otherwise provide our products and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Establish and maintain a commercial relationship with you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Obtain credit information, if you are applying for credit or a mortgage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Process payments in connection with your purchase of our products and services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Develop, manage and improve our business and operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Protect us from error, breach of contract, negligence, fraud and illegal activity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>Comply with legal or regulatory requirements or provisions</span>
                  </li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4 mb-0">
                  If we need your personal information for any other purpose, we will identify that purpose and obtain
                  your consent if required by law.
                </p>
              </div>
            </section>

            {/* Disclosure of Personal Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Disclosure of Personal Information</h2>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100 space-y-4">
                <p className="text-gray-600 leading-relaxed m-0">
                  Our policy is that we will not disclose or sell your personal information without your consent, except
                  as otherwise set out herein, or as permitted or required by law.
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  If you submit a mortgage application or inquiry to us, either directly or through one of the mortgage
                  brokers or agents in our network, we may disclose your personal information to third parties, such as
                  lenders, insurers, credit reporting agencies, and to our brokers, agents and their respective
                  affiliates, for the purpose of processing your application or inquiry.
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  From time to time, we may disclose your personal information to service providers retained by us to
                  perform functions on our behalf or provide services to us, including third party software providers,
                  payment processors and hosting services.
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  We may perform data analytics on your personal information and generate reports, statistics and
                  information using your personal information, which we may publish (but only in anonymized and
                  aggregated form).
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  Any personal information may also be transferred or disclosed to a purchaser or prospective purchaser
                  in the event of a sale, assignment, or other transfer of all or a portion of our business or assets.
                </p>
              </div>
            </section>

            {/* Storing of Personal Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Storing of Personal Information</h2>
              </div>
              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                <p className="text-gray-600 leading-relaxed m-0">
                  Your personal information is stored either at our premises or the premises of our direct or indirect
                  service providers. We only retain your personal information as long as it is required for the reasons
                  it was collected or to comply with legal requirements.
                </p>
              </div>
            </section>

            {/* Location */}
            <section id="location" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Location</h2>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <p className="text-gray-600 leading-relaxed m-0">
                  We and our service providers may store or process your personal information in Canada, and to the
                  extent permitted by applicable law, may also store or process your personal information in the United
                  States or in other jurisdictions. Personal information that is stored or processed in foreign
                  jurisdictions may be subject to different legal requirements and laws than those applicable in Canada.
                </p>
              </div>
            </section>

            {/* Legal */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Legal</h2>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <p className="text-gray-600 leading-relaxed m-0">
                  We and our service providers may disclose your personal information in response to a search warrant,
                  subpoena or other legally valid inquiry or order, or to an investigative body in the case of a breach
                  of an agreement or contravention of law, or as otherwise required by applicable law. We may also
                  disclose personal information where necessary for the establishment, exercise or defense of legal
                  claims, or as otherwise permitted by law.
                </p>
              </div>
            </section>

            {/* Website Usage */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Information Collected Through Website Usage</h2>
              </div>
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100 space-y-4">
                <p className="text-gray-600 leading-relaxed m-0">
                  Like many other companies, we use various technologies to collect information and track your activity
                  when you visit our websites and use our software applications. For example, we may use cookies (small
                  files sent to your browser to store information) or web beacons (invisible images placed on certain
                  pages of our websites) to collect personal information about your use of our websites.
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  We may also collect analytics and information relating to your usage of our websites and software
                  applications such as your IP address, the browser, device and operating system that you are using, the
                  URL that referred you to the website, your physical location, the areas of the websites and software
                  applications that you visit, the extent and nature of your usage and the time of day that you access
                  the websites and use the software applications.
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  The information we collect allows us to track your activities across our various websites and software
                  applications and to improve your user experience and the functionality of our websites and software
                  applications.
                </p>
              </div>
            </section>

            {/* Safeguards */}
            <section id="safeguards" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Safeguards</h2>
              </div>
              <div className="bg-green-50 rounded-xl p-6 border border-green-100 space-y-4">
                <p className="text-gray-600 leading-relaxed m-0">
                  We protect your personal information in our custody and control from loss, misuse, unauthorized access
                  and alteration by using reasonable physical, organizational and technological security measures.
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  To the extent we have arrangements with service providers to store or process personal information on
                  our behalf, our policy is to require them by contractual or other means to provide comparable
                  protection while the information is stored or processed by them. However, these service providers may
                  have privacy policies of their own.
                </p>
                <p className="text-gray-600 leading-relaxed m-0">
                  While we believe these safeguards are reasonable and are comparable to the safeguards provided by
                  providers of similar services, we cannot guarantee that they will be sufficient to protect the privacy
                  and security of your personal information in all circumstances.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-12 scroll-mt-24">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Access, Correction, Inquiries and Complaints</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you wish to access or correct your personal information in our custody or control or ask a question
                  or make a complaint about our personal information practices under this policy, please contact:
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="font-semibold text-gray-900 m-0">Privacy Officer</p>
                  <p className="text-gray-600 m-0">490-1140 West Pender Street</p>
                  <p className="text-gray-600 m-0">Vancouver, BC V6E 4G1</p>
                  <a href="mailto:privacyofficer@verico.ca" className="text-blue-600 hover:text-blue-700 font-medium">
                    privacyofficer@verico.ca
                  </a>
                </div>
              </div>
            </section>

            {/* Changes */}
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 m-0">Changes</h2>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <p className="text-gray-600 leading-relaxed m-0">
                  This policy may be revised from time-to-time. We recommend that you review this policy frequently to
                  obtain the current version, and to ensure that you are aware of and accept any changes made. You may
                  contact us at the address, email address or telephone number above to obtain a current copy of this
                  privacy policy.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

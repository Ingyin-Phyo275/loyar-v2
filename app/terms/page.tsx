"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageWrapper } from "@/components/page-wrapper"

function renderContentWithLinks(text: string) {
  const parts: (string | React.ReactNode)[] = []
  let lastIndex = 0

  const urlRegex = /(https?:\/\/[^\s]+)/g
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g

  const matches: Array<{ start: number; end: number; type: 'url' | 'email'; value: string }> = []

  let match
  while ((match = urlRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length, type: 'url', value: match[0] })
  }

  while ((match = emailRegex.exec(text)) !== null) {
    matches.push({ start: match.index, end: match.index + match[0].length, type: 'email', value: match[0] })
  }

  matches.sort((a, b) => a.start - b.start)

  matches.forEach((m) => {
    if (m.start > lastIndex) {
      parts.push(text.substring(lastIndex, m.start))
    }
    if (m.type === 'email') {
      parts.push(
        <a key={m.value} href={`mailto:${m.value}`} className="text-primary hover:underline">
          {m.value}
        </a>
      )
    } else {
      parts.push(
        <a key={m.value} href={m.value} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          {m.value}
        </a>
      )
    }
    lastIndex = m.end
  })

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return parts.length > 0 ? parts : text
}

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: `Please read these Terms of Use carefully. By using the Service, you agree to be bound by this legally binding agreement between you and LOYAR. If you do not agree, please do not use or continue using the application or the service.

You may read our full Terms of Service for Transport here:
https://www.loyarmyanmar.com/terms-policies/`,
  },
  {
    id: "definitions",
    title: "Terms Definitions",
    content: `Passenger: Person being transported by the Driver.
Driver: Person or entity providing the transport service.
Transport Agreement: Contract between Passenger and Driver.
Personal Data: Information that can identify you.`,
  },
  {
    id: "representations",
    title: "Representations, Warranties, and Undertakings",
    content: `You agree to use the application lawfully, maintain confidentiality, report unauthorized use, and refrain from any harmful or disruptive behavior. You must provide accurate information and comply with all legal obligations.`,
  },
  {
    id: "passenger",
    title: "Passenger Obligations",
    content: `• Follow Driver’s instructions.
• Wear seat belts.
• Do not damage the car or consume drugs/alcohol/tobacco (unless permitted).
• Pay the indicated journey price.`,
  },
  {
    id: "driver",
    title: "Driver Obligations",
    content: `• Drive responsibly and treat passenger data with care.
• Refrain from harmful substances or behavior.
• Can discontinue transport under serious circumstances with proper communication.`,
  },
  {
    id: "payment",
    title: "Payment",
    content: `Service fees are non-refundable. LOYAR may administer collections and deductions via a driver wallet system. Minimum balances are required and cannot be redeemed for cash.`,
  },
  {
    id: "cancel",
    title: "Cancellation Policy",
    content: `Both passengers and drivers may cancel up to 3 times per month without penalty. Exceeding this will result in reduced priority or rating.`,
  },
  {
    id: "account",
    title: "Account Deactivation",
    content: `Driver accounts will be automatically deactivated after 3 months of inactivity.`,
  },
  {
    id: "termination",
    title: "Termination",
    content: `Either party may owe a partial or full fare upon early journey termination. Repeated complaints (3 or more) against a driver or passenger may result in agreement termination.`,
  },
  {
    id: "insurance",
    title: "Insurance",
    content: `Passengers may request insurance coverage at their expense. If accepted, the driver is liable for execution.`,
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: `LOYAR collects and stores user data for system use. Information may be shared with third-party services if required. LOYAR is not responsible for data loss due to external threats.`,
  },
  {
    id: "ip",
    title: "Intellectual Property Rights",
    content: `All contents and features of the website/app are owned by LOYAR and protected by laws. You may not modify, reuse, or redistribute content without written permission.`,
  },
  {
    id: "feedback",
    title: "Reporting and Feedback",
    content: `You can send feedback to support@loyarmyanmar.com. LOYAR may use your feedback for improvements without obligation or compensation.`,
  },
  {
    id: "acknowledgement",
    title: "Acknowledgement",
    content: `By using LOYAR services, you agree to these Terms of Use and acknowledge your understanding.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `For any queries, email us at:
support@loyarmyanmar.com`,
  },
]

export default function TermsPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        {/* <Navbar /> */}

        {/* Hero Section */}
        <section className="pt-32 pb-16 border-b border-primary bg-linear-to-br from-secondary via-background to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Legal & Policies
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Terms & Conditions
              </h1>
              <p className="text-muted-foreground">
                Last updated: 2026
              </p>
            </motion.div>
          </div>
        </section>

        {/* Table of Contents */}
        {/* <section className="py-8 border-b border-border bg-background sticky top-16 lg:top-20 z-40">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide text-sm">
              {sections.slice(0, 6).map((section) => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-muted-foreground hover:text-primary whitespace-nowrap transition-colors"
                >
                  {section.title}
                </Link>
              ))}
              <span className="text-muted-foreground">...</span>
            </div>
          </div>
        </section> */}

        {/* Content */}
        <section className="py-3 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-none"
              >
                <p className="text-muted-foreground mb-12">
                  Welcome to LOYAR. Please read these Terms of Use carefully before using our services.
                </p>

                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="mb-12 scroll-mt-32"
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>

                    {/* Improved content rendering */}
                    <div className="text-muted-foreground leading-relaxed space-y-2">
                      {section.content.split("\n").map((line, i) => {
                        if (line.startsWith("•")) {
                          return (
                            <li key={i} className="ml-5 list-disc">
                              {renderContentWithLinks(line.replace("• ", ""))}
                            </li>
                          )
                        }
                        return <p key={i}>{renderContentWithLinks(line)}</p>
                      })}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Footer Note */}
              <div className="mt-16 p-6 bg-secondary rounded-xl">
                <p className="text-sm text-muted-foreground">
                  If you have any questions, contact us at{" "}
                  <a
                    href="mailto:support@loyarmyanmar.com"
                    className="text-primary hover:underline"
                  >
                    support@loyarmyanmar.com
                  </a>
                  . You can also review our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageWrapper>
  )
}
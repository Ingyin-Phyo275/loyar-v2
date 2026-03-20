"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PageWrapper } from "@/components/page-wrapper"

const sections = [
  {
    id: "intro",
    title: "Introduction",
    content: `Last updated: September 15, 2020

Loyar Myanmar Company Limited built the LOYAR app as a Commercial app. This Service is provided by Loyar Myanmar Company Limited and is intended for use as is.

This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decides to use our Service.

If you choose to use our Service, then you agree to the collection and use of information in relation to this policy.`,
  },
  {
    id: "definitions",
    title: "Interpretation and Definitions",
    content: `Interpretation:
The words with capitalized initial letters have meanings defined under the following conditions.

Definitions:
Account: A unique account created for You to access our Service.
Affiliate: An entity under common control with the Company.
Application: The LOYAR software program provided by the Company.
Company: Loyar Myanmar Company Limited., Yangon, Myanmar.
Country: Myanmar (Burma).
Device: Any electronic device like a computer or smartphone.
Personal Data: Information related to an identifiable individual.
Service: Refers to the Application.
Service Provider: A third-party that processes data on behalf of the Company.
Third-party Social Media Service: Social platforms used to log in or register.
Usage Data: Data collected automatically from the Service or device.
You: The individual using the Service or the entity represented by the individual.`,
  },
  {
    id: "data",
    title: "Collecting and Using Your Personal Data",
    content: `Types of Data Collected:

Personal Data:
• For Driver: Basic personal info and vehicle data.
• For Passenger: Basic personal info.

Usage Data:
Includes IP address, browser type, time spent on pages, device identifiers, and other diagnostic data.

Information Collected while Using the App:
With your permission, we may collect location data, camera usage, or photo library access.`,
  },
  {
    id: "usage",
    title: "Use of Your Personal Data",
    content: `Your data may be used to:
• Provide and improve the Service
• Manage user accounts
• Send updates or promotional content
• Fulfill legal obligations
• Analyze trends and performance`,
  },
  {
    id: "sharing",
    title: "Sharing Your Personal Data",
    content: `Your information may be shared:
• With Service Providers
• During business transfers (e.g., mergers)
• With affiliates and partners
• Publicly, if shared in public areas
• With your consent`,
  },
  {
    id: "retention",
    title: "Retention and Transfer",
    content: `Data is retained as long as necessary for the stated purposes. Transfers may occur across jurisdictions with appropriate data protection measures in place.`,
  },
  {
    id: "disclosure",
    title: "Disclosure",
    content: `We may disclose your data:
• To comply with legal obligations
• To protect user and public safety
• To prevent legal liability`,
  },
  {
    id: "security",
    title: "Security",
    content: `We value your trust in providing your Personal Data. While we strive to use commercially acceptable means to protect it, no method of transmission over the Internet is 100% secure.`,
  },
  {
    id: "children",
    title: "Children’s Privacy",
    content: `We do not knowingly collect personally identifiable information from children under 13. If we discover such data, it will be deleted immediately.`,
  },
  {
    id: "links",
    title: "Links to Other Sites",
    content: `Our Service may contain links to other sites. We are not responsible for the content or privacy practices of third-party websites.`,
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. Changes are effective immediately after posting. You will be notified via the app or email where appropriate.`,
  },
  {
    id: "contact",
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy, contact us at:

support@loyarmyanmar.com`,
  },
]

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <main className="min-h-screen">
        {/* <Navbar /> */}

        {/* Hero */}
        <section className="pt-32 pb-16 bg-linear-to-br from-secondary via-background to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6">
                Legal & Policies
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: September 15, 2020
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">

              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-4">
                    {section.title}
                  </h2>

                  <div className="text-muted-foreground space-y-2">
                    {section.content.split("\n").map((line, i) => {
                      if (line.startsWith("•")) {
                        return (
                          <li key={i} className="ml-5 list-disc">
                            {line.replace("• ", "")}
                          </li>
                        )
                      }
                      return <p key={i}>{line}</p>
                    })}
                  </div>
                </motion.div>
              ))}

              {/* Footer Note */}
              <div className="mt-16 p-6 bg-secondary rounded-xl">
                <p className="text-sm text-muted-foreground">
                  For more details, please review our{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms & Conditions
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
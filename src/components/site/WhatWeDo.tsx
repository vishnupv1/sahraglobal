"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section>
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-4 sm:gap-5 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Accounting, Bookkeeping, Auditing & Tax",
              bullets: [
                "VAT services and VAT filing in UAE",
                "VAT registration and VAT compliance",
                "Bookkeeping and transaction recording",
                "Financial statement preparation and audit",
                "Tax return preparation and tax advisory",
                "Corporate tax services and VAT refund assistance",
              ],
            },
            {
              title: "Computer Programming Activities",
              bullets: [
                "Software development and custom software solutions",
                "Web development and web application development",
                "Systems and application development",
                "Web and database design",
                "Software customization and integration",
                "Mobile app development and API development",
              ],
            },
            {
              title: "Computer Consultancy & Facilities Management",
              bullets: [
                "Digital marketing services - Best digital marketing agency",
                "SEO services and SEM services in UAE",
                "Social media marketing and content marketing",
                "Digital content services and email marketing",
                "IT strategy and systems planning",
                "Concept and design consultancy",
              ],
            },
            // {
            //   title: "Other IT & Computer Services",
            //   bullets: [
            //     "Disaster recovery and business continuity",
            //     "PC and software installation",
            //     "IT security management and consulting",
            //     "Security systems and cyber risk advisory",
            //     "AI and innovation research",
            //     "Technology project management",
            //   ],
            // },
            {
              title: "Conventions, Conferences & Exhibitions",
              bullets: [
                "Event strategy and planning",
                "Trade show and exhibition organizing",
                "Conference management",
                "Vendor and venue coordination",
                "On-site staffing and operations",
                "End-to-end event execution",
              ],
            },
            {
              title: "Management Consultancy Activities",
              bullets: [
                "Strategy and management advisory",
                "Marketing, PR and communications",
                "Process and cost/accounting design",
                "Project and program management",
                "Sector consulting: logistics, hospitality, health",
                "Procurement and quality/standards advisory",
              ],
            },
            {
              title: "Business & Applications Follow‑Up Services",
              bullets: [
                "Document preparation and formatting",
                "Transcription and secretarial support",
                "Editing and proofreading",
                "Typing, word processing and DTP",
                "Mailbox and mailing services",
                "Copying, duplicating and blueprinting",
              ],
            },
            
          ].map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Card className="h-full border bg-white shadow-sm transition hover:shadow-md">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="text-base sm:text-lg leading-tight">{b.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 sm:space-y-3 text-sm text-muted-foreground">
                    {b.bullets.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#a78bfa] flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{line}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



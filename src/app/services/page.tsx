"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Globe, LineChart, FileSpreadsheet, Ship, FileText, Plane, CheckCircle2, Clock, Users, Award } from "lucide-react";

const sections = [
  { id: "web", title: "Web Development", body: "Modern websites and apps using Next.js and best practices.", Icon: Globe },
  { id: "marketing", title: "Digital Marketing", body: "SEO, SEM, and content strategies geared for UAE audiences.", Icon: LineChart },
  { id: "finance", title: "Tax & Finance", body: "Corporate tax, VAT filing, bookkeeping, and advisory.", Icon: FileSpreadsheet },
  { id: "logistics", title: "Logistics", body: "Freight coordination, customs documentation, and supply support.", Icon: Ship },
  { id: "data-entry", title: "Data Entry", body: "Accurate back-office data processing and digitization.", Icon: FileText },
  { id: "visa", title: "Visa Services", body: "Company setup support and visa processing assistance.", Icon: Plane },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full px-3 pt-14 pb-0 sm:px-4 lg:px-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold tracking-tight text-primary sm:text-5xl 2xl:text-6xl">
        Comprehensive solutions to accelerate your UAE business growth
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 max-w-3xl text-lg text-muted-foreground 2xl:text-xl">
        From cutting-edge web development and strategic digital marketing to seamless tax compliance and logistics coordination — we deliver results that drive measurable success in the UAE market.
      </motion.p>
      <Separator className="my-8" />
      <div className="grid gap-6 md:grid-cols-2">
        {sections.map((s, i) => (
          <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
            <Card id={s.id} className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <s.Icon className="h-5 w-5 text-accent" />
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{s.body}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                What you can expect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Clear KPIs, timelines, and ownership</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Compliance-first delivery for the UAE market</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Secure, scalable, and maintainable solutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Engagement model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Discovery and proposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Phased delivery with regular demos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Handover, training, and support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Industries we support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">SMEs, corporates, startups, e‑commerce, professional services, logistics and more.</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                Technology stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Next.js, React, TypeScript for modern web apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Cloud infrastructure (AWS, Vercel, Azure)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Database design and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Security best practices and compliance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                Why choose us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>UAE market expertise and local compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Transparent pricing and clear deliverables</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Ongoing support and maintenance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Proven track record with UAE businesses</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}



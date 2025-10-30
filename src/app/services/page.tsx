"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div className="min-h-dvh space-y-16 md:space-y-24 pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
        <div className="mx-auto w-full px-3 sm:px-4 lg:px-6">
        {/* Services Integration Style */}
        <div className="flex flex-col items-center justify-center py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Comprehensive solutions to accelerate your UAE business growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl"
          >
            From cutting-edge web development and strategic digital marketing to seamless tax compliance and logistics coordination — we deliver results that drive measurable success in the UAE market.
          </motion.p>
          </motion.div>

          {/* Central Hub with Services Icons */}
          <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Central Hub */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute z-10 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-2xl"
            >
              <CheckCircle2 className="h-12 w-12 text-white" />
            </motion.div>

            {/* Service Icons in Circle */}
            {sections.map((service, index) => {
              const angle = (index * 360) / sections.length;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 hover:border-blue-200 transition-colors"
                  style={{
                    left: `calc(50% + ${x}px - 32px)`,
                    top: `calc(50% + ${y}px - 32px)`,
                  }}
                >
                  <service.Icon className="h-8 w-8 text-blue-600" />
                </motion.div>
              );
            })}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {sections.map((_, index) => {
                const angle = (index * 360) / sections.length;
                const radius = 140;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                
                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="#a78bfa"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                  />
                );
              })}
            </svg>
          </div>

          {/* Service Labels */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-2xl">
            {sections.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <service.Icon className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">{service.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  What you can expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Clear KPIs, timelines, and ownership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Compliance-first delivery for the UAE market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Secure, scalable, and maintainable solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  Engagement model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Discovery and proposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Phased delivery with regular demos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Handover, training, and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  Industries we support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">SMEs, corporates, startups, e‑commerce, professional services, logistics and more.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  Technology stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Next.js, React, TypeScript for modern web apps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Cloud infrastructure (AWS, Vercel, Azure)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Database design and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Security best practices and compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  Why choose us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>UAE market expertise and local compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Transparent pricing and clear deliverables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Ongoing support and maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Proven track record with UAE businesses</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Content Section */}
   
    </div>
  );
}



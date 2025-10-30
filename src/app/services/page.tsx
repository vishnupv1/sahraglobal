"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Globe,
  LineChart,
  FileSpreadsheet,
  Ship,
  FileText,
  Plane,
  CheckCircle2,
  Clock,
  Users,
  Award,
} from "lucide-react";
import WhatWeDo from "@/components/site/WhatWeDo";

const sections = [
  {
    id: "web",
    title: "Web Development",
    body: "Modern websites and apps using Next.js and best practices.",
    Icon: Globe,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    body: "SEO, SEM, and content strategies geared for UAE audiences.",
    Icon: LineChart,
  },
  {
    id: "finance",
    title: "Tax & Finance",
    body: "Corporate tax, VAT filing, bookkeeping, and advisory.",
    Icon: FileSpreadsheet,
  },
  {
    id: "logistics",
    title: "Logistics",
    body: "Freight coordination, customs documentation, and supply support.",
    Icon: Ship,
  },
  {
    id: "data-entry",
    title: "Data Entry",
    body: "Accurate back-office data processing and digitization.",
    Icon: FileText,
  },
  {
    id: "visa",
    title: "Visa Services",
    body: "Company setup support and visa processing assistance.",
    Icon: Plane,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-dvh space-y-16 md:space-y-24 pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
                From cutting-edge web development and strategic digital
                marketing to seamless tax compliance and logistics coordination
                — we deliver results that drive measurable success in the UAE
                market.
              </motion.p>
            </motion.div>

            {/* Central Hub with Services Icons */}
            {/*  */}

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
                    <span className="font-medium text-gray-900">
                      {service.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WhatWeDo />
    </div>
  );
}

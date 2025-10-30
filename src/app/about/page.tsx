"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Target, Workflow, Flag, Users2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-dvh space-y-16 md:space-y-24 pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
        <div className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-3 py-16 text-center sm:px-4 lg:px-6 lg:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Building trusted partnerships for UAE businesses to thrive with confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl"
          >
            We combine local regulatory expertise with enterprise-grade engineering to deliver solutions that are reliable, secure, and measurably effective. From strategy to execution, we help you build, scale, and grow.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-6">

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-blue-600" />
                  Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  A digitally confident UAE where organizations operate efficiently and compliantly. We deliver scalable, secure, and outcome-driven services tailored to the region&apos;s unique landscape—so you can build, scale, and grow with confidence.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users2 className="h-5 w-5 text-blue-600" />
                  Leadership
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Managing Director — 12+ years building and scaling GCC operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Head of Technology — Full-stack systems architect and delivery lead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Head of Finance — Tax, VAT, and compliance specialist for the UAE</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Why clients choose us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Outcome-first delivery with clear, measurable KPIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Local compliance and regulatory expertise across the UAE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Modern engineering practices with a strong security posture</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="h-5 w-5 text-blue-600" />
                  How we work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Discovery and alignment on goals and constraints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Lean roadmaps with rapid, iterative releases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Transparent communication, reporting, and governance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
            <Card className="group h-full border bg-white shadow-sm transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-blue-600" />
                  Our commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Security, reliability, and performance as non‑negotiables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>On-time delivery with clear ownership and SLAs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                    <span>Long-term partnership, enablement, and support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}



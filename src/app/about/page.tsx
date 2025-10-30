"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Target,
  Workflow,
  Flag,
  Users2,
  Award,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-dvh space-y-16 md:space-y-24 pb-0">
      {/* Hero Section (mirrors home feel) */}
      <section className="relative overflow-visible -mt-14 sm:-mt-16 pt-14 sm:pt-16">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-3 py-12 sm:px-4 sm:py-16 lg:px-6 lg:py-20 overflow-visible">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6 flex items-center justify-center"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-200 bg-white/80 px-2.5 sm:px-3 py-1 shadow-sm backdrop-blur-sm">
              <Image
                src="https://cdn.prod.website-files.com/68ac1aaf56a72b0ff377f38b/68c166d197f96432345f5011_Group%201000000819.svg"
                alt="reviews-badge"
                width={16}
                height={16}
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              <div className="text-xs sm:text-sm font-medium text-blue-700">
                <span className="font-semibold text-blue-800">Trusted</span>
                <span className="mx-1">by UAE businesses</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            About Starwaylink
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 lg:text-xl px-3 sm:px-0"
          >
            We blend local compliance with modern engineering to deliver secure,
            scalable, and measurable outcomes—helping UAE organizations build,
            scale, and grow with confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-8"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg"
              >
                Talk to our team
              </Button>
            </Link>
          </motion.div>

          {/* Slim highlight card, echoing dashboard style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 mt-8 sm:mt-12 w-full"
          ></motion.div>

          
          {/* Content Section */}
          <div className="mx-auto  px-3 sm:px-4 lg:px-6 ">
            <div className="grid gap-6 md:grid-cols-2 justify-items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group h-full border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100/70 shadow-sm transition hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-900">
                        <Flag className="h-5 w-5 text-blue-600" />
                        Vision & Mission
                      </span>
                      <span className="h-8 w-8 rounded-lg bg-blue-600/90 flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          SL
                        </span>
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      A digitally confident UAE where organizations operate
                      efficiently and compliantly. We deliver scalable, secure,
                      and outcome‑driven services tailored to the region&apos;s
                      unique landscape—so you can build, scale, and grow with
                      confidence.
                    </p>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        Compliance
                      </div>
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        Security
                      </div>
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        Scale
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <Card className="group h-full border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-900">
                        <Users2 className="h-5 w-5 text-blue-600" />
                        Leadership
                      </span>
                      <span className="text-xs text-blue-700 bg-blue-50 rounded-md px-2 py-0.5">
                        Founding Team
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start justify-between gap-2">
                        <span className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                          <span>
                            Managing Director — 12+ years building and scaling
                            GCC operations
                          </span>
                        </span>
                        <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                          Ops
                        </span>
                      </li>
                      <li className="flex items-start justify-between gap-2">
                        <span className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                          <span>
                            Head of Technology — Full-stack systems architect
                            and delivery lead
                          </span>
                        </span>
                        <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                          Tech
                        </span>
                      </li>
                      <li className="flex items-start justify-between gap-2">
                        <span className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                          <span>
                            Head of Finance — Tax, VAT, and compliance
                            specialist for the UAE
                          </span>
                        </span>
                        <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
                          Finance
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="group h-full border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100/70 shadow-sm transition hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-900">
                        <Target className="h-5 w-5 text-blue-600" />
                        Why clients choose us
                      </span>
                      <span className="h-8 w-8 rounded-lg bg-blue-600/90 flex items-center justify-center">
                        <Award className="h-4 w-4 text-white" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Outcome‑first delivery with clear, measurable KPIs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Local compliance and regulatory expertise across the
                          UAE
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Modern engineering practices with a strong security
                          posture
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        KPIs
                      </div>
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        Compliance
                      </div>
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        Security
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                <Card className="group h-full border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-900">
                        <Workflow className="h-5 w-5 text-blue-600" />
                        How we work
                      </span>
                      <span className="text-xs text-blue-700 bg-blue-50 rounded-md px-2 py-0.5">
                        Process
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Discovery and alignment on goals and constraints
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Lean roadmaps with rapid, iterative releases
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Transparent communication, reporting, and governance
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Card className="group h-full border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100/70 shadow-sm transition hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-gray-900">
                        <ShieldCheck className="h-5 w-5 text-blue-600" />
                        Our commitment
                      </span>
                      <span className="h-8 w-8 rounded-lg bg-blue-600/90 flex items-center justify-center">
                        <ShieldCheck className="h-4 w-4 text-white" />
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Security, reliability, and performance as
                          non‑negotiables
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          On-time delivery with clear ownership and SLAs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-blue-600" />
                        <span>
                          Long-term partnership, enablement, and support
                        </span>
                      </li>
                    </ul>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        Reliability
                      </div>
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        SLAs
                      </div>
                      <div className="rounded-md bg-white/60 px-2 py-1 text-left text-xs text-gray-700">
                        Support
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

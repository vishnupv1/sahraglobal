"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Testimonials from "@/components/site/Testimonials";
import {
  TrendingUp,
  Bell,
  Search,
  Globe,
  LineChart,
  FileSpreadsheet,
  Ship,
  FileText,
  Plane,
  CheckCircle2,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12 md:space-y-16 pb-0">
      <section className="relative overflow-visible bg-gradient-to-b from-blue-50/30 via-blue-100/20 to-blue-200/30 -mt-14 sm:-mt-16 pt-14 sm:pt-16">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20 overflow-visible">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6 flex items-center justify-center"
          >
            <div className="hero-tag-wrapper inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-blue-200 bg-white/80 px-2.5 sm:px-3 py-1 shadow-sm backdrop-blur-sm">
              <Image
                src="https://cdn.prod.website-files.com/68ac1aaf56a72b0ff377f38b/68c166d197f96432345f5011_Group%201000000819.svg"
                alt="reviews-badge"
                width={16}
                height={16}
                className="hero-tag-image h-4 w-4 sm:h-5 sm:w-5"
              />
              <div className="hero-tag-text text-xs sm:text-sm font-medium text-blue-700">
                <span className="smart-ai-text font-semibold text-blue-800"></span>
                <span className="mx-0.5 sm:mx-1">5 Stars Reviews</span>
              </div>
            </div>
          </motion.div>

           <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight"
          >
             Enterprise-grade solutions for {" "}
             <span>
               <span className="text-red-600">U</span>
               <span className="text-black">A</span>
               <span className="text-green-600">E</span>
             </span>{" "}
             business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-gray-600 lg:text-xl px-4 sm:px-0"
          >
            Build, scale, and grow with confidence. We blend local compliance
            with modern engineering to deliver measurable outcomes.
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
                Get a Free Consultation
              </Button>
            </Link>
          </motion.div>

          <div className="relative z-10 mt-8 sm:mt-12 w-full overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative p-3 sm:p-4 md:p-6 rounded-2xl sm:rounded-3xl border border-white bg-transparent overflow-visible"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden sm:block absolute -left-4 md:-left-8 top-1/4 -translate-y-1/2 z-20"
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-1.5 sm:p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 shadow-xl"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border border-white/20">
                    <Image
                      src="/nobglogo.png"
                      alt="Starwaylink"
                      width={128}
                      height={128}
                      quality={100}
                      priority
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden sm:block absolute -right-4 md:-right-8 top-1/6 -translate-y-1/2 z-20"
              >
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="p-1.5 sm:p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 shadow-xl"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-200 to-blue-500 flex items-center justify-center border border-white/20">
                    <Award className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                  </div>
                </motion.div>
              </motion.div>

              <Card className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-0">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-blue-600 flex items-center justify-center">
                        <span className="text-white font-bold text-sm sm:text-lg">
                          SL
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                          Starwaylink Services Dashboard
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          UAE Business Services Overview
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        <span className="relative inline-block">
                          <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                          <span className="absolute -top-1 -right-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-500" />
                        </span>
                      </div>
                      <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Web Projects
                          </p>
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                            ••
                          </p>
                        </div>
                        <Globe className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm text-blue-600 mt-1">
                        •••%
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Marketing ROI
                          </p>
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                            •••%
                          </p>
                        </div>
                        <LineChart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm text-blue-600 mt-1">
                        •••%
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Tax Filings
                          </p>
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                            •••
                          </p>
                        </div>
                        <FileSpreadsheet className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm text-blue-600 mt-1">
                        •••%
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            Logistics Orders
                          </p>
                          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                            ••••
                          </p>
                        </div>
                        <Ship className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600" />
                      </div>
                      <p className="text-xs sm:text-sm text-blue-600 mt-1">
                        •••%
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-400 to-blue-700 p-4 sm:p-6 rounded-lg sm:rounded-xl text-white mb-6 sm:mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-xs sm:text-sm">
                          Monthly Revenue
                        </p>
                        <p className="text-2xl sm:text-3xl font-bold">
                          AED ••••
                        </p>
                        <p className="text-blue-200 text-xs sm:text-sm">
                          ••% Growth this quarter
                        </p>
                      </div>
                      <div className="h-12 w-12 sm:h-16 sm:w-16 bg-white/20 rounded-lg flex items-center justify-center">
                        <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    <div className="hidden sm:block bg-white p-3 sm:p-4 rounded-lg border">
                      <h5 className="font-medium text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                        Service Performance
                      </h5>
                      <div className="flex items-center justify-center mb-3 sm:mb-4">
                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-purple-100 flex items-center justify-center">
                          <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-purple-500"></div>
                        </div>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-purple-500"></div>
                          <span className="text-xs sm:text-sm text-gray-600">
                            Web Development • ••
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-blue-500"></div>
                          <span className="text-xs sm:text-sm text-gray-600">
                            Digital Marketing • ••
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-green-500"></div>
                          <span className="text-xs sm:text-sm text-gray-600">
                            Tax & Finance • •••
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block bg-white p-3 sm:p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h5 className="font-medium text-gray-900 text-sm sm:text-base">
                          Active Projects
                        </h5>
                        <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                          ••
                        </span>
                      </div>
                      <div className="h-24 sm:h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="h-12 w-12 sm:h-16 sm:w-16 bg-blue-500 rounded-lg mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                            <CheckCircle2 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600">
                            On Track
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <h5 className="font-medium text-gray-900 text-sm sm:text-base">
                          Recent Activity
                        </h5>
                        <span className="text-xs sm:text-sm text-blue-600">
                          View All
                        </span>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        {/* <div className="flex items-center gap-2 sm:gap-3">
                              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-xs sm:text-sm text-gray-900">E-commerce site launched</p>
                                <p className="text-xs text-gray-500">• hours ago</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <Ship className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-xs sm:text-sm text-gray-900">Logistics order completed</p>
                                <p className="text-xs text-gray-500">• hours ago</p>
                              </div>
                            </div> */}
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-blue-500 flex items-center justify-center">
                            <FileSpreadsheet className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm text-gray-900">
                              Tax filing submitted
                            </p>
                            <p className="text-xs text-gray-500">• hours ago</p>
                          </div>
                        </div>
                      </div>
                      {/* <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs sm:text-sm text-gray-600">Client Satisfaction</p>
                                <p className="text-base sm:text-lg font-bold text-gray-900">••%</p>
                                <p className="text-xs text-gray-500">Based on •••+ reviews</p>
                              </div>
                              <div className="h-6 w-6 sm:h-8 sm:w-8 bg-blue-500 rounded flex items-center justify-center">
                                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                              </div>
                            </div>
                          </div> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[38%] h-[65vh] w-[1100px] max-w-[94vw] -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 1200 700" className="h-full w-full">
              <defs>
                <radialGradient id="heroRadial" cx="50%" cy="45%" r="75%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#a78bfa" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#c4b5fd" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <defs>
                <radialGradient id="heroRadial" cx="50%" cy="45%" r="75%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="30%" stopColor="#a78bfa" stopOpacity="0.3" />
                  <stop offset="60%" stopColor="#c4b5fd" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <g
                fill="none"
                stroke="#a78bfa"
                strokeOpacity="0.28"
                strokeWidth="1.5"
              >
                <circle cx="600" cy="700" r="360" />
                <circle cx="600" cy="700" r="470" />
                <circle cx="600" cy="700" r="580" />
              </g>

              <g>
                <circle r="3" fill="white" opacity="0.9">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 600 700"
                    to="360 600 700"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle r="3" fill="white" opacity="0.9">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 600 700"
                    to="360 600 700"
                    dur="9s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle r="3" fill="white" opacity="0.9">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 600 700"
                    to="360 600 700"
                    dur="12s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}

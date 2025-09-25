"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Testimonials from "@/components/site/Testimonials";
import WhatWeDo from "@/components/site/WhatWeDo";
import { TrendingUp, Bell, Search, Globe, LineChart, FileSpreadsheet, Ship, FileText, Plane, CheckCircle2, Award } from "lucide-react";
import Image from "next/image";
 


export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16 pb-0">
      {/* Hero (centered) */}
      <section className="relative overflow-visible bg-gradient-to-b from-purple-50/30 via-purple-100/20 to-purple-200/30">
        {/* Page-scoped animated blobs (visible only on home) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 -left3-30 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/60 to-purple-600/40 blur-xl " />
          <div className="absolute top-50 right-24 h-[58rem] w-[58rem] rounded-full bg-gradient-to-br from-purple-500/50 via-purple-300/45 to-purple-400/45 blur-xl " />
        </div>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-3 py-16 text-center sm:px-4 lg:px-6 lg:py-20 overflow-visible">
          {/* Trust Badge (matches provided element style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center"
          >
            <div className="hero-tag-wrapper inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1 shadow-sm backdrop-blur-sm">
              {/* Tag icon image (from provided SVG URL) */}
              <Image
                src="https://cdn.prod.website-files.com/68ac1aaf56a72b0ff377f38b/68c166d197f96432345f5011_Group%201000000819.svg"
                alt="reviews-badge"
                width={20}
                height={20}
                className="hero-tag-image h-5 w-5"
              />
              <div className="hero-tag-text text-sm font-medium text-purple-700">
                <span className="smart-ai-text font-semibold text-purple-800">4800+</span>
                <span className="mx-1">5 Stars Reviews</span>
              </div>
            </div>
          </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-7xl xl:text-7xl"
              >
                Enterprise-grade solutions for UAE businesses
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl"
              >
            Build, scale, and grow with confidence. We blend local compliance with modern engineering to deliver measurable outcomes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
              >
                <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 text-lg">
                Get a Free Consultation
                  </Button>
                </Link>
              </motion.div>
              
              {/* Inline Dashboard Preview inside the same hero container */}
              <div className="relative z-10 mt-12 w-full overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative p-6 rounded-3xl border border-white bg-transparent overflow-visible"
                >
                  {/* Left Side Miniature */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -left-8 top-1/4 -translate-y-1/2 z-20"
                  >
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-xl"
                    >
                      <div className="w-32 h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
                      <div className="p-2 h-full flex flex-col justify-between">
                        <div className="flex items-center gap-1">
                          <Globe className="w-3 h-3 text-white/80" />
                          <LineChart className="w-3 h-3 text-white/60" />
                          <FileSpreadsheet className="w-3 h-3 text-white/40" />
                        </div>
                        <div className="space-y-1">
                          <div className="h-1 bg-white/60 rounded w-full"></div>
                          <div className="h-1 bg-white/40 rounded w-3/4"></div>
                          <div className="h-1 bg-white/30 rounded w-1/2"></div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-3 h-3 text-white/60" />
                          </div>
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Right Side Miniature */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="absolute -right-8 top-1/6 -translate-y-1/2 z-20"
                  >
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/30 shadow-xl"
                    >
                      <div className="w-32 h-40 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
                      <div className="p-2 h-full flex flex-col justify-between">
                        <div className="flex items-center gap-1">
                          <Ship className="w-3 h-3 text-white/80" />
                          <FileText className="w-3 h-3 text-white/60" />
                          <Plane className="w-3 h-3 text-white/40" />
                        </div>
                        <div className="space-y-1">
                          <div className="h-1 bg-white/60 rounded w-full"></div>
                          <div className="h-1 bg-white/40 rounded w-3/4"></div>
                          <div className="h-1 bg-white/30 rounded w-1/2"></div>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                            <Award className="w-3 h-3 text-white/60" />
                          </div>
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-lg bg-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">SL</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">Starway Link Dashboard</h3>
                            <p className="text-gray-600">UAE Business Services Overview</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Search className="h-5 w-5 text-gray-400" />
                            <span className="relative inline-block">
                              <Bell className="h-5 w-5 text-gray-400" />
                              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500" />
                            </span>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                            <Award className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Web Projects</p>
                              <p className="text-2xl font-bold text-gray-900">47</p>
                            </div>
                            <Globe className="h-8 w-8 text-blue-600" />
                          </div>
                          <p className="text-sm text-green-600 mt-1">+12.5%</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Marketing ROI</p>
                              <p className="text-2xl font-bold text-gray-900">340%</p>
                            </div>
                            <LineChart className="h-8 w-8 text-purple-600" />
                          </div>
                          <p className="text-sm text-green-600 mt-1">+23.1%</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Tax Filings</p>
                              <p className="text-2xl font-bold text-gray-900">156</p>
                            </div>
                            <FileSpreadsheet className="h-8 w-8 text-orange-600" />
                          </div>
                          <p className="text-sm text-green-600 mt-1">+8.2%</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Logistics Orders</p>
                              <p className="text-2xl font-bold text-gray-900">2,318</p>
                            </div>
                            <Ship className="h-8 w-8 text-green-600" />
                          </div>
                          <p className="text-sm text-green-600 mt-1">+15.3%</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl text-white mb-8">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-100 text-sm">Monthly Revenue</p>
                            <p className="text-3xl font-bold">AED 89.2K</p>
                            <p className="text-purple-200 text-sm">32% Growth this quarter</p>
                          </div>
                          <div className="h-16 w-16 bg-white/20 rounded-lg flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border">
                          <h5 className="font-medium text-gray-900 mb-4">Service Performance</h5>
                          <div className="flex items-center justify-center mb-4">
                            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                              <div className="h-16 w-16 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                              <span className="text-sm text-gray-600">Web Development • 47</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                              <span className="text-sm text-gray-600">Digital Marketing • 23</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                              <span className="text-sm text-gray-600">Tax & Finance • 156</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center justify-between mb-4">
                            <h5 className="font-medium text-gray-900">Active Projects</h5>
                            <span className="text-3xl font-bold text-purple-600">12</span>
                          </div>
                          <div className="h-32 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="h-16 w-16 bg-purple-500 rounded-lg mx-auto mb-2 flex items-center justify-center">
                                <CheckCircle2 className="h-8 w-8 text-white" />
                              </div>
                              <p className="text-sm text-gray-600">On Track</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center justify-between mb-4">
                            <h5 className="font-medium text-gray-900">Recent Activity</h5>
                            <span className="text-sm text-purple-600">View All</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <Globe className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-900">E-commerce site launched</p>
                                <p className="text-xs text-gray-500">2 hours ago</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                                <Ship className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-900">Logistics order completed</p>
                                <p className="text-xs text-gray-500">4 hours ago</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                                <FileSpreadsheet className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-900">Tax filing submitted</p>
                                <p className="text-xs text-gray-500">6 hours ago</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Client Satisfaction</p>
                                <p className="text-lg font-bold text-gray-900">98%</p>
                                <p className="text-xs text-gray-500">Based on 150+ reviews</p>
                              </div>
                              <div className="h-8 w-8 bg-purple-500 rounded flex items-center justify-center">
                                <Award className="h-4 w-4 text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>

          {/* Hero background pattern: purple gradient overlay + concentric arcs */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            {/* Soft purple gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-purple-200/30" />

            {/* Radial glow centered behind CTA */}
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
                {/* Concentric circular line arcs */}
                <g fill="none" stroke="#a78bfa" strokeOpacity="0.28" strokeWidth="1.5">
                  <circle cx="600" cy="700" r="360" />
                  <circle cx="600" cy="700" r="470" />
                  <circle cx="600" cy="700" r="580" />
                </g>
                
                {/* Animated white spots */}
                <g>
                  {/* Spot on inner circle */}
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
                  
                  {/* Spot on middle circle */}
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
                  
                  {/* Spot on outer circle */}
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
      {/* Join Companies Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50/20">
        <div className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Join 2,000+ companies already growing with us
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-gray-400 font-medium text-lg">goipsum</div>
              <div className="text-gray-400 font-medium text-lg">IPSUM</div>
              <div className="text-gray-400 font-medium text-lg">coo</div>
              <div className="text-gray-400 font-medium text-lg">Logoipsum</div>
              <div className="text-gray-400 font-medium text-lg">Logoipsum</div>
              <div className="text-gray-400 font-medium text-lg">LOOO</div>
            </div>
              </motion.div>
        </div>
      </section>

      <WhatWeDo />

      {/* Testimonials */}
      <section id="testimonials">
        <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
          <div className="mb-6 lg:mb-8 text-center">
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-5xl 2xl:text-6xl">Client success</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground 2xl:text-xl">Results that speak for themselves.</p>
          </div>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

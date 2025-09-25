"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Testimonials from "@/components/site/Testimonials";
import WhatWeDo from "@/components/site/WhatWeDo";
import TrustedBy from "@/components/site/TrustedBy";
import { ArrowRight, Globe, LineChart, FileSpreadsheet, Ship, FileText, Plane, CheckCircle2, Briefcase, Package, Rocket, Building2, Star, TrendingUp, Users, Eye, Bell, Search, User } from "lucide-react";
 

const services = [
  { title: "Web Development", icon: Globe, href: "/services#web" },
  { title: "Digital Marketing", icon: LineChart, href: "/services#marketing" },
  { title: "Tax & Finance", icon: FileSpreadsheet, href: "/services#finance" },
  { title: "Logistics", icon: Ship, href: "/services#logistics" },
  { title: "Data Entry", icon: FileText, href: "/services#data-entry" },
  { title: "Visa Services", icon: Plane, href: "/services#visa" },
];

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16 pb-0">
      {/* Hero (centered) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/30 via-purple-100/20 to-purple-200/30">
        {/* Page-scoped animated blobs (visible only on home) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 -left-16 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/60 to-purple-600/40 blur-xl " />
          <div className="absolute top-50 right-24 h-[58rem] w-[58rem] rounded-full bg-gradient-to-br from-purple-500/50 via-purple-300/45 to-purple-400/45 blur-xl " />
        </div>
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-3 py-16 text-center sm:px-4 lg:px-6 lg:py-20">
          {/* Trust Badge (matches provided element style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center"
          >
            <div className="hero-tag-wrapper inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3 py-1 shadow-sm backdrop-blur-sm">
              {/* Tag icon image (from provided SVG URL) */}
              <img
                src="https://cdn.prod.website-files.com/68ac1aaf56a72b0ff377f38b/68c166d197f96432345f5011_Group%201000000819.svg"
                alt="reviews-badge"
                loading="lazy"
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
              <div className="relative z-10 mt-12 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative p-6 rounded-3xl border border-white bg-transparent"
                >
                  <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-lg bg-purple-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">S</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">Good Morning Ahmed</h3>
                            <p className="text-gray-600">Hope you have a good day</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Search className="h-5 w-5 text-gray-400" />
                            <span className="relative inline-block">
                              <Bell className="h-5 w-5 text-gray-400" />
                              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
                            </span>
                          </div>
                          <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Views</p>
                              <p className="text-2xl font-bold text-gray-900">7,265</p>
                            </div>
                            <TrendingUp className="h-8 w-8 text-blue-600" />
                          </div>
                          <p className="text-sm text-green-600 mt-1">+11.01%</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Visits</p>
                              <p className="text-2xl font-bold text-gray-900">3,671</p>
                            </div>
                            <Eye className="h-8 w-8 text-blue-600" />
                          </div>
                          <p className="text-sm text-red-600 mt-1">-0.03%</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">New Users</p>
                              <p className="text-2xl font-bold text-gray-900">156</p>
                            </div>
                            <Users className="h-8 w-8 text-orange-600" />
                          </div>
                          <p className="text-sm text-green-600 mt-1">+15.03%</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600">Active Users</p>
                              <p className="text-2xl font-bold text-gray-900">2,318</p>
                            </div>
                            <Users className="h-8 w-8 text-green-600" />
                          </div>
                          <p className="text-sm text-green-600 mt-1">+6.08%</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-xl text-white mb-8">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-100 text-sm">Total Revenue</p>
                            <p className="text-3xl font-bold">$1.89K</p>
                            <p className="text-purple-200 text-sm">45% Since last period</p>
                          </div>
                          <div className="h-16 w-16 bg-white/20 rounded-lg flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-white" />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border">
                          <h5 className="font-medium text-gray-900 mb-4">Invoice Statistics</h5>
                          <div className="flex items-center justify-center mb-4">
                            <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
                              <div className="h-16 w-16 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                              <span className="text-sm text-gray-600">Total Overdue • 1200</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                              <span className="text-sm text-gray-600">Total Paid • 2500</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="h-3 w-3 rounded-full bg-purple-300"></div>
                              <span className="text-sm text-gray-600">Total Unpaid • 498</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center justify-between mb-4">
                            <h5 className="font-medium text-gray-900">Reports</h5>
                            <span className="text-3xl font-bold text-purple-600">100</span>
                          </div>
                          <div className="h-32 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <div className="h-16 w-16 bg-purple-500 rounded-lg mx-auto mb-2"></div>
                              <p className="text-sm text-gray-600">Sales 2,678</p>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center justify-between mb-4">
                            <h5 className="font-medium text-gray-900">Notifications</h5>
                            <span className="text-sm text-purple-600">View All</span>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <User className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-900">Ellie joined team dev</p>
                                <p className="text-xs text-gray-500">04 April 2021 04:00 PM</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                                <User className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-900">Jenny joined team HI</p>
                                <p className="text-xs text-gray-500">04 April 2021 04:00 PM</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center">
                                <User className="h-4 w-4 text-white" />
                              </div>
                              <div>
                                <p className="text-sm text-gray-900">Adam got employee of...</p>
                                <p className="text-xs text-gray-500">03 April 2021 02:00 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm text-gray-600">Total Revenue</p>
                                <p className="text-lg font-bold text-gray-900">$1.89K</p>
                                <p className="text-xs text-gray-500">45% Since last period</p>
                              </div>
                              <div className="h-8 w-8 bg-purple-500 rounded"></div>
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

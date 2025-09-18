"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Testimonials from "@/components/site/Testimonials";
import { ArrowRight, Globe, LineChart, FileSpreadsheet, Ship, FileText, Plane } from "lucide-react";

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
    <div className="space-y-16 md:space-y-24 pb-0">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto w-full px-3 py-16 sm:px-4 lg:px-6 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold tracking-tight text-primary sm:text-5xl 2xl:text-6xl"
              >
                Enterprise-grade solutions for UAE businesses to build, scale, and grow with confidence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 text-lg text-muted-foreground 2xl:text-xl"
              >
                From web development and digital marketing to tax, logistics, data entry, and visa assistance — we help you operate with confidence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <Link href="/contact">
                  <Button size="lg">Get a Free Consultation</Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Badge className="bg-accent text-accent-foreground">Trusted by UAE SMEs</Badge>
                <span>Fast turnaround • Local expertise</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative hidden aspect-[16/9] max-h-80 overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5 lg:block"
            >
              {/* Hero illustration */}
              {/* Place your image at public/service.jpg */}
              <img
                src="/service.jpeg"
                alt="Our services in action"
                className="h-full w-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services highlight */}
      <section>
        <div className="mx-auto w-full px-3 sm:px-4 lg:px-6">
          <div className="mb-6 lg:mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">What we do</h2>
              <p className="text-muted-foreground">Full-stack services tailored for the UAE market.</p>
            </div>
            <Link href="/services" className="text-sm text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <Link href={s.href}>
                  <Card className="group h-full transition hover:shadow-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <s.icon className="h-5 w-5 text-accent" />
                        {s.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Learn how our {s.title.toLowerCase()} drives measurable results.</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <div className="mx-auto w-full px-3 sm:px-4 lg:px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Client success</h2>
            <p className="text-muted-foreground">Results that speak for themselves.</p>
          </div>
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

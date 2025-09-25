"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function WhatWeDo() {
  return (
    <section>
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">
        <div className="mb-6 lg:mb-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-5xl 2xl:text-6xl">What we do</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground 2xl:text-xl">Unlock real results for your organization.</p>
        </div>
        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Build trust with feedback and listening",
              bullets: [
                "Create a workplace where employees feel valued and heard",
                "Increase loyalty and engagement by improving continuously",
              ],
            },
            {
              title: "Identify key drivers of engagement and satisfaction",
              bullets: [
                "Discover what motivates employees with comprehensive data",
                "Address root causes of disengagement to improve morale",
              ],
            },
            {
              title: "Ensure cultural alignment with organizational goals",
              bullets: [
                "Assess alignment between perceptions and company values",
                "Build teamwork and success through stronger alignment",
              ],
            },
          ].map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <Card className="h-full border bg-white shadow-sm transition hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">{b.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {b.bullets.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#a78bfa]" />
                        <span>{line}</span>
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



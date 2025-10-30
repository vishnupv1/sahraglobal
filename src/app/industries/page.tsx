"use client";

import { motion } from "framer-motion";
import { Building2, Factory, Package, Store, Briefcase, Rocket, MapPin, ShieldCheck, Target, CheckCircle2, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  { name: "SMEs", Icon: Store },
  { name: "Corporates", Icon: Building2 },
  { name: "Startups", Icon: Rocket },
  { name: "E-commerce", Icon: Package },
  { name: "Professional Services", Icon: Briefcase },
  { name: "Logistics & Trade", Icon: Factory },
];

export default function IndustriesPage() {
  return (
    <div className="mx-auto w-full px-3 pt-14 pb-0 sm:px-4 lg:px-6">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold tracking-tight text-black text-center sm:text-5xl 2xl:text-6xl">
        Empowering diverse industries across the UAE with tailored expertise
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-4 max-w-3xl text-lg text-muted-foreground 2xl:text-xl">
        From innovative startups and established SMEs to large corporations and e-commerce platforms — we understand the unique challenges and opportunities across every sector driving the UAE&apos;s dynamic economy.
      </motion.p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <motion.div key={ind.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
            <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ind.Icon className="h-5 w-5 text-accent" />
                  {ind.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Solutions tailored for {ind.name.toLowerCase()} with local compliance and speed.</p>
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
                <MapPin className="h-5 w-5 text-accent" />
                Regional advantage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>Local compliance and regulatory guidance</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>Arabic/English communication and documentation</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>On-ground coordination across the UAE</span></li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Outcome-driven delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>Clear KPIs, timelines, and sprint reviews</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>Transparent reporting and governance</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>Continuous improvement and retrospectives</span></li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Security & reliability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>Data protection and access controls</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>High availability and performance SLOs</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" /><span>Secure development and change management</span></li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Industry expertise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Deep understanding of UAE business regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Sector-specific compliance and best practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Local market dynamics and cultural nuances</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Proven solutions across multiple industries</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }}>
          <Card className="group h-full border bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 transition hover:shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Client success stories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>50+ successful projects across UAE industries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Average 40% improvement in operational efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>100% compliance rate with UAE regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>Long-term partnerships with 95% client retention</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}



"use client";

import { Briefcase, Building2, Globe, Package, Rocket } from "lucide-react";

export default function TrustedBy() {
  return (
    <section>
      <div className="mx-auto w-full max-w-5xl px-3 sm:px-4 lg:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-muted-foreground">
          <span>Trusted by</span>
          <div aria-label="Company A" className="flex h-36 w-36 items-center justify-center rounded-full border bg-white/90 shadow-sm">
            <Globe className="h-18 w-18 text-[#a78bfa]" />
          </div>
          <div aria-label="Company B" className="flex h-36 w-36 items-center justify-center rounded-full border bg-white/90 shadow-sm">
            <Briefcase className="h-18 w-18 text-[#a78bfa]" />
          </div>
          <div aria-label="Company C" className="flex h-36 w-36 items-center justify-center rounded-full border bg-white/90 shadow-sm">
            <Package className="h-18 w-18 text-[#a78bfa]" />
          </div>
          <div aria-label="Company D" className="flex h-36 w-36 items-center justify-center rounded-full border bg-white/90 shadow-sm">
            <Rocket className="h-18 w-18 text-[#a78bfa]" />
          </div>
          <div aria-label="Company E" className="flex h-36 w-36 items-center justify-center rounded-full border bg-white/90 shadow-sm">
            <Building2 className="h-18 w-18 text-[#a78bfa]" />
          </div>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          Our team supports SMEs across the UAE with reliable delivery, clear communication, and results you can measure.
        </p>
      </div>
    </section>
  );
}



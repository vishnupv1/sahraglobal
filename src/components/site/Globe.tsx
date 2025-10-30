"use client";

import { motion } from "framer-motion";

type Pin = {
  label: string;
  xPercent: number; // 0-100 across the globe container
  yPercent: number; // 0-100 down the globe container
  details: string[];
};

const pins: Pin[] = [
  {
    label: "UAE • Core Services",
    xPercent: 64,
    yPercent: 56,
    details: [
      "Programming & Zoho",
      "Consultancy & Ops",
      "Cybersecurity",
      "Events & Exhibitions",
      "Management Consulting",
      "Accounting & Tax",
    ],
  },
];

export default function Globe() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl"
      >
        {/* Globe disc */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200 to-blue-400" />

        {/* Rotating world map texture using public/globe.svg */}
        <div
          className="absolute inset-0 rounded-full globe-spin opacity-90"
          style={{
            backgroundImage: "url('/globe.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "220% 220%",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
          }}
        />

        {/* Gloss highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-full"
             style={{
               background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.55), rgba(255,255,255,0.08) 35%, rgba(255,255,255,0) 55%)",
             }}
        />

        {/* Pins (rotate with the globe so they stay geographically positioned) */}
        <div className="absolute inset-0 rounded-full globe-spin">
          {pins.map((p) => (
            <div
              key={p.label}
              className="absolute group"
              style={{ left: `${p.xPercent}%`, top: `${p.yPercent}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className="relative">
                <div className="h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-white shadow ring-2 ring-blue-600" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-0.5 bg-blue-600/80" />
              </div>
              {/* Tooltip */}
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="whitespace-nowrap rounded-md bg-white/95 px-3 py-2 text-xs shadow-lg ring-1 ring-black/5">
                  <div className="font-medium text-gray-900 mb-1">{p.label}</div>
                  <ul className="text-gray-700 space-y-0.5">
                    {p.details.map((d) => (
                      <li key={d}>• {d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rim shadow for depth */}
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(0,0,0,0.25)]" />
      </motion.div>
    </div>
  );
}



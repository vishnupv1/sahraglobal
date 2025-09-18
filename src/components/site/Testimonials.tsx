"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Sahra Global transformed our online presence and handled our UAE filings seamlessly.",
    author: "CEO, Dubai SME",
  },
  {
    quote:
      "Reliable partner for our logistics documentation and visa processing.",
    author: "Operations Manager, Trading Co.",
  },
  {
    quote:
      "Their marketing campaigns delivered measurable ROI in the UAE market.",
    author: "Founder, E-commerce Startup",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const didMount = useRef(false);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // Sync horizontal scroll on mobile with active index without vertical page jump
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    const track = scrollRef.current;
    const el = itemRefs.current[index];
    if (track && el) {
      const left = el.offsetLeft - 12; // account for px-3 padding
      track.scrollTo({ left, behavior: "smooth" });
    }
  }, [index]);

  return (
    <div className="relative">
      {/* Mobile: horizontal scroll, no wrapping */}
      <div className="md:hidden -mx-3 overflow-x-auto px-3" ref={scrollRef}>
        <div className="flex snap-x snap-mandatory gap-4 overflow-visible pb-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(node) => { itemRefs.current[i] = node; }}
              className="min-w-[85%] snap-start"
            >
              <Card className={`transition-opacity ${i === index ? "opacity-100" : "opacity-70"}`}>
                <CardContent className="pt-6 text-sm text-muted-foreground">
                  “{t.quote}”
                  <div className="mt-4 text-xs">{t.author}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 3-column grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-3 items-stretch">
        {testimonials.map((t, i) => (
          <Card key={i} className={`${i === index ? "opacity-100" : "opacity-70 transition-opacity"} h-full`}>
            <CardContent className="pt-6 text-sm text-muted-foreground h-full">
              “{t.quote}”
              <div className="mt-4 text-xs">{t.author}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${i === index ? "bg-accent" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  );
}



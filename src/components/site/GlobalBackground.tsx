"use client";

export default function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-28 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-sky-200/30 to-sky-400/20 blur-xl" />
      <div className="absolute top-24 right-10 h-[48rem] w-[48rem] rounded-full bg-gradient-to-br from-sky-300/25 via-sky-200/20 to-sky-300/20 blur-xl" />
    </div>
  );
}



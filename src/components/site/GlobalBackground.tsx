"use client";

export default function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-28 -left-20 h-96 w-96 rounded-full bg-gradient-to-br from-blue-400/60 to-blue-600/40 blur-xl" />
      <div className="absolute top-24 right-10 h-[48rem] w-[48rem] rounded-full bg-gradient-to-br from-blue-500/50 via-blue-300/45 to-blue-400/45 blur-xl" />
    </div>
  );
}



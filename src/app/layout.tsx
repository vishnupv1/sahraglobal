import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/site/Navbar";
import Footer from "../components/site/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Starway Link — UAE Business Services",
    template: "%s — Starway Link",
  },
  description:
    "UAE-based company offering web development, digital marketing, tax & finance, logistics, data entry, and visa assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col relative`}>
        {/* Global background animated blobs */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 -left-16 h-96 w-96 rounded-full bg-gradient-to-br from-[#a78bfa]/60 to-[#a78bfa]/20 blur-2xl animate-blob" />
          <div className="absolute top-6 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-[#34d399]/60 via-[#a78bfa]/25 to-[#34d399]/30 blur-2xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-[#a78bfa]/50 to-[#34d399]/40 blur-2xl animate-blob animation-delay-4000" />
        </div>
        <Navbar />
        <main className="flex-1 pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

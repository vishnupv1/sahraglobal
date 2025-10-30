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
    default: "Starwaylink Services LLC — UAE Business Services",
    template: "%s — Starwaylink Services LLC",
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
        {/* Global background animated blobs (disabled globally; scoped per-page) */}
        {/* <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-28 -left-16 h-96 w-96 rounded-full bg-gradient-to-br from-purple-400/60 to-purple-600/40 blur-xl animate-blob" />
          <div className="absolute top-6 right-0 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-purple-500/50 via-purple-300/40 to-purple-400/45 blur-xl animate-blob animation-delay-2000" />
        </div> */}
        {/* Removed top fade overlay to eliminate visual separation between navbar and content */}
        <Navbar />
        <main className="flex-1 pb-16 sm:pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

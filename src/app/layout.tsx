import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/site/Navbar";
import Footer from "../components/site/Footer";
import GlobalBackground from "../components/site/GlobalBackground";

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
        <GlobalBackground />
        {/* Removed top fade overlay to eliminate visual separation between navbar and content */}
        <Navbar />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

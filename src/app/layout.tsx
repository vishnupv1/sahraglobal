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
    default: "Sahra Global — UAE Business Services",
    template: "%s — Sahra Global",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}>
        <Navbar />
        <main className="flex-1 pb-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

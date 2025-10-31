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
  metadataBase: new URL("https://www.starwaylinkservices.com"),
  title: {
    default: "Starwaylink Services LLC — UAE Business Services",
    template: "%s — Starwaylink Services LLC",
  },
  description:
    "UAE-based company offering web development, digital marketing, tax & finance, logistics, data entry, and visa assistance.",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico", rel: "shortcut icon" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicon_io/android-chrome-192x192.png" },
      { rel: "android-chrome", url: "/favicon_io/android-chrome-512x512.png" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.starwaylinkservices.com/",
    title: "Starwaylink Services LLC — UAE Business Services",
    description:
      "UAE-based company offering web development, digital marketing, tax & finance, logistics, data entry, and visa assistance.",
    siteName: "Starwaylink Services LLC",
    images: [{ url: "/logoOG.png", width: 1200, height: 630, alt: "Starwaylink Services LLC" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Starwaylink Services LLC — UAE Business Services",
    description:
      "UAE-based company offering web development, digital marketing, tax & finance, logistics, data entry, and visa assistance.",
    images: ["/logoOG.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  keywords: [
    "UAE business services",
    "web development UAE",
    "digital marketing UAE",
    "tax and finance UAE",
    "logistics UAE",
    "data entry UAE",
    "visa assistance UAE",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Starwaylink Services LLC',
              url: 'https://www.starwaylinkservices.com/',
              logo: 'https://www.starwaylinkservices.com/logoOG.png',
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col relative`}>
        <GlobalBackground />
        {/* Removed top fade overlay to eliminate visual separation between navbar and content */}
        <Navbar />
        <main className="flex-1 pb-16 md:pb-24 lg:pb-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

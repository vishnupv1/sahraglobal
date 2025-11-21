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
    default: "Best Digital Marketing Agency UAE | VAT Services & Software Development",
    template: "%s | Starwaylink Services LLC",
  },
  description:
    "Best digital marketing agency in UAE. Expert VAT services, software development, web development, tax & finance, logistics, and business solutions. Trusted by UAE businesses.",
  manifest: "/favicon_io/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/favicon_io/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/favicon_io/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.starwaylinkservices.com/",
    title: "Best Digital Marketing Agency UAE | VAT Services & Software Development",
    description:
      "Best digital marketing agency in UAE. Expert VAT services, software development, web development, tax & finance, logistics, and business solutions. Trusted by UAE businesses.",
    siteName: "Starwaylink Services LLC",
    images: [{ url: "/logoOG.png", width: 1200, height: 630, alt: "Starwaylink Services LLC - Best Digital Marketing Agency UAE" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency UAE | VAT Services & Software Development",
    description:
      "Best digital marketing agency in UAE. Expert VAT services, software development, web development, tax & finance, logistics, and business solutions.",
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
    "best digital marketing agency",
    "digital marketing agency UAE",
    "VAT services",
    "VAT services UAE",
    "VAT filing UAE",
    "software development",
    "software development UAE",
    "web development UAE",
    "UAE business services",
    "tax and finance UAE",
    "logistics UAE",
    "data entry UAE",
    "visa assistance UAE",
    "best digital marketing company",
    "VAT registration UAE",
    "corporate tax UAE",
    "bookkeeping services UAE",
    "web design UAE",
    "custom software development",
    "SEO services UAE",
    "SEM services UAE",
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
              description: 'Best digital marketing agency in UAE. Expert VAT services, software development, web development, tax & finance, logistics, and business solutions.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Sharjah',
                addressRegion: 'Sharjah',
                addressCountry: 'AE',
                streetAddress: 'Sharjah Media City (Shams Free Zone), Business park in Al Bataeh',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971585993858',
                contactType: 'Customer Service',
                email: 'admin@starwaylinkservices.com',
                areaServed: 'AE',
                availableLanguage: ['en', 'ar'],
              },
              sameAs: [],
              areaServed: {
                '@type': 'Country',
                name: 'United Arab Emirates',
              },
              service: [
                {
                  '@type': 'Service',
                  name: 'Digital Marketing',
                  description: 'Best digital marketing agency in UAE offering SEO, SEM, and content strategies.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'VAT Services',
                  description: 'Expert VAT services, VAT filing, VAT registration, and tax compliance in UAE.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Software Development',
                  description: 'Custom software development, web development, and application development in UAE.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Tax & Finance',
                  description: 'Corporate tax, VAT filing, bookkeeping, and financial advisory services in UAE.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Web Development',
                  description: 'Modern websites and web applications using Next.js and best practices.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Logistics',
                  description: 'Freight coordination, customs documentation, and supply chain support in UAE.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Data Entry',
                  description: 'Accurate back-office data processing and digitization services.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
                {
                  '@type': 'Service',
                  name: 'Visa Services',
                  description: 'Company setup support and visa processing assistance in UAE.',
                  provider: {
                    '@type': 'Organization',
                    name: 'Starwaylink Services LLC',
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Starwaylink Services LLC',
              url: 'https://www.starwaylinkservices.com/',
              description: 'Best digital marketing agency in UAE. Expert VAT services, software development, web development, tax & finance, logistics, and business solutions.',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://www.starwaylinkservices.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://www.starwaylinkservices.com/#organization',
              name: 'Starwaylink Services LLC',
              image: 'https://www.starwaylinkservices.com/logoOG.png',
              url: 'https://www.starwaylinkservices.com/',
              telephone: '+971585993858',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Sharjah Media City (Shams Free Zone), Business park in Al Bataeh',
                addressLocality: 'Sharjah',
                addressRegion: 'Sharjah',
                postalCode: '',
                addressCountry: 'AE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 25.278288311314654,
                longitude: 55.67872479069089,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '09:00',
                closes: '18:00',
              },
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

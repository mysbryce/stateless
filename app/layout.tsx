import type { Metadata } from "next"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import Head from "next/head"
import Script from "next/script"
import Navbar from "@/components/navbar"

import { Anuphan, Poppins } from "next/font/google"
import "./globals.css"

const fontAnuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin", "thai"],
})

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.e2ends.xyz"),
  title: {
    default: "999s Portfolio | Full Stack Developer",
    template: "%s | 999s Portfolio"
  },
  description: "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript. View my projects and get in touch for collaboration opportunities.",
  generator: "999s.dev",
  applicationName: "999s Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Web Development", "Frontend Developer", "Portfolio", "Hire Developer"],
  authors: [{ name: "999s", url: "https://portfolio.e2ends.xyz" }],
  creator: "999s",
  publisher: "999s",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "999s Portfolio | Full Stack Developer",
    description: "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript. View my projects and get in touch for collaboration opportunities.",
    url: "https://portfolio.e2ends.xyz",
    siteName: "999s Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "999s Portfolio Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "999s Portfolio | Full Stack Developer",
    description: "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript. View my projects and get in touch for collaboration opportunities.",
    images: ["/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  category: "technology",
  alternates: {
    canonical: "https://portfolio.e2ends.xyz",
    languages: {
      'en-US': 'https://portfolio.e2ends.xyz/en-US',
      'th-TH': 'https://portfolio.e2ends.xyz/th-TH',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <GoogleTagManager gtmId="GTM-WCDNW3G5" />
      <body
        className={`${fontPoppins.className} ${fontAnuphan.className} bg-base-200 antialiased min-h-screen`}
      >
        <div className="max-w-4xl mx-auto pt-6">
          <Navbar />
        </div>
        {children}

        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://portfolio.e2ends.xyz/#about",
              "name": "999s",
              "url": "https://portfolio.e2ends.xyz",
              "sameAs": [
                "https://github.com/mysbryce",
                "https://portfolio.e2ends.xyz"
              ],
              "jobTitle": "Full Stack Developer",
              "knowsAbout": ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
              "worksFor": {
                "@type": "Organization",
                "name": "Meta Script Collective"
              }
            }
          `}
        </Script>

        <Script id="schema-website" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://portfolio.e2ends.xyz/#about",
              "url": "https://portfolio.e2ends.xyz",
              "name": "Stateless Portfolio",
              "description": "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript.",
              "publisher": {
                "@id": "https://portfolio.e2ends.xyz/#about"
              }
            }
          `}
        </Script>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

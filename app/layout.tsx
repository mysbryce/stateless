import type { Metadata } from "next";
import { Anuphan, Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";
import Navbar from "@/components/navbar";

const fontAnuphan = Anuphan({
  variable: "--font-anuphan",
  subsets: ["latin", "thai"],
});

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stateless-prt.vercel.app"),
  title: {
    default: "999s Portfolio | Full Stack Developer",
    template: "%s | 999s Portfolio"
  },
  description: "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript. View my projects and get in touch for collaboration opportunities.",
  generator: "999s.dev",
  applicationName: "999s Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Web Development", "Frontend Developer", "Portfolio", "Hire Developer"],
  authors: [{ name: "999s", url: "https://stateless-prt.vercel.app" }],
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
    url: "https://stateless-prt.vercel.app",
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
    canonical: "https://stateless-prt.vercel.app",
    languages: {
      'en-US': 'https://stateless-prt.vercel.app/en-US',
      'th-TH': 'https://stateless-prt.vercel.app/th-TH',
    },
  },
};

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
              "@id": "https://stateless-prt.vercel.app/#about",
              "name": "999s",
              "url": "https://stateless-prt.vercel.app",
              "sameAs": [
                "https://github.com/mysbryce",
                "https://stateless-prt.vercel.app"
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
              "@id": "https://stateless-prt.vercel.app/#about",
              "url": "https://stateless-prt.vercel.app",
              "name": "Stateless Portfolio",
              "description": "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript.",
              "publisher": {
                "@id": "https://stateless-prt.vercel.app/#about"
              }
            }
          `}
        </Script>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

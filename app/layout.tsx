import type React from "react"
import "./globals.css"
import { Inter, Noto_Sans_Thai } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })
const notoSansThai = Noto_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-noto-sans-thai",
})

export const metadata = {
  metadataBase: new URL("https://stateless-prt.vercel.app"),
  title: {
    default: "Stateless Portfolio | Full Stack Developer",
    template: "%s | Stateless Portfolio"
  },
  description: "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript. View my projects and get in touch for collaboration opportunities.",
  generator: "stateless.dev",
  applicationName: "Stateless Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Full Stack Developer", "React Developer", "Next.js Developer", "TypeScript Developer", "Web Development", "Frontend Developer", "Portfolio", "Hire Developer"],
  authors: [{ name: "Stateless", url: "https://stateless-prt.vercel.app" }],
  creator: "Stateless",
  publisher: "Stateless",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Stateless Portfolio | Full Stack Developer",
    description: "Expert full stack developer specializing in React, Next.js, Node.js and TypeScript. View my projects and get in touch for collaboration opportunities.",
    url: "https://stateless-prt.vercel.app",
    siteName: "Stateless Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stateless Portfolio Preview",
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
    title: "Stateless Portfolio | Full Stack Developer",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${inter.className} ${notoSansThai.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        <Script id="schema-person" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://stateless-prt.vercel.app/#about",
              "name": "Stateless",
              "url": "https://stateless-prt.vercel.app",
              "sameAs": [
                "https://github.com/mysbryce",
                "https://stateless-prt.vercel.app"
              ],
              "jobTitle": "Full Stack Developer",
              "knowsAbout": ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
              "worksFor": {
                "@type": "Organization",
                "name": "Stateless"
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
      </body>
    </html>
  )
}

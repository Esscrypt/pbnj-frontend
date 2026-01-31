import type { Metadata } from "next"
import type { ReactNode } from "react"
import type { Viewport } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { StructuredData } from "@/components/StructuredData"

import { getSiteUrl } from "@/lib/site-url"

const SITE_URL = getSiteUrl()

const SHARE_TITLE = "Peanut Butter AND JAM | JAM Protocol"
const SHARE_DESCRIPTION =
  "Join-Accumulate Machine protocol implementation. Safrole consensus, PVM, Gray Paper–aligned. Built for the next generation of decentralized infrastructure."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SHARE_TITLE,
    template: "%s | Peanut Butter AND JAM",
  },
  description: SHARE_DESCRIPTION,
  keywords: [
    "JAM",
    "Join-Accumulate Machine",
    "Safrole",
    "PVM",
    "Gray Paper",
    "blockchain",
    "Polkadot",
    "Esscrypt",
  ],
  authors: [{ name: "Esscrypt Ltd.", url: "https://esscrypt.com" }],
  creator: "Esscrypt Ltd.",
  publisher: "Esscrypt Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: SITE_URL,
    siteName: "Peanut Butter AND JAM",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Peanut Butter AND JAM",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SHARE_DESCRIPTION,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Peanut Butter AND JAM",
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: SITE_URL },
  formatDetection: { email: false, address: false, telephone: false },
}

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#fff8e7",
  }
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col text-[#2d1f17] antialiased">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LinkSpark | Affiliate Marketing Made Simple",
  description:
    "Earn money online through affiliate marketing with LinkSpark's innovative platform. Join for free today!",
  keywords: ["affiliate marketing", "make money online", "passive income", "digital marketing", "LinkSpark"],
  authors: [{ name: "LinkSpark Team" }],
  creator: "LinkSpark",
  publisher: "LinkSpark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://linkspark.com",
    title: "LinkSpark | Affiliate Marketing Made Simple",
    description:
      "Earn money online through affiliate marketing with LinkSpark's innovative platform. Join for free today!",
    siteName: "LinkSpark",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkSpark | Affiliate Marketing Made Simple",
    description:
      "Earn money online through affiliate marketing with LinkSpark's innovative platform. Join for free today!",
    creator: "@linkspark",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://linkspark.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

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
  title: "LinkSparkCo | Affiliate Marketing Made Simple",
  description:
    "Earn money online through affiliate marketing with LinkSpark's innovative platform. Join for free today!",
  keywords: ["affiliate marketing", "make money online", "passive income", "digital marketing", "LinkSparkCo"],
  authors: [{ name: "LinkSparkCo Team" }],
  creator: "LinkSparkCo",
  publisher: "LinkSparkCo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://LinkSparkCo.com",
    title: "LinkSparkCo | Affiliate Marketing Made Simple",
    description:
      "Earn money online through affiliate marketing with LinkSparkCo's innovative platform. Join for free today!",
    siteName: "LinkSparkCo",
  },
  twitter: {
    card: "summary_large_image",
    title: "LinkSparkCo | Affiliate Marketing Made Simple",
    description:
      "Earn money online through affiliate marketing with LinkSparkCo's innovative platform. Join for free today!",
    creator: "@LinkSparkCo",
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
        <link rel="canonical" href="https://linksparkco.com" />
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

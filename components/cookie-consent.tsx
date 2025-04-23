"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      // Show the cookie consent banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t shadow-lg md:flex md:items-center md:justify-between">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold mb-2">We use cookies</h3>
            <p className="text-muted-foreground">
              We use cookies to improve your experience on our site. Some are essential for the site to function
              properly, while others help us understand how you use the site and allow us to personalize content.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={declineCookies} className="whitespace-nowrap" asChild>
              <Link href="/cookies">Decline</Link>
            </Button>
            <Button onClick={acceptCookies} className="whitespace-nowrap bg-pink-500 hover:bg-pink-600">
              Accept All Cookies
            </Button>
          </div>
          <Button variant="ghost" size="icon" onClick={declineCookies} className="absolute top-2 right-2 md:hidden">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

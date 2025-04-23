"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/register/success")
    }, 1500)
  }

  return (
    <div className="flex flex-col items-center py-10 px-4 md:px-6 bg-gradient-to-b from-purple-900 to-purple-700 min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Register</h1>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Join LinkSparkCo Affiliate Network</CardTitle>
            <CardDescription>
              Fill out the form below to create your account and start earning with LinkSparkCo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Phone Number" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm Password" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website URL (if any)</Label>
                    <Input id="website" placeholder="Website URL" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="socialMedia">Social Media Handles</Label>
                    <Input id="socialMedia" placeholder="Instagram, Facebook, etc." />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Address</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address1">Address Line 1</Label>
                      <Input id="address1" placeholder="Address Line 1" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input id="state" placeholder="State/Province" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" placeholder="Postal Code" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input id="country" placeholder="Country" required />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="experience">How much experience do you have with affiliate marketing?</Label>
                      <Input id="experience" placeholder="Beginner, Intermediate, Advanced" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="traffic">What are your main traffic sources?</Label>
                      <Input id="traffic" placeholder="Blog, Social Media, Email, etc." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="goals">What are your affiliate marketing goals?</Label>
                      <Textarea id="goals" placeholder="Tell us about your goals" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="referral">How did you hear about us?</Label>
                      <Input id="referral" placeholder="Search, Referral, Social Media, etc." />
                    </div>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Apply Now"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

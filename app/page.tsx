'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import HeroSection from "@/components/hero-section"
import TestimonialSection from "@/components/testimonial-section"
import HowItWorksSection from "@/components/how-it-works-section"
import BlogPreviewSection from "@/components/blog-preview-section"
import SEOSchema from "@/components/seo-schema"
import AnimateInView from "@/components/animate-in-view"
import StaggerContainer from "@/components/stagger-container"
import StaggerItem from "@/components/stagger-item"
import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col items-center">
      <SEOSchema
        type="website"
        data={{
          name: "LinkSpark | Affiliate Marketing Made Simple",
          url: "https://linksparkco.com",
          description:
            "Earn money online through affiliate marketing with LinkSpark's innovative platform. Join for free today!",
          logoUrl: "https://linksparkco.com/logo.png",
        }}
      />

      <SEOSchema
        type="organization"
        data={{
          url: "https://linksparkco.com",
          logoUrl: "https://linksparkco.com/logo.png",
          email: "info@linksparkco.com",
          areaServed: "Tel Aviv-Yafo, 6701203, Israel",
        }}
      />

      <HeroSection />

      {/* What is Affiliate Marketing Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <AnimateInView animation="slide-right" className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What is Affiliate Marketing?
              </h2>
              <StaggerContainer className="space-y-4" staggerDelay={0.2}>
                <StaggerItem animation="fade">
                  <p className="text-lg text-muted-foreground">
                    Affiliate marketing is a performance-based marketing strategy where businesses reward affiliates
                    (that's you!) for bringing customers to their products or services through your marketing efforts.
                  </p>
                </StaggerItem>
                <StaggerItem animation="fade">
                  <p className="text-lg text-muted-foreground">
                    In simple terms, you promote products you love, and when someone buys through your unique link, you
                    earn a commission—without having to create, stock, or ship anything yourself.
                  </p>
                </StaggerItem>
                <StaggerItem animation="fade">
                  <div className="flex items-start space-x-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">You Promote</h3>
                      <p>
                        Share products or services with your audience through your website, social media, or email list.
                      </p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem animation="fade">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">They Purchase</h3>
                      <p>Your audience clicks your affiliate links and makes purchases from the merchant.</p>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem animation="fade">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">You Earn</h3>
                      <p>You receive a commission for each sale made through your unique affiliate links.</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </AnimateInView>
            <AnimateInView animation="slide-left" delay={0.3} className="flex items-center justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <div className="aspect-video w-full max-w-[550px]">
                  <Image
                    src="/chatbot.png"
                    width={600}
                    height={400}
                    alt="Affiliate Marketing Concept"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex items-center justify-between">
                    <Button asChild className="w-full bg-pink-500 hover:bg-pink-600">
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        Register
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimateInView>
          </div>

          <AnimateInView animation="slide-up" delay={0.5} className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Perfect for Beginners</h3>
                <p>Start with zero experience and minimal investment—all you need is passion and dedication.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Passive Income Potential</h3>
                <p>Create content once and earn commissions for months or even years to come.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Location Independence</h3>
                <p>Work from anywhere with an internet connection—be it home, beach, or coffee shop.</p>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Free Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="fade" duration={0.7}>
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Absolutely FREE!</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Start your affiliate marketing journey without any upfront costs. We believe in your success and only
                earn when you do.
              </p>
              <div className="flex items-center justify-center mt-6">
                <div className="relative">
                  <div className="absolute -left-12 -top-1">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 25C15 15 5 5 2 5" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                    <Link href="/register">Join Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="slide-up">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What makes LinkSpark the #1 choice for affiliate marketers?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                We train you on how to promote products, making money online through maximum conversion strategies.
              </p>
            </div>
          </AnimateInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" staggerDelay={0.2}>
            <StaggerItem animation="slide-up">
              <Card>
                <CardHeader>
                  <CardTitle>High-Converting Offers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Access to exclusive high-converting offers that have been tested and proven to generate significant
                    revenue.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem animation="slide-up">
              <Card>
                <CardHeader>
                  <CardTitle>Expert Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive training materials and resources to help you master affiliate marketing strategies.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem animation="slide-up">
              <Card>
                <CardHeader>
                  <CardTitle>Real-Time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Track your performance with detailed analytics and insights to optimize your campaigns for better
                    results.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <HowItWorksSection />

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="fade">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                You bring the passion and we'll bring the results
              </h2>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <StaggerContainer className="flex flex-col space-y-4" staggerDelay={0.15}>
              <StaggerItem animation="slide-left">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-pink-500 flex-shrink-0" />
                  <p className="text-lg">100% reliable tracking</p>
                </div>
              </StaggerItem>
              <StaggerItem animation="slide-left">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-pink-500 flex-shrink-0" />
                  <p className="text-lg">Dedicated account manager</p>
                </div>
              </StaggerItem>
              <StaggerItem animation="slide-left">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-pink-500 flex-shrink-0" />
                  <p className="text-lg">Weekly payments, no thresholds</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
            <StaggerContainer className="flex flex-col space-y-4" staggerDelay={0.15} delay={0.2}>
              <StaggerItem animation="slide-right">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-pink-500 flex-shrink-0" />
                  <p className="text-lg">Access to exclusive offers</p>
                </div>
              </StaggerItem>
              <StaggerItem animation="slide-right">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-pink-500 flex-shrink-0" />
                  <p className="text-lg">Comprehensive marketing materials</p>
                </div>
              </StaggerItem>
              <StaggerItem animation="slide-right">
                <div className="flex items-start space-x-3">
                  <Check className="h-6 w-6 text-pink-500 flex-shrink-0" />
                  <p className="text-lg">24/7 support for all your needs</p>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <AnimateInView animation="scale" delay={0.3}>
            <div className="flex justify-center mt-10">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </AnimateInView>
        </div>
      </section>

      <TestimonialSection />
      <BlogPreviewSection />

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-900 text-white">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="slide-up">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to start turning your interests to generate income online - FREE
              </h2>
              <p className="max-w-[700px] text-slate-300 md:text-xl">
                Join thousands of successful affiliate marketers who have transformed their online presence into a
                profitable business.
              </p>
              <div className="flex items-center justify-center mt-6">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                  <Link href="/register">Join Now</Link>
                </Button>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>
    </div>
  )
}

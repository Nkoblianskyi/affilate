"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateInView from "@/components/animate-in-view"
import StaggerContainer from "@/components/stagger-container"
import StaggerItem from "@/components/stagger-item"

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <AnimateInView animation="slide-right" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">About LinkSparkCo</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Revolutionizing affiliate marketing with innovative solutions that empower digital publishers.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                    Join Our Network
                  </Button>
                </Link>
              </div>
            </AnimateInView>
            <AnimateInView animation="slide-left" delay={0.3} className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="About LinkSpark"
                className="rounded-xl object-cover"
              />
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="fade">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Founded with a vision to transform the affiliate marketing landscape, LinkSpark has grown from a small
                startup to a leading platform in the industry.
              </p>
            </div>
          </AnimateInView>

          <StaggerContainer className="grid grid-cols-1 gap-6 mt-8 text-left" staggerDelay={0.2}>
            <StaggerItem animation="fade">
              <p className="text-lg">
                LinkSpark was established in 2018 with a simple mission: to make affiliate marketing accessible,
                transparent, and profitable for everyone. We recognized the challenges that digital publishers faced in
                monetizing their content and connecting with the right advertisers.
              </p>
            </StaggerItem>
            <StaggerItem animation="fade">
              <p className="text-lg">
                Our team of industry experts developed a platform that bridges the gap between publishers and
                advertisers, creating a seamless ecosystem where both parties can thrive. We've invested heavily in
                technology that ensures accurate tracking, timely payments, and comprehensive analytics.
              </p>
            </StaggerItem>
            <StaggerItem animation="fade">
              <p className="text-lg">
                Today, LinkSpark serves thousands of publishers worldwide, helping them generate sustainable income
                through strategic partnerships with premium advertisers. Our commitment to innovation, integrity, and
                exceptional service has made us a trusted name in the affiliate marketing space.
              </p>
            </StaggerItem>
            <StaggerItem animation="fade">
              <p className="text-lg">
                As we continue to grow, we remain dedicated to our core values of transparency, reliability, and mutual
                success. We believe that when our publishers succeed, we succeed, and this philosophy guides everything
                we do.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="slide-up">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                The principles that guide our business and relationships with our partners.
              </p>
            </div>
          </AnimateInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8" staggerDelay={0.1}>
            <StaggerItem animation="scale">
              <Card>
                <CardHeader>
                  <CardTitle>Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We believe in complete transparency in all our operations, from tracking to payments. Our partners
                    always know exactly where they stand.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem animation="scale">
              <Card>
                <CardHeader>
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We continuously invest in cutting-edge technology to provide our partners with the most effective
                    tools and solutions in the industry.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem animation="scale">
              <Card>
                <CardHeader>
                  <CardTitle>Partnership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We view our relationship with publishers and advertisers as true partnerships, where mutual success
                    is the ultimate goal.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem animation="scale">
              <Card>
                <CardHeader>
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We strive for excellence in everything we do, from the quality of our platform to the support we
                    provide our partners.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem animation="scale">
              <Card>
                <CardHeader>
                  <CardTitle>Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We conduct our business with the highest level of integrity, ensuring that all interactions are
                    honest, fair, and ethical.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
            <StaggerItem animation="scale">
              <Card>
                <CardHeader>
                  <CardTitle>Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We are committed to the growth and success of our partners, providing them with the resources and
                    support they need to thrive.
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="fade">
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose LinkSpark</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                What sets us apart from other affiliate marketing platforms.
              </p>
            </div>
          </AnimateInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <AnimateInView animation="slide-right" className="space-y-4">
              <h3 className="text-2xl font-bold">For Publishers</h3>
              <StaggerContainer className="space-y-2" staggerDelay={0.1}>
                {[
                  "Access to exclusive, high-converting offers",
                  "Weekly payments with no minimum thresholds",
                  "Comprehensive training and resources",
                  "Dedicated account managers for personalized support",
                  "Advanced tracking and reporting tools",
                ].map((item, index) => (
                  <StaggerItem key={index} animation="slide-up">
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimateInView>
            <AnimateInView animation="slide-left" delay={0.3} className="space-y-4">
              <h3 className="text-2xl font-bold">For Advertisers</h3>
              <StaggerContainer className="space-y-2" staggerDelay={0.1}>
                {[
                  "Access to a network of quality publishers",
                  "Performance-based marketing with measurable ROI",
                  "Fraud detection and prevention systems",
                  "Customizable campaign options",
                  "Detailed analytics and insights",
                ].map((item, index) => (
                  <StaggerItem key={index} animation="slide-up">
                    <li className="flex items-start space-x-2">
                      <span className="text-pink-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimateInView>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-pink-50">
        <div className="container px-4 md:px-6">
          <AnimateInView animation="scale">
            <div className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Join the LinkSparkCo Family?
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Start your journey with LinkSparkCo today and discover the potential of affiliate marketing.
              </p>
              <div className="flex items-center justify-center mt-6">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                  <Link href="/register">Register Now</Link>
                </Button>
              </div>
            </div>
          </AnimateInView>
        </div>
      </section>
    </div>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import AnimateInView from "@/components/animate-in-view"
import StaggerContainer from "@/components/stagger-container"
import StaggerItem from "@/components/stagger-item"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <StaggerContainer className="flex flex-col justify-center space-y-4" staggerDelay={0.2}>
            <StaggerItem animation="fade">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-pink-500 text-primary-foreground hover:bg-pink-500/80">
                New Program Launch
              </div>
            </StaggerItem>
            <StaggerItem animation="slide-up">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  We train people just like you how to earn online - FREE!
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousands of successful affiliate marketers who are generating passive income through our proven
                  strategies.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem animation="slide-up">
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white">
                  <Link href="/register">Join Now - It's Free</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </StaggerItem>
            <StaggerItem animation="fade">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <span className="font-medium">4.9/5</span>
                  <div className="flex">
                    {Array(5)
                      .fill(null)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-pink-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                </div>
                <div>10,000+ successful affiliates</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
          <AnimateInView animation="slide-left" delay={0.4} className="flex items-center justify-center">
            <div className="relative h-[450px] w-[450px]">
              <Image
                src="/meeting.png"
                width={450}
                height={450}
                alt="LinkSparkCo Affiliate Marketing"
                className="rounded-xl object-cover"
              />
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  )
}

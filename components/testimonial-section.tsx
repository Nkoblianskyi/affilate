"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import AnimateInView from "@/components/animate-in-view"
import StaggerContainer from "@/components/stagger-container"
import StaggerItem from "@/components/stagger-item"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "LinkSpark has completely transformed my online business. I've been able to generate consistent income through their high-converting offers.",
      author: "Marketing Professional",
      role: "Lifestyle Blogger",
    },
    {
      quote:
        "The support team at LinkSpark is exceptional. They're always available to answer questions and provide guidance on optimizing my campaigns.",
      author: "Content Creator",
      role: "Tech Reviewer",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <AnimateInView animation="fade">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What People Say</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it. Here's what our publishers have to say.
            </p>
          </div>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8" staggerDelay={0.3}>
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index} animation="slide-up">
              <Card className="overflow-hidden border-none shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <AnimateInView
                      animation="scale"
                      delay={0.2}
                      className="relative w-20 h-20 rounded-full overflow-hidden mb-4"
                    >
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        width={80}
                        height={80}
                        alt={testimonial.author}
                        className="object-cover"
                      />
                    </AnimateInView>
                    <div className="space-y-2">
                      <div className="flex justify-center">
                        {Array(5)
                          .fill(null)
                          .map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5 text-yellow-400"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                      </div>
                      <blockquote className="text-lg italic">"{testimonial.quote}"</blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

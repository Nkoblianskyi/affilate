"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateInView from "@/components/animate-in-view"
import StaggerContainer from "@/components/stagger-container"
import StaggerItem from "@/components/stagger-item"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your free account in minutes and get instant access to our platform.",
    },
    {
      number: "02",
      title: "Choose Offers",
      description: "Browse our marketplace of high-converting offers and select the ones that match your audience.",
    },
    {
      number: "03",
      title: "Promote",
      description: "Use our marketing materials and strategies to promote the offers to your audience.",
    },
    {
      number: "04",
      title: "Earn",
      description: "Earn commissions for every successful referral and get paid weekly.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <AnimateInView animation="slide-up">
          <div className="flex flex-col items-center text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works in a Nutshell</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our simple 4-step process to start earning with affiliate marketing
            </p>
          </div>
        </AnimateInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.number} animation="scale">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

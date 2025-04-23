"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView, type Variant } from "framer-motion"

interface AnimateInViewProps {
  children: React.ReactNode
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "bounce"
  duration?: number
  delay?: number
  once?: boolean
  className?: string
  threshold?: number
}

export default function AnimateInView({
  children,
  animation = "fade",
  duration = 0.5,
  delay = 0,
  once = true,
  className = "",
  threshold = 0.1,
}: AnimateInViewProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 50 : animation === "slide-down" ? -50 : 0,
      x: animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0,
      scale: animation === "scale" ? 0.8 : 1,
    } as Variant,
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: animation === "bounce" ? "backOut" : "easeOut",
      },
    } as Variant,
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

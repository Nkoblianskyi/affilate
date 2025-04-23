"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
  threshold?: number
}

export default function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  once = true,
  threshold = 0.1,
}: StaggerContainerProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("show")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [isInView, controls, once])

  return (
    <motion.div ref={ref} className={className} variants={container} initial="hidden" animate={controls}>
      {children}
    </motion.div>
  )
}

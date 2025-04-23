"use client"

import type React from "react"

import { motion } from "framer-motion"

interface StaggerItemProps {
  children: React.ReactNode
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "bounce"
  duration?: number
  className?: string
}

export default function StaggerItem({
  children,
  animation = "fade",
  duration = 0.5,
  className = "",
}: StaggerItemProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 50 : animation === "slide-down" ? -50 : 0,
      x: animation === "slide-left" ? 50 : animation === "slide-right" ? -50 : 0,
      scale: animation === "scale" ? 0.8 : 1,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: animation === "bounce" ? "backOut" : "easeOut",
      },
    },
  }

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  )
}

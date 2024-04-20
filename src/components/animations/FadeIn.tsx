'use client';
import React from "react"
import { AnimationProps, motion } from "framer-motion"

type Props = {
  children: React.ReactNode
  className?: React.StyleHTMLAttributes<HTMLImageElement>['className'],

  initial?: AnimationProps['initial'],
  animate?: AnimationProps['animate'],
  transition?: AnimationProps['transition'],
  variants?: AnimationProps['variants'],
}

export const FadeIn = ({
  children,
  className,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = {
    delay: 0.1,
    ease: 'easeInOut',
    duration: 0.5
  },
  variants,
}: Props) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      viewport={{ amount: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

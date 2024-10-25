'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedBodyProps {
  children: ReactNode
}

export default function AnimatedBody({ children }: AnimatedBodyProps) {
  return (
    <motion.div
    initial={{ y: "50%", opacity: 0 }}
    animate={{ y: "0%", opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

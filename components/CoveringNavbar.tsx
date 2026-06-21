'use client' // Required in Next.js App Router for Framer Motion
import { motion } from 'framer-motion'
import React from 'react'

const PageTransition = ({ children }) => {
  return (
    <motion.main  
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}

export default PageTransition
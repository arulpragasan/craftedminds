'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function Belief() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [revealedLines, setRevealedLines] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger progressive reveal when section comes into view
            lines.forEach((_, index) => {
              setTimeout(() => {
                setRevealedLines(index + 1)
              }, index * 800)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const lines = [
    'Luxury',
    "isn't just sold.",
    'It\'s discovered.',
    'It\'s remembered.',
    'It\'s experienced.',
  ]

  const lineVariants = {
    hidden: { opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section id="belief"
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center bg-background px-8 lg:px-12 py-24"
    >
      {/* Subtle background gradient transition */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      </div>

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        {/* Main text content */}
        <div className="space-y-8 font-serif text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl">
          {lines.map((line, index) => (
            <motion.div
              key={index}
              variants={lineVariants}
              initial="hidden"
              animate={revealedLines > index ? 'visible' : 'hidden'}
              className={index === 0 ? 'text-gold font-medium' : ''}
            >
              {line}
            </motion.div>
          ))}
        </div>

        {/* Subtle divider appears after all text */}
        {revealedLines === 5 && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeInOut' }}
            className="mt-12 h-px w-16 bg-accent"
          />
        )}
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [revealedElements, setRevealedElements] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Progressive reveal: statement 1 → pause → statement 2 → pause → button
            const startTime = Date.now()
            const revealInterval = setInterval(() => {
              const elapsed = Date.now() - startTime
              const elementIndex = Math.floor(elapsed / 800) // 800ms between reveals
              if (elementIndex <= 2) {
                setRevealedElements(elementIndex + 1)
              } else {
                clearInterval(revealInterval)
              }
            }, 100)
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
      },
    },
  }

  const elementVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-background flex items-center justify-center px-6 py-32"
    >
      <motion.div
        className="max-w-2xl w-full flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate={revealedElements > 0 ? 'visible' : 'hidden'}
      >
        {/* First statement */}
        <motion.div
          className="mb-12"
          variants={elementVariants}
          initial="hidden"
          animate={revealedElements > 0 ? 'visible' : 'hidden'}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-foreground leading-tight text-balance">
            Every exceptional brand
            <br />
            tells a story.
          </h2>
        </motion.div>

        {/* Second statement */}
        <motion.div
          className="mb-16"
          variants={elementVariants}
          initial="hidden"
          animate={revealedElements > 1 ? 'visible' : 'hidden'}
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-foreground leading-tight text-balance">
            Let&apos;s craft
            <br />
            how the world experiences{' '}
            <span className="text-accent">yours.</span>
          </h3>
        </motion.div>

        {/* CTA Button and secondary text */}
        <motion.div
          className="flex flex-col items-center gap-8"
          variants={elementVariants}
          initial="hidden"
          animate={revealedElements > 2 ? 'visible' : 'hidden'}
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-accent hover:text-foreground px-8 py-3 text-base font-normal transition-colors duration-300"
            onClick={() => {
              // Scroll to contact form or open contact modal
              console.log('[v0] Request demonstration clicked')
            }}
          >
            Request a Private Demonstration
          </Button>

          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
            For luxury brands seeking exceptional digital experiences.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

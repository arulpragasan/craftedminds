'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [revealedSections, setRevealedSections] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger progressive reveal when section comes into view
            const startTime = Date.now()
            const revealInterval = setInterval(() => {
              const elapsed = Date.now() - startTime
              const sectionIndex = Math.floor(elapsed / 600) // 600ms per section
              if (sectionIndex <= 3) {
                setRevealedSections(sectionIndex + 1)
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

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full bg-background px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        {/* Two-column layout on desktop, stacked on mobile */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column: Headline and opening statement */}
          <div className="space-y-8">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={revealedSections >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-serif text-4xl font-normal leading-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Crafted was founded on a simple belief:
            </motion.h2>

            {/* Opening statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={revealedSections >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-serif text-3xl font-normal leading-relaxed text-accent sm:text-4xl"
            >
              Exceptional products deserve exceptional experiences.
            </motion.p>
          </div>

          {/* Right column: Supporting narrative */}
          <div className="space-y-8">
            {/* First supporting paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={revealedSections >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              We believe luxury is built through craftsmanship, storytelling, and human connection.
            </motion.p>

            {/* Second supporting paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={revealedSections >= 3 ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              Crafted helps luxury brands transform products into curated digital experiences that inspire discovery, build meaningful connections, and extend the brand experience beyond the physical world.
            </motion.p>

            {/* Divider line appears last */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={revealedSections >= 4 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-px origin-left bg-accent"
              style={{ maxWidth: '60px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

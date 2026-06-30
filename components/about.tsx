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
    <section id="about"
      ref={containerRef}
      className="min-h-screen w-full bg-background px-6 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        {/* Two-column layout on desktop, stacked on mobile */}
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-24
          "
        >
          {/* Left column: Headline and opening statement */}
          <div className="space-y-10">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={revealedSections >= 1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-heading text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Crafted was founded on a simple belief:
            </motion.h2>

            {/* Opening statement */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={revealedSections >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="font-heading text-4xl font-medium leading-relaxed text-gold sm:text-5xl"
            >
              Exceptional products deserve exceptional experiences.
            </motion.p>
          </div>

          {/* Right column: Supporting narrative */}
          <div className="space-y-10">
            {/* First supporting paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={revealedSections >= 2 ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              We believe luxury is built through craftsmanship, storytelling, and human connection.
            </motion.p>

            {/* Second supporting paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={revealedSections >= 3 ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Crafted helps luxury brands transform products into curated digital experiences that inspire discovery, build meaningful connections, and extend the brand experience beyond the physical world.
            </motion.p>

            {/* Divider line appears last */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={revealedSections >= 4 ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-px origin-left bg-gold/40"
              style={{ maxWidth: '60px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

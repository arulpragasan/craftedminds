'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function Stories() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [revealedLines, setRevealedLines] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger progressive reveal when section comes into view
            const startTime = Date.now()
            const revealInterval = setInterval(() => {
              const elapsed = Date.now() - startTime
              const lineIndex = Math.floor(elapsed / 1000) // 1000ms per line
              if (lineIndex <= 3) {
                setRevealedLines(lineIndex + 1)
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

  const sentences = [
    'Crafted is an editorial platform where luxury brands transform products into stories',
    'Stories become experiences.',
    'Experiences become lasting connections.',
  ]

  const sentenceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: 'easeInOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: 'easeInOut',
        delay: 0.3,
      },
    },
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center bg-background px-8 lg:px-12 py-24"
    >
      {/* Subtle background gradient transition */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column: Typography */}
          <div className="flex flex-col justify-center space-y-10 lg:space-y-12">
            {sentences.map((sentence, index) => (
              <motion.div
                key={index}
                variants={sentenceVariants}
                initial="hidden"
                animate={revealedLines > index ? 'visible' : 'hidden'}
                className="font-serif text-foreground"
              >
                <p
                  className={`leading-relaxed ${
                    index === 0
                      ? 'text-4xl lg:text-5xl font-medium tracking-tight'
                      : index === 1
                        ? 'text-3xl lg:text-4xl font-light'
                        : 'text-2xl lg:text-3xl font-light text-muted-foreground'
                  }`}
                >
                  {sentence}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column: Editorial visual */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={revealedLines >= 1 ? 'visible' : 'hidden'}
            className="relative aspect-square lg:aspect-auto aspect-[4/5] w-full rounded-none overflow-hidden bg-card"
          >
            <Image
              src="/editorial-visual.png"
              alt="Premium editorial visual showcasing luxury craftsmanship and intentional design"
              fill
              className="object-cover"
              priority
              quality={85}
            />
            {/* Subtle overlay for aesthetic consistency */}
            <div className="absolute inset-0 from-black/10 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

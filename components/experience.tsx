'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-background flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full max-w-5xl px-6 py-24">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <h2 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-semibold text-foreground tracking-tight">
            Experience<br />
            Crafted
          </h2>
        </motion.div>

        {/* Browser Frame Container */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.3 }}
          className="relative"
        >
          {/* Browser Chrome */}
          <div className="relative rounded-lg overflow-hidden bg-card border border-border shadow-2xl">
            {/* Browser Header */}
            <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
              </div>
              <div className="flex-1 ml-4 text-xs text-muted-foreground">
                crafted.minds/experience
              </div>
            </div>

            {/* Content Area */}
            <div className="relative w-full aspect-video bg-background overflow-hidden">
              {/* Blurred Editorial Interface */}
              <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={hasAnimated ? { opacity: 0.7, scale: 1 } : { opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.6, ease: 'easeOut', delay: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src="/editorial-interface.png"
                  alt="Editorial interface preview"
                  fill
                  className="object-cover blur-sm"
                  priority
                />
              </motion.div>

              {/* Overlay Gradient for Depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-30" />

              {/* Play Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                transition={{
                  opacity: { duration: 1, ease: 'easeOut', delay: 1 },
                  scale: { duration: 0.3 },
                }}
                onClick={() => {
                  console.log('[v0] Play button clicked - video would start here')
                }}
                className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                aria-label="Play 60-second film"
              >
                {/* Circular Background */}
                <div className="relative">
                  {/* Outer Ring - Animated */}
                  <motion.div
                    animate={hasAnimated ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 w-20 h-20 rounded-full border border-accent opacity-30"
                  />

                  {/* Middle Ring */}
                  <div className="absolute inset-0 w-20 h-20 rounded-full border border-accent opacity-20 scale-125" />

                  {/* Play Icon Circle */}
                  <div className="relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/15 transition-all duration-300">
                    {/* Triangle Play Icon */}
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-12 border-t-white ml-1" />
                  </div>
                </div>
              </motion.button>
            </div>
          </div>

          {/* Subtle Shadow Below Frame */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.6 }}
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-12 bg-accent/5 rounded-full blur-3xl"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground tracking-wide uppercase">
            Watch the 60-second film
          </p>
        </motion.div>
      </div>
    </section>
  )
}

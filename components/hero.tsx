'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const wordmarkVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
      },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  const buttonsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
        delay: 1.5,
      },
    },
  }

  return (
    <section
      className="relative w-full min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden"
      role="main"
    >
      {/* Animated Background */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        variants={backgroundVariants}
        className="absolute inset-0 opacity-30"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-accent/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative z-10 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center"
      >
        {/* Wordmark */}
        <motion.h1
          variants={wordmarkVariants}
          className="text-7xl md:text-8xl lg:text-9xl font-serif font-semibold tracking-tight text-white mb-16 md:mb-20"
        >
          Crafted
        </motion.h1>

        {/* Headline */}
        <motion.div variants={textVariants} className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-tight text-white mb-6">
            You create luxury.
          </h2>
          <p className="text-xl md:text-2xl font-light text-gray-300">
            We craft how the world experiences it.
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={textVariants}
          className="w-12 h-px bg-accent mb-12 md:mb-16"
        />

        {/* Description */}
        <motion.p
          variants={textVariants}
          className="text-sm md:text-base font-light text-gray-400 mb-12 md:mb-20 max-w-2xl leading-relaxed"
        >
          Transform products into curated digital experiences through editorial storytelling. Premium editorial design for luxury brands.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonsVariants}
          className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-center w-full"
        >
          {/* Primary Button */}
          <Link
            href="#demo"
            className="group relative px-8 md:px-10 py-3 md:py-4 bg-white text-black font-light text-sm md:text-base tracking-wide hover:bg-gray-100 transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10">Request a Private Demonstration</span>
            <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
          </Link>

          {/* Secondary Button */}
          <button
            className="group flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 text-white font-light text-sm md:text-base tracking-wide border-b border-accent hover:border-white hover:text-gray-300 transition-all duration-300"
            aria-label="Watch the 60-Second Film"
          >
            <span>Watch the 60-Second Film</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-xs font-light text-gray-500 tracking-widest uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg
              className="w-4 h-4 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

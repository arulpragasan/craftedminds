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
        staggerChildren: 0.50,
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
    <section id="hero"
      className="relative w-full min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        variants={backgroundVariants}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-accent/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Content Container */}
      <motion.div
        initial="hidden"
        animate={isLoaded ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-5xl
          flex-col
          items-center
          pt-28
          md:pt-32
          px-8
          text-center
          lg:px-12
        "
      >
        {/* Wordmark */}
        <motion.h1
          variants={wordmarkVariants}
          className="
            mb-16
            font-heading
            text-5xl
            font-medium
            tracking-[-0.04em]
            md:text-6xl
            lg:text-7xl
          "
        >
          <span className="text-brand">crafted</span>
          <span className="text-gold">minds</span>
        </motion.h1>

        {/* Headline */}
        <motion.div variants={textVariants} className="mb-12 md:mb-20">
          <div className="mx-auto max-w-4xl">
            <h2
            className="
            font-heading
            text-4xl
            leading-[1.05]
            md:text-6xl
            "
            >
            You create luxury.
            </h2>

            <p
              className="
                mt-8
                max-w-xl
                text-xl
                leading-relaxed
                text-white/65
                md:text-xl
              "
            >
              We craft how the world
              <br />
              experiences it.
            </p>

            </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonsVariants}
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-5
            md:mt-10
            md:flex-row
            md:gap-8
        "
        >
          {/* Primary Button */}
          <Link
          href="#contact"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-white
            px-10
            py-4
            text-sm
            font-normal
            tracking-[0.04em]
            text-black
            transition-all
            duration-500
            hover:-translate-y-0.5
            hover:bg-neutral-100
        "
        >
          Request a Private Demo
        </Link>

          {/* Secondary Button */}
          <button
          type="button"
          className="
          group
          inline-flex
          items-center
          gap-2
          text-sm
          tracking-wide
          text-white/60
          transition-colors
          duration-300
          hover:text-white
          "
          >
            <span>Experience Crafted →</span>

              <svg
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
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
          <motion.div
            animate={{y:[0,8,0]}}
            transition={{
            duration:2.4,
            repeat:Infinity
            }}
            >

            <svg
  className="
    h-4
    w-4
    text-gold
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
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

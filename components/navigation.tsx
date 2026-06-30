'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 lg:px-12"
      >
        {/* Brand */}
        <Link
          href="/"
          className="group font-heading text-2xl tracking-tight"
        >
          <span className="text-brand transition-colors duration-300">
            crafted
          </span>

          <span className="text-gold transition-colors duration-300">
            minds
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-brand"
          aria-label="Open menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7h16M4 12h16M4 17h16"
            />
          </svg>
        </button>
      </motion.div>
    </nav>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="
        text-sm
        tracking-[0.18em]
        uppercase
        text-white/55
        transition-all
        duration-300
        hover:text-white
      "
    >
      {children}
    </Link>
  )
}
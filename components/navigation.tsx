'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Navigation() {
  const navItems = [
    { label: 'CRAFTED', href: '/' },
    { label: 'Film', href: '#film' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="flex items-center justify-between"
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-wider text-white hover:text-accent transition-colors">
          {navItems[0].label}
        </Link>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-light tracking-wide text-gray-400 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Placeholder */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>
    </nav>
  )
}

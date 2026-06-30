'use client'

import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-serif font-normal text-foreground tracking-wide">
              CRAFTED
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Transform luxury products into curated digital experiences.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              <a
                href="https://craftedminds.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                craftedminds.in
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              <a
                href="mailto:hello@craftedminds.in"
                className="text-foreground hover:text-accent transition-colors"
              >
                hello@craftedminds.in
              </a>
            </p>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              <a
                href="https://linkedin.com/company/crafted-minds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-muted-foreground">
              &copy; 2026 Crafted Minds. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-border pt-8">
          <p className="text-xs text-muted-foreground text-center">
            Crafted digital experiences for exceptional brands.
          </p>
        </div>
      </div>
    </footer>
  )
}

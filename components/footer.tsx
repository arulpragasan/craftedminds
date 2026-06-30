export function Footer() {
  return (
    <footer className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-3xl px-8 text-center">

        <h2 className="font-heading text-3xl font-medium tracking-[-0.04em]">
          <span className="text-brand">crafted</span>
          <span className="text-gold">minds</span>
        </h2>

        <p className="mt-8 text-sm leading-7 text-white/50">
          Editorial digital experiences
          <br />
          for luxury brands.
        </p>

        <a
          href="mailto:hello@craftedminds.in"
          className="mt-10 inline-block text-white/80 transition-colors hover:text-white"
        >
          hello@craftedminds.in
        </a>

        <p className="mt-16 text-xs tracking-wide text-white/40">
          © 2026 Crafted Minds.
        </p>

      </div>
    </footer>
  )
}
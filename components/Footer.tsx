import Link from 'next/link'

const LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: 'mailto:abhishek@clarantlabs.com', label: 'Contact' },
  { href: '/legal', label: 'Privacy' },
  { href: '/legal', label: 'Terms' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Left: brand + tagline */}
          <div>
            <p className="font-display text-lg text-slate-900">Clarant Labs</p>
            <p className="mt-1 font-sans text-sm text-slate-500">
              Built by one person, for real people.
            </p>
          </div>

          {/* Right: links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="font-sans text-sm text-slate-600 transition-colors hover:text-brand"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-slate-100 pt-6 sm:flex-row">
          <p className="font-sans text-xs text-slate-400">Clarant Labs LLC · Built in Texas</p>
          <a
            href="mailto:abhishek@clarantlabs.com"
            className="font-sans text-xs text-slate-400 transition-colors hover:text-brand"
          >
            abhishek@clarantlabs.com
          </a>
        </div>
      </div>
    </footer>
  )
}

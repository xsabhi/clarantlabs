'use client'

import Link from 'next/link'
import { useState } from 'react'

const LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: 'mailto:abhishek@clarantlabs.com', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* id="logo-slot" */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Clarant Labs — home"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-nav.svg" alt="Clarant Labs" className="h-8 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="font-sans text-slate-600 transition-colors hover:text-brand">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span className={`h-0.5 w-full bg-slate-700 transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-slate-700 transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-slate-700 transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {/* Mobile slide-down panel */}
      {open && (
        <div className="border-t border-slate-100 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block py-2 font-sans text-slate-600 transition-colors hover:text-brand"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

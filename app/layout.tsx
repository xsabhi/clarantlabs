import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clarant Labs — Honest Budgeting Software',
  description:
    'Clarant Labs builds Clarant, an envelope budgeting app for people who loved the method and got priced out of it. $4/month. No surprises.',
  metadataBase: new URL('https://clarantlabs.com'),
  icons: { icon: '/favicon.svg' },
  openGraph: {
    siteName: 'Clarant Labs',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: 680, margin: '0 auto', background: '#fff', minHeight: '100vh', borderLeft: '0.5px solid #e8e6de', borderRight: '0.5px solid #e8e6de' }}>
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

function Nav() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      borderBottom: '0.5px solid #e8e6de',
      position: 'sticky',
      top: 0,
      background: '#fff',
      zIndex: 100,
    }}>
      <Link href="/"><img src="/logo.svg" alt="Clarant Labs" height="36" style={{height:36}} /></Link>
      <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none' }}>
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/legal">Legal</NavLink></li>
        <li>
          <a href="https://clarant.app" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, color: 'var(--brand)', fontWeight: 500 }}>
            App →
          </a>
        </li>
      </ul>
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={{ fontSize: 14, color: '#666' }}>
      {children}
    </Link>
  )
}

function Footer() {
  return (
    <footer style={{
      padding: '1.5rem 2rem',
      borderTop: '0.5px solid #e8e6de',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '0.5rem',
    }}>
      <p style={{ fontSize: 12, color: '#888' }}>© 2026 Clarant Labs LLC</p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {[
          { href: '/about', label: 'About' },
          { href: '/legal', label: 'Privacy' },
          { href: '/legal?tab=terms', label: 'Terms' },
          { href: 'https://clarant.app', label: 'clarant.app', external: true },
        ].map(({ href, label, external }) => (
          external
            ? <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: '#888' }}>{label}</a>
            : <Link key={label} href={href} style={{ fontSize: 12, color: '#888' }}>{label}</Link>
        ))}
      </div>
    </footer>
  )
}

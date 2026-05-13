import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clarant Labs — Envelope Budgeting for People Who Got Priced Out',
  description:
    'Clarant is an envelope budgeting app built for people who loved the method and left over the price. $4/month. No surprises. Join the waitlist.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Features />
      <Pricing />
      <WaitlistCTA
        heading="We're not launched yet."
        body="Join the waitlist and get early access when we do. Launch pricing is locked for everyone who signs up before we go live."
        cta="Get early access →"
      />
    </>
  )
}

function Hero() {
  return (
    <section style={{ padding: '4rem 2rem 3rem' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--brand-dark)', marginBottom: '1.25rem', fontWeight: 500 }}>
        Clarant — Envelope Budgeting
      </p>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.75rem, 5vw, 2.25rem)',
        fontWeight: 500,
        lineHeight: 1.25,
        color: '#1a1a1a',
        marginBottom: '1.25rem',
      }}>
        You didn&apos;t give up on<br />
        envelope budgeting.<br />
        <em style={{ fontStyle: 'italic', color: 'var(--brand-dark)' }}>It gave up on you.</em>
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: 1.6, marginBottom: '0.75rem', maxWidth: 520 }}>
        Clarant is an envelope budgeting app built for people who loved the method, hated the price hike, and couldn&apos;t find anything worth switching to.
      </p>
      <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '2rem', maxWidth: 480 }}>
        Manual entry. Clean interface. $4 a month. No subscriptions that creep up on you.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <a
          href="https://clarant.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--brand)',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 500,
            width: 'fit-content',
          }}
        >
          Join the waitlist →
        </a>
        <span style={{ fontSize: 12, color: '#888' }}>
          No credit card. No obligation. Launch pricing locked for early signups.
        </span>
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section style={{ padding: '3rem 2rem', borderTop: '0.5px solid #e8e6de' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', fontWeight: 500 }}>
        Why another budgeting app?
      </p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, marginBottom: '1.25rem', color: '#1a1a1a' }}>
        So why does every alternative feel like a downgrade?
      </h2>
      {[
        `Most budgeting apps want to connect to your bank, analyze your spending patterns, and send you notifications about your "financial wellness." That's fine — but it's not what you're looking for.`,
        `You want to sit down once a week, enter what you spent, move money between envelopes, and know exactly where you stand. That's it. That's the whole thing.`,
        `Clarant does that. Cleanly. For $4 a month.`,
      ].map((text, i) => (
        <p key={i} style={{ color: '#555', marginBottom: i < 2 ? '0.85rem' : 0 }}>{text}</p>
      ))}
    </section>
  )
}

const FEATURES = [
  { icon: '▦', title: 'Envelope method', body: 'Give every dollar a job before you spend it. The method that actually works.' },
  { icon: '✎', title: 'Manual entry first', body: 'No bank sync required. Enter what you spend, stay aware of where it goes.' },
  { icon: '◎', title: 'Clean interface', body: 'No noise. No upsells. No "insights" you didn\'t ask for. Just your budget.' },
  { icon: '◷', title: '15 min/week', body: 'Sit down, enter last week\'s spending, know where you stand. Done.' },
]

function Features() {
  return (
    <section style={{ padding: '3rem 2rem', borderTop: '0.5px solid #e8e6de' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', fontWeight: 500 }}>
        What you get
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '0.5rem' }}>
        {FEATURES.map(({ icon, title, body }) => (
          <div key={title} style={{
            background: '#f9f8f5',
            borderRadius: 12,
            padding: '1.25rem',
            border: '0.5px solid #e8e6de',
          }}>
            <div style={{ fontSize: 20, color: 'var(--brand)', marginBottom: '0.5rem' }}>{icon}</div>
            <h3 style={{ fontSize: 15, fontWeight: 500, marginBottom: '0.25rem', color: '#1a1a1a' }}>{title}</h3>
            <p style={{ fontSize: 13, color: '#666', lineHeight: 1.5 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const PRICE_ITEMS = [
  'Full envelope budgeting',
  'Unlimited envelopes & transactions',
  'Monthly rollover',
  'No bank sync required',
  'Works on web, mobile, desktop',
]

function Pricing() {
  return (
    <section style={{ padding: '3rem 2rem', borderTop: '0.5px solid #e8e6de' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', fontWeight: 500 }}>
        Pricing
      </p>
      <div style={{
        background: 'var(--brand-light)',
        borderRadius: 12,
        padding: '2rem',
        border: '0.5px solid var(--brand-border)',
      }}>
        <div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 500, color: 'var(--brand-dark)' }}>$4</span>
          <span style={{ fontSize: 14, color: 'var(--brand-dark)', marginLeft: 4 }}>/month</span>
        </div>
        <p style={{ fontSize: 14, color: 'var(--brand-dark)', marginTop: '0.5rem' }}>
          Everything included. One price. No tiers to upsell you into.
        </p>
        <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {PRICE_ITEMS.map((item) => (
            <li key={item} style={{ fontSize: 14, color: '#085041', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: 'var(--brand)' }}>✓</span> {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '0.5px solid var(--brand-border)', fontSize: 13, color: 'var(--brand-dark)' }}>
          Sync tier ($9–12/mo) coming later for those who want it. The $4 tier stays $4.
        </p>
      </div>
    </section>
  )
}

export function WaitlistCTA({ heading, body, cta }: { heading: string; body: string; cta: string }) {
  return (
    <section style={{ padding: '2rem' }}>
      <div style={{
        background: '#1a1a1a',
        borderRadius: 12,
        padding: '2.5rem 2rem',
        textAlign: 'center',
      }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 500, color: '#fff', marginBottom: '0.75rem' }}>
          {heading}
        </h2>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem' }}>{body}</p>
        <a
          href="https://clarant.app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#fff',
            color: '#1a1a1a',
            padding: '0.75rem 1.5rem',
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 500,
          }}
        >
          {cta}
        </a>
      </div>
    </section>
  )
}

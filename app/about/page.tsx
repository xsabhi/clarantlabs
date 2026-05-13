import type { Metadata } from 'next'
import { WaitlistCTA } from '../page'

export const metadata: Metadata = {
  title: 'About — Clarant Labs',
  description:
    'Clarant Labs is a one-person software company in Frisco, TX. Built by someone who actually got priced out of envelope budgeting and couldn\'t find a good alternative.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <FounderStory />
      <WhatTheName />
      <WhatWeAre />
      <WaitlistCTA
        heading="Sound like what you've been looking for?"
        body="The waitlist is live. Join now and get early access when we launch."
        cta="Join the waitlist →"
      />
    </>
  )
}

function AboutHero() {
  return (
    <div style={{ padding: '3rem 2rem 2rem' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0F6E56', marginBottom: '1.25rem', fontWeight: 500 }}>
        About Clarant Labs
      </p>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(1.6rem, 4vw, 2rem)',
        fontWeight: 500,
        lineHeight: 1.3,
        color: '#1a1a1a',
        marginBottom: '1rem',
      }}>
        Built by someone who{' '}
        <em style={{ fontStyle: 'italic' }}>actually</em> left.
      </h1>
      <p style={{ fontSize: '1.05rem', color: '#555' }}>
        Clarant Labs is a one-person software company. This is the story of why it exists.
      </p>
    </div>
  )
}

function FounderStory() {
  const paragraphs = [
    `I used envelope budgeting for years. It worked. Not in a theoretical, personal-finance-influencer way — in a real, practical, I-know-exactly-where-my-money-went way. The method changed how I thought about money.`,
    `Then the price went up. And then again. At some point I did the math and realized I was paying more for budgeting software than I was spending on several actual line items in my budget. That felt absurd. I canceled.`,
    `I spent a few months trying alternatives. Most of them were either too basic (spreadsheets dressed up as apps), too complicated (bank syncs, machine learning, subscription tiers), or just… not the envelope method. The thing I missed wasn't the specific app — it was the workflow. Envelopes. Give every dollar a job. Move money when plans change. Start fresh next month.`,
    `I couldn't find what I wanted, so I built it.`,
  ]

  return (
    <section style={{ padding: '2rem 2rem 3rem', borderTop: '0.5px solid #e8e6de' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {paragraphs.map((text, i) => (
          <p key={i} style={{ color: '#555' }}>{text}</p>
        ))}
      </div>

      <blockquote style={{
        background: 'var(--brand-light)',
        borderLeft: '3px solid var(--brand)',
        padding: '1.25rem 1.5rem',
        borderRadius: '0 8px 8px 0',
        marginTop: '1.5rem',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          color: '#085041',
          fontSize: '1rem',
          lineHeight: 1.65,
        }}>
          Clarant Labs builds software for people who know what they want and just need a clean, honest tool to do it. No bloat. No dark patterns. No prices that quietly drift upward. Just tools that work.
        </p>
      </blockquote>
    </section>
  )
}

function WhatTheName() {
  return (
    <section style={{ padding: '3rem 2rem', borderTop: '0.5px solid #e8e6de' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', fontWeight: 500 }}>
        The name
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        <p style={{ color: '#555' }}>
          Clarant is a combination of two ideas: <em>clarity</em> and <em>grant</em>.
        </p>
        <p style={{ color: '#555' }}>
          Clarity, because the point of budgeting is to know exactly where you stand. No surprises, no vague unease about what you spent last month — just a clear picture.
        </p>
        <p style={{ color: '#555' }}>
          Grant, because the envelope method is built on one premise: grant every dollar a specific job before you spend it. That&apos;s the thing that makes the method actually work.
        </p>
      </div>
    </section>
  )
}

function WhatWeAre() {
  const paragraphs = [
    `Clarant Labs LLC is a one-person software company. There's no team, no investors, no growth-at-all-costs mandate. The goal is to build a sustainable, small business around software that genuinely helps people.`,
    `That means the pricing will stay honest. The product won't get bloated with features nobody asked for. If something isn't working for users, I'll hear about it directly — because there's no layer of customer success teams or support bots between me and the people using Clarant.`,
    `The product is Clarant — an envelope budgeting app. The mission is to make the envelope method accessible to people who got priced out of it.`,
  ]

  return (
    <section style={{ padding: '3rem 2rem', borderTop: '0.5px solid #e8e6de' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '1rem', fontWeight: 500 }}>
        What Clarant Labs is
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {paragraphs.map((text, i) => (
          <p key={i} style={{ color: '#555' }}>{text}</p>
        ))}
      </div>
    </section>
  )
}

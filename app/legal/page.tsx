'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function LegalContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy')

  useEffect(() => {
    if (searchParams.get('tab') === 'terms') setActiveTab('terms')
  }, [searchParams])

  return (
    <section style={{ padding: '3rem 2rem' }}>
      <p style={{ fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0F6E56', marginBottom: '1.5rem', fontWeight: 500 }}>
        Legal
      </p>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {(['privacy', 'terms'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 8,
              fontSize: 14,
              cursor: 'pointer',
              border: '0.5px solid',
              borderColor: activeTab === tab ? '#1a1a1a' : '#e8e6de',
              background: activeTab === tab ? '#1a1a1a' : '#f9f8f5',
              color: activeTab === tab ? '#fff' : '#666',
              fontFamily: 'inherit',
            }}
          >
            {tab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </button>
        ))}
      </div>

      {activeTab === 'privacy' ? <PrivacyPolicy /> : <TermsOfService />}
    </section>
  )
}

export default function LegalPage() {
  return (
    <Suspense>
      <LegalContent />
    </Suspense>
  )
}

const META = 'Clarant Labs LLC · Last updated: May 2026 · Placeholder — lawyer-reviewed version publishes before launch.'

function LegalMeta() {
  return (
    <p style={{ fontSize: 12, color: '#888', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '0.5px solid #e8e6de' }}>
      {META}
    </p>
  )
}

function LegalH3({ children }: { children: React.ReactNode }) {
  return <h3 style={{ fontSize: 15, fontWeight: 500, margin: '1.25rem 0 0.4rem', color: '#1a1a1a' }}>{children}</h3>
}

function LegalP({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 14, color: '#555', marginBottom: '0.75rem', lineHeight: 1.65 }}>{children}</p>
}


function PrivacyPolicy() {
  return (
    <div>
      <LegalMeta />
      <LegalH3>Who we are</LegalH3>
      <LegalP>
        Clarant Labs LLC is a software company building Clarant, an envelope budgeting app at clarant.app. This company website lives at clarantlabs.com.
      </LegalP>
      <LegalH3>What we collect</LegalH3>
      <LegalP>
        For the waitlist: your email address. That&apos;s it. We use it to notify you when Clarant launches and to send occasional product updates. We don&apos;t sell it. We don&apos;t share it with third parties for marketing purposes.
      </LegalP>
      <LegalP>
        For app users (at launch): account information (email, password hash), and the budgeting data you enter into the app. Your financial data is yours. We don&apos;t analyze it, sell it, or share it.
      </LegalP>
      <LegalH3>How we use it</LegalH3>
      <LegalP>
        To operate the service, send you information you asked for, and improve the product. We don&apos;t use your data for advertising. We don&apos;t build profiles on you.
      </LegalP>
      <LegalH3>Third-party services</LegalH3>
      <LegalP>
        We use Supabase for database hosting and authentication, and Stripe for payment processing. These services have their own privacy policies. We use them because they&apos;re reputable, not because they help us monetize your data.
      </LegalP>
      <LegalH3>Your rights</LegalH3>
      <LegalP>
        You can ask us to delete your data at any time. If you&apos;re in the EU or California, you have additional rights under GDPR and CCPA respectively — we&apos;ll honor them.
      </LegalP>
    </div>
  )
}

function TermsOfService() {
  return (
    <div>
      <LegalMeta />
      <LegalH3>The short version</LegalH3>
      <LegalP>
        Use Clarant for its intended purpose (personal budgeting). Don&apos;t do anything illegal or harmful with it. We&apos;ll do our best to keep the service running and your data safe. We&apos;re a small company, so we&apos;re not in a position to offer uptime guarantees, but we&apos;ll be honest when things go wrong.
      </LegalP>
      <LegalH3>Your account</LegalH3>
      <LegalP>
        You&apos;re responsible for keeping your login credentials secure. Your budgeting data belongs to you. If you cancel, you can export it before you leave.
      </LegalP>
      <LegalH3>Payments</LegalH3>
      <LegalP>
        Clarant is $4/month at launch. Billing is handled by Stripe. You can cancel anytime — no penalties, no hidden fees. Cancellation takes effect at the end of your billing period.
      </LegalP>
      <LegalH3>The service</LegalH3>
      <LegalP>
        We&apos;ll do our best to keep Clarant available and working well. If we need to make significant changes to pricing or features, we&apos;ll give you advance notice. We won&apos;t make changes designed to extract more money from you without fair warning.
      </LegalP>
      <LegalH3>Liability</LegalH3>
      <LegalP>
        Clarant is a budgeting tool, not financial advice. We&apos;re not liable for financial losses that result from use of the service.
      </LegalP>
      <LegalH3>Changes to these terms</LegalH3>
      <LegalP>
        If we make material changes, we&apos;ll notify you by email. Continuing to use the service after that means you accept the updated terms.
      </LegalP>
    </div>
  )
}

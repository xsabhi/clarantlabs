import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal',
  description:
    'Privacy Policy and Terms of Service for Clarant Labs LLC, operator of clarantlabs.com and clarant.app.',
}

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="max-w-2xl space-y-16">
        <article>
          <h2 className="font-display text-2xl text-slate-900">Privacy Policy</h2>
          <p className="mt-4 text-sm text-slate-400">Last updated: May 2026</p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Clarant Labs LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates
            clarantlabs.com and clarant.app. This page will be updated with a full privacy
            policy prior to accepting user data. For questions:{' '}
            <a
              href="mailto:abhishek@clarantlabs.com"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              abhishek@clarantlabs.com
            </a>
          </p>
        </article>

        <article>
          <h2 className="font-display text-2xl text-slate-900">Terms of Service</h2>
          <p className="mt-4 text-sm text-slate-400">Last updated: May 2026</p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Full terms of service will be published prior to public launch. Clarant Labs LLC
            products are not financial advisors. Nothing on this site constitutes financial
            advice. For questions:{' '}
            <a
              href="mailto:abhishek@clarantlabs.com"
              className="text-brand transition-colors hover:text-brand-dark"
            >
              abhishek@clarantlabs.com
            </a>
          </p>
        </article>
      </div>
    </div>
  )
}

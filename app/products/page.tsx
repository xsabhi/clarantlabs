import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What we build',
  description:
    'Clarant is the envelope budgeting app for people who want clarity, not complexity. Tools we use ourselves, built to share with others.',
}

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h1 className="font-display text-4xl text-slate-900">What we build</h1>
      <p className="mt-4 text-xl text-slate-500">
        Tools we use ourselves, built to share with others.
      </p>

      {/* Clarant */}
      <section className="mt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <h2 className="font-display text-3xl text-slate-900">Clarant</h2>
          <span className="inline-block w-fit rounded-full bg-brand-light px-3 py-1 text-sm font-medium text-brand-dark">
            In active development · Opening soon
          </span>
        </div>

        <div className="mt-6 max-w-2xl space-y-3 leading-relaxed text-slate-600">
          <p>The envelope budgeting app for people who want clarity, not complexity.</p>
          <p>
            Assign every dollar a job before you spend it. Enter transactions manually —
            staying intentional is the point. Reconcile at month end by importing your bank
            statement. Know where you stand at all times.
          </p>
          <p>Simple. Clean. Priced fairly.</p>
        </div>

        <a
          href="https://clarant.app"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-brand transition-colors hover:text-brand-dark"
        >
          → clarant.app
        </a>
      </section>

      <p className="mt-16 border-t border-slate-100 pt-8 text-sm text-slate-400">
        More tools coming. Clarant Labs builds slowly and deliberately — one well-made
        product at a time.
      </p>
    </div>
  )
}

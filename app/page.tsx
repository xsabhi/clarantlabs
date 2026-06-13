import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32 md:text-left">
        <h1 className="font-display text-4xl font-medium leading-tight text-slate-900 md:text-6xl">
          Software built for the way you actually live.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-slate-500 md:mx-0">
          Clarant Labs is a one-person studio building personal finance tools that are
          simple, honest, and worth paying for. No bloat. No unnecessary subscriptions.
          Just software that works.
        </p>
        <Link
          href="/products"
          className="mt-8 inline-block font-medium text-brand transition-colors hover:text-brand-dark"
        >
          See what we build →
        </Link>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
        <h2 className="font-display text-3xl text-slate-900">What we build</h2>

        <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-8 transition-colors hover:border-brand/30">
          <h3 className="font-display text-2xl text-slate-900">Clarant</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
            Envelope budgeting for people who take their finances seriously. Assign every
            dollar a job. Know exactly where you stand. No server required.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block text-brand transition-colors hover:text-brand-dark"
          >
            → See Clarant
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-400">More tools in development.</p>
      </section>
    </>
  )
}

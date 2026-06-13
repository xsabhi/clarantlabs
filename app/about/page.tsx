import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'One person. One studio. Software worth keeping. Clarant Labs is designed, built, and maintained by one person.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <h1 className="max-w-2xl font-display text-4xl text-slate-900">
        One person. One studio. Software worth keeping.
      </h1>

      <div className="mt-8 max-w-2xl space-y-6 text-lg leading-relaxed text-slate-600">
        <p>I&apos;m a software developer.</p>
        <p>
          Clarant Labs started from a simple frustration: the tools I relied on to manage
          my finances kept getting more expensive, more complicated, and less useful. I was
          paying a hundred dollars a year for a budgeting app I barely used because it had
          become too hard to maintain. So I built something better — for myself first.
        </p>
        <p>
          That&apos;s the philosophy behind Clarant Labs. Build software I actually use.
          Tools that earn their place in your life without demanding a premium for features
          you didn&apos;t ask for.
        </p>
        <p>
          Everything here is designed, developed, and maintained by one person. That means
          things move deliberately. It also means every decision gets proper attention —
          nothing ships until it&apos;s right.
        </p>
        <p>Clarant Labs LLC — built in Texas.</p>
      </div>

      <p className="mt-8 max-w-2xl text-lg text-slate-600">
        Get in touch:{' '}
        <a
          href="mailto:abhishek@clarantlabs.com"
          className="text-brand transition-colors hover:text-brand-dark"
        >
          abhishek@clarantlabs.com
        </a>
      </p>
    </div>
  )
}

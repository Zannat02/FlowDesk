import Heading from '../ui/Heading'
import Button from '../ui/Button'

function Swoosh() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-60"
    >
      <defs>
        <linearGradient id="sw" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#3b7ddd" stopOpacity="0" />
          <stop offset="0.6" stopColor="#3b7ddd" stopOpacity="0.5" />
          <stop offset="1" stopColor="#8fb4ec" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      {[0, 14, 28, 42].map((o) => (
        <path
          key={o}
          d={`M-50 ${520 - o} C 300 ${560 - o}, 600 ${340 - o}, 1250 ${140 - o}`}
          fill="none"
          stroke="url(#sw)"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative px-4 pb-10 pt-8 text-center sm:px-8 md:pb-14 md:pt-12 lg:pb-16 lg:pt-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[80%] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <Swoosh />

      <div className="relative mx-auto max-w-3xl">
        <Heading as="h1" className="text-ink-soft">
          Plan Smarter, Balance Workloads and Ship Every Project{' '}
          <span className="font-serif font-normal italic text-ink">On Time</span>
        </Heading>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-soft md:mt-5 md:text-base lg:text-lg">
          FlowDesk gives teams one clear place to track tasks, spot overloaded
          people early and turn busy workflows into simple next steps.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-8">
          <Button>Start Free Trial</Button>
          <Button variant="secondary">Talk to Sales</Button>
        </div>
      </div>
    </section>
  )
}

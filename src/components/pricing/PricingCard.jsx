import { Check } from 'lucide-react'
import Button from '../ui/Button'

/* Reusable pricing card */
export default function PricingCard({ plan }) {
  const { name, price, unit, description, cta, features, featured } = plan

  return (
    <article
      className={`flex flex-col rounded-3xl border bg-surface/80 p-3 shadow-soft backdrop-blur-sm sm:p-4 ${
        featured ? 'border-primary/40' : 'border-line'
      }`}
    >
      {/* plan label + price */}
      <div className={`rounded-2xl p-4 ${featured ? 'bg-primary/10' : 'bg-surface-2/70'}`}>
        <span className="inline-block rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium md:text-sm">
          {name}
        </span>
        <p className="mt-10 flex items-baseline gap-1.5">
          <span className="text-3xl font-semibold md:text-4xl">{price}</span>
          <span className="text-xs text-ink-mute md:text-sm">{unit}</span>
        </p>
      </div>

      <div className="flex flex-1 flex-col px-2 pb-3 pt-5 sm:px-3">
        <p className="text-sm text-ink-soft md:text-base">{description}</p>

        <Button variant={featured ? 'primary' : 'secondary'} className="mt-5 w-full">
          {cta}
        </Button>

        <ul className="mt-6 space-y-3.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-ink-soft md:text-base">
              <Check size={16} className="mt-1 shrink-0 text-primary-soft" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
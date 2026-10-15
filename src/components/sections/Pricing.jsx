import Badge from '../ui/Badge'
import Heading from '../ui/Heading'
import PricingCard from '../pricing/PricingCard'

const plans = [
  {
    name: 'Free',
    price: '$0',
    unit: '/month',
    description: 'For individuals and small teams getting started.',
    cta: 'Start for Free',
    features: [
      'Up to 5 team members',
      'Task boards and lists',
      'Calendar view',
      'Mobile access',
      '5 GB storage',
    ],
  },
  {
    name: 'Professional',
    price: '$12',
    unit: '/month',
    description: 'For growing teams that need more power.',
    cta: 'Get Started',
    featured: true,
    features: [
      'Unlimited team members',
      'Advanced task management',
      'Calendar and timeline views',
      'Mobile access',
      '100 GB storage',
      'Advanced analytics',
      'Time tracking',
      'Priority email support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: '/contact us',
    description: 'For large organizations with specific needs.',
    cta: 'Talk to Sales',
    features: [
      'Everything in Professional',
      'Unlimited storage',
      'Single sign-on (SSO)',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 priority support',
      'Uptime SLA',
      'Team onboarding and training',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="px-3 pt-20 sm:px-6 md:pt-34 lg:px-10">
      <div className="flex flex-col items-center gap-5 text-center lg:gap-6">
        <Badge>Pricing</Badge>
        <Heading as="h2" className="text-ink-soft">
          Simple, Transparent{' '}
          <span className="font-serif font-normal italic text-ink">Pricing</span>
        </Heading>
      </div>

   
      <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-5 md:mt-12 lg:max-w-none lg:grid-cols-3 lg:gap-6">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  )
}
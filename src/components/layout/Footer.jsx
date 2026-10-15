import Logo from '../ui/Logo'
import FooterColumn from './FooterColumn'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]


export default function Footer() {
  return (
    <footer className="px-3 pb-3 pt-20 sm:px-6 sm:pb-6 md:pt-34 lg:px-10 lg:pb-10">
      <div className="rounded-3xl border border-line bg-surface px-6 py-10 shadow-soft sm:px-10 md:py-12 lg:px-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* brand */}
          <div className="max-w-xs">
            <span className="inline-flex rounded-full bg-white px-3 py-1.5 text-bg">
              <Logo />
            </span>
            <p className="mt-5 text-sm leading-relaxed text-ink-mute md:text-base">
              Plan projects, balance workloads and ship on time with one simple platform.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:gap-x-16">
            {columns.map((c) => (
              <FooterColumn key={c.title} {...c} />
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8 text-center md:mt-12">
          <p className="text-xs text-ink-mute md:text-sm">
            © {new Date().getFullYear()} FlowDesk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
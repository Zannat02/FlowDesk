import BrandLogo, { brands } from '../ui/BrandLogo'

export default function TrustedBy() {
  
  const group = (key) => (
    <div key={key} className="flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16" aria-hidden={key === 'b'}>
      {brands.map((b) => (
        <BrandLogo key={b.name} brand={b} />
      ))}
    </div>
  )

  return (
    <section className="px-3 pt-12 sm:px-6 md:pt-24 lg:px-10">
      <p className="text-center text-sm text-ink-soft md:text-base">
        Trusted by teams at fast-growing companies
      </p>

      <div className="marquee-mask mt-6 overflow-hidden md:mt-8">
        <div className="animate-marquee flex w-max">
          {group('a')}
          {group('b')}
        </div>
      </div>
    </section>
  )
}
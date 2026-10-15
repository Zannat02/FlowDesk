
import { useReducedMotion } from 'motion/react'
import BrandLogo, { brands } from '../ui/BrandLogo'
import MarqueeModule from 'react-fast-marquee'
const Marquee = MarqueeModule.default ?? MarqueeModule

export default function TrustedBy() {
  const reduce = useReducedMotion()

  return (
    <section className="px-3 pt-20 sm:px-6 md:pt-34 lg:px-10">
      <p className="text-center text-sm text-ink-soft md:text-base">
        Trusted by teams at fast-growing companies
      </p>

      {/* the mask class fades both edges */}
      <div className="mt-6 md:mt-8 [mask-image:linear-gradient(to_right,transparent,#000_14%,#000_86%,transparent)]">
        <Marquee speed={40} autoFill play={!reduce}>
          {brands.map((b) => (
            <div key={b.name} className="mx-6 md:mx-8">
              <BrandLogo brand={b} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
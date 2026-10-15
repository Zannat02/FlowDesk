import { Fragment } from 'react'
import { FaSlack } from 'react-icons/fa'
import { SiGoogledrive, SiGithub, SiFigma, SiNotion, SiGooglecalendar } from 'react-icons/si'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import IntegrationIcon from '../integrations/IntegrationIcon'


const rings = [
  { inset: 'inset-x-0 inset-y-0 lg:inset-x-[2%]', border: 'border-primary/80' },
  { inset: 'inset-x-[8%] inset-y-[6%] lg:inset-x-[10%] lg:inset-y-[12%]', border: 'border-primary/60' },
  { inset: 'inset-x-[16%] inset-y-[12%] lg:inset-x-[20%] lg:inset-y-[24%]', border: 'border-primary/40' },
]


const at = (deg) => {
  const r = (deg * Math.PI) / 180
  return { left: `${50 + 50 * Math.cos(r)}%`, top: `${50 + 50 * Math.sin(r)}%` }
}


const icons = [
  { label: 'Slack', icon: FaSlack, color: '#4A154B', ring: 0, m: 270, d: 205 },
  { label: 'Google Calendar', icon: SiGooglecalendar, color: '#4285F4', ring: 1, m: 230, d: 178 },
  { label: 'GitHub', icon: SiGithub, color: '#181717', ring: 2, m: 310, d: 152 },
  { label: 'Figma', icon: SiFigma, color: '#F24E1E', ring: 1, m: 125, d: 320 },
  { label: 'Google Drive', icon: SiGoogledrive, color: '#1FA463', ring: 0, m: 90, d: 10 },
  { label: 'Notion', icon: SiNotion, color: '#000000', ring: 2, m: 50, d: 28 },
]

export default function Integrations() {
  return (
    <section className="px-3 pb-10 pt-20 sm:px-6 md:pb-20 md:pt-34 lg:px-10">
      <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface-2 to-surface px-4 py-10 shadow-soft sm:px-8 lg:py-14">
        <div className="relative mx-auto max-w-xl px-6 py-28 md:py-36 lg:flex lg:min-h-[460px] lg:max-w-none lg:items-center lg:justify-center lg:py-0">
          {rings.map((ring, i) => (
            <Fragment key={i}>
         
              <span
                aria-hidden
                className={`ring-fade pointer-events-none absolute rounded-[50%] border ${ring.inset} ${ring.border}`}
              />
        
              <div className={`pointer-events-none absolute ${ring.inset}`}>
                {icons
                  .filter((icon) => icon.ring === i)
                  .map((icon) => (
                    <IntegrationIcon key={icon.label} {...icon} mobile={at(icon.m)} desktop={at(icon.d)} />
                  ))}
              </div>
            </Fragment>
          ))}

          {/* content */}
          <div className="relative z-10 mx-auto flex max-w-md flex-col items-center text-center lg:max-w-lg">
            <Heading as="h2" className="text-ink-soft">
              Connect Your Team, Tasks and{' '}
              <span className="font-serif font-normal italic text-ink">Favorite Tools</span>
            </Heading>

            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base lg:text-lg">
              FlowDesk works with the apps your team already uses, so projects, files and conversations stay in one workspace.
            </p>

          
            <div className="mt-6 flex flex-col items-center gap-3 lg:mt-8 lg:flex-row">
              <Button>Start Free Trial</Button>
              <Button variant="secondary">Talk to Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
import { FaSlack } from 'react-icons/fa'
import { SiGoogledrive, SiGithub, SiFigma, SiNotion, SiGooglecalendar } from 'react-icons/si'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import IntegrationIcon from '../integrations/IntegrationIcon'

const rings = [
  'inset-x-0 inset-y-0 border-primary/80 lg:inset-x-[2%]',
  'inset-x-[8%] inset-y-[6%] border-primary/60 lg:inset-x-[10%] lg:inset-y-[12%]',
  'inset-x-[16%] inset-y-[12%] border-primary/40 lg:inset-x-[20%] lg:inset-y-[24%]',
]

/* First position = mobile + tablet, `lg:` position = desktop */
const icons = [
  { label: 'Slack', icon: FaSlack, color: '#4A154B', pos: 'left-1/2 top-0 lg:left-[9%] lg:top-[32%]' },
  { label: 'Google Calendar', icon: SiGooglecalendar, color: '#4285F4', pos: 'left-[17%] top-[9%] lg:left-[20%] lg:top-[46%]' },
  { label: 'GitHub', icon: SiGithub, color: '#181717', pos: 'left-[83%] top-[8%] lg:left-[19%] lg:top-[70%]' },
  { label: 'Figma', icon: SiFigma, color: '#F24E1E', pos: 'left-[16%] top-[92%] lg:left-[89%] lg:top-[30%]' },
  { label: 'Google Drive', icon: SiGoogledrive, color: '#1FA463', pos: 'left-1/2 top-full lg:left-[82%] lg:top-[64%]' },
  { label: 'Notion', icon: SiNotion, color: '#000000', pos: 'left-[84%] top-[91%] lg:left-[94%] lg:top-[50%]' },
]

export default function Integrations() {
  return (
    <section className="px-3 pb-10 pt-20 sm:px-6 md:pb-20 md:pt-34 lg:px-10">
      <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-surface-2 to-surface px-4 py-10 shadow-soft sm:px-8 lg:py-14">
        <div className="relative mx-auto max-w-xl px-6 py-28 lg:flex lg:min-h-[460px] lg:max-w-none lg:items-center lg:justify-center lg:py-0">
          {/* rings */}
          {rings.map((cls) => (
            <span key={cls} aria-hidden className={`ring-fade pointer-events-none absolute rounded-full border ${cls}`} />
          ))}

          {/* floating logos */}
          {icons.map((i) => (
            <IntegrationIcon key={i.label} {...i} />
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

            <div className="mt-6 flex w-full flex-col gap-3 lg:mt-8 lg:w-auto lg:flex-row">
              <Button className="w-full lg:w-auto">Start Free Trial</Button>
              <Button variant="secondary" className="w-full lg:w-auto">Talk to Sales</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
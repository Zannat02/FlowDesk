const tones = {
  blue: 'bg-primary/20 text-primary-soft',
  orange: 'bg-orange-400/20 text-orange-300',
  violet: 'bg-violet-400/20 text-violet-300',
  green: 'bg-emerald-400/20 text-emerald-300',
  amber: 'bg-amber-400/20 text-amber-300',
}

export default function FeatureItem({ icon: Icon, title, tone = 'blue' }) {
  return (
    <div className="mb-4 flex items-center gap-3 rounded-2xl border border-line bg-surface-2 p-3 shadow-soft sm:gap-4 sm:p-3.5">
      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl sm:h-12 sm:w-12 ${tones[tone]}`}>
        <Icon size={22} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold sm:text-base">{title}</p>
        <p className="text-xs text-ink-mute">Core feature</p>
      </div>
    </div>
  )
}
const tones = {
  blue: 'bg-primary/10 border-primary/20',
  violet: 'bg-violet-400/10 border-violet-400/20',
  green: 'bg-emerald-400/10 border-emerald-400/20',
  rose: 'bg-rose-400/10 border-rose-400/20',
}

export default function StatCard({ value, unit, label, tone = 'blue' }) {
  return (
    <div className={`rounded-xl border px-3 py-4 text-center ${tones[tone]}`}>
      <p className="text-2xl font-semibold leading-none">
        {value}
        {unit && <span className="ml-1 text-base">{unit}</span>}
      </p>
      <p className="mt-2 text-[11px] text-ink-soft">{label}</p>
    </div>
  )
}

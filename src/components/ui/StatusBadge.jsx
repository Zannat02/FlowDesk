const tones = {
  ok: 'bg-ok/10 text-ok',
  bad: 'bg-bad/10 text-bad',
  warn: 'bg-warn/10 text-warn',
}
const dots = { ok: 'bg-ok', bad: 'bg-bad', warn: 'bg-warn' }

export default function StatusBadge({ tone = 'ok', children }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${tones[tone]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dots[tone]}`} />
      {children}
    </span>
  )
}

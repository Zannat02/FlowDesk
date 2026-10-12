import Card from '../ui/Card'
import DropdownMenu from '../ui/DropdownMenu'

const rows = [
  { label: 'In Progress', value: 67, color: 'bg-primary', tint: 'bg-primary/10' },
  { label: 'Completed', value: 24, color: 'bg-ok', tint: 'bg-ok/10' },
  { label: 'Overdue', value: 9, color: 'bg-warn', tint: 'bg-warn/10' },
]

export default function TaskStatus() {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Task Status Distribution</h3>
        <DropdownMenu items={['View Details', 'Export', 'Refresh']} />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {rows.map((r) => (
          <div key={r.label} className="flex gap-3">
            <span className={`w-0.5 shrink-0 rounded-full ${r.color}`} />
            <div className="flex-1">
              <p className="text-[11px] text-ink-soft">{r.label}</p>
              <p className="mt-1 text-lg font-semibold">{r.value}%</p>
              <div className={`mt-3 h-14 rounded-md ${r.tint}`}>
                <div className={`${r.color} h-full rounded-md opacity-40`} style={{ width: `${r.value}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

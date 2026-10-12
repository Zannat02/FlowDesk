import Card from '../ui/Card'
import DropdownMenu from '../ui/DropdownMenu'

const data = [
  { label: 'High Priority', value: 40, color: '#3b7ddd' },
  { label: 'Medium Priority', value: 26, color: '#8fb4ec' },
  { label: 'Low Priority', value: 18, color: '#2a3547' },
]

export default function PriorityDonut() {
  const total = data.reduce((s, d) => s + d.value, 0)
  let acc = 0
  const stops = data
    .map((d) => {
      const start = (acc / total) * 100
      acc += d.value
      return `${d.color} ${start}% ${(acc / total) * 100}%`
    })
    .join(', ')

  return (
    <Card className="h-full">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold">Task Priority</h3>
          <p className="text-[11px] text-ink-mute">Distribution by priority level</p>
        </div>
        <DropdownMenu items={['View Details', 'Change Date Range', 'Export', 'Refresh']} />
      </div>

      <div className="relative mx-auto mt-8 h-40 w-40 rounded-full" style={{ background: `conic-gradient(${stops})` }}>
        <div className="absolute inset-[34px] rounded-full bg-surface-2" />
      </div>

      <ul className="mt-8 space-y-2 text-[11px] text-ink-soft">
        {data.map((d) => (
          <li key={d.label} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
            {d.label}: <span className="font-semibold text-ink">{d.value}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

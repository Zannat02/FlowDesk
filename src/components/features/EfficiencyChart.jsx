import Card from '../ui/Card'
import DropdownMenu from '../ui/DropdownMenu'

const data = [
  { month: 'Jan', value: 62 },
  { month: 'Feb', value: 95 },
  { month: 'Mar', value: 40 },
  { month: 'Apr', value: 118, active: true },
  { month: 'May', value: 72 },
  { month: 'Jun', value: 85 },
]
const MAX = 120
const ticks = [120, 90, 60, 30, 0]

export default function EfficiencyChart() {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold">Team Efficiency Trend</h3>
          <p className="text-[11px] text-ink-mute">Overall efficiency percentage over time</p>
        </div>
        <DropdownMenu items={['View Details', 'Change Time Range', 'Export', 'Refresh']} />
      </div>

      <div className="mt-4 flex gap-3">
        {/* y axis */}
        <div className="flex h-40 flex-col justify-between text-[10px] text-ink-mute">
          {ticks.map((t) => <span key={t}>{t}</span>)}
        </div>

        {/* bars */}
        <div className="flex h-40 flex-1 items-end gap-3">
          {data.map((d) => (
            <div key={d.month} className="relative flex h-full flex-1 items-end">
              <div
                className={`w-full rounded-md ${d.active ? 'bg-gradient-to-b from-primary to-primary-deep' : 'bg-line'}`}
                style={{ height: `${(d.value / MAX) * 100}%` }}
              />
              {d.active && (
                <div className="absolute left-full top-6 z-10 ml-2 whitespace-nowrap rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[10px] shadow-soft">
                  <p className="font-medium">April</p>
                  <p className="text-ink-soft">
                    <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    Efficiency: {d.value}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
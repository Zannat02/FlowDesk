import Card from '../ui/Card'
import DropdownMenu from '../ui/DropdownMenu'

const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const times = ['10.00', '09.30', '09.00', '08.30', '08.00']

const grid = [
  [1, 0, 2, 2, 2, 1, 2],
  [0, 2, 2, 2, 2, 2, 2],
  [2, 2, 2, 2, 0, 2, 2],
  [1, 0, 2, 2, 2, 1, 2],
  [2, 2, 2, 2, 0, 0, 0],
]
const shade = ['bg-primary/15', 'bg-primary/45', 'bg-primary']

export default function ActivityHeatmap() {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold">Team Activity</h3>
          <p className="text-[11px] text-ink-mute">Understand your team productivity and workload.</p>
        </div>
        <DropdownMenu items={['View Details', 'Change Time Range', 'Download', 'Refresh']} />
      </div>

      <p className="mt-2 text-2xl font-semibold">
        63% <span className="ml-1 rounded-md bg-ok/10 px-1.5 py-0.5 text-[10px] font-medium text-ok">↗ 6%</span>
        <span className="ml-1 text-[10px] font-normal text-ink-mute">vs last week</span>
      </p>

      <div className="mt-3 flex gap-2">
        <div className="flex flex-col justify-between py-1 text-[10px] text-ink-mute">
          {times.map((t) => <span key={t} className="h-7 leading-7">{t}</span>)}
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-7 gap-1">
            {grid.flat().map((v, i) => <span key={i} className={`h-7 rounded-[5px] ${shade[v]}`} />)}
          </div>
          <div className="mt-1.5 grid grid-cols-7 text-center text-[10px] text-ink-mute">
            {days.map((d) => <span key={d}>{d}</span>)}
          </div>
        </div>
      </div>
    </Card>
  )
}

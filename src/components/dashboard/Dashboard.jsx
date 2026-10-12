import Sidebar from './Sidebar'
import Topbar from './Topbar'
import StatCard from '../ui/StatCard'
import TaskStatus from './TaskStatus'
import PriorityDonut from './PriorityDonut'
import ActivityHeatmap from './ActivityHeatmap'
import WorkloadTable from './WorkloadTable'

const stats = [
  { value: '156', label: 'Active Projects', tone: 'blue' },
  { value: '82%', label: 'Utilization Rate', tone: 'violet' },
  { value: '2.4', unit: 'Days', label: 'Average Time', tone: 'green' },
  { value: '3', unit: 'Projects', label: 'At Risk Projects', tone: 'rose' },
]

/*  <ScaledFrame> shrinks it on smaller screens. */
export default function Dashboard() {
  return (
    <div className="flex gap-3 text-ink">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <Topbar />
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2 grid grid-cols-4 gap-3 rounded-2xl border border-line bg-surface-2/80 p-3">
            {stats.map((s) => <StatCard key={s.label} {...s} />)}
          </div>
          <div className="row-span-2"><PriorityDonut /></div>
          <div className="col-span-2"><TaskStatus /></div>
          <div className="col-span-1"><ActivityHeatmap /></div>
          <div className="col-span-2"><WorkloadTable /></div>
        </div>
      </div>
    </div>
  )
}

import { MoreHorizontal } from 'lucide-react'
import Card from '../ui/Card'
import StatusBadge from '../ui/StatusBadge'

const team = [
  { name: 'Arif Hasan', role: 'Product Manager', active: 12, overdue: 5, status: 'On Track', tone: 'ok', color: 'bg-sky-400/25 text-sky-300' },
  { name: 'Nusrat Jahan', role: 'UI/UX Designer', active: 10, overdue: 2, status: 'Under Pressure', tone: 'bad', color: 'bg-pink-400/25 text-pink-300' },
  { name: 'Tanvir Ahmed', role: 'Frontend Developer', active: 15, overdue: 4, status: 'Sustained', tone: 'ok', color: 'bg-emerald-400/25 text-emerald-300' },
  { name: 'Mim Akter', role: 'Backend Developer', active: 9, overdue: 1, status: 'Overloaded', tone: 'bad', color: 'bg-amber-400/25 text-amber-300' },
  { name: 'Sabbir Rahman', role: 'QA Specialist', active: 20, overdue: 6, status: 'Balanced', tone: 'ok', color: 'bg-violet-400/25 text-violet-300' },
]

const initials = (n) => n.split(' ').map((p) => p[0]).join('')

export default function WorkloadTable() {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Team Workload</h3>
        <span className="text-[11px] text-primary-soft">See All</span>
      </div>

      <table className="mt-3 w-full text-left text-[11px]">
        <thead>
          <tr className="bg-bg/60 text-ink-mute">
            <th className="rounded-l-lg px-3 py-2 font-medium">Name</th>
            <th className="px-2 font-medium">Active work</th>
            <th className="px-2 font-medium">Overdue</th>
            <th className="px-2 font-medium">Status</th>
            <th className="rounded-r-lg px-2 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {team.map((m) => (
            <tr key={m.name} className="border-b border-line/60 last:border-0">
              <td className="px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <span className={`grid h-7 w-7 place-items-center rounded-full text-[10px] font-semibold ${m.color}`}>{initials(m.name)}</span>
                  <div className="leading-tight">
                    <p className="font-medium text-ink">{m.name}</p>
                    <p className="text-[10px] text-ink-mute">{m.role}</p>
                  </div>
                </div>
              </td>
              <td className="px-2 text-ink-soft">{m.active}</td>
              <td className="px-2 text-ink-soft">{m.overdue}</td>
              <td className="px-2"><StatusBadge tone={m.tone}>{m.status}</StatusBadge></td>
              <td className="px-2 text-ink-mute"><MoreHorizontal size={14} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}

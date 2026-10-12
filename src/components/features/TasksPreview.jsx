import { Search, Filter, Plus, CheckCheck } from 'lucide-react'
import ScaledFrame from '../ui/ScaledFrame'

const menu = ['Overview', 'Tasks', 'Projects', 'Analytics', 'Calendar', 'Team']

const tasks = [
  { title: 'Update design tokens', who: 'NJ', priority: 'High', status: 'Completed', due: '12-10-2026', progress: 100 },
  { title: 'Implement auth flow', who: 'AH', priority: 'High', status: 'In Progress', due: '14-10-2026', progress: 65 },
  { title: 'Design client onboarding', who: 'MA', priority: 'Medium', status: 'In Progress', due: '16-10-2026', progress: 40 },
  { title: 'Fix payment gateway bug', who: 'TA', priority: 'High', status: 'Completed', due: '17-10-2026', progress: 100 },
  { title: 'Write API documentation', who: 'SR', priority: 'Low', status: 'Pending', due: '20-10-2026', progress: 0 },
  { title: 'Review sprint backlog', who: 'AH', priority: 'Medium', status: 'In Progress', due: '21-10-2026', progress: 30 },
  { title: 'Set up error monitoring', who: 'MA', priority: 'Low', status: 'Pending', due: '24-10-2026', progress: 0 },
  { title: 'Prepare release notes', who: 'NJ', priority: 'Medium', status: 'Pending', due: '26-10-2026', progress: 10 },
]

const priorityTone = {
  High: 'bg-bad/15 text-bad',
  Medium: 'bg-warn/15 text-warn',
  Low: 'bg-ok/15 text-ok',
}
const statusTone = {
  Completed: 'bg-ok/15 text-ok',
  'In Progress': 'bg-primary/20 text-primary-soft',
  Pending: 'bg-line text-ink-soft',
}

const cols = 'grid grid-cols-[2.2fr_0.7fr_0.9fr_1.1fr_1fr_1fr] items-center gap-3'

function Pill({ tone, children }) {
  return <span className={`inline-block rounded-full px-2 py-0.5 text-[9px] font-medium ${tone}`}>{children}</span>
}

function Preview() {
  return (
    <div className="flex gap-3 rounded-2xl border border-line bg-surface-2 p-3 text-ink">
      {/* mini sidebar */}
      <aside className="w-[100px] shrink-0">
        <div className="mb-3 flex items-center gap-1.5">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-primary text-white"><CheckCheck size={11} /></span>
          <span className="text-[11px] font-semibold">FlowDesk</span>
        </div>
        <ul className="space-y-0.5">
          {menu.map((m) => (
            <li
              key={m}
              className={`rounded-md px-2 py-1.5 text-[10px] ${m === 'Tasks' ? 'bg-primary/15 font-medium text-primary-soft' : 'text-ink-mute'}`}
            >
              {m}
            </li>
          ))}
        </ul>
      </aside>

      {/* main */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold">Tasks</p>
            <p className="text-[9px] text-ink-mute">Manage and track all team tasks</p>
          </div>
          <div className="flex w-36 items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1.5 text-[9px] text-ink-mute">
            <Search size={10} /> Search tasks...
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-[11px] font-semibold">All Tasks</p>
          <div className="flex gap-2">
            <span className="flex items-center gap-1 rounded-full border border-line px-2.5 py-1 text-[9px] text-ink-soft">
              <Filter size={9} /> Filter
            </span>
            <span className="flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[9px] font-medium text-white">
              <Plus size={9} /> Create Task
            </span>
          </div>
        </div>

        {/* table header */}
        <div className={`${cols} mt-3 rounded-lg bg-bg/60 px-3 py-2 text-[9px] text-ink-mute`}>
          <span>Title</span><span>Assignee</span><span>Priority</span><span>Status</span><span>Due Date</span><span>Progress</span>
        </div>

        {/* rows */}
        {tasks.map((t) => (
          <div key={t.title} className={`${cols} border-b border-line/60 px-3 py-2.5 text-[10px] last:border-0`}>
            <span className="truncate font-medium">{t.title}</span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/25 text-[8px] font-semibold text-primary-soft">{t.who}</span>
            <span><Pill tone={priorityTone[t.priority]}>{t.priority}</Pill></span>
            <span><Pill tone={statusTone[t.status]}>{t.status}</Pill></span>
            <span className="text-ink-soft">{t.due}</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 flex-1 rounded-full bg-line">
                <span className="block h-full rounded-full bg-primary" style={{ width: `${t.progress}%` }} />
              </span>
              <span className="w-6 text-[9px] text-ink-mute">{t.progress}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TasksPreview() {
  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        WebkitMaskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)',
        maskImage: 'linear-gradient(to bottom, #000 55%, transparent 100%)',
      }}
    >
      <ScaledFrame designWidth={640}>
        <Preview />
      </ScaledFrame>
    </div>
  )
}
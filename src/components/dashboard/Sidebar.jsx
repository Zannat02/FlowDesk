import { LayoutDashboard, CheckSquare, Folder, BarChart3, Calendar, Users, FileText, MessageSquare, Settings, HelpCircle, LogOut } from 'lucide-react'
import Logo from '../ui/Logo'

const menu = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'Tasks', icon: CheckSquare },
  { label: 'Projects', icon: Folder },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Calendar', icon: Calendar },
  { label: 'Team Members', icon: Users },
  { label: 'Reports', icon: FileText },
  { label: 'Messages', icon: MessageSquare, badge: 5 },
]
const general = [
  { label: 'Settings', icon: Settings },
  { label: 'Help & Support', icon: HelpCircle },
  { label: 'Logout', icon: LogOut },
]

function Item({ label, icon: Icon, active, badge }) {
  return (
    <li
      className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs ${
        active ? 'bg-primary/15 font-medium text-primary-soft' : 'text-ink-soft'
      }`}
    >
      <Icon size={14} />
      <span className="flex-1">{label}</span>
      {badge && <span className="grid h-4 w-4 place-items-center rounded-full bg-bad text-[9px] font-semibold text-white">{badge}</span>}
    </li>
  )
}

export default function Sidebar() {
  return (
    <aside className="flex w-[190px] shrink-0 flex-col gap-3">
      <div className="rounded-2xl border border-line bg-surface-2/80 p-3"><Logo size="sm" /></div>

      <div className="flex flex-1 flex-col rounded-2xl border border-line bg-surface-2/80 p-3">
        <p className="mb-2 px-2.5 text-[11px] text-ink-mute">Menu</p>
        <ul className="space-y-0.5">{menu.map((m) => <Item key={m.label} {...m} />)}</ul>
        <p className="mb-2 mt-5 px-2.5 text-[11px] text-ink-mute">General</p>
        <ul className="space-y-0.5">{general.map((m) => <Item key={m.label} {...m} />)}</ul>

        <div className="mt-auto rounded-xl bg-primary/15 p-3">
          <p className="text-xs font-semibold">Upgrade to Pro</p>
          <p className="mt-1 text-[10px] leading-snug text-ink-soft">Unlock advanced analytics and manage unlimited projects.</p>
          <button className="mt-3 w-full rounded-full bg-gradient-to-b from-primary to-primary-deep py-1.5 text-[11px] font-medium text-white cursor-pointer">Upgrade Now</button>
        </div>
      </div>
    </aside>
  )
}

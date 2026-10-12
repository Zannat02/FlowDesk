import { Search, Bell, ChevronDown } from 'lucide-react'

export default function Topbar() {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-line bg-surface-2/80 px-4 py-2.5">
      <div>
        <p className="text-sm font-semibold">Welcome back, Rafi! 👋</p>
        <p className="text-[11px] text-ink-mute">Here's what's happening with your team today</p>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex w-52 items-center gap-2 rounded-full border border-line bg-bg px-3 py-2 text-xs text-ink-mute">
          <Search size={13} /> Search here...
        </div>
        <span className="relative grid h-8 w-8 place-items-center rounded-full border border-line text-ink-soft">
          <Bell size={14} />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-bad" />
        </span>
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20 text-xs font-semibold text-primary-soft">RK</span>
          <div className="leading-tight">
            <p className="text-[11px] font-medium">Rafi Khan</p>
            <p className="text-[10px] text-ink-mute">rafi@flowdesk.app</p>
          </div>
          <ChevronDown size={13} className="text-ink-mute" />
        </div>
      </div>
    </div>
  )
}

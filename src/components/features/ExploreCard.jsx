import { Search, ChevronRight } from 'lucide-react'

export default function ExploreCard() {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-4 rounded-2xl border border-line bg-surface-2 p-3 text-left shadow-soft transition hover:border-primary/40 cursor-pointer sm:p-4"
    >
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-soft sm:h-14 sm:w-14">
        <Search size={24} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold sm:text-base">Explore all features</span>
        <span className="block truncate text-xs text-ink-mute sm:text-sm">Tasks, Projects, Analytics &amp; More</span>
      </span>

      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-bg text-ink-soft transition group-hover:bg-primary group-hover:text-white">
        <ChevronRight size={18} />
      </span>
    </button>
  )
}
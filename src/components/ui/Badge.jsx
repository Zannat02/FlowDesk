import { Sparkles } from 'lucide-react'


export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2/80 px-3.5 py-1.5 text-xs font-medium text-ink shadow-soft backdrop-blur-sm sm:text-sm">
      <Sparkles size={14} className="text-primary-soft" />
      {children}
    </span>
  )
}
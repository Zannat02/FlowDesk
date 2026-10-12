import { CheckCheck } from 'lucide-react'

export default function Logo({ size = 'md' }) {
  const box = size === 'sm' ? 'h-6 w-6 rounded-md' : 'h-8 w-8 rounded-lg'
  const text = size === 'sm' ? 'text-sm' : 'text-lg'
  return (
    <div className="flex items-center gap-2">
      <span className={`grid place-items-center bg-primary text-white ${box}`}>
        <CheckCheck size={size === 'sm' ? 14 : 18} />
      </span>
      <span className={`font-semibold ${text}`}>FlowDesk</span>
    </div>
  )
}

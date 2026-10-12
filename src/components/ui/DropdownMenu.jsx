import { useEffect, useRef, useState } from 'react'
import { MoreHorizontal } from 'lucide-react'

export default function DropdownMenu({ items }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const close = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        aria-label="More options"
        onClick={() => setOpen((o) => !o)}
        className="grid h-7 w-7 place-items-center rounded-full border border-line text-ink-soft hover:bg-line cursor-pointer"
      >
        <MoreHorizontal size={14} />
      </button>
      {open && (
        <ul className="absolute right-0 top-9 z-20 w-36 rounded-xl border border-line bg-surface p-1.5 text-xs shadow-soft">
          {items.map((item) => (
            <li key={item}>
              <button
                onClick={() => setOpen(false)}
                className="w-full rounded-lg px-2.5 py-1.5 text-left text-ink-soft hover:bg-line hover:text-ink cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

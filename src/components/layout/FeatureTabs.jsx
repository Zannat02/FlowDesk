import { useState } from 'react'

// Same tabs on every device.
const tabs = ['Overview', 'Tasks', 'Projects', 'Analytics']

export default function FeatureTabs() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="mt-6 flex justify-center">
      <div className="inline-flex max-w-full gap-1 rounded-full border border-line bg-surface-2/80 p-1.5 shadow-soft backdrop-blur-sm">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`whitespace-nowrap rounded-full px-2.5 py-2 text-xs transition sm:px-6 sm:text-sm cursor-pointer ${
              active === t ? 'bg-bg text-ink shadow' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

const brands = [
  {
    name: 'Northwind',
    cls: 'font-semibold tracking-tight',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </>
    ),
  },
  {
    name: 'Lumen',
    cls: 'font-bold',
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </>
    ),
  },
  {
    name: 'Orbit',
    cls: 'font-serif italic text-3xl',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(-30 12 12)" />
      </>
    ),
  },
  {
    name: 'Pixelcraft',
    cls: 'font-medium',
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" />
        <rect x="13" y="13" width="8" height="8" rx="4" />
      </>
    ),
  },
  {
    name: 'Brightly',
    cls: 'font-semibold',
    icon: <path d="M12 3l2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4z" />,
  },
  {
    name: 'Stackly',
    cls: 'font-extrabold tracking-tight',
    icon: (
      <>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 13 9 5 9-5" />
      </>
    ),
  },
  {
    name: 'Zenith',
    cls: 'font-medium tracking-[0.2em] uppercase text-base',
    icon: <path d="M12 3 22 20H2z" />,
  },
  {
    name: 'Coda',
    cls: 'font-bold',
    icon: (
      <>
        <path d="M18 6a8 8 0 1 0 0 12" />
        <circle cx="18" cy="12" r="1.5" />
      </>
    ),
  },
]

export default function BrandLogo({ brand }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 text-ink-mute">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden
      >
        {brand.icon}
      </svg>
      <span className={`text-xl ${brand.cls}`}>{brand.name}</span>
    </div>
  )
}

export { brands }
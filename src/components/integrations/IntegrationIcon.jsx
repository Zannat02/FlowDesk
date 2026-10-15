

export default function IntegrationIcon({ icon: Icon, color, pos, label }) {
  return (
    <span
      title={label}
      className={`absolute z-20 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-soft ring-4 ring-bg/60 sm:h-12 sm:w-12 lg:h-14 lg:w-14 ${pos}`}
    >
      <Icon className="h-5 w-5 lg:h-6 lg:w-6" style={{ color }} />
    </span>
  )
}
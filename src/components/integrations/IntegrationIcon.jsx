
export default function IntegrationIcon({ icon: Icon, color, label, mobile, desktop }) {
  return (
    <span
      title={label}
      style={{ '--ml': mobile.left, '--mt': mobile.top, '--dl': desktop.left, '--dt': desktop.top }}
      className="absolute left-[var(--ml)] top-[var(--mt)] z-20 grid size-[clamp(1.75rem,8.5vw,3.5rem)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white shadow-soft ring-2 ring-bg/60 sm:ring-4 lg:left-[var(--dl)] lg:top-[var(--dt)]"
    >
      <Icon className="size-1/2" style={{ color }} />
    </span>
  )
}
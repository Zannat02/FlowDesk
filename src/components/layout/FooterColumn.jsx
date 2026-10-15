
export default function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-ink md:text-base">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-ink-mute transition hover:text-ink md:text-base"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
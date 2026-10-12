export default function Card({ className = '', children }) {
  return (
    <div className={`rounded-2xl border border-line bg-surface-2/80 p-4 ${className}`}>
      {children}
    </div>
  )
}

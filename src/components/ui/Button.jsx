const variants = {
  primary:
    'bg-gradient-to-b from-primary to-primary-deep text-white shadow-[0_8px_24px_-8px_rgb(59_125_221/0.8)] hover:brightness-110',
  secondary: 'bg-surface-2 text-ink border border-line hover:bg-line',
  dark: 'bg-ink text-bg hover:bg-white',
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

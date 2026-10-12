import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'

const links = ['Home', 'Features', 'About Us', 'Pricing', 'Blog']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const headerRef = useRef(null)

 
  useEffect(() => {
    if (!open) return
    const onClick = (e) => headerRef.current && !headerRef.current.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header ref={headerRef} className="relative z-30 px-4 py-4 sm:px-8 lg:px-10 lg:py-6">
      <div className="flex items-center justify-between">
        <Logo />

    
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface-2/80 p-1 lg:flex">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => setActive(l)}
              className={`rounded-full px-4 py-1.5 text-sm transition cursor-pointer ${
                active === l ? 'bg-bg text-ink' : 'text-ink-soft hover:text-ink'
              }`}
            >
              {l}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="dark" className="!px-5 !py-2">Login</Button>
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-surface-2/80 lg:hidden cursor-pointer"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

  
      {open && (
        <nav className="absolute left-4 right-4 top-full z-40 -mt-1 rounded-2xl border border-line bg-surface/95 p-2 shadow-soft backdrop-blur-md sm:left-auto sm:right-8 sm:w-64 lg:hidden">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => {
                setActive(l)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm transition cursor-pointer ${
                active === l ? 'bg-primary/15 text-primary-soft' : 'text-ink-soft hover:bg-line hover:text-ink'
              }`}
            >
              {l}
              {active === l && <span className="h-1.5 w-1.5 rounded-full bg-primary-soft" />}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
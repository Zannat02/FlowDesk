import { useLayoutEffect, useRef, useState } from 'react'

export default function ScaledFrame({ designWidth = 1100, children }) {
  const wrapRef = useRef(null)
  const innerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [height, setHeight] = useState(0)

  useLayoutEffect(() => {
    const update = () => {
      const s = Math.min(1, wrapRef.current.clientWidth / designWidth)
      setScale(s)
      setHeight(innerRef.current.offsetHeight * s)
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(wrapRef.current)
    ro.observe(innerRef.current)
    return () => ro.disconnect()
  }, [designWidth])

  return (
    <div ref={wrapRef} className="w-full">
      <div style={{ height }} className="relative">
        <div
          ref={innerRef}
          style={{ width: designWidth, transform: `scale(${scale})`, transformOrigin: 'top left' }}
          className="absolute left-0 top-0"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

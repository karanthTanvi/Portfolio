import { useEffect, useRef, useState } from 'react'

export default function Logo({ size = 36 }) {
  const containerRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // On touch devices there's no cursor to react to, so keep the face smiling.
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const handleMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const max = 4
      const nx = dist === 0 ? 0 : (dx / dist) * max
      const ny = dist === 0 ? 0 : (dy / dist) * max
      setOffset({ x: nx, y: ny })
    }

    // Match the custom cursor exactly: open the mouth whenever the cursor grows,
    // using document-level delegation so it also covers elements added later.
    const HOVER_SELECTOR = 'a, button, .cursor-hover'
    const onOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) setHovering(true)
    }
    const onOut = (e) => {
      const el = e.target.closest(HOVER_SELECTOR)
      if (el && !el.contains(e.relatedTarget)) setHovering(false)
    }

    window.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        width: size,
        height: size,
        display: 'inline-block',
      }}
    >
      <svg
        viewBox="0 0 36 36"
        width={size}
        height={size}
        style={{ display: 'block' }}
      >
        <rect
          x="0"
          y="0"
          width="36"
          height="36"
          rx="9"
          fill="var(--text)"
        />
        <circle
          cx={12 + offset.x}
          cy={14 + offset.y}
          r="2"
          fill="var(--bg-face)"
        />
        <circle
          cx={24 + offset.x}
          cy={14 + offset.y}
          r="2"
          fill="var(--bg-face)"
        />
        {hovering ? (
          <ellipse
            cx={18 + offset.x}
            cy={24 + offset.y}
            rx="3.5"
            ry="4.5"
            fill="var(--bg-face)"
          />
        ) : (
          <path
            d={`M ${13 + offset.x} ${22 + offset.y} Q ${18 + offset.x} ${27 + offset.y} ${23 + offset.x} ${22 + offset.y}`}
            stroke="var(--bg-face)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        )}
      </svg>
    </div>
  )
}
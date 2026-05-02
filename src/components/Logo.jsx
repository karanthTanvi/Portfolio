import { useEffect, useRef, useState } from 'react'

export default function Logo({ size = 36 }) {
  const containerRef = useRef(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
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

    const enter = () => setHovering(true)
    const leave = () => setHovering(false)

    window.addEventListener('mousemove', handleMove)
    const interactive = document.querySelectorAll('a, button, .cursor-hover')
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMove)
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
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
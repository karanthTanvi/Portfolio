import { useEffect, useRef } from 'react'

const DEFAULT_SIZE = 40
const HOVER_SIZE = 100
const HOVER_SELECTOR = 'a, button, .cursor-hover'

export default function CustomCursor() {
  const dot = useRef(null)

  useEffect(() => {
    // No cursor to follow on touch devices — skip the rAF loop and listeners.
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let size = DEFAULT_SIZE
    let currentSize = DEFAULT_SIZE
    let raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) {
        dot.current.style.transform =
          `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
    }

    const onOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) size = HOVER_SIZE
    }
    const onOut = (e) => {
      const el = e.target.closest(HOVER_SELECTOR)
      if (el && !el.contains(e.relatedTarget)) size = DEFAULT_SIZE
    }

    const tick = () => {
      currentSize += (size - currentSize) * 0.15
      if (dot.current) {
        dot.current.style.width = currentSize + 'px'
        dot.current.style.height = currentSize + 'px'
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return (
    <>
      <style>{`
        @media (hover: none), (pointer: coarse) {
          .custom-cursor { display: none !important; }
        }
      `}</style>
      <div
        ref={dot}
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${DEFAULT_SIZE}px`,
          height: `${DEFAULT_SIZE}px`,
          background: 'white',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          willChange: 'transform, width, height',
        }}
      />
    </>
  )
}
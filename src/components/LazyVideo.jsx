import { useEffect, useRef } from 'react'

// Video that downloads nothing until it scrolls into view (preload="none" +
// src assigned on intersection), then plays only while visible. Honours
// prefers-reduced-motion by loading a still frame without autoplaying.
export default function LazyVideo({ src, ariaLabel, className, style, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!v.getAttribute('src')) v.setAttribute('src', src)
          if (!reduce) v.play().catch(() => {})
        } else if (!reduce) {
          v.pause()
        }
      },
      { threshold: 0.25 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [src])

  return (
    <video
      ref={ref}
      loop
      muted
      playsInline
      preload="none"
      aria-label={ariaLabel}
      className={className}
      style={style}
      {...rest}
    />
  )
}

import { useEffect, useRef } from 'react'

// Starts downloading as soon as it mounts (src set immediately + preload="auto")
// so it's ready by the time the reader reaches it. Still only *plays* while on
// screen, to avoid decoding video that's scrolled off. Honours reduced-motion.
export default function LazyVideo({ src, ariaLabel, className, style, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {})
        else v.pause()
      },
      { threshold: 0.25 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      loop
      muted
      playsInline
      preload="auto"
      aria-label={ariaLabel}
      className={className}
      style={style}
      {...rest}
    />
  )
}

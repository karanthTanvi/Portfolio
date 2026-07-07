import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToAnchor() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      // Lazy routes may not have painted the target yet — retry briefly.
      let tries = 0
      let raf
      const tryScroll = () => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else if (tries++ < 30) {
          raf = requestAnimationFrame(tryScroll)
        }
      }
      raf = requestAnimationFrame(tryScroll)
      return () => cancelAnimationFrame(raf)
    }
    // New page: reset instantly (no smooth sweep) so the transition reads as a
    // fresh page, not a scroll.
    window.scrollTo(0, 0)
  }, [hash, pathname])

  return null
}

import { useMemo, useState, useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'

// Heavy WebGL layer lives in its own chunk — only fetched when actually used.
const ChromaShader = lazy(() => import('./ChromaShader'))

// The WebGL shader is the desktop hero's signature — but it's a continuous,
// cursor-driven, full-screen GPU load, and the `shaders` library is large. Run
// it only where it pays off: the home route, on a fine pointer, with motion
// allowed and enough memory. Everywhere else (phones, reduced-motion, case-study
// reading) fall back to a static / gently-drifting CSS gradient in the same
// palette, so the page still has ambiance instead of going flat — and never
// downloads the shader library.
function isMobileDevice() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 720
}

function useHeavyShaderAllowed(isHome, mobile) {
  return useMemo(() => {
    if (!isHome || mobile) return false
    if (typeof window === 'undefined' || !window.matchMedia) return false
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lowMem = typeof navigator !== 'undefined' && navigator.deviceMemory && navigator.deviceMemory < 4
    return !reduced && !lowMem
  }, [isHome, mobile])
}

export default function ShaderEffect({ theme }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  // Phones get a plain background — the pastel gradient clashes with content
  // (e.g. the black-and-white about photo) in light mode. Re-check on resize so
  // it tracks rotation and responsive breakpoints.
  const [mobile, setMobile] = useState(isMobileDevice)
  useEffect(() => {
    const onResize = () => setMobile(isMobileDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  const heavy = useHeavyShaderAllowed(isHome, mobile)
  const faceColor = theme === 'dark' ? '#0a0a0a' : '#fafaf7'
  const ambient = (
    <div className="ambient-bg" style={{ opacity: theme === 'dark' ? 0.35 : 0.6 }} />
  )

  return (
    <div
      className="shader-bg"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: faceColor,
      }}
    >
      <style>{`
        .ambient-bg {
          position: absolute;
          inset: -10%;
          background:
            radial-gradient(60% 50% at 20% 20%, #fce1b1, transparent 60%),
            radial-gradient(52% 46% at 82% 24%, #E0D5F5, transparent 62%),
            radial-gradient(55% 50% at 72% 82%, #d5ffad, transparent 62%),
            radial-gradient(46% 46% at 24% 78%, #f5e8f4, transparent 60%),
            radial-gradient(50% 46% at 50% 55%, #ffb580, transparent 65%);
          filter: blur(48px) saturate(1.08);
          will-change: transform;
          animation: ambient-drift 26s ease-in-out infinite alternate;
        }
        @media (prefers-reduced-motion: reduce) {
          .ambient-bg { animation: none; }
        }
        @keyframes ambient-drift {
          0%   { transform: scale(1) translate3d(0, 0, 0); }
          100% { transform: scale(1.18) translate3d(-3%, -2%, 0); }
        }
      `}</style>

      {heavy ? (
        <Suspense fallback={mobile ? null : ambient}>
          <ChromaShader theme={theme} />
        </Suspense>
      ) : mobile ? null : (
        ambient
      )}
    </div>
  )
}

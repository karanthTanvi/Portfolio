/* eslint-disable react-hooks/refs */
import { forwardRef, useMemo, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const isCoarsePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(hover: none), (pointer: coarse)').matches

function useAnimationFrame(callback, active) {
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    if (!active) return
    let frameId
    const loop = () => {
      callbackRef.current()
      frameId = requestAnimationFrame(loop)
    }
    frameId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(frameId)
  }, [active])
}

// Desktop-only: track the mouse relative to the container. No touch listener —
// on phones the effect is disabled entirely (see coarse-pointer gate below), so
// scrolling never reflows the headline.
function useMousePositionRef(containerRef, active) {
  const positionRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    if (!active) return
    const updatePosition = (x, y) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect()
        positionRef.current = { x: x - rect.left, y: y - rect.top }
      } else {
        positionRef.current = { x, y }
      }
    }
    const handleMouseMove = (ev) => updatePosition(ev.clientX, ev.clientY)
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [containerRef, active])

  return positionRef
}

const VariableProximity = forwardRef((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    ...restProps
  } = props

  // Decide once, on mount, whether this device gets the interactive effect.
  const active = useMemo(() => !isCoarsePointer(), [])

  const letterRefs = useRef([])
  const centersRef = useRef([])
  const mousePositionRef = useMousePositionRef(containerRef, active)
  const lastPositionRef = useRef({ x: null, y: null })

  const parsedSettings = useMemo(() => {
    const parseSettings = (settingsStr) =>
      new Map(
        settingsStr
          .split(',')
          .map((s) => s.trim())
          .map((s) => {
            const [name, value] = s.split(' ')
            return [name.replace(/['"]/g, ''), parseFloat(value)]
          })
      )
    const fromSettings = parseSettings(fromFontVariationSettings)
    const toSettings = parseSettings(toFontVariationSettings)
    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }))
  }, [fromFontVariationSettings, toFontVariationSettings])

  // Cache letter centers relative to the container; recompute only on resize /
  // scroll. This breaks the per-frame read→write→reflow loop that made the
  // headline thrash layout while the mouse moved.
  useEffect(() => {
    if (!active) return
    const measure = () => {
      const container = containerRef?.current
      if (!container) return
      const cRect = container.getBoundingClientRect()
      centersRef.current = letterRefs.current.map((el) => {
        if (!el) return null
        const r = el.getBoundingClientRect()
        return {
          x: r.left + r.width / 2 - cRect.left,
          y: r.top + r.height / 2 - cRect.top,
        }
      })
    }
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, { passive: true })
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
    }
  }, [active, containerRef, label])

  const calculateFalloff = (distance) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1)
    switch (falloff) {
      case 'exponential':
        return norm ** 2
      case 'gaussian':
        return Math.exp(-((distance / (radius / 2)) ** 2) / 2)
      case 'linear':
      default:
        return norm
    }
  }

  useAnimationFrame(() => {
    const { x, y } = mousePositionRef.current
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) return
    lastPositionRef.current = { x, y }

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return
      const center = centersRef.current[index]
      if (!center) return

      const distance = Math.hypot(x - center.x, y - center.y)
      if (distance >= radius) {
        letterRef.style.fontVariationSettings = fromFontVariationSettings
        return
      }
      const falloffValue = calculateFalloff(distance)
      letterRef.style.fontVariationSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => `'${axis}' ${fromValue + (toValue - fromValue) * falloffValue}`)
        .join(', ')
    })
  }, active)

  const words = label.split(' ')
  let letterIndex = 0

  return (
    <span
      ref={ref}
      className={`${className} variable-proximity`}
      onClick={onClick}
      style={{ display: 'inline', ...style }}
      {...restProps}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((letter) => {
            const currentLetterIndex = letterIndex++
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el) => {
                  letterRefs.current[currentLetterIndex] = el
                }}
                style={{ display: 'inline-block', fontVariationSettings: fromFontVariationSettings }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            )
          })}
          {wordIndex < words.length - 1 && (
            <span style={{ display: 'inline-block' }}>&nbsp;</span>
          )}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  )
})

VariableProximity.displayName = 'VariableProximity'
export default VariableProximity

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TbMail, TbBrandLinkedin } from 'react-icons/tb'
import VariableProximity from './VariableProximity'

// Cycles a word letter by letter: type it in, hold, erase, type the next.
function Typewriter({ words, typingSpeed = 90, deletingSpeed = 45, hold = 2000 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const word = words[index]
    let timer
    if (phase === 'typing') {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), typingSpeed)
      } else {
        timer = setTimeout(() => setPhase('deleting'), hold)
      }
    } else if (text.length > 0) {
      timer = setTimeout(() => setText(word.slice(0, text.length - 1)), deletingSpeed)
    } else {
      timer = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }, typingSpeed)
    }
    return () => clearTimeout(timer)
  }, [text, phase, index, words, typingSpeed, deletingSpeed, hold])

  return (
    <span aria-live="polite">
      {text}
      <span className="tw-caret" aria-hidden="true" />
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const headline = {
  fontSize: 'clamp(3.5rem, 9vw, 7rem)',
  fontWeight: 600,
  letterSpacing: '-0.022em',
  lineHeight: 1.2,
}

const label = {
  fontSize: '12px',
  fontWeight: 400,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
}

const detail = {
  fontSize: '15px',
  lineHeight: 1.47,
  letterSpacing: '-0.014em',
  color: 'var(--text)',
}

export default function Hero() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 500], [1, 0])
  const scale = useTransform(scrollY, [0, 500], [1, 0.94])
  const y = useTransform(scrollY, [0, 500], [0, -40])

  return (
    <section ref={ref} className="hero-section">
      <style>{`
        .hero-section {
          min-height: 100vh;
          /* top padding ~= navbar height so the gap above the title matches the gap below it (to the bottom row) */
          padding: 5.25rem 4rem 4rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        /* title fills the space above the bottom row so it sits vertically centered, bottom row stays pinned */
        .hero-headline {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 0.25rem;
          text-align: left;
        }
        .hero-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }
        .tw-caret {
          display: inline-block;
          width: 0.02em;
          height: 0.9em;
          margin-left: 0.1em;
          background: currentColor;
          opacity: 0.4;
          vertical-align: baseline;
          animation: tw-blink 1s steps(1) infinite;
        }
        @keyframes tw-blink { 50% { opacity: 0; } }
        @media (max-width: 900px) {
          .hero-section { padding: 4.75rem 2rem 3rem; }
        }
        @media (max-width: 720px) {
          .hero-section {
            padding: 6rem 1.5rem 3rem;
            justify-content: center;
            gap: clamp(2.5rem, 6vh, 4.5rem);
          }
          .hero-headline { flex: 0 0 auto; justify-content: flex-start; }
          .hero-bottom {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>

      <motion.div
        ref={containerRef}
        className="hero-headline"
        style={{ opacity, scale, y }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-hover"
          style={{
            ...headline,
            fontSize: 'clamp(2rem, 6.5vw, 5.5rem)',
            color: 'var(--text)',
            margin: 0,
          }}
        >
          <VariableProximity
            label="Tanvi Karanth"
            fromFontVariationSettings="'wght' 500"
            toFontVariationSettings="'wght' 900"
            containerRef={containerRef}
            radius={300}
            falloff="linear"
          />
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="cursor-hover"
          style={{ ...headline, fontSize: 'clamp(2rem, 6.5vw, 5.5rem)', color: 'var(--text)', margin: 0, whiteSpace: 'nowrap' }}
        >
          <VariableProximity
            label="Product"
            fromFontVariationSettings="'wght' 600"
            toFontVariationSettings="'wght' 900"
            containerRef={containerRef}
            radius={150}
            falloff="linear"
          />
          <span>&nbsp;</span>
          <Typewriter words={['Manager', 'Designer']} />
        </motion.h2>
      </motion.div>

      <motion.div
        className="hero-bottom"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.5,
            },
          },
        }}
      >
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
        >
          <p style={label}>Past</p>
          <p style={detail}>3+ years across startups and enterprises</p>
          <p style={detail}>Programming · Product Design & Management · AI</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
        >
          <p style={label}>Current</p>
          <p style={detail}>Masters of IT - Interaction Design, UTS (2026)</p>
          <p style={detail}>Sydney · Full working rights</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
        >
          <p style={label}>Say Hi</p>
          <a href="mailto:ta.karanth@gmail.com" className="hero-link" style={{ ...detail, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TbMail size={16} /> ta.karanth@gmail.com
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-link" style={{ ...detail, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <TbBrandLinkedin size={16} /> LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
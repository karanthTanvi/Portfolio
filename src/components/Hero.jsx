import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { TbMail, TbBrandLinkedin } from 'react-icons/tb'
import VariableProximity from './VariableProximity'

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
          padding: 0 4rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .hero-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }
        @media (max-width: 900px) {
          .hero-section { padding: 0 2rem 2.5rem; }
        }
        @media (max-width: 720px) {
          .hero-section { padding: 6rem 1.5rem 2rem; }
          .hero-bottom {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>

      <motion.div
        ref={containerRef}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          textAlign: 'left',
          opacity,
          scale,
          y,
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-hover"
          style={{
            ...headline,
            fontSize: 'clamp(2.75rem, 7vw, 5.5rem)',
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
          style={{ ...headline, color: 'var(--text)', margin: 0 }}
        >
          <VariableProximity
            label="Product Designer"
            fromFontVariationSettings="'wght' 600"
            toFontVariationSettings="'wght' 900"
            containerRef={containerRef}
            radius={150}
            falloff="linear"
          />
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
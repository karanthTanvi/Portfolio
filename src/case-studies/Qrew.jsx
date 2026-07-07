import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import CaseStudyShell from './shared/CaseStudyShell'
import LazyVideo from '../components/LazyVideo'
import g2 from '../assets/qrew/1_group_heart.jpg'
import g3 from '../assets/qrew/2_solo_award.jpg'
import g4 from '../assets/qrew/3_group_showcase.jpg'
import g5 from '../assets/qrew/5_judges_showcase.jpg'
import alfVideo from '../assets/qrew/4_alf_video.MP4'

/* ------------------------------------------------------------------ *
 * EDITABLE COPY
 * ------------------------------------------------------------------ */
const figmaProto =
  'https://www.figma.com/proto/9PeIxGegWWCNw1cWO4nROD/Qrew---IDS?node-id=3614-32728&viewport=-14824%2C-179%2C0.26&t=7peR3ptJ1i7Kmeuw-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3614%3A32728&page-id=0%3A1'

const hero = {
  title: 'Qrew',
  tagline: 'A mobile app that helps improve LGBTQ+ community engagement.',
  sub: 'Finding a queer-friendly event is easy. Walking in alone is the hard part.',
}

const meta = [
  // TODO(tanvi): confirm your exact role on the 6-person team.
  { label: 'Role', value: 'Product Designer' },
  { label: 'Timeline', value: '10 weeks' },
  { label: 'Team', value: '6 members' },
  { label: 'Tools', value: 'Miro · Figma' },
  { label: 'Outcome', value: 'Highly Commended Award' },
]

const about = {
  label: 'What is Qrew?',
  headline: 'Show up without showing up alone.',
  body: [
    'Qrew helps LGBTQ+ people attend queer-friendly events without walking in by themselves. You browse events happening nearby, then get matched with a compatible buddy so nobody arrives alone.',
    'Safety is built in: optional ID verification, plus pre-meet safety questions that handle the awkward conversations before anyone leaves the house.',
  ],
}

const process = {
  label: 'The numbers',
  headline: 'What it took.',
  stats: [
    { num: '16', unit: 'hours', label: 'of user interviews' },
    { num: '12', label: 'usability tests' },
    { num: '5', label: 'full design iterations' },
    { num: '80', label: 'app screens' },
  ],
}

const outcome = {
  label: 'Outcome',
  headline: 'We won.',
  body: [
    'We won the Highly Commended Interaction Design award, out of 40+ projects at the UTS Interaction Design Showcase.',
  ],
}

const gallery = [
  { type: 'image', src: g2, alt: 'The Qrew team together at the showcase' },
  { type: 'video', src: alfVideo, alt: 'A walkthrough of the Qrew app' },
  { type: 'image', src: g3, alt: 'Tanvi with the Highly Commended Interaction Design award' },
  { type: 'image', src: g4, alt: 'The Qrew team at the UTS Interaction Design Showcase' },
  { type: 'image', src: g5, alt: 'Presenting Qrew to judges at the showcase' },
]

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'What is Qrew?' },
  { id: 'process', label: 'The numbers' },
  { id: 'outcome', label: 'Outcome' },
]

const navPrev = { sublabel: 'Previous case study', label: 'First Revenue', path: '/work/first-revenue' }
const navNext = { sublabel: 'Back to', label: 'Home', path: '/#work' }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Qrew() {
  const marqueeRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return

    // click-and-drag to scroll horizontally
    let down = false
    let startX = 0
    let startScroll = 0
    const onDown = (e) => {
      down = true
      pausedRef.current = true
      startX = e.pageX
      startScroll = el.scrollLeft
      el.classList.add('is-dragging')
    }
    const onMove = (e) => {
      if (!down) return
      e.preventDefault()
      el.scrollLeft = startScroll - (e.pageX - startX)
    }
    const onUp = () => {
      down = false
      pausedRef.current = false
      el.classList.remove('is-dragging')
    }
    el.addEventListener('pointerdown', onDown)
    el.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)

    // auto-scroll drift — time-based so speed is identical at 60Hz and 120Hz
    let raf
    let prev = null
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const SPEED = 30 // px per second
      const step = (ts) => {
        if (prev == null) prev = ts
        const dt = ts - prev
        prev = ts
        if (!pausedRef.current) {
          el.scrollLeft += SPEED * (dt / 1000)
          if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2
        }
        raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }

    return () => {
      el.removeEventListener('pointerdown', onDown)
      el.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <CaseStudyShell sections={sections} prev={navPrev} next={navNext}>
      <style>{`
        .cs-section { padding-bottom: 4rem; border-bottom: 1px solid var(--border); }
        .cs-section.first { padding-top: 0; }
        .cs-section.last { border-bottom: none; }
        .cs-section + .cs-section { padding-top: 4rem; }

        /* OVERVIEW */
        .overview-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem 2rem;
          margin: 0 0 1.5rem;
        }
        .overview-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
          margin: 0;
        }
        .prototype-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 14px;
          color: var(--text);
          text-decoration: none;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.6rem 1.1rem;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .prototype-cta:hover { background: var(--surface-secondary); transform: translateY(-1px); }
        .overview-tagline {
          font-size: clamp(1.25rem, 1.9vw, 1.625rem);
          color: var(--text);
          letter-spacing: -0.016em;
          line-height: 1.35;
          margin: 0 0 0.75rem;
        }
        .overview-sub {
          font-size: clamp(1rem, 1.4vw, 1.1875rem);
          color: var(--text-muted);
          line-height: 1.5;
          letter-spacing: -0.01em;
          margin: 0 0 3rem;
        }
        .overview-meta {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
          padding: 2rem 0 0;
          border-top: 1px solid var(--border);
        }
        .overview-meta-cell { display: flex; flex-direction: column; gap: 0.5rem; }
        .overview-meta-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .overview-meta-value { font-size: 15px; line-height: 1.4; letter-spacing: -0.01em; }

        /* SECTION PRIMITIVES */
        .cs-section-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          margin: 0 0 1.5rem;
          display: block;
        }
        .cs-headline {
          font-size: clamp(1.875rem, 3.5vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.2;
          margin: 0 0 1.5rem;
        }
        .cs-body {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          color: var(--text-muted);
          line-height: 1.65;
          letter-spacing: -0.01em;
          margin: 0 0 1.25rem;
        }
        .cs-body:last-child { margin-bottom: 0; }

        /* NUMBERS GRID (same as reMind grounding-grid) */
        .stat-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          margin: 2.5rem 0 0;
        }
        .stat-cell {
          background: var(--surface-secondary);
          padding: 1.5rem 1.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .stat-num {
          font-size: clamp(2rem, 3vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--text);
          font-variant-numeric: tabular-nums;
        }
        .stat-num .stat-unit {
          font-size: 0.4em;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--text-muted);
          margin-left: 0.35rem;
        }
        .stat-label { font-size: 13px; color: var(--text-muted); line-height: 1.4; }

        /* OUTCOME MARQUEE (auto-scroll, no controls, exactly like reMind) */
        .outcome-marquee {
          overflow-x: auto;
          overflow-y: hidden;
          margin: 2.5rem 0 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          touch-action: pan-y;
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }
        .outcome-marquee.is-dragging { cursor: grabbing; }
        .outcome-marquee.is-dragging img,
        .outcome-marquee.is-dragging video { pointer-events: none; }
        .outcome-marquee::-webkit-scrollbar { display: none; }
        .outcome-track { display: flex; width: max-content; }
        .outcome-track figure { margin: 0 1rem 0 0; flex: 0 0 auto; }
        .outcome-track img,
        .outcome-track video {
          height: clamp(260px, 40vh, 420px);
          width: auto;
          display: block;
          border-radius: 16px;
          border: 1px solid var(--border);
        }

        /* WORK-IN-PROGRESS NOTE + CTA */
        .wip-note {
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1rem 1.5rem;
        }
        .wip-note-text { font-size: 14px; color: var(--text-muted); font-style: italic; letter-spacing: -0.005em; }

        @media (max-width: 900px) {
          .overview-meta { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
          .stat-strip { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 720px) {
          /* stack the head so the Figma CTA sits left under the title, with page-rhythm spacing (4rem = inter-section gap) */
          .cs-section.first { padding-top: 4rem; }
          .overview-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
            margin-bottom: 2.5rem;
          }
        }
        @media (max-width: 480px) {
          .overview-meta { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* 01 - OVERVIEW */}
      <section id="overview" className="cs-section first">
        <motion.div className="overview-head" {...fadeUp(0)}>
          <h1 className="overview-title">{hero.title}</h1>
          <a className="prototype-cta cursor-hover" href={figmaProto} target="_blank" rel="noopener noreferrer">
            Explore the prototype on Figma →
          </a>
        </motion.div>
        <motion.p className="overview-tagline" {...fadeUp(0.1)}>{hero.tagline}</motion.p>
        <motion.p className="overview-sub" {...fadeUp(0.15)}>{hero.sub}</motion.p>

        <motion.div className="overview-meta" {...fadeUp(0.25)}>
          {meta.map((cell) => (
            <div key={cell.label} className="overview-meta-cell">
              <span className="overview-meta-label">{cell.label}</span>
              <span className="overview-meta-value">{cell.value}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 02 - WHAT IS QREW? */}
      <section id="about" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>{about.label}</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>{about.headline}</motion.h2>
        {about.body.map((para, i) => (
          <motion.p key={i} className="cs-body" {...fadeUp(0.1 + i * 0.05)}>{para}</motion.p>
        ))}
      </section>

      {/* 03 - THE NUMBERS */}
      <section id="process" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>{process.label}</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>{process.headline}</motion.h2>
        <motion.div className="stat-strip" {...fadeUp(0.1)}>
          {process.stats.map((s) => (
            <div key={s.label} className="stat-cell">
              <span className="stat-num">
                {s.num}
                {s.unit && <span className="stat-unit">{s.unit}</span>}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 04 - OUTCOME */}
      <section id="outcome" className="cs-section last">
        <motion.span className="cs-section-label" {...fadeUp(0)}>{outcome.label}</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>{outcome.headline}</motion.h2>
        {outcome.body.map((para, i) => (
          <motion.p key={i} className="cs-body" {...fadeUp(0.1 + i * 0.05)}>{para}</motion.p>
        ))}

        <motion.div
          className="outcome-marquee"
          ref={marqueeRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
          {...fadeUp(0.2)}
        >
          <div className="outcome-track">
            {[...gallery, ...gallery].map((item, i) => (
              <figure key={i} aria-hidden={i >= gallery.length ? true : undefined}>
                {item.type === 'video' ? (
                  <LazyVideo src={item.src} ariaLabel={item.alt} />
                ) : (
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                )}
              </figure>
            ))}
          </div>
        </motion.div>

        <motion.div className="wip-note" {...fadeUp(0.25)}>
          <span className="wip-note-text">A detailed case study is in progress.</span>
          <a className="prototype-cta cursor-hover" href={figmaProto} target="_blank" rel="noopener noreferrer">
            Explore the prototype on Figma →
          </a>
        </motion.div>
      </section>
    </CaseStudyShell>
  )
}

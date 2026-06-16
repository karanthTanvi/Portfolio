import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import CaseStudyShell from './shared/CaseStudyShell'
import mindmapSvg from '../assets/remind/mindmap.svg?raw'
import lotusBlossomImg from '../assets/remind/LotusBlossom.jpg'
import decisionMatrixImg from '../assets/remind/DecisionMatrix.png'
import userFlowSvg from '../assets/remind/UserFlow.svg?raw'
import lofiFlowSvg from '../assets/remind/LofiBeforeAfter.svg?raw'
import sessionRealisticImg from '../assets/remind/Realistic.png'
import sessionGhibliImg from '../assets/remind/Ghibli.png'
import s1 from '../assets/remind/01-widget.png'
import s2 from '../assets/remind/02-welcome.png'
import s3 from '../assets/remind/03-sign-in.png'
import s4 from '../assets/remind/04-create-account.png'
import s5 from '../assets/remind/05-onboarding-avatars.png'
import s6 from '../assets/remind/06-onboarding-widget.png'
import s7 from '../assets/remind/07-onboarding-grounding.png'
import s8 from '../assets/remind/08-home.png'
import s9 from '../assets/remind/09-edit-avatar.png'
import s10 from '../assets/remind/10-create-avatar.png'
import s11 from '../assets/remind/11-invite.png'
import s12 from '../assets/remind/12-scan-intro.png'
import s13 from '../assets/remind/13-scan-face.png'
import s14 from '../assets/remind/14-record-voice.png'
import s15 from '../assets/remind/15-avatar-ready.png'
import v16 from '../assets/remind/16-session-realistic.webm'
import v17 from '../assets/remind/17-session-ghibli.webm'
import v18 from '../assets/remind/18-breathing.webm'
import outcomeShowcase from '../assets/remind/showcase.jpeg'
import outcomeGroupAward from '../assets/remind/group-award-cropped.png'
import outcomeAward from '../assets/remind/award-single.png'
import outcomeCert from '../assets/remind/certificate.jpg'
import outcomeGroup from '../assets/remind/remind-group.JPEG'
import outcomePresent from '../assets/remind/present.png'

const figmaProto = 'https://www.figma.com/proto/p6YTHr0nKTvk5mkdtR8dq0/remind?node-id=339-5651&viewport=-3413%2C983%2C0.11&t=z2701KwYLVExRs6X-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=339%3A5651&page-id=0%3A1&hide-ui=1https://www.figma.com/proto/p6YTHr0nKTvk5mkdtR8dq0/remind?node-id=339-5651&viewport=-3413%2C983%2C0.11&t=z2701KwYLVExRs6X-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=339%3A5651&page-id=0%3A1&hide-ui=1'

const sections = [
  { id: 'overview', label: 'Overview' },
  { phase: 'Engage', children: [{ id: 'brief', label: 'The brief' }] },
  { phase: 'Investigate', children: [
    { id: 'research', label: 'Research' },
    { id: 'ideation', label: 'Ideation' },
  ]},
  { phase: 'Act', children: [
    { id: 'product', label: 'Designing reMind' },
    { id: 'final', label: 'Final Prototype' },
  ]},
  { id: 'outcome', label: 'Outcome' },
  { id: 'reflection', label: 'Reflection' },
]

const navPrev = { sublabel: 'Back to', label: 'Home', path: '/#work' }
const navNext = { sublabel: 'Next case study', label: 'First Revenue', path: '/work/first-revenue' }

const metadata = [
  { label: 'Project', value: 'Apple Foundation Program' },
  { label: 'Role', value: 'Product Design Lead' },
  { label: 'Timeline', value: '4 weeks' },
  { label: 'Team', value: '5 members' },
  { label: 'Tools', value: 'Miro · Figma' },
]

const phases = [
  { num: '01', label: 'Engage', desc: 'Pick a domain' },
  { num: '02', label: 'Investigate', desc: 'Find the real problem' },
  { num: '03', label: 'Act', desc: 'Design and build' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const finalScreens = [
  { type: 'image', src: s1, alt: 'reMind widget on the iOS home screen' },
  { type: 'image', src: s2, alt: 'Welcome screen' },
  { type: 'image', src: s3, alt: 'Sign-in screen' },
  { type: 'image', src: s4, alt: 'Create-account screen' },
  { type: 'image', src: s5, alt: 'Onboarding: create avatars' },
  { type: 'image', src: s6, alt: 'Onboarding: quick-access widget' },
  { type: 'image', src: s7, alt: 'Onboarding: the 5-4-3-2-1 technique' },
  { type: 'image', src: s8, alt: 'Home screen with the avatar list' },
  { type: 'image', src: s9, alt: 'Edit-avatar screen' },
  { type: 'image', src: s10, alt: 'Create-avatar request form' },
  { type: 'image', src: s11, alt: 'Recipient invite screen' },
  { type: 'image', src: s12, alt: 'Scan your face, tips' },
  { type: 'image', src: s13, alt: 'Scan your face, camera' },
  { type: 'image', src: s14, alt: 'Record your voice' },
  { type: 'image', src: s15, alt: 'Avatar ready' },
  { type: 'video', src: v16, alt: 'Grounding session with a hyperrealistic avatar' },
  { type: 'video', src: v17, alt: 'Grounding session with a Ghibli avatar' },
  { type: 'video', src: v18, alt: 'Breathing exercise' },
]

const grounding = [
  { num: '5', label: 'things you can see' },
  { num: '4', label: 'things you can touch' },
  { num: '3', label: 'things you can hear' },
  { num: '2', label: 'things you can smell' },
  { num: '1', label: 'thing you can taste' },
]

const outcomePhotos = [
  { src: outcomeGroup, alt: 'The reMind team holding the app' },
  { src: outcomeAward, alt: 'The Best Project Award'},
  { src: outcomeGroupAward, alt: 'The team with the Best Project Award'},
  { src: outcomeCert, alt: 'Best Project Award certificate'},
  { src: outcomeShowcase, alt:''},
  { src: outcomePresent, alt:''},
]

const reflections = [
  { label: 'Prioritisation', text: 'Limited time, and only so many people we could talk to. We couldn\'t run with an idea just because it was cool, so we kept everything tied to what the research actually showed and made the most of what we had.' },
  { label: 'Designing for the worst moment', text: 'Someone mid-panic can\'t be asked to type, choose, or figure anything out. Designing around that shaped every screen.' },
  { label: 'Ethical use of AI', text: 'We were recreating a real person\'s face and voice, the same thing a deepfake is made of. Doing it responsibly, through consent and an illustrated avatar, became a big part of the work.' },
  { label: 'Adapting as a designer', text: 'Design is changing fast, with AI moving to the center of it. This was my first project built around that shift, and adapting to it is a big part of how I grew as a designer.' },
]

export default function Remind() {
  const marqueeRef = useRef(null)
  const pausedRef = useRef(false)

  useEffect(() => {
    const el = marqueeRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf
    const step = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.5
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft -= el.scrollWidth / 2
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <CaseStudyShell sections={sections} prev={navPrev} next={navNext}>
      <style>{`
        .cs-section {
          padding-bottom: 4rem;
          border-bottom: 1px solid var(--border);
        }
        .cs-section.first { padding-top: 0; }
        .cs-section.last { border-bottom: none; }
        .cs-section + .cs-section { padding-top: 4rem; }

        /* OVERVIEW */
        .overview-title {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
          margin: 0 0 1.5rem;
        }
        .overview-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem 2rem;
          margin: 0 0 1.5rem;
        }
        .overview-head .overview-title { margin: 0; }
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
          font-size: clamp(1.125rem, 1.6vw, 1.375rem);
          color: var(--text-muted);
          letter-spacing: -0.014em;
          line-height: 1.4;
          margin: 0 0 4rem;
        }
        .overview-meta {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2rem;
          padding: 2rem 0;
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
        .overview-meta-value {
          font-size: 15px;
          line-height: 1.4;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        /* PHASE STRIP */
        .phases-section { margin-top: 4rem; }
        .phases-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          margin: 0 0 1rem;
          display: block;
        }
        .phases-heading {
          font-size: clamp(1.25rem, 1.8vw, 1.5rem);
          font-weight: 500;
          letter-spacing: -0.014em;
          line-height: 1.3;
          margin: 0 0 2rem;
        }
        .phases-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
        }
        .phase-cell {
          background: var(--surface-secondary);
          padding: 1.75rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .phase-num {
          font-size: 11px;
          letter-spacing: 0.16em;
          color: var(--text-muted);
          opacity: 0.6;
          font-variant-numeric: tabular-nums;
        }
        .phase-name { font-size: 1.125rem; font-weight: 500; letter-spacing: -0.014em; margin: 0; }
        .phase-desc { font-size: 13px; color: var(--text-muted); line-height: 1.5; margin: 0; }

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
          margin: 0 0 2.5rem;
        }
        .cs-body {
          font-size: clamp(1rem, 1.3vw, 1.125rem);
          color: var(--text-muted);
          line-height: 1.65;
          letter-spacing: -0.01em;
          margin: 0 0 1.25rem;
        }
        .cs-body:last-child { margin-bottom: 0; }

        /* MINDMAP */
        .mindmap-wrapper {
          margin: 3rem 0;
          width: 100%;
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
        }
        .mindmap-wrapper svg { width: 100%; max-height: 60vh; height: auto; display: block; }

        /* BRIEF ARRIVAL */
        .brief-arrival {
          margin-top: 3rem;
          padding: 2.5rem 0 0;
          border-top: 1px solid var(--border);
        }
        .brief-arrival-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          margin: 0 0 1rem;
          display: block;
        }
        .brief-arrival-text {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 500;
          letter-spacing: -0.02em;
          line-height: 1.3;
          color: var(--text);
          margin: 0;
        }

        /* STAT STRIP */
        .stat-strip {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin: 2.5rem 0;
          padding: 2rem 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .stat-cell { display: flex; flex-direction: column; gap: 0.5rem; }
        .stat-num {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--text);
        }
        .stat-label { font-size: 13px; color: var(--text-muted); line-height: 1.4; }

        /* PERSONA CARD */
        .persona-card { margin: 3rem 0; padding: 2rem; border: 1px solid var(--border); border-radius: 16px; }
        .persona-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          margin: 0 0 1.5rem;
          display: block;
        }
        .persona-grid { display: grid; gap: 0; }
        .persona-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 2rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
        }
        .persona-row:last-child { border-bottom: none; }
        .persona-row:first-child { padding-top: 0; }
        .persona-key {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .persona-value { font-size: 15px; line-height: 1.5; letter-spacing: -0.01em; color: var(--text); }

        /* EMPHASIS BODY (pride line) */
        .cs-body-emphasis {
          font-size: clamp(1.125rem, 1.6vw, 1.375rem);
          color: var(--text);
          line-height: 1.5;
          font-weight: 400;
          letter-spacing: -0.014em;
          margin: 2.5rem 0;
          padding-left: 1.5rem;
          border-left: 2px solid var(--text);
        }

        /* DIRECTION CARD */
        .direction-card {
          background: var(--surface-secondary);
          padding: 1.75rem 1.75rem 2rem;
          border-radius: 16px;
          margin: 2.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1px solid var(--border);
        }
        .direction-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.6;
        }
        .direction-text {
          font-size: clamp(1.25rem, 2vw, 1.625rem);
          font-weight: 500;
          letter-spacing: -0.014em;
          line-height: 1.3;
          color: var(--text);
          margin: 0;
        }

        /* CASE STUDY IMAGE */
        .case-image { margin: 2.5rem 0; padding: 0; }
        .case-image img { width: 100%; height: auto; display: block; border-radius: 12px; }
        .case-image figcaption {
          margin-top: 0.875rem;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          letter-spacing: -0.005em;
        }

        /* SUB-HEAD */
        .cs-subhead {
          font-size: clamp(1.125rem, 1.6vw, 1.375rem);
          font-weight: 600;
          letter-spacing: -0.016em;
          line-height: 1.3;
          color: var(--text);
          margin: 3rem 0 1.25rem;
        }

        /* INLINE SVG FIGURE (flow + lo-fi, themed like the mindmap) */
        .svg-figure { margin: 2.5rem 0; color: var(--text); }
        .svg-figure .svg-frame {
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
        }
        .svg-figure svg { width: 100%; height: auto; max-height: 70vh; display: block; }
        .svg-figure figcaption {
          margin-top: 0.875rem;
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          letter-spacing: -0.005em;
        }

        /* 5-4-3-2-1 GROUNDING INFOGRAPHIC */
        .grounding-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          margin: 2.5rem 0 0.875rem;
        }
        .grounding-cell {
          background: var(--surface-secondary);
          padding: 1.5rem 1.25rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .grounding-num {
          font-size: clamp(2rem, 3vw, 2.75rem);
          font-weight: 600;
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--text);
          font-variant-numeric: tabular-nums;
        }
        .grounding-label { font-size: 13px; color: var(--text-muted); line-height: 1.4; }
        .grounding-source {
          font-size: 12px;
          font-style: italic;
          text-align: right;
          color: var(--text-muted);
          margin: 0;
        }
        .grounding-source a {
          color: var(--text-muted);
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.2s ease;
        }
        .grounding-source a:hover { color: var(--text); }

        /* TWO-CELL COMPARISON */
        .design-comparison {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          margin: 2.5rem 0;
        }
        .design-comparison figure { margin: 0; flex: 0 1 220px; max-width: 220px; }
        .design-comparison .compare-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
          margin: 0 0 0.75rem;
          display: block;
        }
        .design-comparison img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 32px;
          border: 1px solid var(--border);
        }

        /* DESIGN NOTE (ethics aside) */
        .design-note {
          margin: 2.5rem 0;
          padding-left: 1.5rem;
          border-left: 2px solid var(--border);
          font-style: italic;
          font-size: clamp(1rem, 1.3vw, 1.0625rem);
          color: var(--text-muted);
          line-height: 1.6;
          letter-spacing: -0.005em;
        }

        /* FINAL PROTOTYPE GALLERY */
        .screen-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin: 2.5rem 0;
        }
        .screen-gallery figure { margin: 0; }
        .screen-gallery img,
        .screen-gallery video {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 16px;
        }

        /* OUTCOME MARQUEE */
        .outcome-marquee {
          overflow-x: auto;
          overflow-y: hidden;
          margin: 2.5rem 0;
          scrollbar-width: none;        /* Firefox */
          -ms-overflow-style: none;     /* old Edge */
          -webkit-mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
          mask-image: linear-gradient(to right, transparent, #000 6%, #000 94%, transparent);
        }
        .outcome-marquee::-webkit-scrollbar { display: none; } /* Chrome/Safari */
        .outcome-track { display: flex; width: max-content; }
        .outcome-track figure { margin: 0 1rem 0 0; flex: 0 0 auto; }
        .outcome-track img {
          height: clamp(260px, 40vh, 420px);
          width: auto;
          display: block;
          border-radius: 16px;
          border: 1px solid var(--border);
        }

        /* REFLECTION GRID */
        .reflection-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          margin: 2.5rem 0 0;
        }
        .reflection-card {
          background: var(--surface-secondary);
          padding: 1.75rem 1.75rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .reflection-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.6;
        }
        .reflection-text {
          font-size: clamp(0.95rem, 1.2vw, 1.0625rem);
          color: var(--text);
          line-height: 1.55;
          letter-spacing: -0.01em;
          margin: 0;
        }
        @media (max-width: 700px) { .reflection-grid { grid-template-columns: 1fr; } }


        @media (max-width: 900px) { .screen-gallery { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .screen-gallery { grid-template-columns: repeat(2, 1fr); gap: 0.75rem;} .design-comparison {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem;} .design-comparison figure { max-width: none; } }

        @media (max-width: 700px) { .grounding-grid { grid-template-columns: 1fr; } }
        @media (max-width: 600px) {
          .stat-strip { grid-template-columns: 1fr; }
          .persona-row { grid-template-columns: 1fr; gap: 0.5rem; }
        }
        @media (max-width: 900px) {
          .overview-meta { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
          .overview-meta-value { white-space: normal; }
          .phases-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) { .overview-meta { grid-template-columns: 1fr; } }
      `}</style>

      {/* 01 — OVERVIEW */}
      <section id="overview" className="cs-section first">
        <motion.div className="overview-head" {...fadeUp(0)}>
          <h1 className="overview-title">reMind</h1>
          <a className="prototype-cta cursor-hover" href={figmaProto} target="_blank" rel="noopener noreferrer">
            Explore the prototype on Figma →
          </a>
        </motion.div>
        <motion.p className="overview-tagline" {...fadeUp(0.1)}>
          An iOS app that helps people through anxiety attacks using the face and voice of someone they love.
        </motion.p>

        <motion.div className="overview-meta" {...fadeUp(0.2)}>
          {metadata.map((cell) => (
            <div key={cell.label} className="overview-meta-cell">
              <span className="overview-meta-label">{cell.label}</span>
              <span className="overview-meta-value">{cell.value}</span>
            </div>
          ))}
        </motion.div>

        <motion.div className="phases-section" {...fadeUp(0.3)}>
          <span className="phases-label">Design process</span>
          <h3 className="phases-heading">We worked inside Apple Foundation's three-phase framework.</h3>
          <div className="phases-grid">
            {phases.map((cell) => (
              <div key={cell.label} className="phase-cell">
                <span className="phase-num">{cell.num}</span>
                <h4 className="phase-name">{cell.label}</h4>
                <p className="phase-desc">{cell.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 02 — THE BRIEF */}
      <section id="brief" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>The brief</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>There wasn't one.</motion.h2>

        <motion.p className="cs-body" {...fadeUp(0.1)}>
          Apple Foundation gave us four weeks and a framework: engage, investigate, act. No prompt. No client. No problem.
        </motion.p>

        <motion.p className="cs-body" {...fadeUp(0.15)}>
          So we started by brainstorming. Six broad areas went up on a wall. We voted. The diagram below shows where the team's votes fell.
        </motion.p>

        <motion.div
          className="mindmap-wrapper"
          dangerouslySetInnerHTML={{ __html: mindmapSvg }}
          {...fadeUp(0.25)}
        />

        <motion.p className="cs-body" {...fadeUp(0.35)}>
          Wellbeing won. It was broad enough that we could keep narrowing during research, instead of locking in too early.
        </motion.p>

        <motion.div className="direction-card" {...fadeUp(0.45)}>
          <span className="direction-label">Direction</span>
          <h3 className="direction-text">Wellbeing</h3>
        </motion.div>
      </section>

      {/* 03 — RESEARCH */}
      <section id="research" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>Research</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>We improvised.</motion.h2>

        <motion.p className="cs-body" {...fadeUp(0.1)}>
          We'd hoped to build something for wellbeing for people with disabilities. But time and access to participants said otherwise. So we worked with what we had: a university full of students and professors. We went up to them and interviewed them.
        </motion.p>

        <motion.div className="stat-strip" {...fadeUp(0.22)}>
          <div className="stat-cell">
            <span className="stat-num">20</span>
            <span className="stat-label">Interviews with students and professors</span>
          </div>
          <div className="stat-cell">
            <span className="stat-num">16</span>
            <span className="stat-label">Said wellbeing was more mental than physical</span>
          </div>
        </motion.div>

        <motion.p className="cs-body" {...fadeUp(0.3)}>
          That gave us a direction. We let the disability framing go entirely and drilled into mental wellbeing and synthesized what we'd heard into a single person we could design for.
        </motion.p>

        <motion.div className="persona-card" {...fadeUp(0.4)}>
          <span className="persona-label">Persona</span>
          <div className="persona-grid">
            <div className="persona-row">
              <span className="persona-key">Name</span>
              <span className="persona-value">Sarah Smith</span>
            </div>
            <div className="persona-row">
              <span className="persona-key">Age</span>
              <span className="persona-value">23</span>
            </div>
            <div className="persona-row">
              <span className="persona-key">Lives</span>
              <span className="persona-value">Student housing, away from home</span>
            </div>
            <div className="persona-row">
              <span className="persona-key">Struggles with</span>
              <span className="persona-value">Anxiety and panic attacks</span>
            </div>
            <div className="persona-row">
              <span className="persona-key">How she copes</span>
              <span className="persona-value">Music, and speaking to her mom</span>
            </div>
            <div className="persona-row">
              <span className="persona-key">The tension</span>
              <span className="persona-value">Calling helps. But she feels guilty for dumping on her mom and making her worry.</span>
            </div>
          </div>
        </motion.div>

        <motion.p className="cs-body" {...fadeUp(0.45)}>
          Sarah didn't need a wellness app. She needed emotional support.
        </motion.p>

        <motion.div className="direction-card" {...fadeUp(0.5)}>
          <span className="direction-label">Refined direction</span>
          <h3 className="direction-text">Improve mental wellbeing during situational distress</h3>
        </motion.div>
      </section>

      {/* 04 — IDEATION */}
      <section id="ideation" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>Ideation</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>Seventy became one.</motion.h2>

        <motion.p className="cs-body" {...fadeUp(0.1)}>
          We started wide. Seventy-plus ideas on the wall, mapped using Lotus Blossom. It forces you out of your first instinct by demanding eight sub-ideas for every main one.
        </motion.p>

        <motion.figure className="case-image" {...fadeUp(0.2)}>
          <img src={lotusBlossomImg} alt="Lotus Blossom brainstorming wall with 70+ ideas mapped out" />
          <figcaption>Lotus Blossom: 8 sub-ideas around each main idea, then 8 around each of those.</figcaption>
        </motion.figure>

        <motion.p className="cs-body" {...fadeUp(0.3)}>
          Most of what we generated were calming apps for already-calm people. Breathing exercises. Journaling prompts. Mood trackers. Useful for prevention. Useless for the moment Sarah actually needed something.
        </motion.p>

        <motion.p className="cs-body" {...fadeUp(0.35)}>
          So we mapped the ideas onto a 2×2: forget, review, good, great. Only the 'great' quadrant moved forward.
        </motion.p>

        <motion.figure className="case-image" {...fadeUp(0.4)}>
          <img src={decisionMatrixImg} alt="Decision matrix scoring ideas on impact, feasibility, and brief alignment" />
          <figcaption>Decision matrix: every idea scored against the brief.</figcaption>
        </motion.figure>

        <motion.p className="cs-body" {...fadeUp(0.45)}>
          One concept survived.
        </motion.p>

        <motion.div className="direction-card" {...fadeUp(0.5)}>
          <span className="direction-label">Winner</span>
          <h3 className="direction-text">5-4-3-2-1 grounding, by an AI avatar of someone you love.</h3>
        </motion.div>

        <motion.h3 className="cs-subhead" {...fadeUp(0.55)}>What's 5-4-3-2-1 technique?</motion.h3>

        <motion.p className="cs-body" {...fadeUp(0.6)}>
          The 54321 technique is a popular grounding exercise designed to help someone clear their mind during stressful or anxiety-inducing situations.
        </motion.p>

        <motion.div className="grounding-grid" {...fadeUp(0.65)}>
          {grounding.map((g) => (
            <div key={g.num} className="grounding-cell">
              <span className="grounding-num">{g.num}</span>
              <span className="grounding-label">{g.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.p className="grounding-source" {...fadeUp(0.7)}>
          Source: <a href="https://stellamentalhealth.com/resources/54321-grounding-technique" target="_blank" rel="noopener noreferrer">Stella Mental Health</a>
        </motion.p>
      </section>

      {/* 05 — DESIGNING reMIND */}
      <section id="product" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>Act</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>Designing reMind</motion.h2>

        <motion.p className="cs-body" {...fadeUp(0.1)}>
          We built reMind in passes: the user flow first, then lo-fi, then hi-fi. What follows is every major decision and pivot we made along the way, and the reasoning behind each.
        </motion.p>

        <motion.h3 className="cs-subhead" {...fadeUp(0.15)}>The Userflow</motion.h3>
        <motion.figure className="svg-figure" {...fadeUp(0.2)}>
          <div className="svg-frame" dangerouslySetInnerHTML={{ __html: userFlowSvg }} />
        </motion.figure>
        <motion.p className="cs-body" {...fadeUp(0.25)}>
          At first, you'd just upload photos and a voice clip of whoever you wanted as the avatar. But that's recreating a real person without their consent. So we flipped it: you send them a request, they record their own face and voice, and the avatar is only made once they submit their information.
        </motion.p>

        <motion.h3 className="cs-subhead" {...fadeUp(0.3)}>Session Screen Before and After</motion.h3>
        <motion.figure className="svg-figure" {...fadeUp(0.35)}>
          <div className="svg-frame" dangerouslySetInnerHTML={{ __html: lofiFlowSvg }} />
        </motion.figure>
        <motion.p className="cs-body" {...fadeUp(0.4)}>
          The first version gave you two ways to respond: type back, or hold a mic button to talk, like leaving a voice message. Design evaluation showed the flaw. Someone mid-panic shouldn't have to choose how to reply, or do anything at all. So we cut the input and made it a video call. The avatar speaks, you listen, and you can talk back whenever you want, the same as any call or just tap the "Next" button.
        </motion.p>

        <motion.h3 className="cs-subhead" {...fadeUp(0.45)}>The Uncanny Valley Problem</motion.h3>
        <motion.div className="design-comparison" {...fadeUp(0.5)}>
          <figure>
            <span className="compare-label">Hyperrealistic</span>
            <img src={sessionRealisticImg} alt="Session screen with a photorealistic avatar" />
          </figure>
          <figure>
            <span className="compare-label">Ghibli</span>
            <img src={sessionGhibliImg} alt="Session screen with a Ghibli-style illustrated avatar" />
          </figure>
        </motion.div>
        <motion.p className="cs-body" {...fadeUp(0.55)}>
          An Apple representative who saw our app introduced us to the uncanny valley: a face that looks almost real but slightly off can unsettle people, which is the last thing you want during a panic attack. So we tested a Ghibli style next to the hyperrealistic one. The illustrated version stays warm without pretending to be real footage of the person.
        </motion.p>
      </section>

      {/* 06 — FINAL PROTOTYPE */}
      <section id="final" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>Act</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>Final Prototype</motion.h2>

        <motion.a className="prototype-cta cursor-hover" href={figmaProto} target="_blank" rel="noopener noreferrer" {...fadeUp(0.08)}>
          Explore the prototype on Figma →
        </motion.a>

        <div className="screen-gallery">
          {finalScreens.map((s, i) => (
            <motion.figure key={s.alt} {...fadeUp(0.1 + i * 0.04)}>
              {s.type === 'video' ? (
                <video src={s.src} autoPlay loop muted playsInline aria-label={s.alt} />
              ) : (
                <img src={s.src} alt={s.alt} />
              )}
            </motion.figure>
          ))}
        </div>
      </section>

      {/* 07 — OUTCOME */}
      <section id="outcome" className="cs-section">
        <motion.span className="cs-section-label" {...fadeUp(0)}>Outcome</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>We won.</motion.h2>

        <motion.p className="cs-body" {...fadeUp(0.1)}>
          We won Best Project at the UTS Tech Showcase, out of 30+ projects.
        </motion.p>
        <motion.p className="cs-body" {...fadeUp(0.15)}>
          During the demo, one of the audience members got emotional. For an app built for panic attacks, that meant more to me than the award did.
        </motion.p>
        <motion.p className="cs-body" {...fadeUp(0.2)}>
          Deepfakes are generally scary. Making something this useful out of one was genuinely the thing our team was proudest of.
        </motion.p>

        <motion.div
          className="outcome-marquee"
          ref={marqueeRef}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
          {...fadeUp(0.35)}
        >
          <div className="outcome-track">
            {[...outcomePhotos, ...outcomePhotos].map((p, i) => (
              <figure key={i} aria-hidden={i >= outcomePhotos.length ? true : undefined}>
                <img src={p.src} alt={p.alt} />
              </figure>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 08 — REFLECTION */}
      <section id="reflection" className="cs-section last">
        <motion.span className="cs-section-label" {...fadeUp(0)}>Reflection</motion.span>
        <motion.h2 className="cs-headline" {...fadeUp(0.05)}>What I took from it.</motion.h2>

        <motion.div className="reflection-grid" {...fadeUp(0.1)}>
          {reflections.map((r) => (
            <div key={r.label} className="reflection-card">
              <span className="reflection-label">{r.label}</span>
              <p className="reflection-text">{r.text}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </CaseStudyShell>
  )
}
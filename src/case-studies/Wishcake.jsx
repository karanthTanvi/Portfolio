import CaseStudyShell from './shared/CaseStudyShell'

// Placeholder — full Wishcake case study is built once the brief lands.
const sections = [{ id: 'overview', label: 'Overview' }]
const navPrev = { sublabel: 'Previous case study', label: 'First Revenue', path: '/work/first-revenue' }
const navNext = { sublabel: 'Back to', label: 'Home', path: '/#work' }

export default function Wishcake() {
  return (
    <CaseStudyShell sections={sections} prev={navPrev} next={navNext}>
      <section id="overview" style={{ paddingBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.02, margin: '0 0 1rem' }}>
          Wishcake
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', lineHeight: 1.4, margin: 0 }}>
          My first vibecoded app, from ideation to hosting. Case study coming soon.
        </p>
      </section>
    </CaseStudyShell>
  )
}

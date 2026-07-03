import CaseStudyShell from './shared/CaseStudyShell'

// Placeholder — full Wishcake case study is built once the brief lands.
const sections = [{ id: 'overview', label: 'Overview' }]
const navPrev = { sublabel: 'Previous case study', label: 'First Revenue', path: '/work/first-revenue' }
const navNext = { sublabel: 'Back to', label: 'Home', path: '/#work' }

export default function Wishcake() {
  return (
    <CaseStudyShell sections={sections} prev={navPrev} next={navNext}>
      <style>{`
        .wishcake-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: 1.75rem;
          font-size: 14px;
          color: var(--text);
          text-decoration: none;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 0.6rem 1.1rem;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .wishcake-cta:hover { background: var(--surface-secondary); transform: translateY(-1px); }
        @media (max-width: 720px) {
          /* match Qrew/reMind: page-rhythm top padding on the first section (4rem = inter-section gap) */
          .wishcake-overview { padding-top: 4rem; }
        }
      `}</style>
      <section id="overview" className="wishcake-overview" style={{ paddingBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.02, margin: '0 0 1rem' }}>
          Wishcake
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1.125rem, 1.6vw, 1.375rem)', lineHeight: 1.4, margin: 0 }}>
          A vibecoded web-app, from ideation to hosting. Case study coming soon.
        </p>
        <a
          className="wishcake-cta cursor-hover"
          href="https://wishcake.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out the app →
        </a>
      </section>
    </CaseStudyShell>
  )
}

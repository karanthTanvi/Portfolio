import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbArrowLeft } from 'react-icons/tb'

export default function CaseStudyShell({ sections, nextCaseStudy, children }) {
  const flatSections = sections.flatMap((s) => s.children || [s])
  const indexMap = Object.fromEntries(flatSections.map((item, i) => [item.id, i + 1]))

  const [activeSection, setActiveSection] = useState(flatSections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    flatSections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [flatSections])

  const handleClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="main-content case-study-shell">
      <style>{`
        .case-study-shell {
          padding: 6rem 4rem 0;
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 4rem;
          align-items: start;
        }
        .case-study-toc {
          position: sticky;
          top: 6rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          padding: 1rem 0;
        }
        .toc-phase-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.4;
          margin: 1rem 0 0.15rem;
          display: block;
        }
        .toc-item {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          font-size: 13px;
          color: var(--text-muted);
          padding: 0.2rem 0;
          letter-spacing: -0.01em;
          transition: color 0.25s ease;
          cursor: pointer;
          background: none;
          border: none;
          text-align: left;
          font-family: inherit;
        }
        .toc-item:hover,
        .toc-item.active { color: var(--text); }
        .toc-item.after-phase { margin-top: 1.25rem; }
        .toc-number {
          font-size: 10px;
          color: var(--text-muted);
          opacity: 0.5;
          font-variant-numeric: tabular-nums;
          min-width: 1.4rem;
        }
        .toc-item.active .toc-number,
        .toc-item:hover .toc-number { opacity: 1; }
        .case-study-content { min-width: 0; padding-bottom: 4rem; }
        .case-study-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4rem 0;
          margin-top: 4rem;
          border-top: 1px solid var(--border);
          gap: 2rem;
        }
        .case-study-nav-link {
          display: inline-flex;
          flex-direction: column;
          gap: 0.25rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.25s ease;
          letter-spacing: -0.014em;
        }
        .case-study-nav-link:hover { color: var(--text); }
        .case-study-nav-prev { align-items: flex-start; }
        .case-study-nav-next { align-items: flex-end; }
        .case-study-nav-sublabel {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.6;
        }
        .case-study-nav-mainlabel {
          font-size: 1.25rem;
          color: var(--text);
          letter-spacing: -0.014em;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: gap 0.3s ease;
        }
        .case-study-nav-link:hover .case-study-nav-mainlabel { gap: 0.85rem; }

        @media (max-width: 900px) {
          .case-study-shell { grid-template-columns: 1fr; padding: 5rem 2rem 0; gap: 2rem; }
          .case-study-toc { display: none; }
        }
        @media (max-width: 720px) {
          .case-study-shell { padding: 4rem 1.5rem 0; }
          .case-study-nav { flex-direction: column; align-items: stretch; gap: 2rem; }
          .case-study-nav-next { align-items: flex-start; }
        }
      `}</style>

      <aside className="case-study-toc">
        {sections.map((item, idx) => {
          const needsGap = idx > 0 && sections[idx - 1].children && !item.children

          if (item.children) {
            return (
              <div key={item.phase}>
                <span className="toc-phase-label">{item.phase}</span>
                {item.children.map((child) => (
                  <button
                    key={child.id}
                    className={`toc-item cursor-hover ${activeSection === child.id ? 'active' : ''}`}
                    onClick={(e) => handleClick(e, child.id)}
                  >
                    <span className="toc-number">{String(indexMap[child.id]).padStart(2, '0')}</span>
                    <span>{child.label}</span>
                  </button>
                ))}
              </div>
            )
          }
          return (
            <button
              key={item.id}
              className={`toc-item cursor-hover ${activeSection === item.id ? 'active' : ''} ${needsGap ? 'after-phase' : ''}`}
              onClick={(e) => handleClick(e, item.id)}
            >
              <span className="toc-number">{String(indexMap[item.id]).padStart(2, '0')}</span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </aside>

      <div className="case-study-content">
        {children}
        <div className="case-study-nav">
          <Link to="/#work" className="case-study-nav-link case-study-nav-prev cursor-hover">
            <span className="case-study-nav-sublabel">Back to</span>
            <span className="case-study-nav-mainlabel"><TbArrowLeft size={16} /> Home</span>
          </Link>
          {/* {nextCaseStudy && (
            <Link to={nextCaseStudy.path} className="case-study-nav-link case-study-nav-next cursor-hover">
              <span className="case-study-nav-sublabel">Next project</span>
              <span className="case-study-nav-mainlabel">{nextCaseStudy.name} <TbArrowRight size={16} /></span>
            </Link>
          )} */}
        </div>
      </div>
    </main>
  )
}
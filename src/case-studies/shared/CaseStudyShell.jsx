import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TbArrowLeft, TbArrowRight, TbMail, TbBrandLinkedin, TbFileText } from 'react-icons/tb'
import { EMAIL, LINKEDIN_URL, RESUME_URL } from '../../constants'

export default function CaseStudyShell({ sections, prev, next, children }) {
  const flatSections = sections.flatMap((s) => s.children || [s])
  const indexMap = Object.fromEntries(flatSections.map((item, i) => [item.id, i + 1]))

  const [activeSection, setActiveSection] = useState(flatSections[0]?.id)
  const mobileTocRef = useRef(null)

  // Keep the active pill in view: as the reader scrolls into a later section,
  // slide the mobile TOC bar right so the highlighted pill stays centred.
  useEffect(() => {
    const bar = mobileTocRef.current
    if (!bar) return
    const active = bar.querySelector('.mobile-toc-pill.active')
    if (!active) return
    const target = active.offsetLeft - bar.clientWidth / 2 + active.clientWidth / 2
    bar.scrollTo({ left: Math.max(0, target), behavior: 'smooth' })
  }, [activeSection])

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
        .case-study-content {
          min-width: 0;
          padding-bottom: 4rem;
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 6rem);
        }
        .case-study-body { flex: 1 0 auto; min-width: 0; }

        /* Mobile section nav — desktop TOC is hidden below 900px, so give phones
           a sticky, swipeable row of section pills with the same active state. */
        .case-study-mobile-toc { display: none; }
        @media (max-width: 900px) {
          .case-study-mobile-toc {
            display: flex;
            align-items: center;
            gap: 0.6rem;
            overflow-x: auto;
            scrollbar-width: none;
            position: sticky;
            top: 4.75rem;
            z-index: 50;
            margin: 0 -2rem 1.75rem;
            padding: 1.1rem 2rem;
            background: color-mix(in srgb, var(--bg-face) 82%, transparent);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
          }
          .case-study-mobile-toc::-webkit-scrollbar { display: none; }
          .mobile-toc-pill {
            flex: 0 0 auto;
            font: inherit;
            font-size: 14px;
            line-height: 1.2;
            letter-spacing: -0.01em;
            color: var(--text-muted);
            background: none;
            border: 1px solid var(--border);
            border-radius: 9999px;
            padding: 0.6rem 1.1rem;
            cursor: pointer;
            white-space: nowrap;
            transition: color 0.2s ease, border-color 0.2s ease;
          }
          .mobile-toc-pill.active { color: var(--text); border-color: var(--text); }
        }
        @media (max-width: 720px) {
          .case-study-mobile-toc { margin: 0 -1.5rem 1.75rem; padding: 1.1rem 1.5rem; top: 4.25rem; }
        }
        .case-study-contact {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.75rem 2rem;
        }
        .case-study-contact-label {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .case-study-contact-links {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .case-study-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text);
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
          transition: opacity 0.2s ease;
        }
        .case-study-contact-link:hover { opacity: 0.6; }
        .case-study-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4rem 0 2em;
          margin-top: 2rem;
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
        .case-study-nav-link.is-disabled { opacity: 0.4; cursor: default; }
        .case-study-nav-link.is-disabled:hover { color: var(--text-muted); }
        .case-study-nav-link.is-disabled:hover .case-study-nav-mainlabel { gap: 0.5rem; }

        @media (max-width: 900px) {
          .case-study-shell { grid-template-columns: 1fr; padding: 5rem 2rem 0; gap: 2rem; }
          .case-study-toc { display: none; }
        }
        @media (max-width: 720px) {
          .case-study-shell { padding: 4.5rem 1.5rem 0; }
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
        <nav className="case-study-mobile-toc" aria-label="Sections" ref={mobileTocRef}>
          {flatSections.map((s) => (
            <button
              key={s.id}
              className={`mobile-toc-pill ${activeSection === s.id ? 'active' : ''}`}
              onClick={(e) => handleClick(e, s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="case-study-body">{children}</div>

        <div className="case-study-contact">
          <span className="case-study-contact-label">Liked this?</span>
          <div className="case-study-contact-links cursor-hover">
            <a href={`mailto:${EMAIL}`} className="case-study-contact-link">
              <TbMail size={16} /> {EMAIL}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="case-study-contact-link">
              <TbBrandLinkedin size={16} /> LinkedIn
            </a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="case-study-contact-link">
              <TbFileText size={16} /> Resume
            </a>
          </div>
        </div>

        <div className="case-study-nav">
          {prev && (
            <Link to={prev.path} className="case-study-nav-link case-study-nav-prev cursor-hover">
              <span className="case-study-nav-sublabel">{prev.sublabel}</span>
              <span className="case-study-nav-mainlabel"><TbArrowLeft size={16} /> {prev.label}</span>
            </Link>
          )}
          {next &&
            (next.path ? (
              <Link to={next.path} className="case-study-nav-link case-study-nav-next cursor-hover">
                <span className="case-study-nav-sublabel">{next.sublabel}</span>
                <span className="case-study-nav-mainlabel">{next.label} <TbArrowRight size={16} /></span>
              </Link>
            ) : (
              <div className="case-study-nav-link case-study-nav-next is-disabled" aria-disabled="true">
                <span className="case-study-nav-sublabel">{next.sublabel}</span>
                <span className="case-study-nav-mainlabel">{next.label} <TbArrowRight size={16} /></span>
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
import { TbBrandLinkedin, TbMail, TbFileText } from 'react-icons/tb'
import { RESUME_URL, LINKEDIN_URL, EMAIL } from '../constants'

export default function Footer() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <style>{`
        .footer-section {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1.5rem;
          padding: 3rem 4rem 2rem;
          border-top: 1px solid var(--border);
          color: var(--text);
          font-size: 0.875rem;
        }
        .footer-meta {
          justify-self: start;
          color: var(--text-muted);
        }
        .footer-links {
          justify-self: center;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .footer-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text);
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .footer-link:hover { opacity: 0.6; }
        .back-to-top {
          justify-self: end;
          color: var(--text-muted);
          background: none;
          border: none;
          font: inherit;
          cursor: pointer;
          padding: 0;
          transition: color 0.2s ease;
        }
        .back-to-top:hover { color: var(--text); }

        @media (max-width: 720px) {
          .footer-section {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 1rem;
            padding: 2rem 1.5rem;
          }
          .footer-meta, .back-to-top { justify-self: center; }
        }
      `}</style>

      <span className="footer-meta">© 2026 Tanvi Karanth</span>

      <div className="footer-links cursor-hover">
        <a href={`mailto:${EMAIL}`} className="footer-link">
          <TbMail size={16} /> {EMAIL}
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="footer-link">
          <TbBrandLinkedin size={16} /> LinkedIn
        </a>
        <a href={RESUME_URL} target="_blank" rel="noreferrer" className="footer-link">
          <TbFileText size={16} /> Resume
        </a>
      </div>

      <button type="button" onClick={toTop} className="back-to-top cursor-hover">Back to top ↑</button>
    </footer>
  )
}
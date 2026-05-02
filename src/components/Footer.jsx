import { TbBrandLinkedin, TbMail, TbFileText } from 'react-icons/tb'

export default function Footer() {
  const toTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-section">
      <style>{`
        .footer-section {
          background: transparent;
          color: var(--text);
          padding: 3rem 4rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.875rem;
          border-top: 1px solid var(--border);
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        .footer-link {
          color: var(--text);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: opacity 0.2s ease;
        }
        .footer-link:hover { opacity: 0.6; }
        .footer-meta {
          color: var(--text-muted);
        }
        .back-to-top {
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .back-to-top:hover { color: var(--text); }

        @media (max-width: 720px) {
          .footer-section { padding: 2rem 1.5rem; }
        }
      `}</style>

      <span className="footer-meta">© 2026 Tanvi Karanth</span>

      <div className="footer-links cursor-hover">
        <a href="mailto:ta.karanth@gmail.com" className="nav-link">
          <TbMail size={16} /> ta.karanth@gmail.com
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="nav-link">
          <TbBrandLinkedin size={16} /> LinkedIn
        </a>
        <a href="#" className="nav-link">
          <TbFileText size={16} /> Resume
        </a>
      </div>

      <a href="#" onClick={toTop} className="back-to-top">Back to top ↑</a>
    </footer>
  )
}
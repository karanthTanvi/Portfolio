import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const NAV_ITEMS = ['WORK', 'ABOUT', 'RESUME']
const RESUME_URL = 'https://drive.google.com/file/d/1cY4sluH99Kqu7IQOaYunURO8U4HfogYW/view?usp=sharing'

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const goToSection = (e, id) => {
    setMenuOpen(false)
    if (window.location.pathname === '/') {
      e.preventDefault()
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', `/#${id}`)
    }
  }

  return (
    <>
      <style>{`
        .nav-bar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 4rem;
          transition: background 0.4s ease, border-color 0.4s ease;
        }
        .nav-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          padding: 0.5rem;
          margin: -0.5rem;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nav-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.25rem;
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--text);
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: calc(0.5rem - 4px);
          left: 0.25rem;
          right: 0.25rem;
          height: 1px;
          background: var(--text);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-theme-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          padding: 4px;
          border-radius: 50%;
          color: var(--text);
          cursor: pointer;
        }
        .nav-mobile-trigger {
          display: none;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 0.5rem;
          margin: -0.5rem;
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: var(--bg-face);
          padding: 6rem 1.5rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-link {
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: -0.022em;
          line-height: 1.2;
          color: var(--text);
          text-decoration: none;
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--border);
        }
        .mobile-theme {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          align-self: flex-start;
          background: none;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 1rem 1.25rem;
          border-radius: 9999px;
          font-size: 1rem;
          margin-top: 1.25rem;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .nav-bar { padding: 1.25rem 2rem; }
        }
        @media (max-width: 720px) {
          .nav-bar { padding: 1rem 1.5rem; }
          .nav-desktop { display: none; }
          .nav-mobile-trigger { display: inline-flex; }
        }
      `}</style>

      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="nav-bar"
        style={{
          background: scrolled || menuOpen ? 'var(--navbar-bg)' : 'transparent',
          backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled && !menuOpen ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        <Link
          to="/"
          onClick={() => {
            setMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="nav-logo"
          aria-label="Home"
        >
          <Logo size={36} />
        </Link>

        <div className="nav-desktop">
          {NAV_ITEMS.map((item) =>
            item === 'RESUME' ? (
              <a key={item} href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="nav-link cursor-hover">
                {item}
              </a>
            ) : (
              <Link
                key={item}
                to={`/#${item.toLowerCase()}`}
                className="nav-link cursor-hover"
                onClick={(e) => goToSection(e, item.toLowerCase())}
              >
                {item}
              </Link>
            )
          )}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="nav-theme-btn cursor-hover">
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'light' ? <FiMoon size={16} /> : <FiSun size={16} />}
            </motion.div>
          </button>
        </div>

        <button
          className="nav-mobile-trigger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <motion.div
            key={menuOpen ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </motion.div>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={item === 'RESUME' ? RESUME_URL : `#${item.toLowerCase()}`}
                target={item === 'RESUME' ? '_blank' : undefined}
                rel={item === 'RESUME' ? 'noopener noreferrer' : undefined}
                className="mobile-link"
                onClick={(e) => {
                  if (item === 'RESUME') { setMenuOpen(false); return }
                  goToSection(e, item.toLowerCase())
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="mobile-theme"
              onClick={toggleTheme}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + NAV_ITEMS.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
              {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
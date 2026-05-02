import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'

const NAV_ITEMS = ['Work', 'About', 'Resume']

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

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 0.5rem 0.25rem;
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--text);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .nav-link:hover { color: var(--text); }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: calc(0.5rem - 4px);
          left: 0.25rem;
          right: 0.25rem;
          width: auto;
          height: 1px;
          background: var(--text);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .nav-link:hover::after { transform: scaleX(1); }

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
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nav-mobile-trigger {
          display: none;
          background: none;
          border: none;
          color: var(--text);
          cursor: pointer;
          padding: 0.5rem;
          margin: -0.5rem;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: var(--bg);
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
          background: none;
          border: 1px solid var(--border);
          color: var(--text);
          padding: 1rem 1.25rem;
          border-radius: 9999px;
          font-size: 1rem;
          margin-top: 1.25rem;
          cursor: pointer;
          align-self: flex-start;
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
        {/* <a href="#" onClick={() => setMenuOpen(false)} style={{
          fontWeight: 600,
          fontSize: '1rem',
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          lineHeight: 1,
          padding: '0.5rem',
          margin: '-0.5rem',
        }}>
          <span style={{
            width: 10, height: 10,
            borderRadius: '50%',
            background: 'var(--text)',
            display: 'inline-block',
          }} />
          TK
        </a> */}

        <a href="#" onClick={() => setMenuOpen(false)} style={{
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0.5rem',
  margin: '-0.5rem',
}} aria-label="Home">
  <Logo size={36} />
</a>

        <div className="nav-desktop">
          {NAV_ITEMS.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">{item}</a>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{
            background: 'none',
            border: 'none',
            padding: '4px',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            cursor: 'pointer',
          }}>
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
                href={`#${item.toLowerCase()}`}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
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

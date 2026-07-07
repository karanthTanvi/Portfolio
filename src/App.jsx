import { useState, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { MotionConfig, AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'
import ShaderEffect from './components/ShaderEffect'
import './index.css'
import ScrollToAnchor from './components/ScrollToAnchor'

// Case studies are code-split so the homepage doesn't ship all four up front.
const Remind = lazy(() => import('./case-studies/Remind'))
const FirstRevenue = lazy(() => import('./case-studies/FirstRevenue'))
const Wishcake = lazy(() => import('./case-studies/Wishcake'))
const Qrew = lazy(() => import('./case-studies/Qrew'))

function getInitialTheme() {
  const attr = document.documentElement.getAttribute('data-theme')
  return attr === 'light' || attr === 'dark' ? attr : 'dark'
}

// Wraps each route in a short crossfade so navigating into a case study feels
// like a page transition rather than a scroll jump. reducedMotion is honoured
// via the surrounding MotionConfig.
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <Suspense fallback={null}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <main id="main" className="main-content">
                  <Hero />
                  <Work />
                  <About />
                  <Footer />
                </main>
              }
            />
            <Route path="/work/remind" element={<Remind />} />
            <Route path="/work/first-revenue" element={<FirstRevenue />} />
            <Route path="/work/wishcake" element={<Wishcake />} />
            <Route path="/work/qrew" element={<Qrew />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

function NotFound() {
  return (
    <main id="main" className="main-content not-found">
      <h1>Page not found</h1>
      <p>That page doesn’t exist. Head back to the work.</p>
      <a href="/" className="hero-link">← Back to home</a>
    </main>
  )
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // ignore private-mode write failures
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToAnchor />
      <ShaderEffect theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatedRoutes />
    </MotionConfig>
  )
}

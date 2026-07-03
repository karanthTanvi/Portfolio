import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import Work from './components/Work'  
import Work from './components/Work'  
import About from './components/About'  
import Footer from './components/Footer'
import ShaderEffect from './components/ShaderEffect'
import Remind from './case-studies/Remind'
import FirstRevenue from './case-studies/FirstRevenue'
import Wishcake from './case-studies/Wishcake'
import Qrew from './case-studies/Qrew'
import './index.css'
import ScrollToAnchor from './components/ScrollToAnchor'

export default function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
    <ScrollToAnchor />
      <ShaderEffect theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <Routes>
        <Route
          path="/"
          element={
            <main className="main-content">
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
      </Routes>

      
    </>
  )
}
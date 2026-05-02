import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Footer from './components/Footer'
import ShaderEffect from './components/ShaderEffect'
import './index.css'

export default function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
  }

  return (
    <>
      <ShaderEffect theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="main-content">
        <Hero />
        {/* <Work /> */}
        <Footer />
      </main>
      {/* <Footer /> */}
    </>
  )
}
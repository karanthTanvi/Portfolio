import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import './index.css'

document.documentElement.setAttribute('data-theme', 'dark')

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CustomCursor />
    <App />
  </BrowserRouter>
)
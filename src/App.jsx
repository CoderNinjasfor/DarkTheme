import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ThemeWrapper from './components/ThemeWrapper'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <ThemeWrapper>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          © {new Date().getFullYear()} My App
        </div>
      </footer>
    </ThemeWrapper>
  )
}
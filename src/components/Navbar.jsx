import { Link } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="text-gray-800 dark:text-white font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            About
          </Link>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  )
}
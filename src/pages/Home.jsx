// src/pages/Home.jsx
import DarkModeToggle from '../components/DarkModeToggle'

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark transition-colors">
      <header className="p-4">
        <DarkModeToggle />
      </header>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome to my App
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This is a simple app demonstrating dark mode toggle functionality.
        </p>
      </main>
    </div>
  )
}
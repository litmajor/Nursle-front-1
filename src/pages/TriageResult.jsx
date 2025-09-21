import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

export default function TriageResult() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.div 
      initial={{ x: 200, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="relative">
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="absolute -top-16 right-0 p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
        
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md transition-colors duration-300">
          <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Triage Results</h1>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Diagnosis:</strong> {state?.diagnosis}
          </p>
          
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Triage Level:</strong> 
            <span className="ml-2 px-2 py-1 bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-lg">
              {state?.triage}
            </span>
          </p>
          
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            <strong className="text-gray-900 dark:text-white">Advice:</strong> {state?.advice}
          </p>
          
          <button 
            onClick={() => navigate('/')} 
            className="mt-6 bg-gray-800 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
          >
            Back
          </button>
        </div>
      </div>
    </motion.div>
  )
}
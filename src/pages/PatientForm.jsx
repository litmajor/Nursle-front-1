import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

export default function PatientForm() {
  const navigate = useNavigate()
  const { isDark, toggleTheme } = useTheme()
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: 'Male',
    symptoms: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/triage', { state: { ...form, diagnosis: 'Common Cold', triage: 'Medium', advice: 'Rest, drink fluids, eat healthy.' } })
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
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
        
        <form 
          onSubmit={handleSubmit} 
          className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 w-full max-w-md transition-colors duration-300"
        >
          <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">New Patient</h1>
          
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300" 
              required 
            />
          </label>
          
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Age</span>
            <input 
              type="number" 
              name="age" 
              value={form.age} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300" 
              required 
            />
          </label>
          
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Gender</span>
            <select 
              name="gender" 
              value={form.gender} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
          
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-gray-300">Symptoms</span>
            <textarea 
              name="symptoms" 
              value={form.symptoms} 
              onChange={handleChange} 
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mt-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-300" 
              rows="3" 
            />
          </label>
          
          <div className="flex gap-2">
            <button 
              type="button" 
              className="flex-1 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 rounded-lg transition-colors duration-300"
            >
              Speak Symptoms
            </button>
            <button 
              type="submit" 
              className="flex-1 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white py-2 rounded-lg transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
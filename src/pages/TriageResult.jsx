import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function TriageResult() {
  const { state } = useLocation()
  const navigate = useNavigate()

  return (
    <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Triage Results</h1>
        <p><strong>Diagnosis:</strong> {state?.diagnosis}</p>
        <p><strong>Triage Level:</strong> <span className="px-2 py-1 bg-blue-200 rounded-lg">{state?.triage}</span></p>
        <p className="mt-2"><strong>Advice:</strong> {state?.advice}</p>
        <button onClick={() => navigate('/')} className="mt-6 bg-gray-800 text-white px-4 py-2 rounded-lg">Back</button>
      </div>
    </motion.div>
  )
}
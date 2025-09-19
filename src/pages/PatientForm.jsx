import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PatientForm() {
  const navigate = useNavigate()
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">New Patient</h1>
        <label className="block mb-4">
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1" required />
        </label>
        <label className="block mb-4">
          Age
          <input type="number" name="age" value={form.age} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1" required />
        </label>
        <label className="block mb-4">
          Gender
          <select name="gender" value={form.gender} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1">
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <label className="block mb-4">
          Symptoms
          <textarea name="symptoms" value={form.symptoms} onChange={handleChange} className="w-full p-2 border rounded-lg mt-1" rows="3" />
        </label>
        <div className="flex gap-2">
          <button type="button" className="flex-1 bg-blue-500 text-white py-2 rounded-lg">Speak Symptoms</button>
          <button type="submit" className="flex-1 bg-green-500 text-white py-2 rounded-lg">Submit</button>
        </div>
      </form>
    </motion.div>
  )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Dashboard from './pages/Dashboard'
import PatientForm from './pages/PatientForm'
import TriageResult from './pages/TriageResult'
import { ThemeProvider } from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new-patient" element={<PatientForm />} />
          <Route path="/results" element={<TriageResult />} />
          <Route path="/results/:id" element={<TriageResult />} />
          <Route path="/triage" element={<TriageResult />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import PatientForm from './pages/PatientForm'
import TriageResult from './pages/TriageResult'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PatientForm />} />
        <Route path="/triage" element={<TriageResult />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
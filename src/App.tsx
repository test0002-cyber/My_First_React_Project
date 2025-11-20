import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import './App.css'
import { useAuth } from './contexts/AuthContext'
import Login from './pages/Login'
import { Routes, Route, Navigate, Outlet, useNavigate } from 'react-router-dom'

function DashboardLayout({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (v: boolean) => void }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} activeSection={''} setActiveSection={() => {}} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function App() {
  const { user } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  if (!user) return <Login />

  return (
    <Routes>
      <Route element={<DashboardLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}>
        <Route path="/" element={<Navigate to="/section/overview" replace />} />
        <Route path="/section/:sectionId" element={<DashboardWrapper />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

function DashboardWrapper() {
  // Dashboard component expects activeSection prop; we'll read route param inside Dashboard itself
  return <Dashboard />
}

export default App

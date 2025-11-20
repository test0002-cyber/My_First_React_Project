import React from 'react'
import { Menu, X, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">GMB Review Analytics</h1>
          <p className="text-sm text-gray-600">Google Business Profile Insights Dashboard</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-900">{user?.name || 'Your Business'}</p>
          <p className="text-xs text-gray-600">Role: {user?.role}</p>
        </div>
        <button onClick={logout} className="p-2 rounded hover:bg-gray-100 flex items-center gap-2">
          <LogOut size={16} />
          <span className="text-sm text-gray-700">Logout</span>
        </button>
      </div>
    </header>
  )
}

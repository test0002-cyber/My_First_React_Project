import React, { createContext, useContext, useEffect, useState } from 'react'

type User = {
  id: string
  name: string
  role: 'admin' | 'manager' | 'agent' | 'viewer'
}

type AuthContextValue = {
  user: User | null
  login: (role?: User['role']) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

const STORAGE_KEY = 'ri_user'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setUser(JSON.parse(raw))
    } catch {
      // ignore
    }
  }, [])

  useEffect(() => {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    else localStorage.removeItem(STORAGE_KEY)
  }, [user])

  const login = async (role: User['role'] = 'admin') => {
    // Mock login for local dev: create a simple user object and save
    const mock: User = { id: String(Date.now()), name: role === 'admin' ? 'Admin User' : 'Team Member', role }
    setUser(mock)
  }

  const logout = () => {
    setUser(null)
  }

  // Background scheduler: check for scheduled reports and run them periodically
  useEffect(() => {
    let timer: any = null
    const checkAndRun = () => {
      try {
        const raw = localStorage.getItem('ri_report_schedule')
        if (!raw) return
        const { schedule } = JSON.parse(raw)
        const last = localStorage.getItem('ri_report_last_run')
        const now = Date.now()
        const shouldRun = (() => {
          if (!last) return true
          const lastTime = new Date(last).getTime()
          const diff = now - lastTime
          if (schedule === 'daily') return diff > 24 * 3600 * 1000
          if (schedule === 'weekly') return diff > 7 * 24 * 3600 * 1000
          if (schedule === 'monthly') return diff > 30 * 24 * 3600 * 1000
          return false
        })()
        if (shouldRun) {
          // set a flag; actual export logic is performed in client components via export utility
          localStorage.setItem('ri_report_due', new Date().toISOString())
        }
      } catch {
        // ignore
      }
    }
    timer = setInterval(checkAndRun, 60 * 1000) // check every minute
    return () => clearInterval(timer)
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export default AuthContext

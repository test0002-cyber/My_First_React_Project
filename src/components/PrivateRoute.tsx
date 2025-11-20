import React from 'react'
import { useAuth } from '../contexts/AuthContext'

interface PrivateRouteProps {
  children: React.ReactNode
  allowedRoles?: Array<'admin'|'manager'|'agent'|'viewer'>
}

export default function PrivateRoute({ children, allowedRoles }: PrivateRouteProps) {
  const { user } = useAuth()
  if (!user) return <div className="p-6">Please login to access this section.</div>
  if (allowedRoles && !allowedRoles.includes(user.role)) return <div className="p-6">Access denied</div>
  return <>{children}</>
}

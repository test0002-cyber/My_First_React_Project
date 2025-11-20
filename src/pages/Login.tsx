import React from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Login() {
  const { login } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Sign in (mock)</h2>
        <p className="text-sm text-gray-600 mb-4">Choose a role to simulate different permissions.</p>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={() => login('admin')} className="px-4 py-2 bg-blue-600 text-white rounded">Sign in as Admin</button>
          <button onClick={() => login('manager')} className="px-4 py-2 bg-green-600 text-white rounded">Sign in as Manager</button>
          <button onClick={() => login('agent')} className="px-4 py-2 bg-indigo-600 text-white rounded">Sign in as Agent</button>
          <button onClick={() => login('viewer')} className="px-4 py-2 bg-gray-200 rounded">Sign in as Viewer</button>
        </div>
      </div>
    </div>
  )
}

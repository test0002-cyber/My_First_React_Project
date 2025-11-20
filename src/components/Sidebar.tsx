import React from 'react'
import {
  BarChart3, TrendingUp, Users, MessageSquare, Star, AlertCircle,
  Target, PieChart, Activity, Zap, Lock, Gauge, Send, Bot, UserPlus, Mail, FileText
} from 'lucide-react'

interface SidebarProps {
  isOpen: boolean
  activeSection: string
  setActiveSection: (section: string) => void
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: BarChart3 },
  { id: 'reviews', label: 'Review Metrics', icon: MessageSquare },
  { id: 'sentiment', label: 'Sentiment Analysis', icon: Star },
  { id: 'trends', label: 'Trends & Growth', icon: TrendingUp },
  { id: 'engagement', label: 'Engagement', icon: Activity },
  { id: 'competitive', label: 'Competitive', icon: Target },
  { id: 'customer', label: 'Customer Insights', icon: Users },
  { id: 'operational', label: 'Operations', icon: Gauge },
  { id: 'predictive', label: 'Predictive', icon: Zap },
  { id: 'advanced', label: 'Advanced Analytics', icon: PieChart },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'inbox', label: 'Inbox', icon: Mail },
  { id: 'leads', label: 'Leads', icon: UserPlus },
  { id: 'requestReviews', label: 'Request Reviews', icon: Send },
  { id: 'autoResponder', label: 'Auto Responder', icon: Bot },
  { id: 'risks', label: 'Risk & Compliance', icon: AlertCircle },
  { id: 'settings', label: 'Settings', icon: Lock },
]

export default function Sidebar({ isOpen, activeSection, setActiveSection }: SidebarProps) {
  const navigate = (window as any).navigate || null
  if (!isOpen) return null

  return (
    <aside className="w-64 bg-gray-900 text-white overflow-y-auto transition-all duration-300 shadow-lg">
      <div className="p-6 border-b border-gray-800">
        <h2 className="text-xl font-bold">Insights</h2>
      </div>
      
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => {
                // Navigate using history API to route-based app
                try {
                  window.history.pushState({}, '', `/section/${item.id}`)
                  // dispatch a popstate event so router updates
                  window.dispatchEvent(new PopStateEvent('popstate'))
                } catch {
                  // fallback: call previous setActiveSection
                  setActiveSection(item.id)
                }
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeSection === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-800 mt-auto">
        <p className="text-xs text-gray-400">
          GMB Analytics Dashboard v1.0
        </p>
      </div>
    </aside>
  )
}

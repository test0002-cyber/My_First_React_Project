import React, { useEffect, useState } from 'react'
import { MessageSquare, Mail, Phone, Send, CheckCircle, AlertCircle, Copy } from 'lucide-react'
import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'

export default function RequestReviews() {
  const [selectedMedium, setSelectedMedium] = useState<'whatsapp' | 'sms' | 'email'>('email')
  const [selectedReviews, setSelectedReviews] = useState<number[]>([])
  const [bulkMode, setBulkMode] = useState(false)
  const [campaignName, setCampaignName] = useState('')
  const [campaignMessage, setCampaignMessage] = useState(
    'We would love to hear your feedback! Please share your experience with us.'
  )
  const [selectedSegment, setSelectedSegment] = useState('all')
  const [showSuccess, setShowSuccess] = useState(false)

  // Sample recent customers data (will be merged with imported leads)
  const sampleCustomers = [
    { id: 1, name: 'John Smith', email: 'john@email.com', phone: '+1-234-567-8901', lastVisit: '2 days ago', rating: null },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+1-234-567-8902', lastVisit: '5 days ago', rating: 5 },
    { id: 3, name: 'Mike Davis', email: 'mike@email.com', phone: '+1-234-567-8903', lastVisit: '1 week ago', rating: null },
    { id: 4, name: 'Emma Wilson', email: 'emma@email.com', phone: '+1-234-567-8904', lastVisit: '10 days ago', rating: null },
    { id: 5, name: 'David Brown', email: 'david@email.com', phone: '+1-234-567-8905', lastVisit: '2 weeks ago', rating: 4 },
    { id: 6, name: 'Lisa Anderson', email: 'lisa@email.com', phone: '+1-234-567-8906', lastVisit: '3 weeks ago', rating: null },
  ]

  const TEMP_CUSTOMERS_KEY = 'ri_temp_customers'
  const [customers, setCustomers] = useState<typeof sampleCustomers>(sampleCustomers)

  useEffect(() => {
    const stored = localStorage.getItem(TEMP_CUSTOMERS_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Map imported leads to expected customer shape and avoid id collisions
          const mapped = parsed.map((p: any, i: number) => ({
            id: Number(p.id) || Date.now() + i,
            name: p.name || p.full_name || `Lead ${i + 1}`,
            email: p.email || '',
            phone: p.phone || p.mobile || '',
            lastVisit: p.lastVisit || p.last_visit || 'imported',
            rating: p.rating ?? null,
          }))
          setCustomers(prev => [...mapped, ...prev])
          // clear temporary storage after loading once
          // localStorage.removeItem(TEMP_CUSTOMERS_KEY)
        }
      } catch {
        // ignore parse errors
      }
    }
  }, [])

  const campaigns = [
    { id: 1, name: 'Post-Visit Follow-up', medium: 'email', status: 'sent', sent: 45, responded: 12 },
    { id: 2, name: 'WhatsApp Reminder', medium: 'whatsapp', status: 'sent', sent: 32, responded: 18 },
    { id: 3, name: 'SMS Quick Survey', medium: 'sms', status: 'active', sent: 28, responded: 8 },
  ]

  const handleSelectReview = (id: number) => {
    if (selectedReviews.includes(id)) {
      setSelectedReviews(selectedReviews.filter(rid => rid !== id))
    } else {
      setSelectedReviews([...selectedReviews, id])
    }
  }

  const handleSelectAll = () => {
    if (selectedReviews.length === customers.length) {
      setSelectedReviews([])
    } else {
      setSelectedReviews(customers.map(c => c.id))
    }
  }

  const handleSendCampaign = () => {
    if (!campaignName || !campaignMessage || selectedReviews.length === 0) {
      alert('Please fill in all fields and select at least one customer')
      return
    }
    
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
    
    // Reset form
    setCampaignName('')
    setCampaignMessage(
      'We would love to hear your feedback! Please share your experience with us.'
    )
    setSelectedReviews([])
  }

  const getMediumIcon = (medium: string) => {
    switch(medium) {
      case 'whatsapp': return <MessageSquare className="w-5 h-5" />
      case 'sms': return <Phone className="w-5 h-5" />
      case 'email': return <Mail className="w-5 h-5" />
      default: return null
    }
  }

  const getMediumColor = (medium: string) => {
    switch(medium) {
      case 'whatsapp': return 'bg-green-50'
      case 'sms': return 'bg-blue-50'
      case 'email': return 'bg-purple-50'
      default: return 'bg-gray-50'
    }
  }

  const filteredCustomers = bulkMode ? customers : customers.filter(c => !c.rating)

  const loadLeadsManually = () => {
    const stored = localStorage.getItem(TEMP_CUSTOMERS_KEY)
    if (!stored) {
      alert('No leads found in local storage. Import leads from the Leads page first.')
      return
    }
    try {
      const parsed = JSON.parse(stored)
      const mapped = parsed.map((p: any, i: number) => ({
        id: Number(p.id) || Date.now() + i,
        name: p.name || p.full_name || `Lead ${i + 1}`,
        email: p.email || '',
        phone: p.phone || p.mobile || '',
        lastVisit: p.lastVisit || p.last_visit || 'imported',
        rating: p.rating ?? null,
      }))
      setCustomers(prev => [...mapped, ...prev])
      alert(`Loaded ${mapped.length} lead(s) into customers list.`)
    } catch {
      alert('Failed to parse leads from local storage')
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Request Reviews</h1>
          <p className="text-gray-600 mt-2">Send review requests via WhatsApp, SMS, or Email</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">{customers.filter(c => !c.rating).length}</p>
          <p className="text-gray-600 text-sm">Without Reviews</p>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-semibold text-green-900">Campaign Sent Successfully!</p>
            <p className="text-green-700 text-sm">Review requests sent to {selectedReviews.length} customers via {selectedMedium.toUpperCase()}</p>
          </div>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard 
          title="Total Customers" 
          value={customers.length.toString()} 
          icon={MessageSquare}
          backgroundColor="bg-blue-50"
        />
        <MetricCard 
          title="With Reviews" 
          value={customers.filter(c => c.rating).length.toString()} 
          icon={CheckCircle}
          backgroundColor="bg-green-50"
        />
        <MetricCard 
          title="Without Reviews" 
          value={customers.filter(c => !c.rating).length.toString()} 
          icon={AlertCircle}
          backgroundColor="bg-yellow-50"
        />
        <MetricCard 
          title="Active Campaigns" 
          value={campaigns.filter(c => c.status === 'active').length.toString()} 
          icon={Send}
          backgroundColor="bg-purple-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Campaign Builder */}
        <div className="lg:col-span-2 space-y-6">
          <Card title="Create Campaign">
            <div className="space-y-4">
              {/* Campaign Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Name</label>
                <input
                  type="text"
                  value={campaignName}
                  onChange={(e) => setCampaignName(e.target.value)}
                  placeholder="e.g., Post-Visit Follow-up"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Medium Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Select Channel</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'email', label: 'Email', icon: Mail, color: 'from-purple-500 to-pink-500' },
                    { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
                    { id: 'sms', label: 'SMS', icon: Phone, color: 'from-blue-500 to-cyan-500' },
                  ].map((medium) => {
                    const Icon = medium.icon
                    return (
                      <button
                        key={medium.id}
                        onClick={() => setSelectedMedium(medium.id as any)}
                        className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                          selectedMedium === medium.id
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${medium.color} text-white`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold">{medium.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Message Template */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  value={campaignMessage}
                  onChange={(e) => setCampaignMessage(e.target.value)}
                  placeholder="Enter your review request message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={4}
                />
                <p className="text-xs text-gray-500 mt-2">
                  Tip: Keep messages concise and personalized for better response rates
                </p>
              </div>

              {/* Mode Toggle */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Selection Mode</label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setBulkMode(false)}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all font-medium ${
                      !bulkMode
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    No Reviews Only ({customers.filter(c => !c.rating).length})
                  </button>
                  <button
                    onClick={() => setBulkMode(true)}
                    className={`flex-1 py-2 px-4 rounded-lg border-2 transition-all font-medium ${
                      bulkMode
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    All Customers ({customers.length})
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Customer Selection */}
          <Card title={`Select Customers (${selectedReviews.length} selected)`}>
            <div className="space-y-3">
              <button
                onClick={handleSelectAll}
                className="w-full text-left px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-semibold text-sm text-gray-700 border border-gray-200"
              >
                {selectedReviews.length === filteredCustomers.length ? 'Deselect All' : 'Select All'} ({filteredCustomers.length})
              </button>

              <div className="max-h-96 overflow-y-auto space-y-2">
                {filteredCustomers.map((customer) => (
                  <label
                    key={customer.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all"
                  >
                    <input
                      type="checkbox"
                      checked={selectedReviews.includes(customer.id)}
                      onChange={() => handleSelectReview(customer.id)}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900">{customer.name}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        {selectedMedium === 'email' && <span className="truncate">{customer.email}</span>}
                        {selectedMedium === 'whatsapp' && <span>{customer.phone}</span>}
                        {selectedMedium === 'sms' && <span>{customer.phone}</span>}
                        <span>•</span>
                        <span>Last visit: {customer.lastVisit}</span>
                      </div>
                    </div>
                    {customer.rating && (
                      <span className="text-xs font-semibold text-blue-600 px-2 py-1 bg-blue-50 rounded">
                        ⭐ {customer.rating}
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          </Card>

          {/* Send Button */}
          <button
            onClick={handleSendCampaign}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            Send Campaign to {selectedReviews.length} Customer{selectedReviews.length !== 1 ? 's' : ''}
          </button>
        </div>

        {/* Recent Campaigns */}
        <div>
          <Card title="Recent Campaigns">
            <div className="space-y-3">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className={`p-4 rounded-lg border-l-4 ${
                    campaign.medium === 'email'
                      ? 'border-purple-500 bg-purple-50'
                      : campaign.medium === 'whatsapp'
                      ? 'border-green-500 bg-green-50'
                      : 'border-blue-500 bg-blue-50'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getMediumIcon(campaign.medium)}
                      <h3 className="font-semibold text-gray-900 text-sm">{campaign.name}</h3>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded ${
                      campaign.status === 'sent' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {campaign.status === 'sent' ? '✓ Sent' : '◉ Active'}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-gray-600">
                      <span>Sent:</span>
                      <span className="font-semibold">{campaign.sent}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Responses:</span>
                      <span className="font-semibold">{campaign.responded}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Response Rate:</span>
                      <span className="font-semibold">
                        {Math.round((campaign.responded / campaign.sent) * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

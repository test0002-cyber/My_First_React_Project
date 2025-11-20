import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import MetricCard from '../../components/MetricCard'
import { UserPlus, Trash2, Upload, Download, CheckCircle } from 'lucide-react'

type Lead = {
  id: number
  name: string
  email?: string
  phone?: string
  lastVisit?: string
  rating?: number | null
}

const STORAGE_KEY = 'ri_leads'
const TEMP_CUSTOMERS_KEY = 'ri_temp_customers'

export default function Leads() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [selectedIds, setSelectedIds] = useState<number[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [showSuccess, setShowSuccess] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try { setLeads(JSON.parse(stored)) } catch { setLeads([]) }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
  }, [leads])

  const saveNewLead = () => {
    if (!name && !email && !phone) return
    const next: Lead = { id: Date.now(), name: name || 'Unknown', email: email || '', phone: phone || '', lastVisit: 'just now', rating: null }
    setLeads([next, ...leads])
    setName(''); setEmail(''); setPhone('')
    setShowSuccess('Lead added')
    setTimeout(() => setShowSuccess(''), 2500)
  }

  const handleDelete = (id: number) => {
    setLeads(leads.filter(l => l.id !== id))
    setSelectedIds(selectedIds.filter(s => s !== id))
  }

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) setSelectedIds(selectedIds.filter(s => s !== id))
    else setSelectedIds([...selectedIds, id])
  }

  const handleCSVUpload = (file: File | null) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = String(e.target?.result || '')
      const rows = text.split(/\r?\n/).map(r => r.trim()).filter(Boolean)
      if (rows.length === 0) return
      const header = rows[0].split(',').map(h => h.trim().toLowerCase())
      const idx = (key: string) => header.indexOf(key)
      const newLeads: Lead[] = rows.slice(1).map((r, i) => {
        const cols = r.split(',').map(c => c.trim())
        return {
          id: Date.now() + i,
          name: cols[idx('name')] || cols[idx('full_name')] || `lead-${i}`,
          email: cols[idx('email')] || '',
          phone: cols[idx('phone')] || cols[idx('mobile')] || '',
          lastVisit: cols[idx('lastvisit')] || cols[idx('last_visit')] || '',
          rating: null,
        }
      })
      setLeads(prev => [...newLeads, ...prev])
      setShowSuccess(`Imported ${newLeads.length} leads`)
      setTimeout(() => setShowSuccess(''), 3000)
    }
    reader.readAsText(file)
  }

  const exportCSV = () => {
    const header = ['id','name','email','phone','lastVisit','rating']
    const rows = leads.map(l => [l.id, l.name, l.email || '', l.phone || '', l.lastVisit || '', l.rating ?? ''].join(','))
    const csv = [header.join(','), ...rows].join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'leads_export.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  const addSelectedToRequestReviews = () => {
    const selectedLeads = leads.filter(l => selectedIds.includes(l.id))
    if (selectedLeads.length === 0) {
      setShowSuccess('No leads selected')
      setTimeout(() => setShowSuccess(''), 2000)
      return
    }
    // Save to temporary customers storage that RequestReviews will read
    localStorage.setItem(TEMP_CUSTOMERS_KEY, JSON.stringify(selectedLeads))
    setShowSuccess(`${selectedLeads.length} lead(s) added for Request Reviews`) 
    setTimeout(() => setShowSuccess(''), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Leads</h1>
          <p className="text-gray-600 mt-2">Manage leads for campaigns — add manually or import CSV</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">{leads.length}</p>
          <p className="text-gray-600 text-sm">Total Leads</p>
        </div>
      </div>

      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <p className="font-semibold text-green-900">{showSuccess}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MetricCard title="Total Leads" value={leads.length.toString()} icon={UserPlus} backgroundColor="bg-blue-50" />
        <MetricCard title="With Reviews" value={leads.filter(l => l.rating).length.toString()} icon={CheckCircle} backgroundColor="bg-green-50" />
        <MetricCard title="Without Reviews" value={leads.filter(l => !l.rating).length.toString()} icon={Upload} backgroundColor="bg-yellow-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Add Lead">
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input className="w-full px-4 py-2 border rounded" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input className="w-full px-4 py-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input className="w-full px-4 py-2 border rounded" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div className="flex gap-3">
                <button onClick={saveNewLead} className="px-4 py-2 bg-blue-600 text-white rounded">Add Lead</button>
                <button onClick={exportCSV} className="px-4 py-2 bg-gray-100 rounded flex items-center gap-2"><Download className="w-4 h-4" /> Export CSV</button>
              </div>
            </div>
          </Card>

          <Card title="Import CSV">
            <div className="space-y-3">
              <p className="text-sm text-gray-600">CSV should have header columns like: name,email,phone,lastVisit</p>
              <input type="file" accept="text/csv" onChange={(e) => handleCSVUpload(e.target.files ? e.target.files[0] : null)} />
            </div>
          </Card>

          <Card title={`Leads (${leads.length})`}>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {leads.map(lead => (
                <label key={lead.id} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer">
                  <input type="checkbox" checked={selectedIds.includes(lead.id)} onChange={() => toggleSelect(lead.id)} className="w-4 h-4" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900">{lead.name}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="truncate">{lead.email || lead.phone}</span>
                      <span>•</span>
                      <span>{lead.lastVisit || '—'}</span>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(lead.id)} className="text-red-500"><Trash2 className="w-4 h-4" /></button>
                </label>
              ))}
            </div>
            <div className="mt-3 flex gap-3">
              <button onClick={addSelectedToRequestReviews} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2"><Upload className="w-4 h-4" /> Add Selected to Request Reviews</button>
              <button onClick={() => { setSelectedIds(leads.map(l => l.id)) }} className="px-4 py-2 bg-gray-100 rounded">Select All</button>
              <button onClick={() => { setSelectedIds([]) }} className="px-4 py-2 bg-gray-100 rounded">Clear Selection</button>
            </div>
          </Card>
        </div>

        <div>
          <Card title="Quick Actions">
            <div className="space-y-3 text-sm text-gray-600">
              <p>Use the "Add Selected to Request Reviews" button to copy chosen leads to the Request Reviews screen.</p>
              <p>Imported leads are stored in local browser storage for demo/testing.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

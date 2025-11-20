import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Download, Calendar } from 'lucide-react'
import { exportReportsCSV } from '../../utils/export'
import { fetchScheduledReports, scheduleReport as apiScheduleReport, sendReportNow, sendViaChannel, fetchSentReports, generateReport } from '../../services/api'

const sampleData = [
  { metric: 'Average Rating', value: 4.3 },
  { metric: 'Total Reviews', value: 123 },
  { metric: 'Response Rate', value: 32 },
]

export default function Reports() {
  const [schedule, setSchedule] = useState('weekly')
  const [recipients, setRecipients] = useState('')
  const [channel, setChannel] = useState<'email'|'whatsapp'>('email')
  const [lastExport, setLastExport] = useState<string | null>(null)
  const [scheduled, setScheduled] = useState<any[]>([])
  const [sent, setSent] = useState<any[]>([])
  const [reportType, setReportType] = useState<string>('executive')

  useEffect(() => {
    fetchScheduledReports().then(s => setScheduled(s)).catch(() => {})
    fetchSentReports().then(s => setSent(s)).catch(() => {})
  }, [])

  const exportCSV = () => {
    const { url } = exportReportsCSV(sampleData)
    const a = document.createElement('a')
    a.href = url
    a.download = 'report.csv'
    a.click()
    URL.revokeObjectURL(url)
    setLastExport(new Date().toISOString())
  }

  const scheduleReport = async () => {
    const recs = recipients.split(',').map(r => r.trim()).filter(Boolean)
    try {
      const payload = { type: reportType, payload: {} }
      const res = await apiScheduleReport({ name: `${reportType} report`, schedule, channel, recipients: recs, payload })
      setScheduled(prev => [res, ...prev])
      alert(`Scheduled ${schedule} report (${reportType}) to ${recs.length} recipient(s)`)
    } catch (e) {
      alert('Failed to schedule')
    }
  }

  const runScheduledNow = async () => {
    try {
      // generate attachment on server based on reportType
      const gen = await generateReport({ type: reportType, payload: { metrics: sampleData } })
      const attachment = gen && gen.contentBase64 ? { filename: gen.filename, contentBase64: gen.contentBase64 } : null
      const report = await sendReportNow({ name: 'Manual Run', payload: sampleData })
      const recs = recipients.split(',').map(r => r.trim()).filter(Boolean)
      if (recs.length > 0) {
        await sendViaChannel({ channel, recipients: recs, subject: `Manual: ${report.name}`, body: 'Attached report payload', attachment })
      }
      const newSent = await fetchSentReports()
      setSent(newSent)
      setLastExport(new Date().toISOString())
      alert('Scheduled reports run now (server triggered)')
    } catch (e) {
      alert('Failed to run scheduled now')
    }
  }

  function downloadAttachment(attachment: any) {
    try {
      if (!attachment || !attachment.contentBase64) return
      const byteCharacters = atob(attachment.contentBase64)
      const byteNumbers = new Array(byteCharacters.length)
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i)
      }
      const byteArray = new Uint8Array(byteNumbers)
      const blob = new Blob([byteArray], { type: 'text/csv' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = attachment.filename || 'report.csv'
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch (e) {
      console.error('Download failed', e)
      alert('Failed to download attachment')
    }
  }

  function previewAttachment(attachment: any) {
    try {
      if (!attachment || !attachment.contentBase64) return
      const url = `data:text/csv;base64,${attachment.contentBase64}`
      window.open(url, '_blank')
    } catch (e) {
      console.error('Preview failed', e)
      alert('Failed to preview attachment')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-2">Export insights and schedule recurring reports (Email / WhatsApp)</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">{sampleData.length}</p>
          <p className="text-gray-600 text-sm">Available Metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Export">
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Export the current metrics as CSV for offline analysis</p>
              <div className="flex gap-3">
                <button onClick={exportCSV} className="px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2"><Download className="w-4 h-4" /> Export CSV</button>
                <button onClick={runScheduledNow} className="px-4 py-2 bg-yellow-500 text-white rounded">Run Scheduled Now</button>
              </div>
              {lastExport && <p className="text-xs text-gray-500">Last exported: {new Date(lastExport).toLocaleString()}</p>}
            </div>
          </Card>

          <Card title="Schedule Report">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">Report Type</label>
              <select className="w-full px-3 py-2 border rounded" value={reportType} onChange={e => setReportType(e.target.value)}>
                <option value="executive">Executive Summary</option>
                <option value="locations">Location Roll-up</option>
                <option value="top_reviews">Top Reviews</option>
                <option value="sentiment">Sentiment Summary</option>
              </select>

              <label className="block text-sm font-semibold text-gray-700">Recipients (comma separated)</label>
              <input className="w-full px-3 py-2 border rounded" value={recipients} onChange={e => setRecipients(e.target.value)} placeholder="name@company.com,+1234567890" />
              <label className="block text-sm font-semibold text-gray-700">Channel</label>
              <div className="flex gap-3">
                <button onClick={() => setChannel('email')} className={`px-3 py-2 rounded ${channel==='email'?'bg-blue-600 text-white':'bg-gray-100'}`}>Email</button>
                <button onClick={() => setChannel('whatsapp')} className={`px-3 py-2 rounded ${channel==='whatsapp'?'bg-green-600 text-white':'bg-gray-100'}`}>WhatsApp</button>
              </div>
              <label className="block text-sm font-semibold text-gray-700">Frequency</label>
              <select className="w-full px-3 py-2 border rounded" value={schedule} onChange={e => setSchedule(e.target.value)}>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="once">Once</option>
              </select>
              <div className="flex gap-3 mt-2">
                <button onClick={scheduleReport} className="px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2"><Calendar className="w-4 h-4" /> Schedule</button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card title="Metrics">
            <div className="space-y-3 text-sm text-gray-600">
              {sampleData.map(s => (
                <div key={s.metric} className="flex justify-between">
                  <span>{s.metric}</span>
                  <span className="font-semibold">{s.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Scheduled Reports">
            <div className="space-y-2 text-sm">
              {scheduled.length === 0 && <div className="text-gray-500">No scheduled reports</div>}
              {scheduled.map((s:any) => (
                <div key={s.id} className="p-2 border rounded flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-xs text-gray-500">{s.schedule} • {s.channel} • {s.recipients?.length || 0} recipients</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={async ()=>{
                      try {
                        // generate attachment
                        const type = s.payload?.type || 'custom'
                        const p = s.payload?.payload || {}
                        const gen = await generateReport({ type, payload: p })
                        const attachment = gen && gen.contentBase64 ? { filename: gen.filename, contentBase64: gen.contentBase64 } : null
                        const report = await sendReportNow({ name: s.name, payload: s.payload })
                        await sendViaChannel({ channel: s.channel, recipients: s.recipients, subject: `Scheduled: ${s.name}`, body:'Report body', attachment })
                        const newSent = await fetchSentReports(); setSent(newSent); alert('Sent')
                      } catch (err) { console.error(err); alert('Failed to send') }
                    }} className="px-2 py-1 bg-blue-600 text-white rounded">Send Now</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Sent Reports">
            <div className="space-y-2 text-sm max-h-64 overflow-y-auto">
              {sent.map(s => (
                <div key={s.id} className="p-2 border rounded">
                  <div className="text-sm font-semibold">{s.subject || 'Report'}</div>
                  <div className="text-xs text-gray-500">{s.channel} • {new Date(s.timestamp).toLocaleString()}</div>
                  {s.attachment && (
                    <div className="mt-2 flex gap-2">
                      <button onClick={() => downloadAttachment(s.attachment)} className="px-2 py-1 bg-indigo-600 text-white rounded text-xs">Download</button>
                      <button onClick={() => previewAttachment(s.attachment)} className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs">Preview</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

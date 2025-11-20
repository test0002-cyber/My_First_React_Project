const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const cron = require('node-cron')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const DATA_FILE = path.join(__dirname, 'data.json')
function readData() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')) } catch { return { leads: [], messages: [], reports: [], scheduledReports: [], sentLogs: [] } }
}
function writeData(data) { fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2)) }

app.get('/api/leads', (req, res) => {
  const data = readData()
  res.json(data.leads)
})

app.post('/api/leads', (req, res) => {
  const data = readData()
  const lead = { id: Date.now(), ...req.body }
  data.leads.unshift(lead)
  writeData(data)
  res.json(lead)
})

app.get('/api/messages', (req, res) => {
  const data = readData()
  res.json(data.messages)
})

app.post('/api/messages', (req, res) => {
  const data = readData()
  const msg = { id: Date.now(), ...req.body, timestamp: new Date().toISOString() }
  data.messages.unshift(msg)
  writeData(data)
  res.json(msg)
})

app.post('/api/reports/run', (req, res) => {
  const data = readData()
  const report = { id: Date.now(), name: req.body.name || 'scheduled', timestamp: new Date().toISOString(), payload: req.body.payload || {} }
  data.reports.unshift(report)
  writeData(data)
  res.json(report)
})

// Schedule a report (persisted)
app.post('/api/reports/schedule', (req, res) => {
  const data = readData()
  const item = {
    id: Date.now(),
    name: req.body.name || 'custom',
    schedule: req.body.schedule || 'weekly',
    channel: req.body.channel || 'email',
    recipients: req.body.recipients || [],
    payload: req.body.payload || {},
    createdAt: new Date().toISOString(),
  }
  data.scheduledReports.unshift(item)
  writeData(data)
  res.json(item)
})

app.get('/api/reports/scheduled', (req, res) => {
  const data = readData()
  res.json(data.scheduledReports || [])
})

// Send via channel (simulate)
app.post('/api/send', (req, res) => {
  const data = readData()
  const { channel, recipients, subject, body } = req.body
  const attachment = req.body.attachment || null // { filename, contentBase64 }
  const sent = { id: Date.now(), channel, recipients, subject, body, attachment, timestamp: new Date().toISOString() }
  data.sentLogs = data.sentLogs || []
  data.sentLogs.unshift(sent)
  // also add message entries for inbox demo
  (data.messages = data.messages || []).unshift({ id: Date.now()+1, from: 'system', to: recipients.join(','), channel, body: `Report: ${subject}`, timestamp: new Date().toISOString() })
  writeData(data)
  res.json(sent)
})

// Generate a report attachment on the server (CSV) based on a report type and payload
app.post('/api/reports/generate', (req, res) => {
  const { type, payload } = req.body || {}
  // Simple generators for a few types; extend as needed
  function makeCSV(rows, headers) {
    const h = headers.join(',')
    const rs = rows.map(r => headers.map(k => JSON.stringify(r[k] ?? '')).join(','))
    return [h, ...rs].join('\n')
  }

  let filename = `report-${type || 'custom'}-${Date.now()}.csv`
  let csv = ''
  try {
    if (type === 'executive') {
      const rows = (payload.metrics || []).map((m, i) => ({ metric: m.metric, value: m.value }))
      csv = makeCSV(rows, ['metric', 'value'])
    } else if (type === 'locations') {
      const rows = (payload.locations || [])
      csv = makeCSV(rows, ['storeid', 'name', 'averageRating', 'reviews'])
    } else if (type === 'top_reviews') {
      const rows = (payload.reviews || [])
      csv = makeCSV(rows, ['rating', 'text', 'location', 'createdAt'])
    } else {
      // fallback: stringify payload
      const rows = Array.isArray(payload) ? payload : [payload]
      const headers = rows.length > 0 ? Object.keys(rows[0]) : ['value']
      csv = makeCSV(rows, headers)
    }
    const contentBase64 = Buffer.from(csv, 'utf8').toString('base64')
    res.json({ filename, contentBase64 })
  } catch (e) {
    console.error('Generate error', e)
    res.status(500).json({ error: String(e) })
  }
})

app.get('/api/reports/sent', (req, res) => {
  const data = readData()
  res.json(data.sentLogs || [])
})

// Example cron job that runs every day at midnight and appends a report
cron.schedule('0 0 * * *', () => {
  try {
    const data = readData()
    // process scheduledReports and generate/send
    (data.scheduledReports || []).forEach(sr => {
      const report = { id: Date.now(), name: sr.name || 'scheduled', timestamp: new Date().toISOString(), payload: sr.payload || {} }
      data.reports.unshift(report)
      // generate CSV attachment based on stored payload
      try {
        const type = sr.payload?.type || 'custom'
        const p = sr.payload?.payload || {}
        function makeCSV(rows, headers) {
          const h = headers.join(',')
          const rs = rows.map(r => headers.map(k => JSON.stringify(r[k] ?? '')).join(','))
          return [h, ...rs].join('\n')
        }
        let csv = ''
        if (type === 'executive') {
          const rows = (p.metrics || []).map(m => ({ metric: m.metric, value: m.value }))
          csv = makeCSV(rows, ['metric', 'value'])
        } else if (type === 'locations') {
          const rows = (p.locations || [])
          csv = makeCSV(rows, ['storeid', 'name', 'averageRating', 'reviews'])
        } else if (type === 'top_reviews') {
          const rows = (p.reviews || [])
          csv = makeCSV(rows, ['rating', 'text', 'location', 'createdAt'])
        } else {
          const rows = Array.isArray(p) ? p : [p]
          const headers = rows.length > 0 ? Object.keys(rows[0]) : ['value']
          csv = makeCSV(rows, headers)
        }
        const contentBase64 = Buffer.from(csv, 'utf8').toString('base64')
        const attachment = { filename: `scheduled-${type}-${Date.now()}.csv`, contentBase64 }
        const sent = { id: Date.now()+1, channel: sr.channel, recipients: sr.recipients || [], subject: `Scheduled: ${sr.name}`, body: `Auto report ${sr.name}`, attachment, timestamp: new Date().toISOString() }
        data.sentLogs = data.sentLogs || []
        data.sentLogs.unshift(sent)
        (data.messages = data.messages || []).unshift({ id: Date.now()+2, from: 'system', to: (sr.recipients||[]).join(','), channel: sr.channel, body: `Scheduled report: ${sr.name}`, timestamp: new Date().toISOString() })
      } catch (e) {
        console.error('Failed to generate scheduled attachment', e)
      }
    })
    writeData(data)
    console.log('Scheduled reports processed')
  } catch (e) { console.error(e) }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

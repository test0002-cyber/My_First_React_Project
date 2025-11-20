import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { fetchMessages, saveMessage, clearMessages } from '../../services/messaging'
import { Mail, Send, Trash2 } from 'lucide-react'

export default function Inbox() {
  const [messages, setMessages] = useState<any[]>([])
  const [reply, setReply] = useState('')
  const [selectedId, setSelectedId] = useState<string | null>(null)

  useEffect(() => {
    setMessages(fetchMessages())
  }, [])

  const simulateIncoming = () => {
    const msg = {
      id: String(Date.now()),
      from: `customer+${Math.floor(Math.random()*1000)}@example.com`,
      to: 'me@business.com',
      channel: (['email','whatsapp','sms'] as const)[Math.floor(Math.random()*3)],
      body: 'Hello, I wanted to share feedback about my recent visit.',
      timestamp: new Date().toISOString(),
    }
    saveMessage(msg)
    setMessages(fetchMessages())
  }

  const handleSelect = (id: string) => {
    setSelectedId(id)
  }

  const handleSend = () => {
    if (!selectedId || !reply) return
    const orig = messages.find(m => m.id === selectedId)
    const msg = {
      id: String(Date.now()),
      from: 'me@business.com',
      to: orig.from,
      channel: orig.channel,
      body: reply,
      timestamp: new Date().toISOString(),
    }
    saveMessage(msg)
    setMessages(fetchMessages())
    setReply('')
  }

  const handleClear = () => {
    clearMessages()
    setMessages([])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inbox</h1>
          <p className="text-gray-600 mt-2">Unified messages from customers (mocked)</p>
        </div>
        <div>
          <div className="flex gap-2">
            <button onClick={simulateIncoming} className="px-3 py-2 bg-yellow-100 text-yellow-700 rounded flex items-center gap-2">Simulate</button>
            <button onClick={handleClear} className="px-3 py-2 bg-red-100 text-red-700 rounded flex items-center gap-2"><Trash2 className="w-4 h-4" /> Clear</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card title="Messages">
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {messages.map((m) => (
                <div key={m.id} onClick={() => handleSelect(m.id)} className={`p-3 border rounded cursor-pointer ${selectedId === m.id ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4" />
                      <div>
                        <div className="font-semibold text-gray-900">{m.from}</div>
                        <div className="text-xs text-gray-500">{new Date(m.timestamp).toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">{m.channel}</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-700">{m.body}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card title="Conversation">
            <div className="space-y-3">
              {selectedId ? (
                <div>
                  <div className="text-sm text-gray-700 max-h-48 overflow-y-auto mb-3">
                    {messages.filter(m => m.id === selectedId || m.to === 'me@business.com' && m.to === messages.find(x=>x.id===selectedId)?.from).map((m) => (
                      <div key={m.id} className={`p-2 ${m.from === 'me@business.com' ? 'text-right' : ''}`}>
                        <div className={`inline-block p-2 rounded ${m.from === 'me@business.com' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                          {m.body}
                        </div>
                      </div>
                    ))}
                  </div>
                  <textarea value={reply} onChange={e => setReply(e.target.value)} className="w-full p-2 border rounded" rows={4} />
                  <div className="mt-2 flex gap-2">
                    <button onClick={handleSend} className="px-3 py-2 bg-blue-600 text-white rounded flex items-center gap-2"><Send className="w-4 h-4" /> Reply</button>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-500">Select a message to view conversation</div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

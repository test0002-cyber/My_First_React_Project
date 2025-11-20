type Message = {
  id: string
  from: string
  to: string
  channel: 'email'|'whatsapp'|'sms'
  body: string
  timestamp: string
}

const STORAGE_KEY = 'ri_inbox'

export function saveMessage(msg: Message) {
  const raw = localStorage.getItem(STORAGE_KEY)
  const arr: Message[] = raw ? JSON.parse(raw) : []
  arr.unshift(msg)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
}

export function fetchMessages(): Message[] {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? JSON.parse(raw) : []
}

export function clearMessages() {
  localStorage.removeItem(STORAGE_KEY)
}

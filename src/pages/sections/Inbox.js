import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { fetchMessages, saveMessage, clearMessages } from '../../services/messaging';
import { Mail, Send, Trash2 } from 'lucide-react';
export default function Inbox() {
    const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState('');
    const [selectedId, setSelectedId] = useState(null);
    useEffect(() => {
        setMessages(fetchMessages());
    }, []);
    const simulateIncoming = () => {
        const msg = {
            id: String(Date.now()),
            from: `customer+${Math.floor(Math.random() * 1000)}@example.com`,
            to: 'me@business.com',
            channel: ['email', 'whatsapp', 'sms'][Math.floor(Math.random() * 3)],
            body: 'Hello, I wanted to share feedback about my recent visit.',
            timestamp: new Date().toISOString(),
        };
        saveMessage(msg);
        setMessages(fetchMessages());
    };
    const handleSelect = (id) => {
        setSelectedId(id);
    };
    const handleSend = () => {
        if (!selectedId || !reply)
            return;
        const orig = messages.find(m => m.id === selectedId);
        const msg = {
            id: String(Date.now()),
            from: 'me@business.com',
            to: orig.from,
            channel: orig.channel,
            body: reply,
            timestamp: new Date().toISOString(),
        };
        saveMessage(msg);
        setMessages(fetchMessages());
        setReply('');
    };
    const handleClear = () => {
        clearMessages();
        setMessages([]);
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Inbox" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Unified messages from customers (mocked)" })] }), _jsx("div", { children: _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { onClick: simulateIncoming, className: "px-3 py-2 bg-yellow-100 text-yellow-700 rounded flex items-center gap-2", children: "Simulate" }), _jsxs("button", { onClick: handleClear, className: "px-3 py-2 bg-red-100 text-red-700 rounded flex items-center gap-2", children: [_jsx(Trash2, { className: "w-4 h-4" }), " Clear"] })] }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsx("div", { className: "lg:col-span-2", children: _jsx(Card, { title: "Messages", children: _jsx("div", { className: "space-y-2 max-h-96 overflow-y-auto", children: messages.map((m) => (_jsxs("div", { onClick: () => handleSelect(m.id), className: `p-3 border rounded cursor-pointer ${selectedId === m.id ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'}`, children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Mail, { className: "w-4 h-4" }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-gray-900", children: m.from }), _jsx("div", { className: "text-xs text-gray-500", children: new Date(m.timestamp).toLocaleString() })] })] }), _jsx("div", { className: "text-sm text-gray-600", children: m.channel })] }), _jsx("div", { className: "mt-2 text-sm text-gray-700", children: m.body })] }, m.id))) }) }) }), _jsx("div", { children: _jsx(Card, { title: "Conversation", children: _jsx("div", { className: "space-y-3", children: selectedId ? (_jsxs("div", { children: [_jsx("div", { className: "text-sm text-gray-700 max-h-48 overflow-y-auto mb-3", children: messages.filter(m => m.id === selectedId || m.to === 'me@business.com' && m.to === messages.find(x => x.id === selectedId)?.from).map((m) => (_jsx("div", { className: `p-2 ${m.from === 'me@business.com' ? 'text-right' : ''}`, children: _jsx("div", { className: `inline-block p-2 rounded ${m.from === 'me@business.com' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`, children: m.body }) }, m.id))) }), _jsx("textarea", { value: reply, onChange: e => setReply(e.target.value), className: "w-full p-2 border rounded", rows: 4 }), _jsx("div", { className: "mt-2 flex gap-2", children: _jsxs("button", { onClick: handleSend, className: "px-3 py-2 bg-blue-600 text-white rounded flex items-center gap-2", children: [_jsx(Send, { className: "w-4 h-4" }), " Reply"] }) })] })) : (_jsx("div", { className: "text-sm text-gray-500", children: "Select a message to view conversation" })) }) }) })] })] }));
}

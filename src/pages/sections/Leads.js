import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import MetricCard from '../../components/MetricCard';
import { UserPlus, Trash2, Upload, Download, CheckCircle } from 'lucide-react';
const STORAGE_KEY = 'ri_leads';
const TEMP_CUSTOMERS_KEY = 'ri_temp_customers';
export default function Leads() {
    const [leads, setLeads] = useState([]);
    const [selectedIds, setSelectedIds] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showSuccess, setShowSuccess] = useState('');
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setLeads(JSON.parse(stored));
            }
            catch {
                setLeads([]);
            }
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    }, [leads]);
    const saveNewLead = () => {
        if (!name && !email && !phone)
            return;
        const next = { id: Date.now(), name: name || 'Unknown', email: email || '', phone: phone || '', lastVisit: 'just now', rating: null };
        setLeads([next, ...leads]);
        setName('');
        setEmail('');
        setPhone('');
        setShowSuccess('Lead added');
        setTimeout(() => setShowSuccess(''), 2500);
    };
    const handleDelete = (id) => {
        setLeads(leads.filter(l => l.id !== id));
        setSelectedIds(selectedIds.filter(s => s !== id));
    };
    const toggleSelect = (id) => {
        if (selectedIds.includes(id))
            setSelectedIds(selectedIds.filter(s => s !== id));
        else
            setSelectedIds([...selectedIds, id]);
    };
    const handleCSVUpload = (file) => {
        if (!file)
            return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = String(e.target?.result || '');
            const rows = text.split(/\r?\n/).map(r => r.trim()).filter(Boolean);
            if (rows.length === 0)
                return;
            const header = rows[0].split(',').map(h => h.trim().toLowerCase());
            const idx = (key) => header.indexOf(key);
            const newLeads = rows.slice(1).map((r, i) => {
                const cols = r.split(',').map(c => c.trim());
                return {
                    id: Date.now() + i,
                    name: cols[idx('name')] || cols[idx('full_name')] || `lead-${i}`,
                    email: cols[idx('email')] || '',
                    phone: cols[idx('phone')] || cols[idx('mobile')] || '',
                    lastVisit: cols[idx('lastvisit')] || cols[idx('last_visit')] || '',
                    rating: null,
                };
            });
            setLeads(prev => [...newLeads, ...prev]);
            setShowSuccess(`Imported ${newLeads.length} leads`);
            setTimeout(() => setShowSuccess(''), 3000);
        };
        reader.readAsText(file);
    };
    const exportCSV = () => {
        const header = ['id', 'name', 'email', 'phone', 'lastVisit', 'rating'];
        const rows = leads.map(l => [l.id, l.name, l.email || '', l.phone || '', l.lastVisit || '', l.rating ?? ''].join(','));
        const csv = [header.join(','), ...rows].join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'leads_export.csv';
        a.click();
        URL.revokeObjectURL(url);
    };
    const addSelectedToRequestReviews = () => {
        const selectedLeads = leads.filter(l => selectedIds.includes(l.id));
        if (selectedLeads.length === 0) {
            setShowSuccess('No leads selected');
            setTimeout(() => setShowSuccess(''), 2000);
            return;
        }
        // Save to temporary customers storage that RequestReviews will read
        localStorage.setItem(TEMP_CUSTOMERS_KEY, JSON.stringify(selectedLeads));
        setShowSuccess(`${selectedLeads.length} lead(s) added for Request Reviews`);
        setTimeout(() => setShowSuccess(''), 3000);
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Leads" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Manage leads for campaigns \u2014 add manually or import CSV" })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-2xl font-bold text-blue-600", children: leads.length }), _jsx("p", { className: "text-gray-600 text-sm", children: "Total Leads" })] })] }), showSuccess && (_jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600" }), _jsx("div", { children: _jsx("p", { className: "font-semibold text-green-900", children: showSuccess }) })] })), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsx(MetricCard, { title: "Total Leads", value: leads.length.toString(), icon: UserPlus, backgroundColor: "bg-blue-50" }), _jsx(MetricCard, { title: "With Reviews", value: leads.filter(l => l.rating).length.toString(), icon: CheckCircle, backgroundColor: "bg-green-50" }), _jsx(MetricCard, { title: "Without Reviews", value: leads.filter(l => !l.rating).length.toString(), icon: Upload, backgroundColor: "bg-yellow-50" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx(Card, { title: "Add Lead", children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Name" }), _jsx("input", { className: "w-full px-4 py-2 border rounded", value: name, onChange: e => setName(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Email" }), _jsx("input", { className: "w-full px-4 py-2 border rounded", value: email, onChange: e => setEmail(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Phone" }), _jsx("input", { className: "w-full px-4 py-2 border rounded", value: phone, onChange: e => setPhone(e.target.value) })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { onClick: saveNewLead, className: "px-4 py-2 bg-blue-600 text-white rounded", children: "Add Lead" }), _jsxs("button", { onClick: exportCSV, className: "px-4 py-2 bg-gray-100 rounded flex items-center gap-2", children: [_jsx(Download, { className: "w-4 h-4" }), " Export CSV"] })] })] }) }), _jsx(Card, { title: "Import CSV", children: _jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "text-sm text-gray-600", children: "CSV should have header columns like: name,email,phone,lastVisit" }), _jsx("input", { type: "file", accept: "text/csv", onChange: (e) => handleCSVUpload(e.target.files ? e.target.files[0] : null) })] }) }), _jsxs(Card, { title: `Leads (${leads.length})`, children: [_jsx("div", { className: "space-y-2 max-h-96 overflow-y-auto", children: leads.map(lead => (_jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: selectedIds.includes(lead.id), onChange: () => toggleSelect(lead.id), className: "w-4 h-4" }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "font-medium text-gray-900", children: lead.name }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [_jsx("span", { className: "truncate", children: lead.email || lead.phone }), _jsx("span", { children: "\u2022" }), _jsx("span", { children: lead.lastVisit || '—' })] })] }), _jsx("button", { onClick: () => handleDelete(lead.id), className: "text-red-500", children: _jsx(Trash2, { className: "w-4 h-4" }) })] }, lead.id))) }), _jsxs("div", { className: "mt-3 flex gap-3", children: [_jsxs("button", { onClick: addSelectedToRequestReviews, className: "px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2", children: [_jsx(Upload, { className: "w-4 h-4" }), " Add Selected to Request Reviews"] }), _jsx("button", { onClick: () => { setSelectedIds(leads.map(l => l.id)); }, className: "px-4 py-2 bg-gray-100 rounded", children: "Select All" }), _jsx("button", { onClick: () => { setSelectedIds([]); }, className: "px-4 py-2 bg-gray-100 rounded", children: "Clear Selection" })] })] })] }), _jsx("div", { children: _jsx(Card, { title: "Quick Actions", children: _jsxs("div", { className: "space-y-3 text-sm text-gray-600", children: [_jsx("p", { children: "Use the \"Add Selected to Request Reviews\" button to copy chosen leads to the Request Reviews screen." }), _jsx("p", { children: "Imported leads are stored in local browser storage for demo/testing." })] }) }) })] })] }));
}

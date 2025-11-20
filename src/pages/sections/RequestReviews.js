import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { MessageSquare, Mail, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Card from '../../components/Card';
import MetricCard from '../../components/MetricCard';
export default function RequestReviews() {
    const [selectedMedium, setSelectedMedium] = useState('email');
    const [selectedReviews, setSelectedReviews] = useState([]);
    const [bulkMode, setBulkMode] = useState(false);
    const [campaignName, setCampaignName] = useState('');
    const [campaignMessage, setCampaignMessage] = useState('We would love to hear your feedback! Please share your experience with us.');
    const [selectedSegment, setSelectedSegment] = useState('all');
    const [showSuccess, setShowSuccess] = useState(false);
    // Sample recent customers data (will be merged with imported leads)
    const sampleCustomers = [
        { id: 1, name: 'John Smith', email: 'john@email.com', phone: '+1-234-567-8901', lastVisit: '2 days ago', rating: null },
        { id: 2, name: 'Sarah Johnson', email: 'sarah@email.com', phone: '+1-234-567-8902', lastVisit: '5 days ago', rating: 5 },
        { id: 3, name: 'Mike Davis', email: 'mike@email.com', phone: '+1-234-567-8903', lastVisit: '1 week ago', rating: null },
        { id: 4, name: 'Emma Wilson', email: 'emma@email.com', phone: '+1-234-567-8904', lastVisit: '10 days ago', rating: null },
        { id: 5, name: 'David Brown', email: 'david@email.com', phone: '+1-234-567-8905', lastVisit: '2 weeks ago', rating: 4 },
        { id: 6, name: 'Lisa Anderson', email: 'lisa@email.com', phone: '+1-234-567-8906', lastVisit: '3 weeks ago', rating: null },
    ];
    const TEMP_CUSTOMERS_KEY = 'ri_temp_customers';
    const [customers, setCustomers] = useState(sampleCustomers);
    useEffect(() => {
        const stored = localStorage.getItem(TEMP_CUSTOMERS_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    // Map imported leads to expected customer shape and avoid id collisions
                    const mapped = parsed.map((p, i) => ({
                        id: Number(p.id) || Date.now() + i,
                        name: p.name || p.full_name || `Lead ${i + 1}`,
                        email: p.email || '',
                        phone: p.phone || p.mobile || '',
                        lastVisit: p.lastVisit || p.last_visit || 'imported',
                        rating: p.rating ?? null,
                    }));
                    setCustomers(prev => [...mapped, ...prev]);
                    // clear temporary storage after loading once
                    // localStorage.removeItem(TEMP_CUSTOMERS_KEY)
                }
            }
            catch {
                // ignore parse errors
            }
        }
    }, []);
    const campaigns = [
        { id: 1, name: 'Post-Visit Follow-up', medium: 'email', status: 'sent', sent: 45, responded: 12 },
        { id: 2, name: 'WhatsApp Reminder', medium: 'whatsapp', status: 'sent', sent: 32, responded: 18 },
        { id: 3, name: 'SMS Quick Survey', medium: 'sms', status: 'active', sent: 28, responded: 8 },
    ];
    const handleSelectReview = (id) => {
        if (selectedReviews.includes(id)) {
            setSelectedReviews(selectedReviews.filter(rid => rid !== id));
        }
        else {
            setSelectedReviews([...selectedReviews, id]);
        }
    };
    const handleSelectAll = () => {
        if (selectedReviews.length === customers.length) {
            setSelectedReviews([]);
        }
        else {
            setSelectedReviews(customers.map(c => c.id));
        }
    };
    const handleSendCampaign = () => {
        if (!campaignName || !campaignMessage || selectedReviews.length === 0) {
            alert('Please fill in all fields and select at least one customer');
            return;
        }
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        // Reset form
        setCampaignName('');
        setCampaignMessage('We would love to hear your feedback! Please share your experience with us.');
        setSelectedReviews([]);
    };
    const getMediumIcon = (medium) => {
        switch (medium) {
            case 'whatsapp': return _jsx(MessageSquare, { className: "w-5 h-5" });
            case 'sms': return _jsx(Phone, { className: "w-5 h-5" });
            case 'email': return _jsx(Mail, { className: "w-5 h-5" });
            default: return null;
        }
    };
    const getMediumColor = (medium) => {
        switch (medium) {
            case 'whatsapp': return 'bg-green-50';
            case 'sms': return 'bg-blue-50';
            case 'email': return 'bg-purple-50';
            default: return 'bg-gray-50';
        }
    };
    const filteredCustomers = bulkMode ? customers : customers.filter(c => !c.rating);
    const loadLeadsManually = () => {
        const stored = localStorage.getItem(TEMP_CUSTOMERS_KEY);
        if (!stored) {
            alert('No leads found in local storage. Import leads from the Leads page first.');
            return;
        }
        try {
            const parsed = JSON.parse(stored);
            const mapped = parsed.map((p, i) => ({
                id: Number(p.id) || Date.now() + i,
                name: p.name || p.full_name || `Lead ${i + 1}`,
                email: p.email || '',
                phone: p.phone || p.mobile || '',
                lastVisit: p.lastVisit || p.last_visit || 'imported',
                rating: p.rating ?? null,
            }));
            setCustomers(prev => [...mapped, ...prev]);
            alert(`Loaded ${mapped.length} lead(s) into customers list.`);
        }
        catch {
            alert('Failed to parse leads from local storage');
        }
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Request Reviews" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Send review requests via WhatsApp, SMS, or Email" })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-2xl font-bold text-blue-600", children: customers.filter(c => !c.rating).length }), _jsx("p", { className: "text-gray-600 text-sm", children: "Without Reviews" })] })] }), showSuccess && (_jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600" }), _jsxs("div", { children: [_jsx("p", { className: "font-semibold text-green-900", children: "Campaign Sent Successfully!" }), _jsxs("p", { className: "text-green-700 text-sm", children: ["Review requests sent to ", selectedReviews.length, " customers via ", selectedMedium.toUpperCase()] })] })] })), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [_jsx(MetricCard, { title: "Total Customers", value: customers.length.toString(), icon: MessageSquare, backgroundColor: "bg-blue-50" }), _jsx(MetricCard, { title: "With Reviews", value: customers.filter(c => c.rating).length.toString(), icon: CheckCircle, backgroundColor: "bg-green-50" }), _jsx(MetricCard, { title: "Without Reviews", value: customers.filter(c => !c.rating).length.toString(), icon: AlertCircle, backgroundColor: "bg-yellow-50" }), _jsx(MetricCard, { title: "Active Campaigns", value: campaigns.filter(c => c.status === 'active').length.toString(), icon: Send, backgroundColor: "bg-purple-50" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-2 space-y-6", children: [_jsx(Card, { title: "Create Campaign", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Campaign Name" }), _jsx("input", { type: "text", value: campaignName, onChange: (e) => setCampaignName(e.target.value), placeholder: "e.g., Post-Visit Follow-up", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-3", children: "Select Channel" }), _jsx("div", { className: "grid grid-cols-3 gap-3", children: [
                                                        { id: 'email', label: 'Email', icon: Mail, color: 'from-purple-500 to-pink-500' },
                                                        { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare, color: 'from-green-500 to-emerald-500' },
                                                        { id: 'sms', label: 'SMS', icon: Phone, color: 'from-blue-500 to-cyan-500' },
                                                    ].map((medium) => {
                                                        const Icon = medium.icon;
                                                        return (_jsxs("button", { onClick: () => setSelectedMedium(medium.id), className: `p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${selectedMedium === medium.id
                                                                ? 'border-blue-500 bg-blue-50'
                                                                : 'border-gray-200 bg-white hover:border-gray-300'}`, children: [_jsx("div", { className: `p-2 rounded-lg bg-gradient-to-br ${medium.color} text-white`, children: _jsx(Icon, { className: "w-5 h-5" }) }), _jsx("span", { className: "text-sm font-semibold", children: medium.label })] }, medium.id));
                                                    }) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-2", children: "Message" }), _jsx("textarea", { value: campaignMessage, onChange: (e) => setCampaignMessage(e.target.value), placeholder: "Enter your review request message", className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none", rows: 4 }), _jsx("p", { className: "text-xs text-gray-500 mt-2", children: "Tip: Keep messages concise and personalized for better response rates" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-3", children: "Selection Mode" }), _jsxs("div", { className: "flex gap-3", children: [_jsxs("button", { onClick: () => setBulkMode(false), className: `flex-1 py-2 px-4 rounded-lg border-2 transition-all font-medium ${!bulkMode
                                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'}`, children: ["No Reviews Only (", customers.filter(c => !c.rating).length, ")"] }), _jsxs("button", { onClick: () => setBulkMode(true), className: `flex-1 py-2 px-4 rounded-lg border-2 transition-all font-medium ${bulkMode
                                                                ? 'border-blue-500 bg-blue-50 text-blue-700'
                                                                : 'border-gray-200 text-gray-600 hover:border-gray-300'}`, children: ["All Customers (", customers.length, ")"] })] })] })] }) }), _jsx(Card, { title: `Select Customers (${selectedReviews.length} selected)`, children: _jsxs("div", { className: "space-y-3", children: [_jsxs("button", { onClick: handleSelectAll, className: "w-full text-left px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all font-semibold text-sm text-gray-700 border border-gray-200", children: [selectedReviews.length === filteredCustomers.length ? 'Deselect All' : 'Select All', " (", filteredCustomers.length, ")"] }), _jsx("div", { className: "max-h-96 overflow-y-auto space-y-2", children: filteredCustomers.map((customer) => (_jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-all", children: [_jsx("input", { type: "checkbox", checked: selectedReviews.includes(customer.id), onChange: () => handleSelectReview(customer.id), className: "w-4 h-4 text-blue-600 rounded" }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("p", { className: "font-medium text-gray-900", children: customer.name }), _jsxs("div", { className: "flex items-center gap-2 text-xs text-gray-500", children: [selectedMedium === 'email' && _jsx("span", { className: "truncate", children: customer.email }), selectedMedium === 'whatsapp' && _jsx("span", { children: customer.phone }), selectedMedium === 'sms' && _jsx("span", { children: customer.phone }), _jsx("span", { children: "\u2022" }), _jsxs("span", { children: ["Last visit: ", customer.lastVisit] })] })] }), customer.rating && (_jsxs("span", { className: "text-xs font-semibold text-blue-600 px-2 py-1 bg-blue-50 rounded", children: ["\u2B50 ", customer.rating] }))] }, customer.id))) })] }) }), _jsxs("button", { onClick: handleSendCampaign, className: "w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl", children: [_jsx(Send, { className: "w-5 h-5" }), "Send Campaign to ", selectedReviews.length, " Customer", selectedReviews.length !== 1 ? 's' : ''] })] }), _jsx("div", { children: _jsx(Card, { title: "Recent Campaigns", children: _jsx("div", { className: "space-y-3", children: campaigns.map((campaign) => (_jsxs("div", { className: `p-4 rounded-lg border-l-4 ${campaign.medium === 'email'
                                        ? 'border-purple-500 bg-purple-50'
                                        : campaign.medium === 'whatsapp'
                                            ? 'border-green-500 bg-green-50'
                                            : 'border-blue-500 bg-blue-50'}`, children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsxs("div", { className: "flex items-center gap-2", children: [getMediumIcon(campaign.medium), _jsx("h3", { className: "font-semibold text-gray-900 text-sm", children: campaign.name })] }), _jsx("span", { className: `text-xs font-semibold px-2 py-1 rounded ${campaign.status === 'sent'
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-blue-100 text-blue-700'}`, children: campaign.status === 'sent' ? '✓ Sent' : '◉ Active' })] }), _jsxs("div", { className: "space-y-2 text-sm", children: [_jsxs("div", { className: "flex justify-between text-gray-600", children: [_jsx("span", { children: "Sent:" }), _jsx("span", { className: "font-semibold", children: campaign.sent })] }), _jsxs("div", { className: "flex justify-between text-gray-600", children: [_jsx("span", { children: "Responses:" }), _jsx("span", { className: "font-semibold", children: campaign.responded })] }), _jsxs("div", { className: "flex justify-between text-gray-600", children: [_jsx("span", { children: "Response Rate:" }), _jsxs("span", { className: "font-semibold", children: [Math.round((campaign.responded / campaign.sent) * 100), "%"] })] })] })] }, campaign.id))) }) }) })] })] }));
}

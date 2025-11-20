import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Download, Calendar } from 'lucide-react';
import { exportReportsCSV } from '../../utils/export';
import { fetchScheduledReports, scheduleReport as apiScheduleReport, sendReportNow, sendViaChannel, fetchSentReports, generateReport } from '../../services/api';
const sampleData = [
    { metric: 'Average Rating', value: 4.3 },
    { metric: 'Total Reviews', value: 123 },
    { metric: 'Response Rate', value: 32 },
];
export default function Reports() {
    const [schedule, setSchedule] = useState('weekly');
    const [recipients, setRecipients] = useState('');
    const [channel, setChannel] = useState('email');
    const [lastExport, setLastExport] = useState(null);
    const [scheduled, setScheduled] = useState([]);
    const [sent, setSent] = useState([]);
    const [reportType, setReportType] = useState('executive');
    useEffect(() => {
        fetchScheduledReports().then(s => setScheduled(s)).catch(() => { });
        fetchSentReports().then(s => setSent(s)).catch(() => { });
    }, []);
    const exportCSV = () => {
        const { url } = exportReportsCSV(sampleData);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'report.csv';
        a.click();
        URL.revokeObjectURL(url);
        setLastExport(new Date().toISOString());
    };
    const scheduleReport = async () => {
        const recs = recipients.split(',').map(r => r.trim()).filter(Boolean);
        try {
            const payload = { type: reportType, payload: {} };
            const res = await apiScheduleReport({ name: `${reportType} report`, schedule, channel, recipients: recs, payload });
            setScheduled(prev => [res, ...prev]);
            alert(`Scheduled ${schedule} report (${reportType}) to ${recs.length} recipient(s)`);
        }
        catch (e) {
            alert('Failed to schedule');
        }
    };
    const runScheduledNow = async () => {
        try {
            // generate attachment on server based on reportType
            const gen = await generateReport({ type: reportType, payload: { metrics: sampleData } });
            const attachment = gen && gen.contentBase64 ? { filename: gen.filename, contentBase64: gen.contentBase64 } : null;
            const report = await sendReportNow({ name: 'Manual Run', payload: sampleData });
            const recs = recipients.split(',').map(r => r.trim()).filter(Boolean);
            if (recs.length > 0) {
                await sendViaChannel({ channel, recipients: recs, subject: `Manual: ${report.name}`, body: 'Attached report payload', attachment });
            }
            const newSent = await fetchSentReports();
            setSent(newSent);
            setLastExport(new Date().toISOString());
            alert('Scheduled reports run now (server triggered)');
        }
        catch (e) {
            alert('Failed to run scheduled now');
        }
    };
    function downloadAttachment(attachment) {
        try {
            if (!attachment || !attachment.contentBase64)
                return;
            const byteCharacters = atob(attachment.contentBase64);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = attachment.filename || 'report.csv';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        }
        catch (e) {
            console.error('Download failed', e);
            alert('Failed to download attachment');
        }
    }
    function previewAttachment(attachment) {
        try {
            if (!attachment || !attachment.contentBase64)
                return;
            const url = `data:text/csv;base64,${attachment.contentBase64}`;
            window.open(url, '_blank');
        }
        catch (e) {
            console.error('Preview failed', e);
            alert('Failed to preview attachment');
        }
    }
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Reports" }), _jsx("p", { className: "text-gray-600 mt-2", children: "Export insights and schedule recurring reports (Email / WhatsApp)" })] }), _jsxs("div", { className: "text-right", children: [_jsx("p", { className: "text-2xl font-bold text-blue-600", children: sampleData.length }), _jsx("p", { className: "text-gray-600 text-sm", children: "Available Metrics" })] })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx(Card, { title: "Export", children: _jsxs("div", { className: "space-y-3", children: [_jsx("p", { className: "text-sm text-gray-600", children: "Export the current metrics as CSV for offline analysis" }), _jsxs("div", { className: "flex gap-3", children: [_jsxs("button", { onClick: exportCSV, className: "px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2", children: [_jsx(Download, { className: "w-4 h-4" }), " Export CSV"] }), _jsx("button", { onClick: runScheduledNow, className: "px-4 py-2 bg-yellow-500 text-white rounded", children: "Run Scheduled Now" })] }), lastExport && _jsxs("p", { className: "text-xs text-gray-500", children: ["Last exported: ", new Date(lastExport).toLocaleString()] })] }) }), _jsx(Card, { title: "Schedule Report", children: _jsxs("div", { className: "space-y-3", children: [_jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Report Type" }), _jsxs("select", { className: "w-full px-3 py-2 border rounded", value: reportType, onChange: e => setReportType(e.target.value), children: [_jsx("option", { value: "executive", children: "Executive Summary" }), _jsx("option", { value: "locations", children: "Location Roll-up" }), _jsx("option", { value: "top_reviews", children: "Top Reviews" }), _jsx("option", { value: "sentiment", children: "Sentiment Summary" })] }), _jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Recipients (comma separated)" }), _jsx("input", { className: "w-full px-3 py-2 border rounded", value: recipients, onChange: e => setRecipients(e.target.value), placeholder: "name@company.com,+1234567890" }), _jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Channel" }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { onClick: () => setChannel('email'), className: `px-3 py-2 rounded ${channel === 'email' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`, children: "Email" }), _jsx("button", { onClick: () => setChannel('whatsapp'), className: `px-3 py-2 rounded ${channel === 'whatsapp' ? 'bg-green-600 text-white' : 'bg-gray-100'}`, children: "WhatsApp" })] }), _jsx("label", { className: "block text-sm font-semibold text-gray-700", children: "Frequency" }), _jsxs("select", { className: "w-full px-3 py-2 border rounded", value: schedule, onChange: e => setSchedule(e.target.value), children: [_jsx("option", { value: "daily", children: "Daily" }), _jsx("option", { value: "weekly", children: "Weekly" }), _jsx("option", { value: "monthly", children: "Monthly" }), _jsx("option", { value: "once", children: "Once" })] }), _jsx("div", { className: "flex gap-3 mt-2", children: _jsxs("button", { onClick: scheduleReport, className: "px-4 py-2 bg-green-600 text-white rounded flex items-center gap-2", children: [_jsx(Calendar, { className: "w-4 h-4" }), " Schedule"] }) })] }) })] }), _jsxs("div", { children: [_jsx(Card, { title: "Metrics", children: _jsx("div", { className: "space-y-3 text-sm text-gray-600", children: sampleData.map(s => (_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: s.metric }), _jsx("span", { className: "font-semibold", children: s.value })] }, s.metric))) }) }), _jsx(Card, { title: "Scheduled Reports", children: _jsxs("div", { className: "space-y-2 text-sm", children: [scheduled.length === 0 && _jsx("div", { className: "text-gray-500", children: "No scheduled reports" }), scheduled.map((s) => (_jsxs("div", { className: "p-2 border rounded flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: s.name }), _jsxs("div", { className: "text-xs text-gray-500", children: [s.schedule, " \u2022 ", s.channel, " \u2022 ", s.recipients?.length || 0, " recipients"] })] }), _jsx("div", { className: "flex gap-2", children: _jsx("button", { onClick: async () => {
                                                            try {
                                                                // generate attachment
                                                                const type = s.payload?.type || 'custom';
                                                                const p = s.payload?.payload || {};
                                                                const gen = await generateReport({ type, payload: p });
                                                                const attachment = gen && gen.contentBase64 ? { filename: gen.filename, contentBase64: gen.contentBase64 } : null;
                                                                const report = await sendReportNow({ name: s.name, payload: s.payload });
                                                                await sendViaChannel({ channel: s.channel, recipients: s.recipients, subject: `Scheduled: ${s.name}`, body: 'Report body', attachment });
                                                                const newSent = await fetchSentReports();
                                                                setSent(newSent);
                                                                alert('Sent');
                                                            }
                                                            catch (err) {
                                                                console.error(err);
                                                                alert('Failed to send');
                                                            }
                                                        }, className: "px-2 py-1 bg-blue-600 text-white rounded", children: "Send Now" }) })] }, s.id)))] }) }), _jsx(Card, { title: "Sent Reports", children: _jsx("div", { className: "space-y-2 text-sm max-h-64 overflow-y-auto", children: sent.map(s => (_jsxs("div", { className: "p-2 border rounded", children: [_jsx("div", { className: "text-sm font-semibold", children: s.subject || 'Report' }), _jsxs("div", { className: "text-xs text-gray-500", children: [s.channel, " \u2022 ", new Date(s.timestamp).toLocaleString()] }), s.attachment && (_jsxs("div", { className: "mt-2 flex gap-2", children: [_jsx("button", { onClick: () => downloadAttachment(s.attachment), className: "px-2 py-1 bg-indigo-600 text-white rounded text-xs", children: "Download" }), _jsx("button", { onClick: () => previewAttachment(s.attachment), className: "px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs", children: "Preview" })] }))] }, s.id))) }) })] })] })] }));
}

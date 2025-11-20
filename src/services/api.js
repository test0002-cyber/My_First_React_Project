// API base; in production set via environment or window variable
const API_BASE = window.REACT_APP_API_BASE || 'http://localhost:4000';
export async function fetchScheduledReports() {
    const res = await fetch(`${API_BASE}/api/reports/scheduled`);
    return res.ok ? res.json() : [];
}
export async function scheduleReport(payload) {
    const res = await fetch(`${API_BASE}/api/reports/schedule`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}
export async function sendReportNow(payload) {
    const res = await fetch(`${API_BASE}/api/reports/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}
export async function sendViaChannel(payload) {
    const res = await fetch(`${API_BASE}/api/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}
export async function generateReport(payload) {
    const res = await fetch(`${API_BASE}/api/reports/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });
    return res.json();
}
export async function fetchSentReports() {
    const res = await fetch(`${API_BASE}/api/reports/sent`);
    return res.ok ? res.json() : [];
}

const STORAGE_KEY = 'ri_inbox';
export function saveMessage(msg) {
    const raw = localStorage.getItem(STORAGE_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    arr.unshift(msg);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
}
export function fetchMessages() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}
export function clearMessages() {
    localStorage.removeItem(STORAGE_KEY);
}

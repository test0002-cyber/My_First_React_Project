import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
const AuthContext = createContext(undefined);
const STORAGE_KEY = 'ri_user';
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw)
                setUser(JSON.parse(raw));
        }
        catch {
            // ignore
        }
    }, []);
    useEffect(() => {
        if (user)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        else
            localStorage.removeItem(STORAGE_KEY);
    }, [user]);
    const login = async (role = 'admin') => {
        // Mock login for local dev: create a simple user object and save
        const mock = { id: String(Date.now()), name: role === 'admin' ? 'Admin User' : 'Team Member', role };
        setUser(mock);
    };
    const logout = () => {
        setUser(null);
    };
    // Background scheduler: check for scheduled reports and run them periodically
    useEffect(() => {
        let timer = null;
        const checkAndRun = () => {
            try {
                const raw = localStorage.getItem('ri_report_schedule');
                if (!raw)
                    return;
                const { schedule } = JSON.parse(raw);
                const last = localStorage.getItem('ri_report_last_run');
                const now = Date.now();
                const shouldRun = (() => {
                    if (!last)
                        return true;
                    const lastTime = new Date(last).getTime();
                    const diff = now - lastTime;
                    if (schedule === 'daily')
                        return diff > 24 * 3600 * 1000;
                    if (schedule === 'weekly')
                        return diff > 7 * 24 * 3600 * 1000;
                    if (schedule === 'monthly')
                        return diff > 30 * 24 * 3600 * 1000;
                    return false;
                })();
                if (shouldRun) {
                    // set a flag; actual export logic is performed in client components via export utility
                    localStorage.setItem('ri_report_due', new Date().toISOString());
                }
            }
            catch {
                // ignore
            }
        };
        timer = setInterval(checkAndRun, 60 * 1000); // check every minute
        return () => clearInterval(timer);
    }, []);
    return (_jsx(AuthContext.Provider, { value: { user, login, logout }, children: children }));
};
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx)
        throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}
export default AuthContext;

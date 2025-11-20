import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import './App.css';
import { useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
function DashboardLayout({ sidebarOpen, setSidebarOpen }) {
    return (_jsxs("div", { className: "flex h-screen bg-gray-50", children: [_jsx(Sidebar, { isOpen: sidebarOpen, activeSection: '', setActiveSection: () => { } }), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [_jsx(Header, { sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen }), _jsx("main", { className: "flex-1 overflow-auto p-6", children: _jsx(Outlet, {}) })] })] }));
}
function App() {
    const { user } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    if (!user)
        return _jsx(Login, {});
    return (_jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(DashboardLayout, { sidebarOpen: sidebarOpen, setSidebarOpen: setSidebarOpen }), children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/section/overview", replace: true }) }), _jsx(Route, { path: "/section/:sectionId", element: _jsx(DashboardWrapper, {}) })] }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) })] }));
}
function DashboardWrapper() {
    // Dashboard component expects activeSection prop; we'll read route param inside Dashboard itself
    return _jsx(Dashboard, {});
}
export default App;

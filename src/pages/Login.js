import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAuth } from '../contexts/AuthContext';
export default function Login() {
    const { login } = useAuth();
    return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: _jsxs("div", { className: "w-full max-w-md p-6 bg-white rounded shadow", children: [_jsx("h2", { className: "text-2xl font-bold mb-4", children: "Sign in (mock)" }), _jsx("p", { className: "text-sm text-gray-600 mb-4", children: "Choose a role to simulate different permissions." }), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsx("button", { onClick: () => login('admin'), className: "px-4 py-2 bg-blue-600 text-white rounded", children: "Sign in as Admin" }), _jsx("button", { onClick: () => login('manager'), className: "px-4 py-2 bg-green-600 text-white rounded", children: "Sign in as Manager" }), _jsx("button", { onClick: () => login('agent'), className: "px-4 py-2 bg-indigo-600 text-white rounded", children: "Sign in as Agent" }), _jsx("button", { onClick: () => login('viewer'), className: "px-4 py-2 bg-gray-200 rounded", children: "Sign in as Viewer" })] })] }) }));
}

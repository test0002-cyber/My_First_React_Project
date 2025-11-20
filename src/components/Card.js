import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Card({ title, subtitle, children, className = '' }) {
    return (_jsxs("div", { className: `bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow ${className}`, children: [_jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: title }), subtitle && _jsx("p", { className: "text-sm text-gray-600 mt-1", children: subtitle })] }), children] }));
}
